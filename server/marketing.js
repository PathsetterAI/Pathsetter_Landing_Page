import { createHash } from 'node:crypto'
import { createBrevoClient } from './brevo.js'
import { subscriptionConfirmationEmail } from './subscription-email.js'

const CONSENT_VERSION = 'monthly-intel-v1'
const ALLOWED_SOURCES = new Set([
  'resources_monthly_intel',
  'resources_subscribe_modal',
])

export class MarketingConfigurationError extends Error {}

export function getMarketingConfiguration(env = process.env) {
  const listId = Number(env.BREVO_LIST_ID)
  const config = {
    apiKey: env.BREVO_API_KEY,
    listId: Number.isInteger(listId) && listId > 0 ? listId : null,
    senderEmail: env.BREVO_SENDER_EMAIL,
    senderName: env.BREVO_SENDER_NAME || 'AlfredWorks',
    replyTo: env.BREVO_REPLY_TO || 'hello@alfredworks.ai',
  }

  const missing = [
    ['BREVO_API_KEY', config.apiKey],
    ['BREVO_LIST_ID', config.listId],
    ['BREVO_SENDER_EMAIL', config.senderEmail],
  ].filter(([, value]) => !value).map(([name]) => name)

  if (missing.length > 0) {
    throw new MarketingConfigurationError(
      `Missing marketing configuration: ${missing.join(', ')}`,
    )
  }

  return config
}

function contactProperties(source, consentAt) {
  return {
    SIGNUP_SOURCE: source,
    LEAD_STAGE: 'marketing_subscriber',
    MARKETING_CONSENT_AT: consentAt,
    CONSENT_VERSION: CONSENT_VERSION,
  }
}

function idempotencyUuid(value) {
  const hash = createHash('sha256').update(value).digest('hex')
  return `${hash.slice(0, 8)}-${hash.slice(8, 12)}-4${hash.slice(13, 16)}-a${hash.slice(17, 20)}-${hash.slice(20, 32)}`
}

export function createMarketingService({
  env = process.env,
  brevo: injectedBrevo,
  now = () => new Date(),
} = {}) {
  const config = getMarketingConfiguration(env)
  const brevo = injectedBrevo || createBrevoClient({ apiKey: config.apiKey })

  return {
    async subscribe({ email, source }) {
      const normalizedSource = ALLOWED_SOURCES.has(source)
        ? source
        : 'resources_monthly_intel'
      const consentAt = now().toISOString()
      const properties = contactProperties(normalizedSource, consentAt)
      await brevo.upsertContact({
        email,
        attributes: properties,
        listIds: [config.listId],
        updateEnabled: true,
      })

      const confirmation = subscriptionConfirmationEmail()
      await brevo.sendTransactionalEmail({
        sender: {
          email: config.senderEmail,
          name: config.senderName,
        },
        replyTo: {
          email: config.replyTo,
          name: config.senderName,
        },
        to: [{ email }],
        subject: confirmation.subject,
        textContent: confirmation.text,
        htmlContent: confirmation.html,
        tags: ['subscription_confirmation', normalizedSource],
        headers: {
          'Idempotency-Key': idempotencyUuid(`subscription-confirmation/${email}`),
        },
      })

      return { consentAt }
    },
  }
}
