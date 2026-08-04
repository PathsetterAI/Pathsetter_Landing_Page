// Single source of truth for the homepage FAQ.
//
// This content is rendered visibly by FAQSection.jsx AND emitted as FAQPage
// JSON-LD by SEO.jsx. Google requires FAQ structured data to describe content
// that is visible on the same page, so the two must never drift apart. They
// previously lived as two hand-maintained copies and had already diverged.
//
// Any page that emits FAQPage schema must pass its own visible question set.
export const homepageFaqs = [
  {
    q: "What does Alfred do?",
    a: "Alfred is a contract-intelligence platform that reads construction tenders and contracts, surfaces hidden risks, tracks obligations against project schedules, and drafts EOT and claim notices. A human always reviews and approves every action: Alfred never auto-sends."
  },
  {
    q: "What contract standards does Alfred read?",
    a: "Alfred reads and reasons against FIDIC (Red, Yellow, Silver, Green books), CPWD GCC, NHAI, Metro Rail, as well as an organization's own custom internal contract templates."
  },
  {
    q: "Does Alfred send letters or notices automatically?",
    a: "No. Alfred drafts notices, RFIs, EOTs, and claim letters to warn of project slippage and deadline compliance, but a human must always review, edit, and send the draft. The final control remains human."
  },
  {
    q: "How is Alfred different from a project management tool like Procore?",
    a: "Procore and similar tools manage documents and field records. Alfred is a contract reasoning engine that correlates schedules, daily progress reports, and contract clauses to protect commercial margins and flag claim liabilities."
  },
  {
    q: "Who uses Alfred?",
    a: "Alfred is built for EPC contractors, general contractors, PMCs, and infrastructure owners running high-value, complex construction projects."
  },
  {
    q: "How does Alfred connect to our existing systems?",
    a: "Alfred integrates directly with your existing enterprise systems, including document control systems, Primavera P6, MS Project, and ERP tools."
  }
];
