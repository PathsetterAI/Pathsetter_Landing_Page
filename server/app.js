import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import {
  createMarketingService,
  MarketingConfigurationError,
} from './marketing.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const defaultDistDirectory = path.resolve(__dirname, '../dist')
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function normalizeEmail(value) {
  if (typeof value !== 'string') return null
  const normalized = value.trim().toLowerCase()
  if (normalized.length > 254 || !EMAIL_PATTERN.test(normalized)) return null
  return normalized
}

function createRateLimiter({ limit = 5, windowMs = 10 * 60 * 1000 } = {}) {
  const attempts = new Map()

  return (req, res, next) => {
    const now = Date.now()
    const key = req.ip || req.socket.remoteAddress || 'unknown'
    const recent = (attempts.get(key) || []).filter((time) => time > now - windowMs)

    if (recent.length >= limit) {
      res.set('Retry-After', Math.ceil(windowMs / 1000).toString())
      return res.status(429).json({
        error: 'Too many subscription attempts. Please try again in a few minutes.',
      })
    }

    recent.push(now)
    attempts.set(key, recent)
    next()
  }
}

export function createSubscriptionHandler({ service, configurationError }) {
  return async (req, res) => {
    // A hidden honeypot field lets bots receive a harmless success without
    // polluting the marketing list.
    if (req.body?.companyWebsite) {
      return res.status(202).json({ ok: true })
    }

    const email = normalizeEmail(req.body?.email)
    if (!email) {
      return res.status(400).json({ error: 'Enter a valid email address.' })
    }

    if (!service) {
      if (!(configurationError instanceof MarketingConfigurationError)) {
        console.error('Unexpected marketing configuration error', configurationError)
      }
      return res.status(503).json({
        error: 'Subscriptions are temporarily unavailable. Please try again shortly.',
      })
    }

    try {
      await service.subscribe({ email, source: req.body?.source })
      return res.status(201).json({ ok: true })
    } catch (error) {
      console.error('Subscription failed', {
        name: error?.name,
        message: error?.message,
        providerStatus: error?.statusCode || error?.cause?.statusCode,
      })
      return res.status(502).json({
        error: 'We could not complete your subscription. Please try again.',
      })
    }
  }
}

export function createApp({
  marketingService,
  env = process.env,
  distDirectory = defaultDistDirectory,
  rateLimiter = createRateLimiter(),
} = {}) {
  const app = express()
  app.disable('x-powered-by')
  app.set('trust proxy', 1)
  app.use(express.json({ limit: '8kb' }))

  let service = marketingService
  let configurationError = null
  if (!service) {
    try {
      service = createMarketingService({ env })
    } catch (error) {
      configurationError = error
    }
  }

  app.get('/api/health', (_req, res) => {
    res.json({
      ok: true,
      marketingConfigured: Boolean(service),
    })
  })

  app.post(
    '/api/subscriptions',
    rateLimiter,
    createSubscriptionHandler({ service, configurationError }),
  )

  app.use('/assets', express.static(path.join(distDirectory, 'assets'), {
    immutable: true,
    index: false,
    maxAge: '1y',
  }))
  app.use(express.static(distDirectory, { index: false }))
  app.use((req, res, next) => {
    if (req.method !== 'GET' || !req.accepts('html')) return next()
    res.set('Cache-Control', 'no-cache')
    return res.sendFile(path.join(distDirectory, 'index.html'))
  })

  app.use((_req, res) => res.status(404).json({ error: 'Not found' }))

  return app
}

export { createRateLimiter, normalizeEmail }
