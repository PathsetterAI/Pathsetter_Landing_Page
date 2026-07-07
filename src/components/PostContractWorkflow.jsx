import React from 'react'
import { motion } from 'framer-motion'

// --- Custom Image Placeholder matching the site's layout ---
function ImgPlaceholder({ label, aspect = 'aspect-[4/3]', className = '' }) {
  return (
    <div
      className={`w-full ${aspect} rounded-2xl border-2 border-dashed border-[#DDDDE6] bg-[#F8F8FA] flex flex-col items-center justify-center gap-3 text-[#ADADB8] p-4 select-none ${className}`}
    >
      <svg className="w-8 h-8 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-center text-[#8E8E93]">
        {label}
      </span>
    </div>
  )
}

export default function PostContractWorkflow() {
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
              { role: 'Lead Planner', icon: '📋', desc: 'Uploads BOQ & sets WBS template' },
              { role: 'Site Planner', icon: '📊', desc: 'Assigns tasks & collates reports' },
              { role: 'Field Engineer', icon: '👷', desc: 'Logs actuals & offline syncs' },
              { role: 'Planner Review', icon: '🔍', desc: 'Inspects exceptions & flags' },
              { role: 'SCM Verification', icon: '🚚', desc: 'Audits material reconciliation' },
              { role: 'AI Analytics', icon: '⚡', desc: 'Secures claims & locks dashboards' },
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-3 rounded-xl border border-[#DDDDE6]/50 bg-[#F8F8FA] relative">
                <span className="text-2xl mb-2">{step.icon}</span>
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
          SECTION 2: Lead Planner (HQ Setup)
          ───────────────────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Copy Column */}
        <div className="lg:col-span-5 flex flex-col gap-5 text-left">
          <div className="flex items-center gap-2 text-[#B88500] text-[10px] font-mono font-bold tracking-widest uppercase">
            <span>02 / Lead Planner Setup</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A3A5C] leading-tight m-0">
            Initialize project structure straight from Excel.
          </h2>
          <p className="text-[#5A5A62] text-[14.5px] leading-relaxed m-0">
            No database setup or config scripts required. The Lead Planner uploads the existing Excel WBS, and Alfred's AI maps columns, creates disciplines, and previews the structure automatically.
          </p>

          {/* Stepper details */}
          <div className="flex flex-col gap-3.5 bg-[#F8F8FA] border border-[#DDDDE6] rounded-2xl p-4">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-[#6B6B74] uppercase tracking-wider">
              <span>Configuration Path</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs text-[#1A3A5C] font-semibold">
                <span className="text-[#145C35]">✓</span> Upload Excel BOQ/WBS
              </div>
              <div className="flex items-center gap-2 text-xs text-[#1A3A5C] font-semibold">
                <span className="text-[#145C35]">✓</span> AI Column Mapping & Suggestion
              </div>
              <div className="flex items-center gap-2 text-xs text-[#1A3A5C] font-semibold">
                <span className="text-[#145C35]">✓</span> Structured Validation & Preview
              </div>
              <div className="flex items-center gap-2 text-xs text-[#1A3A5C] font-semibold">
                <span className="text-[#145C35]">✓</span> Publish Template to site
              </div>
            </div>
          </div>
        </div>

        {/* Visual Screenshots Column */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ImgPlaceholder 
              label="Excel Template Upload (SS 1)" 
              aspect="aspect-[4/3]" 
            />
            <ImgPlaceholder 
              label="AI Column Mapping (SS 2)" 
              aspect="aspect-[4/3]" 
            />
            <ImgPlaceholder 
              label="Structure & Activity Preview (SS 3)" 
              aspect="aspect-[4/3]" 
            />
          </div>
        </div>
      </section>

      <hr className="border-0 h-px bg-[#DDDDE6]" />

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 3: Site Planner (Allocation & Coordination)
          ───────────────────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Visual Screenshot Column (First on desktop for alternating layout) */}
        <div className="lg:col-span-7 w-full order-last lg:order-first">
          <ImgPlaceholder 
            label="Site Planner Daily Progress Grid (SS 4)" 
            aspect="aspect-[16/10]" 
          />
        </div>

        {/* Copy Column */}
        <div className="lg:col-span-5 flex flex-col gap-5 text-left">
          <div className="flex items-center gap-2 text-[#B88500] text-[10px] font-mono font-bold tracking-widest uppercase">
            <span>03 / Site Planner Coordination</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A3A5C] leading-tight m-0">
            Delegate activities and monitor active logs.
          </h2>
          <p className="text-[#5A5A62] text-[14.5px] leading-relaxed m-0">
            The Site Planner receives the published WBS template, assigns tasks to Discipline Engineers, tracks active daily submissions, and checks logged exceptions before compiling the DPR.
          </p>

          <div className="flex flex-col gap-3 mt-2 bg-[#F8F8FA] border border-[#DDDDE6] rounded-2xl p-4">
            <span className="text-[10px] font-mono font-bold text-[#6B6B74] uppercase tracking-wider block mb-1">Planner Actions</span>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#1A3A5C]">
              <span className="bg-white border border-[#DDDDE6] rounded px-2 py-1">Assign Tasks</span>
              <span className="text-[#ADADB8] pt-1">→</span>
              <span className="bg-white border border-[#DDDDE6] rounded px-2 py-1">Monitor Progress</span>
              <span className="text-[#ADADB8] pt-1">→</span>
              <span className="bg-white border border-[#DDDDE6] rounded px-2 py-1">Collate DPR</span>
              <span className="text-[#ADADB8] pt-1">→</span>
              <span className="bg-white border border-[#DDDDE6] rounded px-2 py-1">Review Exceptions</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-0 h-px bg-[#DDDDE6]" />

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 4: Field Engineer (Mobile Intake)
          ───────────────────────────────────────────────────────────────── */}
      <section className="flex flex-col gap-10 text-left">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-[#B88500] text-[10px] font-mono font-bold tracking-widest uppercase">
            <span>04 / Field Execution</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A3A5C] leading-tight m-0">
            Capturing progress where work happens.
          </h2>
          <p className="text-[#5A5A62] text-[14.5px] leading-relaxed max-w-2xl m-0">
            No manual logs, no transcription lag. Field engineers update task sheets, quantities, and actual hours directly on mobile. Data syncs locally and uploads once connected.
          </p>
        </div>

        {/* 3 Phone Mockups Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-3 items-center text-center">
            <ImgPlaceholder 
              label="Task List Screen (Mobile App)" 
              aspect="aspect-[9/16]" 
              className="max-w-[240px] shadow-sm hover:shadow-md transition-shadow duration-300"
            />
            <div className="mt-1">
              <span className="text-xs font-bold text-[#1A3A5C] font-mono">1. Tasks Checklist</span>
              <p className="text-[11px] text-[#6B6B74] mt-1 max-w-[200px]">Engineers view assigned daily tasks upon opening the application.</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 items-center text-center">
            <ImgPlaceholder 
              label="Quantity & MHrs Entry Screen" 
              aspect="aspect-[9/16]" 
              className="max-w-[240px] shadow-sm hover:shadow-md transition-shadow duration-300"
            />
            <div className="mt-1">
              <span className="text-xs font-bold text-[#1A3A5C] font-mono">2. Log Quantities & Hours</span>
              <p className="text-[11px] text-[#6B6B74] mt-1 max-w-[200px]">Engineers enter physical progress metrics, man-hours, and upload photo evidence.</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 items-center text-center">
            <ImgPlaceholder 
              label="Sync & Submission Confirmation" 
              aspect="aspect-[9/16]" 
              className="max-w-[240px] shadow-sm hover:shadow-md transition-shadow duration-300"
            />
            <div className="mt-1">
              <span className="text-xs font-bold text-[#1A3A5C] font-mono">3. Submitted Status</span>
              <p className="text-[11px] text-[#6B6B74] mt-1 max-w-[200px]">DPR uploaded, with offline queue showing status indicators if signal drops.</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-0 h-px bg-[#DDDDE6]" />

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 5: Exception Handling (Surveillance)
          ───────────────────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Copy Column */}
        <div className="lg:col-span-5 flex flex-col gap-5 text-left">
          <div className="flex items-center gap-2 text-[#B88500] text-[10px] font-mono font-bold tracking-widest uppercase">
            <span>05 / Exception Logging</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A3A5C] leading-tight m-0">
            Log deviations instantly to protect your margins.
          </h2>
          <p className="text-[#5A5A62] text-[14.5px] leading-relaxed m-0">
            Unplanned obstructions, drawing revisions, and weather stoppages are captured in real-time as exceptions. Alfred maps these events directly to schedule baselines and notice deadlines automatically.
          </p>

          <div className="mt-2 p-4 bg-[#F8F8FA] border border-[#DDDDE6] rounded-2xl">
            <span className="text-[10px] font-mono font-bold text-[#6B6B74] uppercase tracking-wider block mb-2">Claim Lifecycle</span>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1A3A5C]">
              <span>Normal Progress</span>
              <span className="text-[#ADADB8]">→</span>
              <span className="text-[#B52B1A]">Exception Logged</span>
              <span className="text-[#ADADB8]">→</span>
              <span>Planner Reviews Impact</span>
              <span className="text-[#ADADB8]">→</span>
              <span>HQ Claim Drafted</span>
            </div>
          </div>
        </div>

        {/* Screenshot Placeholder */}
        <div className="lg:col-span-7 w-full">
          <ImgPlaceholder 
            label="Exception Logging Screen (Variation, Rework, Emergency Logs)" 
            aspect="aspect-[16/10]" 
          />
        </div>
      </section>

      <hr className="border-0 h-px bg-[#DDDDE6]" />

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 6: Active Notifications (Outstanding Reminders)
          ───────────────────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Placeholder Column (First on desktop for alternating layout) */}
        <div className="lg:col-span-6 w-full order-last lg:order-first">
          <ImgPlaceholder 
            label="Smart Nudges & Outstanding Task Notifications Screen" 
            aspect="aspect-[4/3]" 
          />
        </div>

        {/* Copy Column */}
        <div className="lg:col-span-6 flex flex-col gap-5 text-left">
          <div className="flex items-center gap-2 text-[#B88500] text-[10px] font-mono font-bold tracking-widest uppercase">
            <span>06 / Automated Triggers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A3A5C] leading-tight m-0">
            No more gap days in the progress record.
          </h2>
          <p className="text-[#5A5A62] text-[14.5px] leading-relaxed m-0">
            Instead of manually calling field engineers for daily updates, Alfred watches shift logs and locations. If progress reports are missing, it sends notifications directly to engineers.
          </p>

          <div className="flex flex-col gap-2 mt-2 bg-[#F8F8FA] border border-[#DDDDE6] rounded-2xl p-4">
            <span className="text-[10px] font-mono font-bold text-[#6B6B74] uppercase tracking-wider block mb-1">Nudge Automation Path</span>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#1A3A5C]">
              <span>Log Missing</span>
              <span className="text-[#ADADB8]">→</span>
              <span>Push Notification Triggered</span>
              <span className="text-[#ADADB8]">→</span>
              <span>Engineer Opens App</span>
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
              <span>07 / Verification Loop</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A3A5C] leading-tight m-0">
              Audit-ready checks at SCM Verification.
            </h2>
            <p className="text-[#5A5A62] text-[14.5px] leading-relaxed m-0">
              Before progress is synced to dashboards or mapped to invoicing records, the Supply Chain Management (SCM) audit cross-checks logs against materials consumed. Mismatch errors are returned to the planner.
            </p>

            <div className="flex flex-col gap-3.5 mt-2 bg-[#F8F8FA] border border-[#DDDDE6] rounded-2xl p-4">
              <span className="text-[10px] font-mono font-bold text-[#6B6B74] uppercase tracking-wider block mb-1">Verification Pathway</span>
              
              {/* Approval Flow */}
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold text-[#145C35]">Path A: Approval Flow</span>
                <span className="text-xs text-[#5A5A62]">
                  Planner Review <span className="text-[#ADADB8]">→</span> Sent to SCM <span className="text-[#ADADB8]">→</span> Approved <span className="text-[#ADADB8]">→</span> Analytics
                </span>
              </div>

              {/* Rejection Flow */}
              <div className="flex flex-col gap-1 border-t border-[#DDDDE6]/50 pt-2.5">
                <span className="text-[11px] font-bold text-[#B52B1A]">Path B: Rejection Flow</span>
                <span className="text-xs text-[#5A5A62]">
                  Planner Review <span className="text-[#ADADB8]">→</span> Sent to SCM <span className="text-[#ADADB8]">→</span> Mismatch Rejection <span className="text-[#ADADB8]">→</span> Sent Back to Planner for correction
                </span>
              </div>
            </div>
          </div>

          {/* Screenshot Column */}
          <div className="lg:col-span-7 w-full">
            <ImgPlaceholder 
              label="SCM Verification Audit Ledger Screen (Accept / Return logs, quantity mismatch validation)" 
              aspect="aspect-[16/10]" 
            />
          </div>
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B88500] animate-ping" />
          <h4 className="text-lg font-bold text-[#1A3A5C] m-0">One platform. One continuous project record.</h4>
          <p className="text-[13px] text-[#6B6B74] m-0">Connecting initial bid parameters directly to daily site execution.</p>
        </div>
      </section>

    </div>
  )
}
