import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import PostContractWorkflow from '../components/PostContractWorkflow'


// ─── Fade-up animation wrapper ────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Image Placeholder ─────────────────────────────────────────────────────────
function ImgPlaceholder({ label, aspect = 'aspect-[4/3]', className = '' }) {
  return (
    <div
      className={`w-full ${aspect} rounded-2xl border-2 border-dashed border-[#DDDDE6] bg-[#F8F8FA] flex flex-col items-center justify-center gap-3 text-[#ADADB8] select-none ${className}`}
    >
      <svg className="w-8 h-8 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-center px-4">
        {label}
      </span>
    </div>
  )
}

// ─── Simple phase tab switcher ────────────────────────────────────────────────
function PhaseTabs({ active, onChange }) {
  const tabs = ['Pre-Contract', 'Post-Contract']
  return (
    <div className="flex items-center gap-1">
      {tabs.map((tab, i) => (
        <React.Fragment key={tab}>
          <button
            onClick={() => onChange(tab)}
            className={`text-sm font-semibold transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer ${
              active === tab
                ? 'text-[#1A3A5C]'
                : 'text-[#ADADB8] hover:text-[#6B6B74]'
            }`}
          >
            {tab}
          </button>
          {i < tabs.length - 1 && (
            <span className="text-[#DDDDE6] mx-2 text-sm select-none">›</span>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

// ─── Feature Row (alternating) ─────────────────────────────────────────────────
function FeatureRow({ tag, title, description, bullets, placeholder, reverse = false, delay = 0 }) {
  return (
    <FadeUp delay={delay} className="w-full">
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}>

        {/* Copy side */}
        <div className="flex-1 flex flex-col gap-4 text-left">
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#B88500] uppercase">
            {tag}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#1A3A5C] leading-[1.3] m-0">
            {title}
          </h3>
          <p className="text-[#5A5A62] text-sm leading-relaxed m-0">
            {description}
          </p>
          {bullets && bullets.length > 0 && (
            <ul className="flex flex-col gap-2.5 mt-1 list-none p-0 m-0">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[#5A5A62]">
                  <span className="mt-1 w-4 h-4 rounded-full bg-[#E4F3EC] border border-[#145C35]/20 flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-[#145C35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>
                    {b.bold && <strong className="text-[#1A3A5C] font-semibold">{b.bold}: </strong>}
                    {b.text}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Image side */}
        <div className="flex-1 w-full">
          <ImgPlaceholder label={placeholder} aspect="aspect-[16/10]" />
        </div>

      </div>
    </FadeUp>
  )
}

// ─── Feature data ──────────────────────────────────────────────────────────────

const preContractFeatures = [
  {
    tag: 'AI Copilot · Pre-contract',
    title: 'Scan every tender for hidden risk — before you price it.',
    description:
      'Alfred reads the entire tender package against standard codes (CPWD, FIDIC, NEC) in minutes. It flags onerous payment terms, buried testing obligations, and penalty schedules that estimators routinely miss.',
    bullets: [
      { bold: 'Clause-level risk flags', text: 'Surfaced with exact section references and estimated cost impact.' },
      { bold: 'Pre-bid query drafts', text: 'Auto-generated ready-to-send clarification letters.' },
      { bold: 'Code comparison', text: 'Checks against CPWD GCC, FIDIC Red/Yellow, and your own templates.' },
    ],
    placeholder: 'Bid Risk Analysis — Screenshot Placeholder',
  },
  {
    tag: 'DPRs · Pre-contract',
    title: 'Daily progress reports — ingested, indexed, and linked to obligations.',
    description:
      "Your site team keeps writing on paper or in spreadsheets. Alfred reads both. Handwritten DPRs are OCR\u2019d, timestamped, and mapped directly to contract clauses and notice windows.",
    bullets: [
      { bold: 'Handwriting OCR', text: 'Processes scanned DPR images and delivery challans at 99%+ accuracy.' },
      { bold: 'Automatic event tagging', text: 'Rain delays, idle equipment, and access issues flagged as claim evidence.' },
      { bold: 'Notice window linkage', text: 'Each event cross-referenced with active FIDIC/CPWD time-bars.' },
    ],
    placeholder: 'DPR OCR Ingestion — Screenshot Placeholder',
    reverse: true,
  },
  {
    tag: 'DocuHub · Pre-contract',
    title: 'One structured document home — from tender to award.',
    description:
      'DocuHub is Alfred\u2019s built-in construction document management system. No configuration required on Day 1. Upload any file — PDF tender docs, drawings, BOQ sheets — and Alfred automatically OCRs, indexes, and extracts obligations.',
    bullets: [
      { bold: 'Schema-guided folders', text: 'Tenders, drawings, specs, DPRs — each auto-filed in the right place.' },
      { bold: 'Continuous extraction', text: 'New uploads trigger immediate obligation and clause extraction.' },
      { bold: 'Enterprise alternative', text: 'Already using Aconex or SharePoint? Alfred connects via secure webhooks.' },
    ],
    placeholder: 'DocuHub File Explorer — Screenshot Placeholder',
  },
]

const postContractFeatures = [
  {
    tag: 'AI Copilot · Post-contract',
    title: 'Never miss a notice window again.',
    description:
      'Alfred watches every live contract obligation and counts down against your site activity. When a delay event occurs in a DPR but no notice has been filed, Alfred fires an alert and drafts the notice for your review.',
    bullets: [
      { bold: 'Obligation tracking', text: 'FIDIC Clause 20.1 and equivalents monitored 24/7.' },
      { bold: 'Auto-drafted notices', text: 'EOT requests and cost notices compiled with site evidence attached.' },
      { bold: 'Bid-to-execution handoff', text: 'Pre-bid mitigations flow automatically into live operational trackers.' },
    ],
    placeholder: 'Obligation Monitor — Screenshot Placeholder',
  },
  {
    tag: 'Bid Review · Post-contract',
    title: "Compare what you bid against what's happening on site.",
    description:
      'Alfred maps your winning bid assumptions against live site data. Scope changes, unpriced variations, and instruction-driven overwork are caught early — before they eat your margin silently.',
    bullets: [
      { bold: 'Variation identification', text: 'Instructions reconciled against the awarded BOQ in real time.' },
      { bold: 'Schedule vs baseline', text: 'P6 XER files ingested and mapped to clause entitlements.' },
      { bold: 'Claim dossier assembly', text: 'Supporting documents and site evidence compiled automatically.' },
    ],
    placeholder: 'Bid Review Dashboard — Screenshot Placeholder',
    reverse: true,
  },
  {
    tag: 'DocuHub · Post-contract',
    title: 'Every letter, notice, and instruction — tracked and linked.',
    description:
      'Post-award, DocuHub becomes your single record of contractual correspondence. Alfred links incoming client instructions, outgoing EOT requests, and cost notices to their exact clause and flags unanswered letters.',
    bullets: [
      { bold: 'Full correspondence history', text: 'Incoming and outgoing notices tracked chronologically.' },
      { bold: 'Unanswered letter alerts', text: 'Outstanding client responses flagged before deadlines.' },
      { bold: 'LD early warning', text: 'Liquidated damages exposure calculated from active schedule data.' },
    ],
    placeholder: 'Post-Contract DocuHub — Screenshot Placeholder',
  },
  {
    tag: 'Mobile App · Post-contract',
    title: 'Site teams submit DPRs from their phone — no paper, no lag.',
    description:
      'The Alfred mobile app lets site engineers and superintendents log daily progress, workforce numbers, and delay events directly from the field. Submissions sync instantly to the contract knowledge graph.',
    bullets: [
      { bold: 'Native mobile DPR form', text: 'Structured inputs for weather, resources, progress, and incidents.' },
      { bold: 'Photo & voice capture', text: 'Attach site photos or voice notes — transcribed automatically.' },
      { bold: 'Instant sync', text: 'Submissions trigger obligation checks in real time — no batch processing.' },
    ],
    placeholder: 'Mobile App — Screenshot Placeholder',
    reverse: true,
  },
]



// ─── Main Page ─────────────────────────────────────────────────────────────────
function Platform() {
  const navigate = useNavigate()
  const [activePhase, setActivePhase] = useState('Pre-Contract')

  return (
    <div className="bg-[#F4F4F7] min-h-screen text-[#6B6B74] font-primary selection:bg-[#FFC20E]/30 relative overflow-x-hidden">
      <SEO
        title="Product — Alfred"
        description="Alfred is your AI co-pilot for the entire contract lifecycle — from bid risk analysis to claim drafting. Explore pre-contract and post-contract features."
      />
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-24 px-6 sm:px-12 md:px-16 lg:px-20 relative z-10">

        {/* Top ambient glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none z-0"
          style={{ background: 'radial-gradient(circle at center, rgba(255,194,14,0.05), transparent 70%)' }}
        />

        <div className="max-w-5xl mx-auto relative z-10 flex flex-col gap-20">

          {/* ── Hero header ────────────────────────────────────────────── */}
          <FadeUp>
            <div className="flex flex-col gap-4 max-w-3xl">
              <div className="w-fit bg-white border border-[#FFC20E] text-[#B88500] text-[10px] font-mono font-bold tracking-widest px-3.5 py-1 rounded-full uppercase select-none">
                THE PRODUCT
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-bold leading-[1.2] tracking-tight m-0 text-[#1A3A5C]">
                One co-pilot for the whole contract.
                <br />
                <span className="text-[#2B5F96]">From the bid you're pricing to the claim you're defending.</span>
              </h1>
              <p className="text-[#5A5A62] text-sm sm:text-[15px] leading-relaxed m-0 max-w-2xl">
                Alfred sits across your entire project lifecycle — reading tenders, watching notice windows, ingesting daily site data, and drafting formal correspondence. It doesn't replace your team; it makes sure nothing slips through.
              </p>
            </div>
          </FadeUp>

          {/* ── Phase tab switcher ──────────────────────────────────── */}
          <PhaseTabs active={activePhase} onChange={setActivePhase} />

          {/* ── Feature list ────────────────────────────────────────── */}
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            {activePhase === 'Pre-Contract' ? (
              <div className="flex flex-col gap-16">
                {preContractFeatures.map((feat, i) => (
                  <FeatureRow
                    key={i}
                    {...feat}
                    reverse={feat.reverse || false}
                    delay={0}
                  />
                ))}
              </div>
            ) : (
              <PostContractWorkflow />
            )}
          </motion.div>

        </div>
      </main>

      {/* ── Bottom CTA ──────────────────────────────────────────────────── */}
      <section className="mb-20 px-6 sm:px-12 md:px-16 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border border-[#DDDDE6] rounded-[2rem] p-8 md:p-12 relative overflow-hidden shadow-sm text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] pointer-events-none"
              style={{ background: 'radial-gradient(circle at center, rgba(255,194,14,0.04), transparent 70%)' }} />
            <div className="relative z-10 flex flex-col items-center gap-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A3A5C] m-0 max-w-xl">
                See Alfred in action on a live project.
              </h2>
              <p className="text-[#5A5A62] text-sm leading-relaxed m-0 max-w-md">
                Walk through a real tender, watch obligations get tracked, and see a claim drafted — in under 30 minutes.
              </p>
              <button
                onClick={() => { navigate('/demo'); window.scrollTo(0, 0) }}
                className="bg-[#1A3A5C] text-white px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 hover:bg-[#2B5F96] active:scale-95 shadow-[0_4px_20px_rgba(26,58,92,0.18)] border-none cursor-pointer"
              >
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Platform
