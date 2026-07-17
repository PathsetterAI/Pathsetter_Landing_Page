export const comparisonHub = {
  page: 'compare',
  slug: '/compare',
  title: 'How Alfred compares',
  introduction: [
    'Alfred is contract intelligence for infrastructure project delivery. It is not a project management suite, a contract-review tool, or a scheduler. It sits on top of the systems you already run and reasons across the contract, the P6 schedule, and daily site progress, so a right is never lost to a missed deadline.',
    'Most tools you already own touch one part of this problem. None of them reason across all three. These comparisons are honest about what each tool does well, and precise about the one thing only contract intelligence does.',
  ],
  sectionTitle: 'Compare Alfred against what you already use',
  demoCopy:
    'See how Alfred tracks contract risk from bid to claim, on top of the systems your team already runs.',
  titleTag: 'How Alfred Compares - Contract Intelligence',
  metaDescription:
    'See how Alfred compares to project management platforms, contract-review tools, Primavera P6, and Excel obligation trackers for infrastructure contracts.',
  ogTitle: 'How Alfred compares',
  ogDescription:
    'Alfred is contract intelligence for infrastructure delivery, not a project suite, a contract-review tool, or a scheduler. See where it fits.',
  breadcrumbLabel: 'Comparisons',
  lastReviewed: '2026-07-06',
};

export const comparisons = [
  {
    page: 'compare/procore-alternative-contract-intelligence',
    slug: '/compare/procore-alternative-contract-intelligence',
    icon: 'platforms',
    cardTitle: 'Alfred vs construction project management platforms',
    cardDescription:
      'Procore, Aconex and all-in-one suites move your documents, RFIs and money. Contract obligations sit in a side module, not the engine. See the difference.',
    title: 'Alfred vs construction project management platforms',
    introduction:
      'Construction project management platforms like Procore, Autodesk Construction Cloud and Aconex run the project record: documents, drawings, RFIs, submittals, daily logs and financials. Alfred does something different. It reads the contract, maps every obligation to your schedule, and flags a notice window before it closes. Alfred is the contract layer these platforms do not have, and it sits on top of them.',
    sections: [
      {
        id: 'best-for-platforms',
        title: 'What are construction PM platforms best for?',
        paragraphs: [
          'They are strong at what they were built for. Procore and Autodesk centralise field and office workflows: RFIs, submittals, change orders, drawings, punch lists and pay applications. Aconex and similar common data environments control document flow and version history across large teams. If your problem is coordinating people, documents and money across a project, these platforms do that job well.',
          'They are the right answer for teams that need a single hub for project delivery. Alfred does not replace that hub.',
        ],
      },
      {
        id: 'best-for-alfred',
        title: 'What is Alfred best for?',
        paragraphs: [
          'Alfred reads FIDIC, NHAI, PWD and Metro Rail contracts, maps every obligation to your P6 schedule, and alerts your team before a deadline is missed, a claim is lost, or a variation goes unrecorded. It works the commercial side of the project: notice windows, extension of time entitlement, variation records, and the claims trail that decides whether thin margin holds.',
          'Alfred drafts and flags. A human reviews and sends.',
        ],
      },
      {
        id: 'overlap',
        title: 'Where do the tools overlap?',
        paragraphs: [
          'Both live inside the project workflow. Both touch documents and correspondence. A PM platform stores the contract as a file and routes RFIs. Alfred reads that same contract, understands what it obligates, and connects those obligations to schedule movement and site progress. The overlap is the document. The difference is the reasoning.',
        ],
      },
      {
        id: 'difference',
        title: 'Where is Alfred different?',
        paragraphs: [
          'A PM platform records what happened. Alfred tells you what the contract requires next, and what right you are about to lose if no one acts. It answers questions your project hub cannot: which notice is due this week, which slip has contractual consequence, which variation is unrecorded, and what evidence supports the claim you will file in eight months. Every answer is grounded in the source clause and the project data behind it, so your team can verify the chain rather than trust an output.',
        ],
      },
      {
        id: 'all-in-one',
        title: 'What about all-in-one platforms that add contract features?',
        paragraphs: [
          'Newer platforms bundle a contract module alongside scheduling, billing and field capture. For a smaller contractor replacing spreadsheets, one tool that does everything is a reasonable choice. For an enterprise EPC, breadth is not the constraint. You already run P6, an ERP, and a document system, and you are not ripping them out.',
          'The question is not how many features a tool has. It is how deep the contract reasoning goes. A bolt-on contract tab treats the contract as one more record. Alfred treats it as the engine, and reconciles it against the schedule and the field every day. That depth is the difference between a feature and a discipline.',
        ],
      },
      {
        id: 'who-should-choose',
        title: 'Which teams should choose Alfred?',
        paragraphs: [
          'Alfred is built for GCs, EPCs, owners and PMCs running large infrastructure projects, the teams that already have a project hub and a scheduler, and are still losing margin in the gap between the contract and the ground. If your commercial exposure lives in missed notices and reconstructed claims, that is the gap Alfred closes.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does Alfred replace Procore or Aconex?',
        answer:
          'No. Alfred sits on top of the platforms you already run. It reads the contracts and correspondence those systems hold and adds the obligation, notice and claims layer they do not have.',
      },
      {
        question: 'Does Alfred do project management?',
        answer:
          'No. Alfred is contract intelligence. It does not schedule tasks, route submittals or manage pay applications. It reasons over the contract and connects it to the schedule and site progress.',
      },
      {
        question: 'We already have an all-in-one platform with a contract module. Why add Alfred?',
        answer:
          'A contract module records the contract. Alfred works it daily, reconciling obligations against the live schedule and field data, and drafting notices and claims grounded in that evidence. The value is depth of reasoning, not another dashboard.',
      },
      {
        question: 'What contract standards does Alfred read?',
        answer:
          'Alfred reads FIDIC, NHAI, PWD and Metro Rail contracts, and internal contract standards used by infrastructure teams.',
      },
      {
        question: 'Can Alfred read contracts my PM platform already stores?',
        answer:
          'Yes. Alfred is built to work around your existing project stack, including document systems and schedules, rather than requiring you to move everything into it.',
      },
      {
        question: 'Does Alfred send notices automatically?',
        answer:
          'No. Alfred drafts notices, RFIs and claim letters and flags the deadlines. A person reviews, edits and sends every one.',
      },
    ],
    demoCopy:
      'See how Alfred adds contract intelligence on top of the project platform your team already runs.',
    titleTag: 'Procore Alternative for Contract Intelligence - Alfred',
    metaDescription:
      'Procore and Aconex manage documents, RFIs and money. Alfred adds the contract layer they lack: obligations, notices and claims, on top of your stack.',
    ogTitle: 'Alfred vs construction project management platforms',
    ogDescription:
      'PM platforms run the project record. Alfred reasons over the contract. See where each fits for infrastructure and EPC teams.',
    breadcrumbLabel: 'Construction PM Platforms',
    lastReviewed: '2026-07-06',
  },
  {
    page: 'compare/alfred-vs-contract-review-tools',
    slug: '/compare/alfred-vs-contract-review-tools',
    icon: 'review',
    cardTitle: 'Alfred vs AI contract-review tools',
    cardDescription:
      'Review tools read the contract once at bid and flag the risky clauses. Alfred works that contract every day of execution, against the live schedule and site progress. See the difference.',
    title: 'Alfred vs AI contract-review tools',
    introduction:
      'AI contract-review tools read a contract once, usually at bid or award, and flag the risky clauses in plain language. That is useful work. Alfred does something different and continuous: it works the contract every day of execution, tracking obligations and notice windows against the live schedule and site progress, and drafting the correspondence when a right is at risk.',
    sections: [
      {
        id: 'best-for-review-tools',
        title: 'What are AI contract-review tools best for?',
        paragraphs: [
          'They are fast at pre-award risk review. Tools in this category, such as Document Crunch (now part of Trimble), read a contract in minutes, surface critical provisions, translate legal language into plain English, and produce a review or playbook so a bid or legal team understands what they are signing. For qualifying an RFP, catching red flags before award, and getting a project team briefed on contract risk, that is real value.',
          'Their centre of gravity is the bid and negotiation phase: read the document, understand the risk, move on.',
        ],
      },
      {
        id: 'best-for-alfred',
        title: 'What is Alfred best for?',
        paragraphs: [
          "Alfred's centre of gravity is execution, the two years after the contract is signed. It reads FIDIC, NHAI, PWD and Metro Rail contracts, maps every obligation to your P6 schedule, and alerts your team before a deadline is missed, a claim is lost, or a variation goes unrecorded. When the schedule slips or a site event occurs, Alfred connects it to the clause it affects and drafts the notice, RFI or EOT letter grounded in that evidence.",
          'Alfred drafts and flags. A human reviews and sends.',
        ],
      },
      {
        id: 'overlap',
        title: 'Where do the tools overlap?',
        paragraphs: [
          'Both read construction contracts. Both identify clauses that carry risk. If your only need is to review a contract before signing, the two categories look similar and a review tool may be enough.',
        ],
      },
      {
        id: 'read-once',
        title: 'Reading the contract once is not the same as managing it',
        paragraphs: [
          'A review at bid gives you a snapshot: here is what the contract says and where the risk sits. But contract risk does not live at signing. It accumulates through execution, as a late drawing, a verbal instruction, an unanswered RFI, a slipped milestone, each of which may open or close a contractual right on a deadline no one is watching.',
          'A static review cannot track that. It does not know the schedule moved. It does not know the 28-day notice clock started on Tuesday. It does not hold the contemporaneous record that decides the claim. Alfred does, because it reconciles the contract against the schedule and the field continuously, not once. Read once versus worked daily is the whole difference.',
        ],
      },
      {
        id: 'difference',
        title: 'Where is Alfred different?',
        paragraphs: [
          'Alfred maps obligations to schedule activities, so a delay in P6 surfaces as a contractual consequence, not just a red bar. It watches notice windows and flags them before they expire. It drafts correspondence grounded in both the clause and the project data behind it, not the contract text alone. And it builds the evidential trail from day one, so a claim is supported by records rather than reconstructed under deadline pressure.',
        ],
      },
      {
        id: 'who-should-choose',
        title: 'Which teams should choose Alfred?',
        paragraphs: [
          "Choose a contract-review tool if the job ends at award. Choose Alfred if the job is delivering the project: tracking obligations, protecting notice windows, and defending margin across the full life of the contract. Many enterprise teams value both, review at bid and Alfred through execution, because they solve different phases.",
        ],
      },
    ],
    faq: [
      {
        question: 'Is Alfred a Document Crunch alternative?',
        answer:
          "When the job is daily contract management through execution, yes. For pure pre-award clause review the two overlap, but Alfred's core work is obligation tracking, notice deadlines and claims after award, reconciled against the schedule and site data.",
      },
      {
        question: 'Does Alfred review tenders before a bid?',
        answer:
          "Yes. Tender and specification risk review is part of Alfred's Win It stage. But the deeper value is in execution: Run It and Defend It, where most margin is actually lost.",
      },
      {
        question: 'Does Alfred track obligations after the contract is signed?',
        answer:
          'Yes. That is the core of the product. Alfred extracts obligations, maps them to owners, dates and schedule activities, and flags them before they become missed deadlines.',
      },
      {
        question: 'Does Alfred connect to the project schedule?',
        answer:
          'Yes. Alfred maps obligations and notice windows to Primavera P6 or MS Project activities, so schedule movement surfaces its contractual impact.',
      },
      {
        question: 'Does Alfred draft notices and claims?',
        answer:
          'Yes. Alfred drafts RFIs, EOT notices, variation letters and claim narratives grounded in the contract clause and the project evidence. A person reviews and sends every one.',
      },
      {
        question: 'What contract standards does Alfred read?',
        answer:
          'Alfred reads FIDIC, NHAI, PWD and Metro Rail contracts, and internal contract standards used by infrastructure teams.',
      },
    ],
    demoCopy:
      'See how Alfred works your contract every day of execution, not just once at bid.',
    titleTag: 'Alfred vs AI Contract-Review Tools - Contract Intelligence',
    metaDescription:
      'Contract-review tools read the contract once at bid and flag clauses. Alfred works the contract daily through execution, against the schedule and site.',
    ogTitle: 'Alfred vs AI contract-review tools',
    ogDescription:
      'Reading a contract once is not the same as managing it. See how Alfred differs from pre-award clause-flagging tools.',
    breadcrumbLabel: 'AI Contract-Review Tools',
    lastReviewed: '2026-07-06',
  },
  {
    page: 'compare/alfred-vs-primavera-p6',
    slug: '/compare/alfred-vs-primavera-p6',
    icon: 'schedule',
    cardTitle: 'Alfred vs Primavera P6',
    cardDescription:
      'P6 tracks activities and dates. It does not know that a three-week slip just opened a notice window under your contract. See the difference.',
    title: 'Alfred vs Primavera P6 for contract risk',
    introduction:
      'Primavera P6 is the system of record for your schedule: activities, logic, critical path, resource loading and progress. It tells you what is planned and what has slipped. What it cannot tell you is that a three-week slip on a critical activity just opened a notice window under your contract, and that the right to an extension of time expires in 28 days. Alfred maps the contract onto the schedule, so a slip carries its contractual consequence, not just a date change.',
    sections: [
      {
        id: 'best-for-p6',
        title: 'What is Primavera P6 best for?',
        paragraphs: [
          'P6 is the best tool in the industry for building and running a schedule. Critical path, float, resource histograms, baseline comparison and progress tracking are its job, and it does them at a depth no contract tool should try to replicate. If the question is when an activity finishes and what it depends on, P6 answers it.',
          'Alfred does not schedule and does not replace P6. It reads from it.',
        ],
      },
      {
        id: 'best-for-alfred',
        title: 'What is Alfred best for?',
        paragraphs: [
          'Alfred reads FIDIC, NHAI, PWD and Metro Rail contracts, maps every obligation to your P6 schedule, and alerts your team before a deadline is missed, a claim is lost, or a variation goes unrecorded. Its job is the contractual meaning of schedule movement: which slip has entitlement, which notice is now due, which delay needs a contemporaneous record before the trail goes cold.',
        ],
      },
      {
        id: 'schedule-cannot-protect',
        title: 'Why your schedule cannot protect a claim',
        paragraphs: [
          'A schedule is contract-blind by design. P6 knows an activity moved from Week 12 to Week 15. It does not know your contract requires notice within 28 days of the event, that the event qualifies for an extension of time, or that failing to notify in time bars the claim entirely, even when the entitlement is real. It does not draft the notice. It does not hold the daily reports, correspondence and instructions that prove cause and effect.',
          'So the delay sits in P6 as a red bar, visible but commercially inert, until the claim is reconstructed months later from scattered evidence, often too late to preserve the right. That gap between a schedule event and its contractual consequence is where margin quietly leaves the project.',
        ],
      },
      {
        id: 'works-with-p6',
        title: 'How Alfred works with P6, not against it',
        paragraphs: [
          'Alfred reads the schedule and links contract obligations, notice windows and claim triggers to the activities they depend on. When an activity breaches a threshold or a milestone is at risk, Alfred surfaces the contractual clock attached to it and drafts the response. The schedule stays in P6. The contract reasoning happens in Alfred, connected to it.',
          'Alfred drafts and flags. A human reviews and sends.',
        ],
      },
      {
        id: 'difference',
        title: 'Where is Alfred different?',
        paragraphs: [
          'P6 answers "what is the status of this activity?" Alfred answers "what does the contract require because this activity moved, and what right do we lose if no one acts this week?" One tracks the plan. The other protects the entitlement attached to the plan.',
        ],
      },
      {
        id: 'who-should-choose',
        title: 'Which teams should choose Alfred?',
        paragraphs: [
          'Any team already running P6 that still reconstructs claims after the fact. Planning and project controls teams have the schedule truth. Alfred gives that truth contractual consequence, so slippage reaches the commercial team with its evidence attached, while the notice window is still open.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does Alfred replace Primavera P6?',
        answer:
          'No. Alfred reads from P6. It does not build or replace your schedule. It adds contract awareness on top of the plan you already run.',
      },
      {
        question: 'Does Alfred build or edit schedules?',
        answer:
          'No. Alfred reasons over the existing schedule. It maps contract obligations to schedule activities but leaves scheduling to P6.',
      },
      {
        question: 'How does Alfred connect a delay to a claim?',
        answer:
          'Alfred links contract clauses, notice windows and claim triggers to specific schedule activities. When an activity slips, Alfred surfaces the clause it affects, the notice deadline, and the evidence needed to support the claim.',
      },
      {
        question: 'Does Alfred work with MS Project as well as P6?',
        answer: 'Yes. Alfred can work around Primavera P6 or MS Project schedule data.',
      },
      {
        question: 'What does Alfred add that P6 does not have?',
        answer:
          'Contract awareness. P6 knows dates and logic. Alfred knows what the contract obligates, when a right expires, and what a schedule event means commercially.',
      },
      {
        question: 'Does Alfred send notices automatically?',
        answer: 'No. Alfred drafts notices and flags deadlines. A person reviews and sends.',
      },
    ],
    demoCopy:
      'See how Alfred turns a slip in your P6 schedule into a protected contractual right.',
    titleTag: 'Alfred vs Primavera P6 for Contract Risk - Alfred',
    metaDescription:
      'Primavera P6 tracks activities and dates. It does not know a slip just opened a notice window. Alfred maps the contract onto your schedule.',
    ogTitle: 'Alfred vs Primavera P6',
    ogDescription:
      'Your schedule shows the delay. It cannot protect the claim. See how Alfred adds contract awareness to P6.',
    breadcrumbLabel: 'Primavera P6',
    lastReviewed: '2026-07-06',
    featured: true,
  },
  {
    page: 'compare/alfred-vs-excel-obligation-tracking',
    slug: '/compare/alfred-vs-excel-obligation-tracking',
    icon: 'manual',
    cardTitle: 'Alfred vs Excel and WhatsApp',
    cardDescription:
      "The real status quo is a stale spreadsheet and a hundred WhatsApp messages. Nothing searchable, nothing auditable, and the missed clause surfaces only when the other side's notice arrives. See the difference.",
    title: 'Alfred vs Excel and WhatsApp for obligation tracking',
    introduction:
      'For most infrastructure teams, the real system for tracking contract obligations is not software. It is an Excel register, updated when someone remembers, plus a running stream of WhatsApp messages, photos and voice notes standing in for a project record. It works until it does not, and it fails at exactly the moment that matters: the notice window that closes unnoticed. Alfred replaces that with a single obligation register that is searchable, alerted and auditable.',
    sections: [
      {
        id: 'status-quo',
        title: 'What is the Excel and WhatsApp status quo?',
        paragraphs: [
          'It is honest, common and understandable. A planner or contracts engineer keeps obligations in a spreadsheet. Site updates arrive over WhatsApp. Decisions get made in group chats. The contract PDF lives in a shared drive. Nobody set out to run a project this way; it accreted because it was the fastest thing available.',
          'For a small, slow project it can hold together. On a large infrastructure contract with hundreds of obligations and multiple sites, it starts to leak.',
        ],
      },
      {
        id: 'manual-method-breaks',
        title: 'Where the manual method breaks',
        bullets: [
          {
            lead: 'The register goes stale.',
            text: "It is only as current as the last person who updated it, and updating is nobody's full-time job.",
          },
          {
            lead: 'It lives on one laptop.',
            text: 'Knowledge sits with one person. When they are on leave or move on, the obligation history goes with them.',
          },
          {
            lead: 'There are no alerts.',
            text: "A spreadsheet does not tell you a notice is due on Friday. You find out when the other side's notice arrives.",
          },
          {
            lead: 'WhatsApp is not evidence you can retrieve.',
            text: 'The instruction that supports your claim is buried in a chat thread, unsearchable and unlinked to the contract.',
          },
          {
            lead: 'There is no audit trail.',
            text: 'When a dispute comes, you cannot show who knew what and when, which is exactly what a claim turns on.',
          },
        ],
      },
      {
        id: 'what-alfred-does',
        title: 'What Alfred does instead',
        paragraphs: [
          'Alfred reads FIDIC, NHAI, PWD and Metro Rail contracts, maps every obligation to your P6 schedule, and alerts your team before a deadline is missed, a claim is lost, or a variation goes unrecorded. Every obligation becomes a tracked item with an owner, a date and a schedule link, instead of a row that ages. Site progress is captured as structured data, not scattered across chat. Ask a question and Alfred answers it grounded in the specific clause and record, so you can verify the source rather than trust a cell.',
          'Alfred drafts and flags. A human reviews and sends.',
        ],
      },
      {
        id: 'difference',
        title: 'Where is Alfred different?',
        paragraphs: [
          'A spreadsheet stores what you typed. Alfred understands what the contract requires and warns you before a right expires. A shared drive holds the contract. Alfred reads it, connects it to the schedule and the field, and keeps an audit trail of who viewed, drafted and approved what. The manual method is a record of the past. Alfred is a warning system for the future.',
        ],
      },
      {
        id: 'who-should-choose',
        title: 'Which teams should choose Alfred?',
        paragraphs: [
          'Teams whose obligation tracking has outgrown a spreadsheet, and who have felt the cost of a missed window at least once. If your contract exposure runs into serious money and your defence is a file named with "final" in the title three times, the manual method is already too expensive.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can Alfred import our existing Excel obligation register?',
        answer:
          'Yes. Alfred is built to ingest existing templates and structured project data, so you are not starting from a blank register.',
      },
      {
        question: 'Do we have to stop using Excel and WhatsApp?',
        answer:
          'Your teams can keep working the way they prefer, but the obligation register moves into Alfred, where it stays current, alerted and auditable rather than static.',
      },
      {
        question: 'How is this different from a well-maintained shared spreadsheet?',
        answer:
          'A spreadsheet stores data. Alfred reasons over it: it links obligations to the contract and schedule, flags deadlines before they pass, answers questions with cited sources, and keeps an audit trail.',
      },
      {
        question: 'Does Alfred keep an audit trail?',
        answer:
          'Yes. Consequential actions are logged with the actor and timestamp, so you can show who knew what and when.',
      },
      {
        question: 'What about site teams who work on WhatsApp?',
        answer:
          'Field progress is captured as structured data through Alfred rather than living in chat threads, so the record is searchable and linked to the contract.',
      },
      {
        question: 'What contract standards does Alfred read?',
        answer:
          'Alfred reads FIDIC, NHAI, PWD and Metro Rail contracts, and internal contract standards used by infrastructure teams.',
      },
    ],
    demoCopy:
      'See how Alfred replaces the stale spreadsheet with an obligation register that warns you in time.',
    titleTag: 'Alfred vs Excel and WhatsApp for Obligations - Alfred',
    metaDescription:
      'A stale spreadsheet and a hundred WhatsApp messages is the real status quo. Alfred replaces it with a searchable, alerted, auditable obligation register.',
    ogTitle: 'Alfred vs Excel and WhatsApp',
    ogDescription:
      'The manual obligation register goes stale, sits on one laptop, and misses the deadline that costs the claim. See what Alfred does instead.',
    breadcrumbLabel: 'Excel and WhatsApp',
    lastReviewed: '2026-07-06',
  },
];

export function getComparisonByPage(page) {
  return comparisons.find((comparison) => comparison.page === page);
}
