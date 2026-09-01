import assert from 'node:assert/strict'
import test from 'node:test'
import { BrevoApiError, createBrevoClient } from './brevo.js'

function response({ ok = true, status = 201, body = {} } = {}) {
  return {
    ok,
    status,
    json: async () => body,
  }
}

test('authenticates and posts contacts to the Brevo v3 API', async () => {
  const calls = []
  const client = createBrevoClient({
    apiKey: 'secret-key',
    fetchImpl: async (url, options) => {
      calls.push([url, options])
      return response({ body: { id: 123 } })
    },
  })

  await client.upsertContact({
    email: 'lead@example.com',
    listIds: [42],
    updateEnabled: true,
  })

  assert.equal(calls[0][0], 'https://api.brevo.com/v3/contacts')
  assert.equal(calls[0][1].headers['api-key'], 'secret-key')
  assert.deepEqual(JSON.parse(calls[0][1].body), {
    email: 'lead@example.com',
    listIds: [42],
    updateEnabled: true,
  })
})

test('turns Brevo error responses into provider errors', async () => {
  const client = createBrevoClient({
    apiKey: 'secret-key',
    fetchImpl: async () => response({
      ok: false,
      status: 401,
      body: { message: 'Key not found' },
    }),
  })

  await assert.rejects(
    () => client.upsertContact({ email: 'lead@example.com' }),
    (error) => error instanceof BrevoApiError && error.statusCode === 401,
  )
})
