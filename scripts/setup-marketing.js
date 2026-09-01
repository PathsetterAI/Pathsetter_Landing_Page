import 'dotenv/config'

if (!process.env.BREVO_API_KEY) {
  console.error('Set BREVO_API_KEY before running this setup script.')
  process.exit(1)
}

const listId = Number(process.env.BREVO_LIST_ID)
if (!Number.isInteger(listId) || listId < 1) {
  console.error('Set BREVO_LIST_ID to the numeric ID of your Brevo subscriber list.')
  process.exit(1)
}

async function request(path, { method = 'GET', body } = {}) {
  const response = await fetch(`https://api.brevo.com/v3${path}`, {
    method,
    headers: {
      accept: 'application/json',
      'api-key': process.env.BREVO_API_KEY,
      ...(body ? { 'content-type': 'application/json' } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  })
  const responseBody = response.status === 204
    ? null
    : await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(
      `Brevo setup request failed (${response.status}): ${responseBody?.message || 'Unknown error'}`,
    )
  }

  return responseBody
}

async function ensureProperties() {
  const required = [
    'SIGNUP_SOURCE',
    'LEAD_STAGE',
    'MARKETING_CONSENT_AT',
    'CONSENT_VERSION',
  ]
  const existing = await request('/contacts/attributes')
  const byName = new Map(
    existing.attributes.map((attribute) => [attribute.name, attribute]),
  )

  for (const name of required) {
    const attribute = byName.get(name)
    if (attribute && attribute.type !== 'text') {
      throw new Error(`Brevo attribute ${name} exists but is not a text attribute.`)
    }
    if (!attribute) {
      await request(
        `/contacts/attributes/normal/${name}`,
        { method: 'POST', body: { type: 'text' } },
      )
    }
  }
}

async function verifyList() {
  let offset = 0
  while (true) {
    const page = await request(`/contacts/lists?limit=50&offset=${offset}`)
    const match = page.lists.find((list) => list.id === listId)
    if (match) return match
    if (page.lists.length < 50 || offset + page.lists.length >= page.count) break
    offset += page.lists.length
  }

  throw new Error(`Brevo list ${listId} was not found in this account.`)
}

await ensureProperties()
const list = await verifyList()

console.log(`Brevo marketing setup is ready for list "${list.name}" (${list.id}).`)
