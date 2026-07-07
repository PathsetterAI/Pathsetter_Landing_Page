import React, { useState, useEffect } from 'react'

export default function MemorySection() {
  const [bidsCount, setBidsCount] = useState(0)
  const [hoveredRow, setHoveredRow] = useState(null)

  const phases = [
    {
      pl: "Bidding",
      pt: "Recalls onerous clauses and risks from previous tenders to flag recurring issues in new documents automatically."
    },
    {
      pl: "Pre-Construction",
      pt: "Enforces standard compliance rules and alert checklists customized to your historical loss record."
    },
    {
      pl: "Execution",
      pt: "Runs always-on contract safety checks across projects, making sure past mistakes are never repeated on site."
    }
  ]

  const playbookItems = [
    {
      id: 1,
      title: "Unlimited LD clause — seen 6 times before",
      desc: "Two projects took losses on this exact wording. Flagged again in this tender.",
      badge: "Recurring risk · nudged"
    },
    {
      id: 2,
      title: "Engineer-vehicle clause hidden in tech specs",
      desc: "Cost item outside the standard BOQ — missed on a Dubai bid once. Now auto-checked.",
      badge: "Playbook applied"
    },
    {
      id: 3,
      title: "Tender vs. tech-spec steel-grade mismatch",
      desc: "A discrepancy pattern your teams have hit repeatedly — checked on every new spec version.",
      badge: "Always-on check"
    }
  ]

  useEffect(() => {
    let start = 0
    const end = 34
    const duration = 1200
    const increment = Math.ceil(end / (duration / 16))
    
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setBidsCount(end)
        clearInterval(timer)
      } else {
        setBidsCount(start)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full bg-white py-20 sm:py-24 px-6 sm:px-12 md:px-16 lg:px-20 border-b border-[#DDDDE6] overflow-hidden">
      {/* Subtle Engineering Grid background */}
      <div className="absolute inset-0 bg-engineering-grid opacity-[0.015] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center text-left">
        
        {/* Left Column: Copy & Phases */}
        <div className="flex flex-col gap-6">
          {/* Section Tag */}
          <div className="inline-flex items-center gap-2 bg-[#EDF4FB] border border-[#D6E6F5] px-3.5 py-1.5 rounded-full self-start">
            <span className="w-2 h-2 rounded bg-[#FFC20E] shrink-0" />
            <span className="text-[11px] font-mono text-[#1A3A5C] uppercase tracking-wide font-bold">
              Alfred Memory
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-[#1A3A5C] leading-[1.2] m-0 tracking-tight">
            What one project learns, every project remembers.
          </h2>

          {/* Description */}
          <p className="text-[#5A5A62] text-xs sm:text-[13.5px] leading-relaxed max-w-lg m-0 mt-1">
            The onerous clauses and risks your organization has hit before become a playbook Alfred applies automatically — so a risk caught once is never missed twice.
          </p>

          {/* Lifecycle Phases */}
          <div className="flex flex-col gap-1.5 mt-3 border-t border-[#DDDDE6] pt-1">
            {phases.map((phase, idx) => (
              <div key={idx} className="grid grid-cols-[120px_1fr] gap-4 py-4 border-b border-[#DDDDE6]/60 items-start">
                <span className="text-[10px] font-mono text-[#2B5F96] uppercase tracking-wider font-bold pt-0.5">
                  {phase.pl}
                </span>
                <p className="text-[#5A5A62] text-xs sm:text-[13px] leading-relaxed m-0">
                  {phase.pt}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Memory Playbook Mockup Panel */}
        <div className="w-full flex justify-center lg:justify-start">
          <div className="w-full max-w-[480px] bg-white border border-[#DDDDE6] rounded-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl">
            {/* Top Bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#F4F4F7] border-b border-[#DDDDE6] relative">
              <span className="w-2 h-2 rounded-full bg-[#DDDDE6]" />
              <span className="w-2 h-2 rounded-full bg-[#DDDDE6]" />
              <span className="w-2 h-2 rounded-full bg-[#DDDDE6]" />
              <span className="text-[10.5px] text-[#3A3A3F] font-semibold font-mono ml-2">Organisation's Playbook</span>
              <span className="text-[9.5px] text-[#2B5F96] font-mono font-bold ml-auto select-none">
                learned across {bidsCount} bids
              </span>
              {/* Subtle visual scan sweep line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-[35%] bg-gradient-to-r from-transparent via-[#FFC20E] to-transparent -translate-x-[120%] group-hover:animate-[scanx_1.8s_ease-in-out_infinite]" />
            </div>

            {/* Content List with Graph Connections */}
            <div className="p-4 bg-white flex flex-col gap-4 relative">
              {/* Graphic Connector Line linking all nodes */}
              <div className="absolute left-[31px] top-6 bottom-6 w-[2.5px] bg-[#F4F4F7] z-0" />
              <div className="absolute left-[31px] top-6 bottom-6 w-[1.5px] bg-dashed border-l border-dashed border-[#DDDDE6]/80 z-0" />

              {playbookItems.map((item) => {
                const isHovered = hoveredRow === item.id
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredRow(item.id)}
                    onMouseLeave={() => setHoveredRow(null)}
                    className="flex gap-4 items-start relative z-10 select-none"
                  >
                    {/* Star Icon Node */}
                    <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center border transition-all duration-300 ${
                      isHovered ? 'bg-[#FFF6D6] border-[#FFC20E] scale-110 shadow-sm' : 'bg-[#F4F4F7] border-[#DDDDE6]'
                    }`}>
                      <svg className={`w-4 h-4 transition-colors duration-300 ${isHovered ? 'text-[#FFC20E]' : 'text-[#ADADB8]'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>

                    {/* Copy details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[12.5px] sm:text-[13px] font-bold text-[#111113] leading-tight tracking-tight m-0">
                        {item.title}
                      </h4>
                      <p className="text-[10.5px] text-[#6B6B74] leading-relaxed m-0 mt-0.5">
                        {item.desc}
                      </p>
                      
                      {/* Playbook Badge pop-effect */}
                      <span className={`inline-flex text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md mt-1.5 transition-all duration-300 border ${
                        isHovered ? 'bg-[#FFF6D6] text-[#B88500] border-[#FFC20E]/40 scale-105 shadow-sm' : 'bg-[#F4F4F7] text-[#6B6B74] border-transparent'
                      }`}>
                        {item.badge}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
