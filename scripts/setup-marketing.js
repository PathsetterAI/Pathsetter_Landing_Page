import 'dotenv/config'
import { Resend } from 'resend'

if (!process.env.RESEND_API_KEY) {
  console.error('Set RESEND_API_KEY before running this setup script.')
  process.exit(1)
}

const resend = new Resend(process.env.RESEND_API_KEY)

function unwrap(result, operation) {
  if (result.error) {
    throw new Error(`${operation}: ${result.error.message}`)
  }
  return result.data
}

async function ensureProperties() {
  const required = [
    ['lead_source', 'unknown'],
    ['lifecycle_stage', 'marketing_subscriber'],
    ['marketing_consent_at', 'unknown'],
    ['marketing_consent_version', 'unknown'],
  ]
  const existing = unwrap(
    await resend.contactProperties.list({ limit: 100 }),
    'Could not list contact properties',
  )
  const keys = new Set(existing.data.map((property) => property.key))

  for (const [key, fallbackValue] of required) {
    if (!keys.has(key)) {
      unwrap(
        await resend.contactProperties.create({
          key,
          type: 'string',
          fallbackValue,
        }),
        `Could not create ${key}`,
      )
    }
  }
}

async function ensureSegment() {
  const name = 'Website marketing subscribers'
  const existing = unwrap(await resend.segments.list(), 'Could not list segments')
  const match = existing.data.find((segment) => segment.name === name)
  if (match) return match.id
  return unwrap(await resend.segments.create({ name }), 'Could not create segment').id
}

async function ensureTopic() {
  const name = 'Monthly Intel Briefing'
  const existing = unwrap(await resend.topics.list(), 'Could not list topics')
  const match = existing.data.find((topic) => topic.name === name)
  if (match) return match.id
  return unwrap(
    await resend.topics.create({
      name,
      description: 'AlfredWorks marketing briefings, product news, and relevant resources.',
      defaultSubscription: 'opt_out',
    }),
    'Could not create topic',
  ).id
}

await ensureProperties()
const segmentId = await ensureSegment()
const topicId = await ensureTopic()

console.log('Marketing resources are ready. Add these values to your production environment:')
console.log(`RESEND_MARKETING_SEGMENT_ID=${segmentId}`)
console.log(`RESEND_MARKETING_TOPIC_ID=${topicId}`)
