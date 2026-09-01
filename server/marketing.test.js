import assert from 'node:assert/strict'
import test from 'node:test'
import {
  createMarketingService,
  getMarketingConfiguration,
  MarketingConfigurationError,
} from './marketing.js'

const env = {
  BREVO_API_KEY: 'xkeysib-test',
  BREVO_LIST_ID: '42',
  BREVO_SENDER_EMAIL: 'briefing@alfredworks.ai',
  BREVO_SENDER_NAME: 'AlfredWorks',
  BREVO_REPLY_TO: 'hello@alfredworks.ai',
}

test('saves the contact in the Brevo list before sending the confirmation', async () => {
  const calls = []
  const brevo = {
    upsertContact: async (payload) => {
      calls.push(['upsert', payload])
      return { id: 123 }
    },
    sendTransactionalEmail: async (payload) => {
      calls.push(['send', payload])
      return { messageId: 'message-1' }
    },
  }
  const service = createMarketingService({
    env,
    brevo,
    now: () => new Date('2026-09-01T15:00:00.000Z'),
  })

  await service.subscribe({
    email: 'lead@example.com',
    source: 'resources_monthly_intel',
  })

  assert.deepEqual(calls.map(([operation]) => operation), ['upsert', 'send'])
  assert.deepEqual(calls[0][1], {
    email: 'lead@example.com',
    attributes: {
      SIGNUP_SOURCE: 'resources_monthly_intel',
      LEAD_STAGE: 'marketing_subscriber',
      MARKETING_CONSENT_AT: '2026-09-01T15:00:00.000Z',
      CONSENT_VERSION: 'monthly-intel-v1',
    },
    listIds: [42],
    updateEnabled: true,
  })
  assert.deepEqual(calls[1][1].sender, {
    email: 'briefing@alfredworks.ai',
    name: 'AlfredWorks',
  })
  assert.match(calls[1][1].textContent, /marketing-related emails/)
  assert.match(
    calls[1][1].headers['Idempotency-Key'],
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-a[0-9a-f]{3}-[0-9a-f]{12}$/,
  )
})

test('repeat signups use Brevo upsert behavior instead of creating duplicates', async () => {
  const contacts = []
  const brevo = {
    upsertContact: async (payload) => contacts.push(payload),
    sendTransactionalEmail: async () => ({ messageId: 'message-1' }),
  }
  const service = createMarketingService({ env, brevo })

  await service.subscribe({ email: 'lead@example.com', source: 'unknown' })
  await service.subscribe({ email: 'lead@example.com', source: 'unknown' })

  assert.equal(contacts.length, 2)
  assert.equal(contacts[0].updateEnabled, true)
  assert.equal(contacts[0].attributes.SIGNUP_SOURCE, 'resources_monthly_intel')
})

test('requires a numeric Brevo list ID', () => {
  assert.throws(
    () => getMarketingConfiguration({
      ...env,
      BREVO_LIST_ID: 'not-a-list',
    }),
    MarketingConfigurationError,
  )
})
