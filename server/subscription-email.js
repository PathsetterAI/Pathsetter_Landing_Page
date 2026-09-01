const brand = {
  navy: '#1A3A5C',
  gold: '#FFC20E',
  muted: '#5A6F85',
  background: '#F4F4F7',
}

export function subscriptionConfirmationEmail() {
  const text = [
    'Thanks for subscribing to the AlfredWorks Monthly Intel Briefing.',
    '',
    "You've signed up to receive marketing-related emails from AlfredWorks, including our monthly contract advisory letter, product news, and relevant resources for infrastructure and EPC teams.",
    '',
    'You can unsubscribe at any time using the link in any marketing email.',
    '',
    '— The AlfredWorks team',
  ].join('\n')

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>You're subscribed to AlfredWorks</title>
  </head>
  <body style="margin:0;background:${brand.background};font-family:Arial,Helvetica,sans-serif;color:${brand.navy};">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">You're subscribed to the AlfredWorks Monthly Intel Briefing.</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:${brand.background};">
      <tr>
        <td align="center" style="padding:40px 16px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;">
            <tr><td style="height:8px;background:${brand.gold};font-size:0;line-height:0;">&nbsp;</td></tr>
            <tr>
              <td style="padding:40px 36px;">
                <p style="margin:0 0 12px;color:${brand.gold};font-family:monospace;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">Monthly Intel Briefing</p>
                <h1 style="margin:0 0 20px;color:${brand.navy};font-size:28px;line-height:1.25;">Thanks for subscribing.</h1>
                <p style="margin:0 0 16px;color:${brand.muted};font-size:16px;line-height:1.65;">You've signed up to receive marketing-related emails from AlfredWorks, including our monthly contract advisory letter, product news, and relevant resources for infrastructure and EPC teams.</p>
                <p style="margin:0 0 28px;color:${brand.muted};font-size:16px;line-height:1.65;">You can unsubscribe at any time using the link in any marketing email.</p>
                <p style="margin:0;color:${brand.navy};font-size:16px;line-height:1.5;font-weight:700;">The AlfredWorks team</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`

  return {
    subject: "You're subscribed to the AlfredWorks Monthly Intel Briefing",
    text,
    html,
  }
}
