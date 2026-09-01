const BREVO_API_BASE_URL = 'https://api.brevo.com/v3'

export class BrevoApiError extends Error {
  constructor(operation, statusCode, responseBody) {
    super(`${operation} failed with status ${statusCode}`)
    this.name = 'BrevoApiError'
    this.statusCode = statusCode
    this.responseBody = responseBody
  }
}

export function createBrevoClient({
  apiKey,
  fetchImpl = globalThis.fetch,
  baseUrl = BREVO_API_BASE_URL,
}) {
  async function request(path, { method = 'GET', body } = {}, operation) {
    const response = await fetchImpl(`${baseUrl}${path}`, {
      method,
      headers: {
        accept: 'application/json',
        'api-key': apiKey,
        ...(body ? { 'content-type': 'application/json' } : {}),
      },
      ...(body ? { body: JSON.stringify(body) } : {}),
    })

    const responseBody = response.status === 204
      ? null
      : await response.json().catch(() => null)

    if (!response.ok) {
      throw new BrevoApiError(operation, response.status, responseBody)
    }

    return responseBody
  }

  return {
    upsertContact(contact) {
      return request(
        '/contacts',
        { method: 'POST', body: contact },
        'Saving the contact in Brevo',
      )
    },

    sendTransactionalEmail(email) {
      return request(
        '/smtp/email',
        { method: 'POST', body: email },
        'Sending the subscription confirmation through Brevo',
      )
    },
  }
}
