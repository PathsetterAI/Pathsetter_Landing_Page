import React, { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import alfredLogo from '../assets/newlogo alfred.svg'

// Detailed articles mock content to make the page interactive and WOW the user
const articleDetails = {
  "zetwerk-epc": {
    category: "CASE STUDY",
    title: "Zetwerk EPC",
    subtitle: "Analyzing milestone invoicing and FIDIC EOT letter drafting across 20+ live project sites.",
    content: `
      <h3>Background</h3>
      <p>Zetwerk executes complex industrial procurement and manufacturing EPC projects globally. With more than 20 live infrastructure sites operating under strict FIDIC contract terms, tracking compliance and commercial variations manually was leading to invoicing lags and claim leakage.</p>
      
      <h3>The Challenge</h3>
      <p>Milestone progress updates from remote sites were poorly mapped to specific payment milestones in main contracts. Delayed daily reporting meant Extension of Time (EOT) claim notices were regularly missing the strict FIDIC 28-day warning window, putting millions of dollars in entitlements at risk.</p>
      
      <h3>The Alfred Solution</h3>
      <ul>
        <li><strong>Automated Obligations Mapping</strong>: Alfred ingested raw FIDIC contract terms and extracted 150+ operational obligations, linking them directly to site schedule nodes.</li>
        <li><strong>Real-time Milestone Validation</strong>: Enabled direct mapping of physical site progress to invoicing conditions, reducing the billing cycle lag from 18 days to 2 days.</li>
        <li><strong>EOT Auto-Drafting</strong>: System detected schedule slippages automatically and pre-drafted structured EOT notices with appropriate legal and factual references, avoiding time-bar forfeitures.</li>
      </ul>
      
      <h3>Key Metrics</h3>
      <p>Over a 12-month period, Zetwerk captured 98% of EOT claims, eliminated notice window leakage entirely, and realized a 4.2% preservation in project gross margins across active sites.</p>
    `
  },
  "meil-infrastructures": {
    category: "CASE STUDY",
    title: "MEIL Infrastructures",
    subtitle: "First-of-its-kind ERP integrated contract tracking on Tier-1 Indian EPC operations.",
    content: `
      <h3>Background</h3>
      <p>Megha Engineering & Infrastructures Limited (MEIL) is a premier Tier-1 infrastructure company executing mega-scale water, energy, and transport projects. Their legacy ERP system (SAP) tracked costs effectively but operated in complete isolation from complex contract obligation milestones.</p>
      
      <h3>The Challenge</h3>
      <p>Because site engineers updated execution databases inside the ERP while commercial managers relied on hardcopy contract files, cost-escalation claims were missing standard CPWD and proprietary GCC price adjustment index parameters, causing massive unbilled outlays.</p>
      
      <h3>The Alfred Solution</h3>
      <ul>
        <li><strong>SAP ERP Integration</strong>: Alfred connected directly to MEIL's SAP procurement and execution pipelines via custom read-only connectors.</li>
        <li><strong>Live Obligation Feeds</strong>: Site activity logs inside ERP were continuously parsed against contract triggers. When a contractor mobilized equipment for a variation order, Alfred automatically created a pending claim record in the commercial workspace.</li>
        <li><strong>Index-linked Escalation Calculations</strong>: Automatically calculated rate adjustments based on national commodity index values, drafting the required backup spreadsheets and claim formats.</li>
      </ul>
      
      <h3>Key Metrics</h3>
      <p>MEIL achieved automated tracking for over 3,000 active contract obligations, resulting in a 14% increase in the recovery of commuted price-escalation values.</p>
    `
  },
  "bondada-engineering": {
    category: "CASE STUDY",
    title: "Bondada Engineering",
    subtitle: "Pre-bid tender risk scanning and automated cost matching for telecoms & power EPC bids.",
    content: `
      <h3>Background</h3>
      <p>Bondada Engineering designs, builds, and operates telecom towers, transmission grids, and green energy infrastructure. Bidding on fast-moving telecom and power contracts meant estimating teams had to parse dozens of tenders simultaneously under tight bid deadlines.</p>
      
      <h3>The Challenge</h3>
      <p>Tenders often buried extreme risk parameters, such as 100% liquidated damages caps, unpriced material testing clauses, and immediate mobilization penalties, deep in miscellaneous appendices.</p>
      
      <h3>The Alfred Solution</h3>
      <ul>
        <li><strong>Pre-bid Risk Scanning</strong>: Alfred ingested raw tender packages, scanning for custom risk indicators, and flagged onerous liability parameters within minutes.</li>
        <li><strong>Cost Matching</strong>: Automatically mapped tender bill of quantities (BOQ) with historic item-rate databases to identify unpriced or underpriced technical specifications.</li>
        <li><strong>Risk Matrices</strong>: Compiled automatically formatted bid-risk review spreadsheets, highlighting notice deadlines and warranty terms for executive reviews.</li>
      </ul>
      
      <h3>Key Metrics</h3>
      <p>Estimating cycle time dropped by 65%, and Bondada successfully avoided three high-risk bids where hidden specifications would have triggered severe margin losses.</p>
    `
  },
  "apepdcl-discom": {
    category: "CASE STUDY",
    title: "APEPDCL DISCOM",
    subtitle: "Automating compliance tracking and document control under PM KUSUM solar schemes.",
    content: `
      <h3>Background</h3>
      <p>APEPDCL coordinates large-scale agricultural solarization and power supply infrastructure under the government's PM KUSUM initiatives, working with dozens of regional solar vendors.</p>
      
      <h3>The Challenge</h3>
      <p>Managing compliance records, land lease records, and sub-station connectivity parameters across hundreds of micro-sites was causing grid commissioning delays and vendor dispute backlogs.</p>
      
      <h3>The Alfred Solution</h3>
      <ul>
        <li><strong>Compliance Workspace</strong>: Designed a unified vendor portal where solar developers uploaded land, equipment, and connection compliance parameters.</li>
        <li><strong>AI Verification</strong>: Automatically cross-referenced submitted documents against PM KUSUM technical standards, immediately flagging non-compliant equipment parameters.</li>
        <li><strong>Milestone Triggers</strong>: Linked verified compliance checkpoints with subsidy disbursals, ensuring complete alignment between physical setup and financing parameters.</li>
      </ul>
      
      <h3>Key Metrics</h3>
      <p>Reduced solar site audit validation cycles from 45 days to 4 days, resulting in 100% on-time grid integrations and zero audit compliance exceptions.</p>
    `
  },
  "fidic-clause-20": {
    category: "TECHNICAL GUIDE",
    title: "FIDIC Clause 20 Time-Bar",
    subtitle: "How to avoid losing EOT claim rights due to strict 28-day notice rule.",
    content: `
      <h3>The Hard Rule</h3>
      <p>Under Clause 20.1 of the standard FIDIC red/yellow books, if a contractor fails to give notice of a claim within <strong>28 days</strong> of becoming aware (or when they should have become aware) of the event triggering the claim, their entitlement is legally extinguished.</p>
      
      <h3>The Common Mistakes</h3>
      <ul>
        <li><strong>Informal Notice</strong>: Relying on email conversations, site meeting minutes, or WhatsApp chats. Arbitrators regularly rule that these do not constitute formal contract notices.</li>
        <li><strong>Delayed Mapping</strong>: Failing to recognize that a subcontractor delay, utility mismatch, or delayed drawings set off the 28-day EOT clock immediately.</li>
      </ul>
      
      <h3>How to Protect Your Project</h3>
      <p>1. Establish a clear register of all site communications that could indicate variation triggers.<br/>
      2. Set automated alerts for all critical path schedule adjustments.<br/>
      3. Standardize your EOT notice format. It must explicitly state: "This is a notice under Clause 20.1..."</p>
    `
  },
  "hidden-costs": {
    category: "TECHNICAL GUIDE",
    title: "Hidden Costs in Technical Spec",
    subtitle: "How un-itemized testing parameters cost contractors millions on fixed-price tenders.",
    content: `
      <h3>The Specification Trap</h3>
      <p>In fixed-price EPC contracts, the Bill of Quantities (BOQ) frequently misses costly technical parameters specified only in the technical sections (e.g. soil testing frequencies, weld radiography percentages, and specialized vendor qualifications).</p>
      
      <h3>Typical Examples</h3>
      <p>A civil tender might specify concrete by volume in the BOQ, but bury a requirement for 100% concrete core testing in a remote laboratory within the technical specifications. The testing costs alone can account for 2-3% of the total concrete contract value, entirely wiping out contractor margins.</p>
      
      <h3>Pre-bid Checklist</h3>
      <ul>
        <li>Cross-reference every BOQ line item with the referenced technical specification section.</li>
        <li>Compile a comprehensive "Testing and Commissioning Matrix" during bidding.</li>
        <li>Include testing costs in the base rate bid parameters, or submit clear pre-bid clarifications.</li>
      </ul>
    `
  },
  "tender-vs-technical": {
    category: "TECHNICAL GUIDE",
    title: "Tender vs Technical Mismatch",
    subtitle: "Which document takes priority when volume specifications contradict each other?",
    content: `
      <h3>The Hierarchy of Documents</h3>
      <p>When discrepancies occur between drawings, the Bill of Quantities, and technical specifications, standard contracts contain an "Order of Precedence" clause to resolve the mismatch.</p>
      
      <h3>CPWD and FIDIC Comparisons</h3>
      <p>Under CPWD General Conditions of Contract, the specifications take priority over the drawings, while the BOQ usually takes precedence over the specifications for rates. Under FIDIC, the Technical Specification generally ranks higher than the drawings, but drawings take precedence for spatial coordination. A mismatch can easily trigger design rework and pricing disputes.</p>
      
      <h3>Resolution Strategy</h3>
      <p>Identify mismatches early through automated pre-bid document cross-referencing. Raise formal requests for information (RFI) to clarify contradictions before committing to material procurement.</p>
    `
  },
  "eot-notice-guide": {
    category: "TECHNICAL GUIDE",
    title: "How to file an EOT notice",
    subtitle: "A step-by-step drafting playbook for project managers to construct a solid factual trial.",
    content: `
      <h3>Filing a Solid EOT Claim</h3>
      <p>An Extension of Time notice is a formal legal instrument. It must be prepared methodically to stand up to owner scrutiny, independent disputes boards, or arbitration.</p>
      
      <h3>Step-by-Step Playbook</h3>
      <p><strong>Step 1: Identify the Triggering Event</strong><br/>Define the exact cause (e.g., late drawing issuance, extreme weather, site handover delay) and map it to a specific contract clause.</p>
      <p><strong>Step 2: Establish the Impact Window</strong><br/>Link the delay directly to your Primavera P6 critical path schedule. If it does not affect the critical path, you generally cannot claim EOT (only disruption costs).</p>
      <p><strong>Step 3: Draft the Formal Notice</strong><br/>Include the EOT contract reference, trigger date, factual description, and impact details. Avoid speculative language.</p>
      <p><strong>Step 4: Keep Contemporaneous Records</strong><br/>Document everything: weather charts, drawing receipt logs, site photographs, labor reports, and correspondence.</p>
    `
  },
  "admin-failure": {
    category: "TECHNICAL GUIDE",
    title: "Contract Administration Failure",
    subtitle: "A root-cause breakdown of why major margins collapse on infrastructure ventures.",
    content: `
      <h3>Why Margins Collapse</h3>
      <p>In large infrastructure projects, margins rarely fail due to a single catastrophic event. Instead, they leak slowly through dozens of small, un-administered contract obligations and site variations.</p>
      
      <h3>Primary Root Causes</h3>
      <ul>
        <li><strong>Factual Record Gaps</strong>: Failing to maintain daily site records, leaving the contractor with zero evidence to support EOT claims during dispute hearings.</li>
        <li><strong>Informal Variation Orders</strong>: Executing site changes requested verbally by owner representatives without securing a written variation order or rate approval.</li>
        <li><strong>Untracked Notice Deadlines</strong>: Missing notice windows for weather impacts, material delays, or drawing delays, resulting in EOT claim forfeitures.</li>
      </ul>
      
      <h3>Mitigation Plan</h3>
      <p>Deploy digital contract compliance tools that automatically monitor site databases and link physical activities with contract obligation tracking.</p>
    `
  },
  "alfred-vs-standard": {
    category: "COMPARISON",
    title: "Alfred vs Standard Project Tools",
    subtitle: "Why general project tools fail at contract obligation tracking.",
    content: `
      <h3>The Difference</h3>
      <p>Standard project management tools (like Jira, MS Project, or Trello) are built for general task collaboration, design tasks, or software sprint planning. They lack the specialized architecture required for heavy capital contract compliance.</p>
      
      <h3>Key Limitations of Standard Tools</h3>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Standard Project Tools</th>
            <th>Alfred Platform</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Contract Parsing</td>
            <td>Manual entry only</td>
            <td>Automated AI obligation extraction</td>
          </tr>
          <tr>
            <td>Notice Windows</td>
            <td>Static calendar reminders</td>
            <td>Dynamic, index-linked time-bar alerts</td>
          </tr>
          <tr>
            <td>Critical Path Sync</td>
            <td>Separate, manual Gantt updates</td>
            <td>Direct Primavera P6 / MS Project integrations</td>
          </tr>
          <tr>
            <td>Legal Frameworks</td>
            <td>Generic tasks</td>
            <td>Pre-mapped CPWD, FIDIC, and NHAI playbooks</td>
          </tr>
        </tbody>
      </table>
      
      <h3>Summary</h3>
      <p>Using generic collaboration tools to administer a $100M infrastructure project is like using a calculator to run an enterprise ERP; it leaves you highly exposed to legal risks and margin leakage.</p>
    `
  },
  "alfred-vs-legal-ai": {
    category: "COMPARISON",
    title: "Alfred vs Corporate Contract-Review Tools",
    subtitle: "Construction-specific parameters vs standard legal document review.",
    content: `
      <h3>General Legal AI vs Alfred</h3>
      <p>General-purpose corporate contract review systems (e.g. Kira, Luminance) are optimized for mergers & acquisitions, corporate due diligence, and leasing review. They cannot track day-to-day site operations or schedule delays.</p>
      
      <h3>Where Legal AI Falls Short in EPC</h3>
      <p>Corporate legal tools read contracts as static text blocks. They do not understand physical construction dependencies, weather impact margins, commodity rate indexes, or the relationship between drawing releases and critical paths.</p>
      
      <h3>Alfred's Specialized Focus</h3>
      <p>Alfred was built specifically for heavy physical infrastructure. It doesn't just read the text; it links contract clauses with engineering data, Primavera P6 nodes, and daily site records to preserve project margins in real time.</p>
    `
  },
  "alfred-vs-spreadsheets": {
    category: "COMPARISON",
    title: "Alfred vs Spreadsheets",
    subtitle: "Why manual obligation registers leak 15%+ notice window deadlines.",
    content: `
      <h3>The Excel Vulnerability</h3>
      <p>Almost every EPC project uses a manual Excel spreadsheet to track contract obligations and EOT notices. While flexible, spreadsheets are static, disconnected, and highly prone to human error.</p>
      
      <h3>Why Spreadsheets Leak Margin</h3>
      <ul>
        <li><strong>Silod Information</strong>: The Excel sheet lives on a commercial manager's hard drive, disconnected from site engineering databases.</li>
        <li><strong>No Proactive Alerts</strong>: Excel cannot notify teams when a critical 28-day notice window is expiring based on an ERP-recorded equipment delay.</li>
        <li><strong>Version Chaos</strong>: Different departments operate on outdated versions of the obligation register, leading to communication breakdowns.</li>
      </ul>
      
      <h3>The Digital Upgrade</h3>
      <p>By moving from spreadsheets to Alfred's active compliance workspace, companies ensure that notices and obligation progress are updated, verified, and alerted automatically.</p>
    `
  },
  "procore-alternatives": {
    category: "COMPARISON",
    title: "Procore Alternatives",
    subtitle: "A custom comparison focusing on localized contract administration for India and GCC.",
    content: `
      <h3>Procore vs Alfred in India & Middle East</h3>
      <p>Procore is an outstanding site management tool optimized for US-centric general building standards. However, it requires heavy customization and fails to align with localized GCC and Indian EPC project delivery models.</p>
      
      <h3>Localized Gaps in General PM Software</h3>
      <ul>
        <li><strong>Contract Templates</strong>: General tools lack built-in playbooks for CPWD General Conditions of Contract, NHAI concession parameters, or regional Middle Eastern public works terms.</li>
        <li><strong>Forward Deployment</strong>: Global PM software relies entirely on self-service or remote support, whereas Alfred deploys dedicated Forward-Deployed Engineers (FDEs) on-site to build localized rules.</li>
        <li><strong>Sovereign Hosting</strong>: General PM platforms host all documents on shared US cloud databases, missing GCC and Indian national data residency compliance rules.</li>
      </ul>
    `
  }
}

function Blogs() {
  const [selectedArticleKey, setSelectedArticleKey] = useState(null)
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => {
        setIsSubscribed(false)
      }, 5000)
    }
  }

  // Close modal when pressing ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedArticleKey(null)
        setIsSubscribeModalOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const selectedArticle = selectedArticleKey ? articleDetails[selectedArticleKey] : null

  return (
    <div className="bg-[#F4F4F7] min-h-screen text-[#6B6B74] font-primary text-left selection:bg-[#FFC20E]/30 relative overflow-x-hidden">
      <SEO 
        title="Resources & Case Studies" 
        description="Field notes on contracts, claims, and commercial certainty. Practical insights for construction buyers, commercial managers, and bid leaders."
      />
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-24 px-6 sm:px-12 md:px-16 lg:px-20 relative z-10">
        {/* Top ambient radial yellow glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none z-0" 
          style={{
            background: 'radial-gradient(circle at center, rgba(255, 194, 14, 0.05), transparent 70%)'
          }}
        />

        <div className="max-w-[1280px] mx-auto relative z-10">
          
          {/* Header Block */}
          <div className="text-center flex flex-col gap-3 max-w-3xl mx-auto mb-16">
            {/* Outline Tag */}
            <div className="w-fit bg-[#FFF6D6] text-[#B88500] text-[10px] font-mono font-bold tracking-widest px-3.5 py-1 rounded-full uppercase border border-[#FFC20E]/10 mx-auto">
              THE CRITICAL PATH
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-[38px] lg:text-[40px] font-bold text-[#1A3A5C] leading-[1.25] tracking-tight m-0 mt-2 max-w-2xl mx-auto">
              Field notes on contracts, <br />
              claims, and commercial certainty.
            </h1>

            {/* Subtitle */}
            <p className="text-[#5A5A62] text-xs sm:text-[13.5px] leading-relaxed m-0 mt-1 max-w-xl mx-auto font-normal">
              Practical insights for construction buyers, commercial managers, and bid leaders in India and the Middle East.
            </p>
          </div>

          {/* The Critical Path Card */}
          <div className="bg-[#1A3A5C] text-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-lg relative overflow-hidden mb-16 w-full text-left border border-[#2D4D70]/20 max-w-[1280px] mx-auto">
            {/* Concentric radar line curves on the right */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none hidden md:block overflow-hidden">
              <svg className="absolute right-0 top-1/2 -translate-y-1/2 h-[200%] w-[200%] opacity-15" viewBox="0 0 200 400" fill="none">
                <circle cx="200" cy="200" r="140" stroke="#FFFFFF" strokeWidth="1" />
                <circle cx="200" cy="200" r="180" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="200" cy="200" r="220" stroke="#FFFFFF" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="260" stroke="#FFC20E" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="300" stroke="#FFC20E" strokeWidth="2" />
              </svg>
            </div>

            <div className="relative z-10 max-w-2xl flex flex-col gap-5">
              {/* Tag Line with Icon */}
              <div className="flex items-center gap-2.5">
                <img src={alfredLogo} alt="Alfred Logo" className="w-6 h-6 rounded-lg shrink-0" />
                <span className="text-[10px] font-mono tracking-widest font-bold text-[#FFC20E] uppercase">
                  THE CRITICAL PATH &middot; PUBLISHED BY ALFRED
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-white leading-[1.25] tracking-tight m-0">
                The weekly briefing for the people running <span className="text-[#FFC20E]">major projects</span>.
              </h2>

              {/* Description */}
              <p className="text-[#A5B9D0] text-sm md:text-[15px] leading-relaxed m-0 max-w-xl font-normal">
                Every week, The Critical Path distills what Alfred sees across thousands of contracts and schedules into one clear read. Schedule risk, procurement, claims, and the early warning signs that decide how a project lands. Written for the teams delivering major infrastructure and EPC work.
              </p>

              {/* Subscribe Button */}
              <div className="mt-2">
                <button
                  onClick={() => window.open('https://getcriticalpath.substack.com/', '_blank')}
                  className="bg-[#FFC20E] hover:bg-[#FFE066] active:scale-95 text-[#1A3A5C] font-bold py-2.5 px-6 rounded-lg text-sm transition-all duration-200 cursor-pointer border-none shadow-sm font-sans"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* The Critical Path Archive Section */}
          <div className="mb-16 w-full max-w-[1280px] mx-auto">
            <div className="flex justify-between items-center pb-3 border-b border-[#DDDDE6] mb-6">
              <div className="flex items-center gap-2">
                {/* Yellow Document Icon */}
                <svg className="w-4 h-4 text-[#FFC20E] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-bold text-[#1A3A5C] text-xs sm:text-[13px] tracking-wider uppercase">
                  THE CRITICAL PATH ARCHIVE
                </span>
              </div>
              <a 
                href="https://getcriticalpath.substack.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#1A3A5C] hover:text-[#2B5F96] hover:underline text-xs font-semibold flex items-center gap-1 transition-colors no-underline"
              >
                <span>Visit Substack</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "The Change Order That Became a Claim",
                  url: "https://getcriticalpath.substack.com/p/change-order-that-became-a-claim?r=7alpkf&utm_campaign=post&utm_medium=web&triedRedirect=true"
                },
                {
                  title: "Construction Project Risk Map",
                  url: "https://getcriticalpath.substack.com/p/construction-project-risk-map?r=7alpkf&utm_campaign=post&utm_medium=web&triedRedirect=true"
                },
                {
                  title: "Email Threads: The Unread Risk Register",
                  url: "https://getcriticalpath.substack.com/p/email-threads-unread-risk-register?r=7alpkf&utm_campaign=post&utm_medium=web&triedRedirect=true"
                },
                {
                  title: "Obligations Outlive the People Who Make Them",
                  url: "https://getcriticalpath.substack.com/p/obligations-outlive-the-people-who?r=7alpkf&utm_campaign=post&utm_medium=web&triedRedirect=true"
                },
                {
                  title: "Decision Latency: Why Acting on a Claim Takes So Long",
                  url: "https://getcriticalpath.substack.com/p/decision-latency-why-acting-on-a?r=7alpkf&utm_campaign=post&utm_medium=web&triedRedirect=true"
                },
                {
                  title: "Construction Cost Overrun: The 5 Causes",
                  url: "https://getcriticalpath.substack.com/p/construction-cost-overrun-the-5-causes?r=7alpkf&utm_campaign=post&utm_medium=web&triedRedirect=true"
                },
                {
                  title: "What Your WIP is Really Telling You",
                  url: "https://getcriticalpath.substack.com/p/what-your-wip-is-really-telling-you?r=7alpkf&utm_campaign=post&utm_medium=web&triedRedirect=true"
                }
              ].map((article, idx) => (
                <a 
                  key={idx}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                  className="bg-white border border-[#DDDDE6] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#1A3A5C]/20 hover:scale-[1.02] cursor-pointer flex flex-col items-start text-left no-underline hover:no-underline group min-h-[95px] justify-start gap-3"
                >
                  <div className="flex justify-between items-center w-full">
                    {/* Document Icon - Turns yellow on hover */}
                    <svg 
                      className="w-4 h-4 text-slate-400 group-hover:text-[#FFC20E] transition-all duration-300 shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {/* External Link Icon - Only visible on hover */}
                    <svg 
                      className="w-3.5 h-3.5 text-[#1A3A5C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={2.2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <h4 
                    style={{ textDecoration: 'none' }}
                    className="font-bold text-[#1A3A5C] group-hover:text-[#2B5F96] text-xs sm:text-[13px] leading-snug m-0 transition-colors no-underline hover:no-underline select-none"
                  >
                    {article.title}
                  </h4>
                </a>
              ))}
            </div>
          </div>

          {/* Grid Layout of Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start w-full">
            
            {/* Column 1: Case Studies */}
            <div className="bg-white border border-[#DDDDE6] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-sm hover:border-[#1A3A5C]/20 hover:shadow-md transition-all duration-300 min-h-[500px]">
              <div className="flex items-center gap-2.5 pb-2 border-b border-[#DDDDE6]/50">
                {/* Book Icon */}
                <div className="w-8 h-8 rounded-lg bg-[#FFF6D6] flex items-center justify-center text-[#B88500] shrink-0 border border-[#FFC20E]/10">
                  <svg className="w-4 h-4 text-[#B88500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18 18.246 18.5 16.5 18.5c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#1A3A5C] text-xs sm:text-[13px] tracking-widest uppercase m-0">
                  CASE STUDIES
                </h3>
              </div>

              {/* Items List */}
              <div className="flex flex-col gap-5">
                {[
                  { key: "zetwerk-epc", title: "Zetwerk EPC", desc: "Analyzing milestone invoicing and FIDIC EOT letter drafting across 20+ live project sites." },
                  { key: "meil-infrastructures", title: "MEIL Infrastructures", desc: "First-of-its-kind ERP integrated contract tracking on Tier-1 Indian EPC operations." },
                  { key: "bondada-engineering", title: "Bondada Engineering", desc: "Pre-bid tender risk scanning and automated cost matching for telecoms & power EPC bids." },
                  { key: "apepdcl-discom", title: "APEPDCL DISCOM", desc: "Automating compliance tracking and document control under PM KUSUM solar schemes.", hasArrow: true }
                ].map((item) => (
                  <div key={item.key} className="border-b border-[#DDDDE6]/40 pb-4 last:border-0 last:pb-0 text-left">
                    <button
                      onClick={() => setSelectedArticleKey(item.key)}
                      className="bg-transparent border-none p-0 font-bold text-[#1A3A5C] hover:text-[#2B5F96] hover:underline transition-colors duration-200 cursor-pointer text-xs sm:text-[13.5px] leading-snug mb-1 inline-flex items-center gap-1"
                    >
                      {item.title} {item.hasArrow && <span className="text-[#FFC20E] shrink-0 font-semibold font-sans">→</span>}
                    </button>
                    <p className="text-[#5A5A62] text-xs sm:text-[12.5px] leading-relaxed m-0 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Technical Guides */}
            <div className="bg-white border border-[#DDDDE6] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-sm hover:border-[#1A3A5C]/20 hover:shadow-md transition-all duration-300 min-h-[500px]">
              <div className="flex items-center gap-2.5 pb-2 border-b border-[#DDDDE6]/50">
                {/* Academic Cap Icon */}
                <div className="w-8 h-8 rounded-lg bg-[#FFF6D6] flex items-center justify-center text-[#B88500] shrink-0 border border-[#FFC20E]/10">
                  <svg className="w-4 h-4 text-[#B88500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 14v7" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#1A3A5C] text-xs sm:text-[13px] tracking-widest uppercase m-0">
                  TECHNICAL GUIDES
                </h3>
              </div>

              {/* Items List */}
              <div className="flex flex-col gap-5">
                {[
                  { key: "fidic-clause-20", title: "FIDIC Clause 20 Time-Bar", desc: "How to avoid losing EOT claim rights due to strict 28-day notice rule." },
                  { key: "hidden-costs", title: "Hidden Costs in Technical Spec", desc: "How un-itemized testing parameters cost contractors millions on fixed-price tenders." },
                  { key: "tender-vs-technical", title: "Tender vs Technical Mismatch", desc: "Which document takes priority when volume specifications contradict each other?" },
                  { key: "eot-notice-guide", title: "How to file an EOT notice", desc: "A step-by-step drafting playbook for project managers to construct a solid factual trial." },
                  { key: "admin-failure", title: "Contract Administration Failure", desc: "A root-cause breakdown of why major margins collapse on infrastructure ventures." }
                ].map((item) => (
                  <div key={item.key} className="border-b border-[#DDDDE6]/40 pb-4 last:border-0 last:pb-0 text-left">
                    <button
                      onClick={() => setSelectedArticleKey(item.key)}
                      className="bg-transparent border-none p-0 font-bold text-[#1A3A5C] hover:text-[#2B5F96] hover:underline transition-colors duration-200 cursor-pointer text-xs sm:text-[13.5px] leading-snug mb-1 text-left"
                    >
                      {item.title}
                    </button>
                    <p className="text-[#5A5A62] text-xs sm:text-[12.5px] leading-relaxed m-0 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Comparisons */}
            <div className="bg-white border border-[#DDDDE6] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-sm hover:border-[#1A3A5C]/20 hover:shadow-md transition-all duration-300 min-h-[500px]">
              <div className="flex items-center gap-2.5 pb-2 border-b border-[#DDDDE6]/50">
                {/* Clipboard List Icon */}
                <div className="w-8 h-8 rounded-lg bg-[#FFF6D6] flex items-center justify-center text-[#B88500] shrink-0 border border-[#FFC20E]/10">
                  <svg className="w-4 h-4 text-[#B88500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#1A3A5C] text-xs sm:text-[13px] tracking-widest uppercase m-0">
                  COMPARISONS
                </h3>
              </div>

              {/* Items List */}
              <div className="flex flex-col gap-5">
                {[
                  { key: "alfred-vs-standard", title: "Alfred vs Standard Project Tools", desc: "Why general project tools fail at contract obligation tracking." },
                  { key: "alfred-vs-legal-ai", title: "Alfred vs Corporate Contract-Review Tools", desc: "Construction-specific parameters vs standard legal document review." },
                  { key: "alfred-vs-spreadsheets", title: "Alfred vs Spreadsheets", desc: "Why manual obligation registers leak 15%+ notice window deadlines." },
                  { key: "procore-alternatives", title: "Procore Alternatives", desc: "A custom comparison focusing on localized contract administration for India and GCC." }
                ].map((item) => (
                  <div key={item.key} className="border-b border-[#DDDDE6]/40 pb-4 last:border-0 last:pb-0 text-left">
                    <button
                      onClick={() => setSelectedArticleKey(item.key)}
                      className="bg-transparent border-none p-0 font-bold text-[#1A3A5C] hover:text-[#2B5F96] hover:underline transition-colors duration-200 cursor-pointer text-xs sm:text-[13.5px] leading-snug mb-1 text-left"
                    >
                      {item.title}
                    </button>
                    <p className="text-[#5A5A62] text-xs sm:text-[12.5px] leading-relaxed m-0 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Monthly Intel Briefing Subscription Card */}
          <div className="bg-[#1A3A5C] text-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg relative overflow-hidden mt-16 w-full text-left flex flex-col md:flex-row justify-between items-center gap-8 border border-[#2D4D70]/20 max-w-[1280px] mx-auto">
            {/* Ambient subtle background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
            
            <div className="flex flex-col gap-1 relative z-10 max-w-xl">
              {/* Gold Eyebrow */}
              <span className="text-[10px] font-mono tracking-widest font-bold text-[#FFC20E] uppercase mb-1">
                MONTHLY INTEL BRIEFING
              </span>
              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight m-0 mb-1">
                Join 1,400+ Construction Executives
              </h2>
              {/* Description */}
              <p className="text-[#94A9C0] text-xs sm:text-[13px] leading-relaxed m-0">
                Receive one sharp contract advisory letter per month. We analyze live rulings, FIDIC dispute trends, and CPWD GCC rate-renegotiation playbooks. Strictly zero spam.
              </p>
            </div>

            {/* Newsletter form */}
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0 relative z-10">
              <input 
                type="email" 
                placeholder="Enter your work email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#12283E] text-white border border-[#2D4D70] rounded-lg px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#FFC20E] transition-all min-w-[240px] placeholder:text-[#657F9B] font-sans"
                required
              />
              <button 
                type="submit"
                className="bg-[#FFC20E] text-[#1A3A5C] hover:bg-[#FFE066] font-bold px-5 py-2.5 rounded-lg text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border-none shadow-sm active:scale-95"
              >
                <span>Subscribe</span>
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </form>

            {/* Success toast notification */}
            <AnimatePresence>
              {isSubscribed && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-3 right-6 bg-[#145C35] text-white text-[11px] font-mono px-4 py-1.5 rounded-lg border border-emerald-500/20 shadow-md flex items-center gap-2 z-20"
                >
                  <svg className="w-3.5 h-3.5 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Subscribed! Check your inbox soon.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </main>

      {/* Reader Modal Overlay */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
            {/* Modal backdrop blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticleKey(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal content box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white border border-[#DDDDE6] rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl relative z-10 flex flex-col p-6 sm:p-8"
            >
              {/* Header inside modal */}
              <div className="flex justify-between items-start gap-4 pb-4 border-b border-[#DDDDE6]/50 text-left">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-mono font-bold tracking-widest text-[#B88500] uppercase">
                    {selectedArticle.category}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1A3A5C] m-0">
                    {selectedArticle.title}
                  </h2>
                  <p className="text-[#5A5A62] text-xs sm:text-[13px] leading-relaxed m-0 mt-0.5 max-w-xl">
                    {selectedArticle.subtitle}
                  </p>
                </div>

                {/* Close button */}
                <button 
                  onClick={() => setSelectedArticleKey(null)}
                  className="bg-transparent border-none cursor-pointer p-1 text-[#6B6B74] hover:text-[#1A3A5C] transition-colors"
                  aria-label="Close reader"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Body inside modal */}
              <div 
                className="prose prose-sm prose-slate max-w-none text-[#5A5A62] leading-relaxed text-xs sm:text-sm pt-6 text-left"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />

              {/* Footer action inside modal */}
              <div className="border-t border-[#DDDDE6]/50 pt-6 mt-6 flex justify-end gap-3 shrink-0">
                <button 
                  onClick={() => setSelectedArticleKey(null)}
                  className="bg-white border border-[#DDDDE6] text-[#3A3A3F] hover:bg-[#F4F4F7] px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-colors duration-200"
                >
                  Close Reader
                </button>
                <button 
                  onClick={() => {
                    setSelectedArticleKey(null)
                    window.open('/demo', '_blank')
                  }}
                  className="bg-[#1A3A5C] text-white hover:bg-[#2B5F96] px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-colors duration-200 shadow-sm"
                >
                  Request Technical Briefing
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Subscribe Modal Overlay */}
      <AnimatePresence>
        {isSubscribeModalOpen && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
            {/* Modal backdrop blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSubscribeModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal content box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-[#1A3A5C] text-white border border-[#2D4D70]/40 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative z-10 flex flex-col p-6 sm:p-8"
            >
              {/* Close button */}
              <button 
                onClick={() => setIsSubscribeModalOpen(false)}
                className="absolute top-4 right-4 bg-transparent border-none cursor-pointer p-1 text-[#94A9C0] hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col gap-4 text-left">
                {/* Logo and Tag */}
                <div className="flex items-center gap-2">
                  <img src={alfredLogo} alt="Alfred Logo" className="w-5 h-5 rounded-md shrink-0" />
                  <span className="text-[9px] font-mono tracking-widest font-bold text-[#FFC20E] uppercase">
                    THE CRITICAL PATH
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white m-0">
                  Subscribe to The Critical Path
                </h3>
                
                <p className="text-[#94A9C0] text-xs sm:text-sm leading-relaxed m-0">
                  Join 1,400+ construction executives. Receive one sharp contract advisory letter per month. Strictly zero spam.
                </p>

                <form onSubmit={(e) => {
                  e.preventDefault();
                  setIsSubscribeModalOpen(false);
                  setIsSubscribed(true);
                  setTimeout(() => {
                    setIsSubscribed(false);
                  }, 5000);
                }} className="flex flex-col gap-3 mt-2 w-full">
                  <input 
                    type="email" 
                    placeholder="Enter your work email" 
                    className="bg-[#12283E] text-white border border-[#2D4D70] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FFC20E] transition-all placeholder:text-[#657F9B] font-sans w-full"
                    required
                    autoFocus
                  />
                  <button 
                    type="submit"
                    className="bg-[#FFC20E] text-[#1A3A5C] hover:bg-[#FFE066] font-bold py-3 rounded-lg text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border-none shadow-sm active:scale-95"
                  >
                    <span>Subscribe</span>
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}

export default Blogs
