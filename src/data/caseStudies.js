export const caseStudies = [
  {
    id: 1,
    title: "Communication Hub",
    clientType: "Leading Solar EPC",
    challenge: {
      title: "Communication Noise at Scale",
      content: [
        "A fast-growing solar EPC ran active projects across more than ten WhatsApp groups and multiple email threads, generating over 200 messages per day across contractors, site engineers, vendors, and consultants.",
        "As project volume increased, communication volume scaled faster than attention.",
        "Critical signals were routinely lost inside unstructured conversations. Risks, delays, and material shortages were buried in long chat threads. RFIs fragmented across email chains. Dates, quantities, and task statuses conflicted across stakeholders.",
        "Project managers spent hours manually scanning messages and reconciling updates. Decisions slowed because the right information failed to surface at the right time. Messages were not differentiated by relevance or role, forcing every user to process everything.",
        "The outcome was avoidable delays, missed escalations, and inconsistent reporting across projects."
      ]
    },
    solution: {
      title: "Communication Hub",
      content: [
        "An AI-native communication intelligence layer was deployed to ingest all WhatsApp groups and email threads and transform raw conversations into structured, actionable signals.",
        "All channels were consolidated into a single feed. Messages were automatically classified into Risks, RFIs, Compliance, Updates, Data Conflicts, or General context. Contradictory dates, quantities, and statuses were detected and flagged in real time.",
        "Risks and RFIs were extracted into dedicated views, while low-signal noise was filtered out. A prioritized notification tray surfaced critical items using severity-based urgency.",
        "Role-specific email digests were delivered multiple times per day, providing project pulse, key updates, actions required, and executive summaries tailored to personas such as project management, finance, and supply chain.",
        "The result was a single operational source of truth for project communications, where high-signal information surfaced automatically and consistently."
      ]
    },
    impact: {
      title: "Faster Decisions. Fewer Misses. Clearer Execution.",
      stats: [
        { 
          value: "60–70%", 
          label: "reduction in communication clutter", 
          desc: "Only high-signal information surfaced across teams."
        },
        { 
          value: "6–8 hours", 
          label: "saved per project manager per week", 
          desc: "Manual scanning of chats and email threads was eliminated."
        },
        { 
          value: "85%", 
          label: "reduction in missed risks and RFIs", 
          desc: "Every critical issue was captured and surfaced."
        },
        { 
          value: "40%", 
          label: "faster decision cycles", 
          desc: "Urgent items escalated automatically with clear ownership."
        },
        { 
          value: "Near-zero", 
          label: "unresolved data conflicts", 
          desc: "Contradictory updates were detected and resolved early."
        }
      ],
      testimonial: {
        quote: "We moved from reacting to messages to operating with clarity. Risks, RFIs, and conflicts surface early, and decisions that used to take days now happen in hours.",
        author: "DIRECTOR, PROJECT DELIVERY | LEADING SOLAR EPC"
      }
    }
  },
  {
    id: 2,
    title: "Obligation Register",
    clientType: "Public-Sector Project Owner & Regulator",
    challenge: {
      title: "Fragmented Obligations and Compliance Blind Spots",
      content: [
        "A large public-sector project owner and regulator faced a recurring governance challenge: contractual and regulatory obligations were scattered across PPAs, contracts, and regulatory documents.",
        "Critical commitments were buried inside long-form agreements, making them easy to miss and difficult to audit. Many obligations were conditional and sequential, where one submission unlocked downstream approvals, yet these dependencies were hard to visualise and track.",
        "There was no authoritative source of truth that clearly answered: who is responsible, what is due, and when.",
        "Manual spreadsheets and email-based tracking became stale quickly. Regulatory reviews slowed, approvals took longer, and dispute risk increased as projects scaled.",
        "The outcome was missed deadlines, potential penalties, delayed approvals, and reduced confidence in execution discipline."
      ]
    },
    solution: {
      title: "Obligation Register",
      content: [
        "A central, auditable obligation engine was deployed to serve regulator and project owner workflows.",
        "Contracts and PPAs were ingested directly, and AI extracted obligations, timelines, and dependencies. A human-in-the-loop validation interface enabled regulators to approve the baseline, enrich it with child and related obligations, and preserve governance accuracy.",
        "Dependencies were mapped visually to expose conditional flows and critical paths. Obligations were assigned to executing parties, categorised by risk, tracked to due dates, and saved as reusable templates to standardise compliance baselines across projects.",
        "When teams uploaded submissions, the system performed content-level completeness checks against contractual requirements, flagged missing items with precise references, issued timestamped receipts, and routed exceptions for regulator review. Approvals and rejections triggered downstream obligations automatically, with full version history and immutable audit trails.",
        "Automated nudges, escalations for high-penalty items, and dependency warnings ensured risks surfaced early rather than during audits.",
        "The register became the single authoritative compliance lane, combining AI speed with regulator-controlled accountability."
      ]
    },
    impact: {
      title: "Faster Oversight. Fewer Misses. Stronger Accountability.",
      stats: [
        { 
          value: "70%", 
          label: "reduction in overlooked obligations", 
          desc: "Commitments captured from day one through automated extraction and template reuse."
        },
        { 
          value: "5–7 hours", 
          label: "saved per project owner per week", 
          desc: "Manual cross-checking across documents and email chains was reduced dramatically."
        },
        { 
          value: "50%", 
          label: "faster resolution of clarifications", 
          desc: "Completeness checks and in-context review reduced back-and-forth cycles."
        },
        { 
          value: "90%", 
          label: "improvement in traceability", 
          desc: "Immutable audit trails, timestamped receipts, and version history strengthened evidence."
        },
        { 
          value: "Early", 
          label: "detection of bottlenecks", 
          desc: "Dependency mapping exposed blocking approvals before downstream delays."
        },
        { 
          value: "Higher", 
          label: "regulator throughput", 
          desc: "Reviewers focused on governance decisions, not checklist work."
        }
      ],
      testimonial: {
        quote: "We finally have an auditable view of every obligation, its owner, its due date, and its dependencies. Reviews move faster without compromising governance, and dispute readiness is materially stronger.",
        author: "DIRECTOR, REGULATORY OVERSIGHT | PUBLIC-SECTOR PROJECT OWNER"
      }
    }
  },
  {
    id: 3,
    title: "Smart Staging for Solar EPC",
    clientType: "Leading EPC Contractor",
    challenge: {
      title: "Slow RFP Interpretation and Inconsistent Project Setup",
      content: [
        "A solar EPC contractor evaluated complex tender documents from utilities and project owners. Each RFP included technical specifications, drawings, BOQs, land requirements, delivery timelines, and statutory obligations, often spanning 200 to 500 pages.",
        "Schedules were built manually from these documents and frequently missed solar-specific dependencies such as module delivery sequencing, inverter approvals, SCADA integration, evacuation readiness, and grid commissioning constraints.",
        "Work package breakdowns were recreated for every bid, leading to inconsistent structures, non-standard formats, and a recurring risk of missing scope items across civil, MMS, electrical, evacuation, and SCADA.",
        "Bid responses depended heavily on individual engineer interpretation, increasing risk of scope leakage and technical non-compliance.",
        "The outcome was slow bid turnaround, high manual workload, and uneven execution readiness after award."
      ]
    },
    solution: {
      title: "Smart Staging for Solar EPC",
      content: [
        "An automated tender-to-project staging workflow was deployed to convert solar RFPs into structured project assets with repeatable standards.",
        "AI extracted milestone dates and generated a solar-specific schedule sequence covering NTP, module delivery, MMS supply, inverter dispatch, SCADA testing, and COD, with task chaining aligned to solar execution realities.",
        "The system generated standardised CWPs and IWPs across the full scope, including civil works, MMS fabrication and installation, module installation, DC trenching and cabling, SCBs, inverter stations and HT yard works, transformers, AC termination and testing, SCADA and communications, and evacuation line and bay approvals.",
        "For procurement and subcontracting, the system compared each subcontractor proposal against RFP requirements, scored bids against defined technical and commercial criteria, highlighted gaps and non-compliances, and produced a ranked side-by-side scorecard to support objective shortlisting.",
        "The result was faster tender evaluation and a consistent, execution-ready project baseline from day one."
      ]
    },
    impact: {
      title: "Faster Bids. Higher Accuracy. Stronger Competitive Edge.",
      stats: [
        { 
          value: "80%", 
          label: "improvement in consistency of work packages", 
          desc: "Standard CWPs and IWPs generated using a repeatable solar EPC structure."
        },
        { 
          value: "2–3 weeks", 
          label: "saved in project initiation", 
          desc: "Schedule and work package extraction automated from RFPs."
        },
        { 
          value: "30–40%", 
          label: "faster bid evaluations", 
          desc: "Objective scoring and side-by-side comparisons reduced review cycles."
        }
      ],
      testimonial: {
        quote: "Our tender cycle changed immediately. Schedules and work packages come out consistent, solar dependencies are captured early, and subcontractor bids are evaluated with far more objectivity. We move faster with fewer blind spots.",
        author: "HEAD, SOLAR EPC & BIDDING | LEADING EPC CONTRACTOR"
      }
    }
  }
];