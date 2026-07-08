import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// --- Import post-contract assets ---
import excelTemplateUpload from '../assets/post-contract/excel template upload.png'
import columnMappingByAlfred from '../assets/post-contract/column mapping by alfred.png'
import leadPlannerPreview from '../assets/post-contract/lead planner preview.png'
import sectionActiviesPreviw from '../assets/post-contract/section activies previw.png'
import sitePlannerPreview from '../assets/post-contract/site planner preview.png'
import mobileAppView from '../assets/post-contract/mobile app view.png'
import userEntry from '../assets/post-contract/user entry.png'
import exceptionLogging from '../assets/post-contract/exception logging.png'
import nudgesToMobileApp from '../assets/post-contract/nudges to mobile app.png'
import scmView from '../assets/post-contract/scm view.png'

// --- Web frame wrapper is removed. Direct images are used instead. ---

export default function PostContractWorkflow() {
  // --- Section 2 Slide Deck State ---
  const [s2Step, setS2Step] = useState(0)
  
  const leadPlannerSteps = [
    { title: '1. Excel Upload', desc: 'Drag and drop template', image: excelTemplateUpload },
    { title: '2. Column Mapping', desc: 'AI maps columns automatically', image: columnMappingByAlfred },
    { title: '3. Preview & Validate', desc: 'Review activities list', image: sectionActiviesPreviw },
    { title: '4. WBS Dashboard', desc: 'Published structure active', image: leadPlannerPreview }
  ]

  const nextS2Step = () => {
    setS2Step((prev) => (prev + 1) % leadPlannerSteps.length)
  }

  const prevS2Step = () => {
    setS2Step((prev) => (prev - 1 + leadPlannerSteps.length) % leadPlannerSteps.length)
  }

  return (
    <div className="flex flex-col gap-28 py-8">

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 1: From Planning to Verified Progress (Overview)
          ───────────────────────────────────────────────────────────────── */}
      <section className="flex flex-col gap-10 text-center">
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-[#B88500] text-[10px] font-mono font-bold tracking-widest uppercase">
            <span>01 / Overview</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A3A5C] leading-tight m-0">
            Every activity follows a verified execution pipeline—from template creation to HQ-approved progress.
          </h2>
          <p className="text-[#5A5A62] text-[15px] leading-relaxed m-0">
            Alfred replaces scattered emails and spreadsheets with a single, continuous pipeline where site data flows seamlessly across roles, creating a single immutable version of truth.
          </p>
        </div>

        {/* Horizontal Pipeline Grid */}
        <div className="bg-white border border-[#DDDDE6] rounded-[2rem] p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            {[
              { role: 'Lead Planner', desc: 'Uploads BOQ & sets WBS template' },
              { role: 'Site Planner', desc: 'Assigns tasks & collates reports' },
              { role: 'Field Engineer', desc: 'Logs actuals & offline syncs' },
              { role: 'Planner Review', desc: 'Inspects exceptions & flags' },
              { role: 'SCM Verification', desc: 'Audits material reconciliation' },
              { role: 'AI Analytics', desc: 'Secures claims & locks dashboards' },
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-3 rounded-xl border border-[#DDDDE6]/50 bg-[#F8F8FA] relative">
                <span className="text-xs font-bold text-[#B88500] font-mono mb-2">0{idx + 1}</span>
                <span className="text-xs font-bold text-[#1A3A5C] font-mono block mb-1">{step.role}</span>
                <span className="text-[10px] text-[#6B6B74] leading-snug">{step.desc}</span>
                {idx < 5 && (
                  <span className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 text-[#ADADB8] text-sm select-none z-10 font-mono">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-0 h-px bg-[#DDDDE6]" />

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 2: Lead Planner (HQ Setup - With Interactive Slider)
          ───────────────────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center font-sans">
        {/* Copy Column */}
        <div className="lg:col-span-5 flex flex-col gap-5 text-left">
          <div className="flex items-center gap-2 text-[#B88500] text-[10px] font-mono font-bold tracking-widest uppercase">
            <span>02 / Lead Planner Setup</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A3A5C] leading-tight m-0">
            Initialize project WBS structure straight from Excel.
          </h2>
          <p className="text-[#5A5A62] text-[14.5px] leading-relaxed m-0">
            Setting up a complex construction project starts with the WBS sheets you already use. Upload an Excel file, and Alfred's AI maps columns, disciplines, and activity previews automatically.
          </p>

          {/* Tab Selector Stepper Control */}
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-[10px] font-mono font-bold text-[#6B6B74] uppercase tracking-wider block">Select Configuration Steps</span>
            <div className="flex flex-col gap-1.5">
              {leadPlannerSteps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setS2Step(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between bg-transparent ${
                    s2Step === idx
                      ? 'bg-white border-[#1A3A5C] text-[#1A3A5C] font-semibold shadow-sm'
                      : 'border-[#DDDDE6]/60 text-[#6B6B74] hover:bg-[#F8F8FA] hover:text-[#3A3A3F]'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-bold leading-none">{step.title}</span>
                    <span className="text-[10.5px] text-[#8E8E93] font-normal mt-0.5">{step.desc}</span>
                  </div>
                  {s2Step === idx && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1A3A5C] animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Slider WebFrame Container */}
        <div className="lg:col-span-7 flex flex-col gap-4 relative">
          <div className="relative">
            {/* Slide */}
            <AnimatePresence mode="wait">
              <motion.div
                key={s2Step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <div className="w-full aspect-[16/10] rounded-2xl border border-[#DDDDE6] shadow-md overflow-hidden bg-white flex items-center justify-center">
                  <img 
                    src={leadPlannerSteps[s2Step].image} 
                    alt={leadPlannerSteps[s2Step].title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation Arrows */}
            {/* Left Arrow */}
            <button
              onClick={prevS2Step}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white border border-[#DDDDE6] shadow-md flex items-center justify-center text-[#1A3A5C] font-bold text-sm hover:scale-105 active:scale-95 transition-all z-20 cursor-pointer p-0"
              aria-label="Previous image"
            >
              ⟨
            </button>
            {/* Right Arrow */}
            <button
              onClick={nextS2Step}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white border border-[#DDDDE6] shadow-md flex items-center justify-center text-[#1A3A5C] font-bold text-sm hover:scale-105 active:scale-95 transition-all z-20 cursor-pointer p-0"
              aria-label="Next image"
            >
              ⟩
            </button>
          </div>

          {/* Bottom Dot indicators */}
          <div className="flex justify-center gap-2 mt-2 select-none">
            {leadPlannerSteps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setS2Step(idx)}
                className={`w-2 h-2 rounded-full p-0 cursor-pointer transition-all duration-300 border-none ${
                  s2Step === idx ? 'bg-[#1A3A5C] w-4' : 'bg-[#DDDDE6]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <hr className="border-0 h-px bg-[#DDDDE6]" />

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 3: Site Planner (Allocation & Coordination)
          ───────────────────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Visual Screenshot Column */}
        <div className="lg:col-span-7 w-full order-last lg:order-first">
          <img 
            src={sitePlannerPreview} 
            alt="Site Planner Assignments Dashboard" 
            className="w-full h-auto rounded-2xl border border-[#DDDDE6] shadow-md object-cover bg-white"
          />
        </div>

        {/* Copy Column */}
        <div className="lg:col-span-5 flex flex-col gap-5 text-left">
          <div className="flex items-center gap-2 text-[#B88500] text-[10px] font-mono font-bold tracking-widest uppercase">
            <span>03 / Site Planner Coordination</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A3A5C] leading-tight m-0">
            Delegate activities and monitor active progress.
          </h2>
          <p className="text-[#5A5A62] text-[14.5px] leading-relaxed m-0">
            Site Planners receive published WBS activities, map tasks to field engineers, track entry statuses, and check exception logs from an integrated console.
          </p>

          <div className="flex flex-col gap-3 mt-2 bg-[#F8F8FA] border border-[#DDDDE6] rounded-2xl p-4">
            <span className="text-[10px] font-mono font-bold text-[#6B6B74] uppercase tracking-wider block mb-1">Site Control Flow</span>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#1A3A5C]">
              <span className="bg-white border border-[#DDDDE6] rounded px-2 py-1">Assign Tasks</span>
              <span className="text-[#ADADB8] pt-1">→</span>
              <span className="bg-white border border-[#DDDDE6] rounded px-2 py-1">Monitor Log Status</span>
              <span className="text-[#ADADB8] pt-1">→</span>
              <span className="bg-white border border-[#DDDDE6] rounded px-2 py-1">Inspect Exceptions</span>
              <span className="text-[#ADADB8] pt-1">→</span>
              <span className="bg-white border border-[#DDDDE6] rounded px-2 py-1">Collate DPR</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-0 h-px bg-[#DDDDE6]" />

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 4: Field Engineer (Mobile Intake - Without Phone Frames)
          ───────────────────────────────────────────────────────────────── */}
      <section className="flex flex-col gap-10 text-left">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-[#B88500] text-[10px] font-mono font-bold tracking-widest uppercase">
            <span>04 / Field Execution</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A3A5C] leading-tight m-0">
            Capturing progress exactly where work happens.
          </h2>
          <p className="text-[#5A5A62] text-[14.5px] leading-relaxed max-w-2xl m-0">
            No spreadsheets, no delayed updates. Site engineers record weather delays, physical quantities, and man-hours from their mobile devices with offline-first local validation.
          </p>
        </div>

        {/* 3 side-by-side screenshots (without frames) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          <div className="flex flex-col items-center gap-3">
            <img 
              src={mobileAppView} 
              alt="Mobile Tasks Checklist" 
              className="w-[210px] h-auto rounded-2xl border border-[#DDDDE6] shadow-sm hover:shadow-md transition-all duration-300 object-cover bg-white"
            />
            <span className="text-[11px] font-bold text-[#1A3A5C] font-mono text-center">
              1. Active Tasks Checklist
            </span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <img 
              src={userEntry} 
              alt="User Entry Form Screen" 
              className="w-[210px] h-auto rounded-2xl border border-[#DDDDE6] shadow-sm hover:shadow-md transition-all duration-300 object-cover bg-white"
            />
            <span className="text-[11px] font-bold text-[#1A3A5C] font-mono text-center">
              2. Quantities & Man-Hours Log
            </span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <img 
              src={mobileAppView} // Fallback back to app layout for submitted confirmation
              alt="Sync & Submission Confirmation" 
              className="w-[210px] h-auto rounded-2xl border border-[#DDDDE6] shadow-sm hover:shadow-md transition-all duration-300 object-cover bg-white"
            />
            <span className="text-[11px] font-bold text-[#1A3A5C] font-mono text-center">
              3. Submitted & Local Sync Queue
            </span>
          </div>
        </div>
      </section>

      <hr className="border-0 h-px bg-[#DDDDE6]" />

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 5: Exception Handling (Surveillance - Scaled Down Image)
          ───────────────────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Copy Column */}
        <div className="lg:col-span-5 flex flex-col gap-5 text-left">
          <div className="flex items-center gap-2 text-[#B88500] text-[10px] font-mono font-bold tracking-widest uppercase">
            <span>05 / Exception Logging</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A3A5C] leading-tight m-0">
            Log deviations instantly to protect project margins.
          </h2>
          <p className="text-[#5A5A62] text-[14.5px] leading-relaxed m-0">
            Variations, rework logs, and emergency works are flagged immediately at the source. Alfred registers baseline deviations, maps them to contracts, and begins claims dossier compilation.
          </p>

          <div className="mt-2 p-4 bg-[#F8F8FA] border border-[#DDDDE6] rounded-2xl">
            <span className="text-[10px] font-mono font-bold text-[#6B6B74] uppercase tracking-wider block mb-2">Claim Lifecycle</span>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1A3A5C]">
              <span>Normal Progress</span>
              <span className="text-[#ADADB8]">→</span>
              <span className="text-[#B52B1A] font-bold">Exception Logged</span>
              <span className="text-[#ADADB8]">→</span>
              <span>Planner Review</span>
              <span className="text-[#ADADB8]">→</span>
              <span>HQ Claim Setup</span>
            </div>
          </div>
        </div>

        {/* Screenshot Column (Restricted size as requested) */}
        <div className="lg:col-span-7 w-full flex justify-center">
          <div className="w-full max-w-[230px]">
            <img 
              src={exceptionLogging} 
              alt="Alfred Exception Logging Console" 
              className="w-full h-auto rounded-2xl border border-[#DDDDE6] shadow-md object-cover bg-white"
            />
          </div>
        </div>
      </section>

      <hr className="border-0 h-px bg-[#DDDDE6]" />

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 6: Active Notifications (Smart Nudges - Without Phone Frame)
          ───────────────────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Screenshot Column (Without frame, centered) */}
        <div className="lg:col-span-6 w-full order-last lg:order-first flex justify-center">
          <div className="flex flex-col items-center gap-3">
            <img 
              src={nudgesToMobileApp} 
              alt="Smart Nudges Lockscreen Alert" 
              className="w-[230px] h-auto rounded-2xl border border-[#DDDDE6] shadow-md object-cover bg-white"
            />
            <span className="text-[11px] font-bold text-[#1A3A5C] font-mono text-center">
              Lockscreen Push Reminders
            </span>
          </div>
        </div>

        {/* Copy Column */}
        <div className="lg:col-span-6 flex flex-col gap-5 text-left">
          <div className="flex items-center gap-2 text-[#B88500] text-[10px] font-mono font-bold tracking-widest uppercase">
            <span>06 / Automated Triggers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A3A5C] leading-tight m-0">
            Eliminate gaps in the progress record automatically.
          </h2>
          <p className="text-[#5A5A62] text-[14.5px] leading-relaxed m-0">
            If shift endings are reached and progress logs are missing, Alfred triggers nudges to mobile devices automatically, directing engineers to submit their records before shift handoffs.
          </p>

          <div className="flex flex-col gap-2 mt-2 bg-[#F8F8FA] border border-[#DDDDE6] rounded-2xl p-4">
            <span className="text-[10px] font-mono font-bold text-[#6B6B74] uppercase tracking-wider block mb-1">Nudge Path</span>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#1A3A5C]">
              <span>Log Missing</span>
              <span className="text-[#ADADB8]">→</span>
              <span>Push Reminder Issued</span>
              <span className="text-[#ADADB8]">→</span>
              <span>App Opened</span>
              <span className="text-[#ADADB8]">→</span>
              <span className="text-[#145C35]">DPR Submitted</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-0 h-px bg-[#DDDDE6]" />

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 7: Verification Loop (SCM Reconciliation)
          ───────────────────────────────────────────────────────────────── */}
      <section className="flex flex-col gap-10 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Copy Column */}
          <div className="lg:col-span-5 flex flex-col gap-5 text-left">
            <div className="flex items-center gap-2 text-[#B88500] text-[10px] font-mono font-bold tracking-widest uppercase">
              <span>07 / SCM Verification Loop</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A3A5C] leading-tight m-0">
              Double-key audit checks at SCM Verification.
            </h2>
            <p className="text-[#5A5A62] text-[14.5px] leading-relaxed m-0">
              Before logs sync with financial ledgers, SCM audits physical concrete quantities against batch receipts. Mismatches are sent back to the planner, locking only validated updates.
            </p>

            <div className="flex flex-col gap-3.5 mt-2 bg-[#F8F8FA] border border-[#DDDDE6] rounded-2xl p-4">
              <span className="text-[10px] font-mono font-bold text-[#6B6B74] uppercase tracking-wider block mb-1">Verification Routes</span>
              
              <div className="flex flex-col gap-1 text-xs">
                <span className="font-bold text-[#145C35]">Approved Route</span>
                <span className="text-[#6B6B74]">
                  Planner Review <span className="text-[#ADADB8]">→</span> Sent to SCM <span className="text-[#ADADB8]">→</span> Matches Receipt <span className="text-[#ADADB8]">→</span> Approved & Synced
                </span>
              </div>

              <div className="flex flex-col gap-1 border-t border-[#DDDDE6]/50 pt-2.5 text-xs">
                <span className="font-bold text-[#B52B1A]">Correction Loop Route</span>
                <span className="text-[#6B6B74]">
                  Planner Review <span className="text-[#ADADB8]">→</span> Sent to SCM <span className="text-[#ADADB8]">→</span> Mismatch Rejection <span className="text-[#ADADB8]">→</span> Planner Corrects <span className="text-[#ADADB8]">→</span> Approved
                </span>
              </div>
            </div>
          </div>

          {/* Screenshot Column */}
          <div className="lg:col-span-7 w-full">
            <img 
              src={scmView} 
              alt="SCM Verification Audit Console" 
              className="w-full h-auto rounded-2xl border border-[#DDDDE6] shadow-md object-cover bg-white"
            />
          </div>
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B88500] animate-ping" />
          <h4 className="text-xl font-bold text-[#1A3A5C] m-0">One platform. One continuous project record.</h4>
          <p className="text-[13.5px] text-[#6B6B74] m-0 leading-relaxed">
            Connecting initial contract parameters, daily site execution logs, and material consumption records.
          </p>
        </div>
      </section>

    </div>
  )
}
