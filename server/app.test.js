import assert from 'node:assert/strict'
import test from 'node:test'
import { createSubscriptionHandler } from './app.js'

function responseMock() {
  return {
    statusCode: 200,
    body: null,
    status(code) {
      this.statusCode = code
      return this
    },
    json(body) {
      this.body = body
      return this
    },
  }
}

test('normalizes and submits a valid subscription', async () => {
  const submissions = []
  const handler = createSubscriptionHandler({
    service: { subscribe: async (subscription) => submissions.push(subscription) },
  })
  const response = responseMock()

  await handler({
    body: {
      email: '  LEAD@Example.com ',
      source: 'resources_monthly_intel',
    },
  }, response)

  assert.equal(response.statusCode, 201)
  assert.deepEqual(submissions, [{
    email: 'lead@example.com',
    source: 'resources_monthly_intel',
  }])
})

test('rejects invalid email addresses', async () => {
  const handler = createSubscriptionHandler({
    service: { subscribe: async () => assert.fail('should not subscribe') },
  })
  const response = responseMock()

  await handler({ body: { email: 'not-an-email' } }, response)

  assert.equal(response.statusCode, 400)
})
