import { createHash } from 'node:crypto'
import { Resend } from 'resend'
import { subscriptionConfirmationEmail } from './subscription-email.js'

const CONSENT_VERSION = 'monthly-intel-v1'
const ALLOWED_SOURCES = new Set([
  'resources_monthly_intel',
  'resources_subscribe_modal',
])

export class MarketingConfigurationError extends Error {}

export class MarketingProviderError extends Error {
  constructor(message, cause) {
    super(message, { cause })
    this.name = 'MarketingProviderError'
  }
}

export function getMarketingConfiguration(env = process.env) {
  const config = {
    apiKey: env.RESEND_API_KEY,
    from: env.RESEND_FROM_EMAIL,
    replyTo: env.RESEND_REPLY_TO || 'hello@alfredworks.ai',
    segmentId: env.RESEND_MARKETING_SEGMENT_ID,
    topicId: env.RESEND_MARKETING_TOPIC_ID,
  }

  const missing = Object.entries(config)
    .filter(([key, value]) => key !== 'replyTo' && !value)
    .map(([key]) => key)

  if (missing.length > 0) {
    throw new MarketingConfigurationError(
      `Missing marketing configuration: ${missing.join(', ')}`,
    )
  }

  return config
}

function unwrap(result, operation) {
  if (result?.error) {
    throw new MarketingProviderError(`${operation} failed`, result.error)
  }
  return result?.data
}

function isNotFound(result) {
  return result?.error?.statusCode === 404 || result?.error?.name === 'not_found'
}

function contactProperties(source, consentAt) {
  return {
    lead_source: source,
    lifecycle_stage: 'marketing_subscriber',
    marketing_consent_at: consentAt,
    marketing_consent_version: CONSENT_VERSION,
  }
}

async function ensureExistingContactMembership(resend, email, config) {
  const segmentResult = await resend.contacts.segments.list({ email })
  const segments = unwrap(segmentResult, 'Checking contact segment membership')

  if (!segments.data.some((segment) => segment.id === config.segmentId)) {
    unwrap(
      await resend.contacts.segments.add({
        email,
        segmentId: config.segmentId,
      }),
      'Adding contact to the marketing segment',
    )
  }

  unwrap(
    await resend.contacts.topics.update({
      email,
      topics: [{ id: config.topicId, subscription: 'opt_in' }],
    }),
    'Recording the marketing topic opt-in',
  )
}

export function createMarketingService({
  env = process.env,
  resend: injectedResend,
  now = () => new Date(),
} = {}) {
  const config = getMarketingConfiguration(env)
  const resend = injectedResend || new Resend(config.apiKey)

  return {
    async subscribe({ email, source }) {
      const normalizedSource = ALLOWED_SOURCES.has(source)
        ? source
        : 'resources_monthly_intel'
      const consentAt = now().toISOString()
      const properties = contactProperties(normalizedSource, consentAt)
      const existingResult = await resend.contacts.get({ email })
      let contactId

      if (isNotFound(existingResult)) {
        const created = unwrap(
          await resend.contacts.create({
            email,
            unsubscribed: false,
            properties,
            segments: [{ id: config.segmentId }],
            topics: [{ id: config.topicId, subscription: 'opt_in' }],
          }),
          'Creating the marketing contact',
        )
        contactId = created.id
      } else {
        const existing = unwrap(existingResult, 'Looking up the marketing contact')
        contactId = existing.id
        unwrap(
          await resend.contacts.update({
            email,
            unsubscribed: false,
            properties,
          }),
          'Updating the marketing contact',
        )
        await ensureExistingContactMembership(resend, email, config)
      }

      const confirmation = subscriptionConfirmationEmail()
      unwrap(
        await resend.emails.send(
          {
            from: config.from,
            replyTo: config.replyTo,
            to: email,
            subject: confirmation.subject,
            text: confirmation.text,
            html: confirmation.html,
            tags: [
              { name: 'message_type', value: 'subscription_confirmation' },
              { name: 'lead_source', value: normalizedSource },
            ],
          },
          {
            idempotencyKey: `subscription-confirmation/${createHash('sha256').update(contactId).digest('hex').slice(0, 32)}`,
          },
        ),
        'Sending the subscription confirmation',
      )

      return { contactId, consentAt }
    },
  }
}
