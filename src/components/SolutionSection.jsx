import React, { useState } from 'react'

const lifecycleStages = [
  {
    stage: "1",
    label: "WIN IT",
    title: "Tender & RFP Risk Review",
    desc: "Flags obligations and high-risk liabilities before signing. Alfred audits draft tenders to ensure contingency is budgeted for harsh claims conditions."
  },
  {
    stage: "2",
    label: "SET IT UP",
    title: "Obligation Extraction",
    desc: "Extracts every single contractual commitment and automatically maps clauses directly to your Primavera P6 or MS Project schedule activities."
  },
  {
    stage: "3",
    label: "RUN IT",
    title: "In-Project Tracking",
    desc: "Cross-references daily progress reports (DPRs), emails, and site logs against contract obligations to flag slips and auto-draft notice letters."
  },
  {
    stage: "4",
    label: "DEFEND IT",
    title: "Claims & EOT Defense",
    desc: "Builds a clean, contemporaneous evidential trail from day one, preventing retrospective claims reconstruction and defending against Liquidated Damages."
  }
]

export default function SolutionSection() {
  const [activeStage, setActiveStage] = useState(0)

  return (
    <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-12 lg:gap-16 items-center px-6 sm:px-12 py-20 sm:py-28 text-left">
      
      {/* Left Side: 4 Lifecycle Stages */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <div className="text-[10px] font-mono text-[#2B5F96] uppercase tracking-widest font-bold">
            The Lifecycle
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A3A5C] m-0 leading-tight">
            How Alfred Works
          </h2>
          <p className="text-secondary-mid text-xs max-w-md leading-relaxed m-0 mt-1">
            Tracked from bid to handover. We align contract compliance with your critical path timeline.
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-4">
          {lifecycleStages.map((stage, idx) => {
            const isActive = activeStage === idx
            return (
              <button
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`w-full text-left bg-transparent border rounded-xl p-4 transition-all duration-300 flex items-start gap-4 cursor-pointer focus:outline-none ${
                  isActive 
                    ? 'bg-white border-[#DDDDE6] shadow-sm' 
                    : 'border-transparent hover:bg-white/40'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-colors ${
                  isActive ? 'bg-[#1A3A5C] text-white' : 'bg-white border border-[#DDDDE6] text-[#6B6B74]'
                }`}>
                  {stage.stage}
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] text-[#B88500] uppercase tracking-wider font-bold">
                      Stage 0{stage.stage} · {stage.label}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[#1A3A5C] m-0">
                    {stage.title}
                  </h3>
                  {isActive && (
                    <p className="text-secondary-mid text-xs leading-relaxed mt-1.5 transition-opacity duration-300">
                      {stage.desc}
                    </p>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Right Side: Interactive Mockup Panel */}
      <div className="bg-white border border-[#DDDDE6] rounded-2xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(26,58,92,0.04)] text-left flex flex-col gap-5 w-full min-h-[460px] justify-between relative overflow-hidden">
        
        {/* Mockup Title bar */}
        <div className="flex items-center justify-between border-b border-[#DDDDE6] pb-3 z-10">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#B52B1A]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#B88500]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#145C35]" />
            <span className="text-[10px] text-[#6B6B74] font-mono ml-2">alfredworks.ai/extract_engine</span>
          </div>
          <span className="text-[10px] text-[#2B5F96] font-mono font-bold bg-[#EDF4FB] px-2 py-0.5 rounded">
            FIDIC v2.0 Red Book
          </span>
        </div>

        {/* Content Box */}
        <div className="flex-1 flex flex-col gap-4 py-2 z-10">
          
          {/* Section 1: Raw Contract Text */}
          <div className="bg-[#F4F4F7] border border-[#DDDDE6] rounded-lg p-3">
            <div className="text-[9px] text-[#6B6B74] font-mono uppercase tracking-wider mb-1.5">Raw Contract Clause</div>
            <p className="text-xs text-[#3A3A3F] leading-relaxed italic m-0 font-serif">
              "Clause 8.4: If the Contractor considers himself entitled to any extension of the Time for Completion... he shall give notice to the Engineer within 28 days of the event causing delay..."
            </p>
          </div>

          {/* Process arrow */}
          <div className="flex justify-center my-0.5">
            <div className="w-6 h-6 rounded-full bg-[#1A3A5C]/10 border border-[#1A3A5C]/20 flex items-center justify-center text-[#1A3A5C]">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 13l-7 7-7-7m14-6l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Section 2: Extracted Obligations */}
          <div className="border border-[#DDDDE6] rounded-lg p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-[#DDDDE6] pb-2">
              <span className="text-[9px] text-[#6B6B74] font-mono uppercase tracking-wider">Alfred Obligations Extraction</span>
              <span className="text-[9px] text-[#145C35] font-mono font-bold bg-[#E4F3EC] px-2 py-0.5 rounded-full">
                Active Sync
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {/* Obligation item 1 */}
              <div className="flex items-center justify-between text-xs py-1">
                <div className="flex flex-col gap-0.5">
                  <span className="font-semibold text-[#1A3A5C]">Notice of Delay Event (Clause 8.4)</span>
                  <span className="text-[10px] text-[#6B6B74]">WBS Task: Foundations Piling Phase 2</span>
                </div>
                <span className="text-[10px] font-medium bg-[#FCECEA] text-[#B52B1A] px-2.5 py-0.5 rounded">
                  Critical
                </span>
              </div>

              {/* Obligation item 2 */}
              <div className="flex items-center justify-between text-xs py-1 border-t border-[#DDDDE6]">
                <div className="flex flex-col gap-0.5">
                  <span className="font-semibold text-[#1A3A5C]">Detailed Claim Submission (Clause 20.1)</span>
                  <span className="text-[10px] text-[#6B6B74]">WBS Task: Piling Milestone Approval</span>
                </div>
                <span className="text-[10px] font-medium bg-[#FFF6D6] text-[#B88500] px-2.5 py-0.5 rounded">
                  Warning
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mockup Status bar */}
        <div className="border-t border-[#DDDDE6] pt-3 flex items-center justify-between text-[10px] text-[#6B6B74] font-mono z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#145C35] animate-pulse" />
            <span>P6 Schedule Sync Verified</span>
          </div>
          <span>Draft notice generated</span>
        </div>
      </div>
    </div>
  )
}
