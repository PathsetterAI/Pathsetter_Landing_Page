# AlfredWorks website

## Local development

Install dependencies, copy `.env.example` to `.env`, and set the required values.

Run the API server and Vite dev server in separate terminals:

```bash
npm run dev:server
npm run dev
```

Vite proxies `/api` requests to the API server on port `8080`.

## Marketing subscription setup

The Resources page subscription form stores contacts in the existing Brevo
account before sending a confirmation email through Brevo. Each contact is:

- added to the Brevo list identified by `BREVO_LIST_ID`;
- tagged with the source, consent timestamp, consent-copy version, and
  `marketing_subscriber` lifecycle stage.

This list is the source list to use for campaigns or sync into a CRM. Lead scoring can
then promote qualified subscribers to MQL status; a newsletter signup alone does
not mark every subscriber as an MQL.

1. In Brevo, create or choose a contact list such as `AlfredWorks Website
   Subscribers`. Copy its numeric list ID from **CRM > Contacts > Lists**.
2. In **Settings > SMTP & API > API Keys & MCP**, create a Brevo API key for the
   website. Keep it only in the deployment environment and never commit it.
3. Authenticate `alfredworks.ai` in Brevo and verify the sender address configured
   in `BREVO_SENDER_EMAIL`.
4. Copy `.env.example` to `.env`, enter the API key and list ID, then create the
   required consent-tracking attributes and verify the list:

   ```bash
   npm run setup:marketing
   ```

5. Add the same variables to the production environment.
6. Deploy the container. The production server listens on `PORT` (default
   `8080`) and serves both the built SPA and `/api/subscriptions`.

The Brevo contact upsert uses `updateEnabled: true`, so a repeat signup updates the
existing contact and adds it to the configured list rather than creating a
duplicate. The confirmation message is sent through Brevo's transactional email
API after the contact is saved.

## Verification

```bash
npm test
npx eslint server scripts src/pages/Blogs.jsx vite.config.js
npm run build
```

`npm run lint` checks the whole pre-existing site in addition to this feature.
