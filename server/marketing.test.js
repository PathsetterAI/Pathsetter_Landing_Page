import assert from 'node:assert/strict'
import test from 'node:test'
import { createMarketingService } from './marketing.js'

const env = {
  RESEND_API_KEY: 're_test',
  RESEND_FROM_EMAIL: 'AlfredWorks <briefing@alfredworks.ai>',
  RESEND_REPLY_TO: 'hello@alfredworks.ai',
  RESEND_MARKETING_SEGMENT_ID: 'segment-1',
  RESEND_MARKETING_TOPIC_ID: 'topic-1',
}

function success(data) {
  return { data, error: null, headers: null }
}

function notFound() {
  return {
    data: null,
    error: { statusCode: 404, name: 'not_found', message: 'Not found' },
    headers: null,
  }
}

test('creates a new opted-in contact before sending the confirmation email', async () => {
  const calls = []
  const resend = {
    contacts: {
      get: async (payload) => {
        calls.push(['get', payload])
        return notFound()
      },
      create: async (payload) => {
        calls.push(['create', payload])
        return success({ id: 'contact-1', object: 'contact' })
      },
    },
    emails: {
      send: async (payload, options) => {
        calls.push(['send', payload, options])
        return success({ id: 'email-1' })
      },
    },
  }
  const service = createMarketingService({
    env,
    resend,
    now: () => new Date('2026-08-31T15:00:00.000Z'),
  })

  await service.subscribe({
    email: 'lead@example.com',
    source: 'resources_monthly_intel',
  })

  assert.deepEqual(calls.map(([operation]) => operation), ['get', 'create', 'send'])
  assert.deepEqual(calls[1][1].segments, [{ id: 'segment-1' }])
  assert.deepEqual(calls[1][1].topics, [{ id: 'topic-1', subscription: 'opt_in' }])
  assert.equal(calls[1][1].properties.marketing_consent_at, '2026-08-31T15:00:00.000Z')
  assert.match(calls[2][1].text, /marketing-related emails/)
  assert.match(calls[2][2].idempotencyKey, /^subscription-confirmation\//)
})

test('updates and re-subscribes an existing contact without duplicating the segment', async () => {
  const calls = []
  const resend = {
    contacts: {
      get: async () => success({ id: 'contact-1', unsubscribed: true }),
      update: async (payload) => {
        calls.push(['update', payload])
        return success({ id: 'contact-1', object: 'contact' })
      },
      segments: {
        list: async () => success({ data: [{ id: 'segment-1' }] }),
        add: async () => {
          calls.push(['add-segment'])
          return success({ id: 'segment-1' })
        },
      },
      topics: {
        update: async (payload) => {
          calls.push(['update-topics', payload])
          return success({ id: 'contact-1' })
        },
      },
    },
    emails: {
      send: async () => {
        calls.push(['send'])
        return success({ id: 'email-1' })
      },
    },
  }
  const service = createMarketingService({ env, resend })

  await service.subscribe({ email: 'lead@example.com', source: 'resources_monthly_intel' })

  assert.equal(calls[0][1].unsubscribed, false)
  assert.deepEqual(calls.map(([operation]) => operation), ['update', 'update-topics', 'send'])
})
