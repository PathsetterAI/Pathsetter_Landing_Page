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

The Resources page subscription form stores contacts in Resend before sending a
confirmation email. Each contact is:

- opted into the `Monthly Intel Briefing` topic;
- added to the `Website marketing subscribers` segment;
- tagged with the source, consent timestamp, consent-copy version, and
  `marketing_subscriber` lifecycle stage.

This segment is the source list to sync or import into the CRM. Lead scoring can
then promote qualified subscribers to MQL status; a newsletter signup alone does
not mark every subscriber as an MQL.

1. Create a Resend API key and verify `alfredworks.ai` as a sending domain.
2. Set `RESEND_API_KEY` locally, then create the contact properties, segment, and
   opt-in topic:

   ```bash
   npm run setup:marketing
   ```

3. Copy the printed segment and topic IDs into the production environment, along
   with the remaining variables shown in `.env.example`.
4. Deploy the container. The production server listens on `PORT` (default
   `8080`) and serves both the built SPA and `/api/subscriptions`.

The sender address in `RESEND_FROM_EMAIL` must use a domain that has been verified
in Resend. Until then, use Resend's test sender only in a non-production account.

## Verification

```bash
npm test
npx eslint server scripts src/pages/Blogs.jsx vite.config.js
npm run build
```

`npm run lint` checks the whole pre-existing site in addition to this feature.
