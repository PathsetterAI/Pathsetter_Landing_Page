import React, { useState, useEffect, useRef } from 'react'

export default function MemorySection() {
  const [bidsCount, setBidsCount] = useState(0)
  const [hoveredRow, setHoveredRow] = useState(null)
  const sectionRef = useRef(null)
  const [hasIntersected, setHasIntersected] = useState(false)

  const phases = [
    {
      pl: "Bidding",
      pt: "Remembers the onerous clauses and risks your organization has hit before, and nudges your team the moment one shows up again — building your playbook with every bid."
    },
    {
      pl: "Pre-Construction",
      pt: "Applies those playbooks — the same alerts and nudges, now grounded in your organization's own history."
    },
    {
      pl: "Execution",
      pt: "Keeps applying that institutional memory through execution, so a risk caught once is never missed twice."
    }
  ]

  const playbookItems = [
    {
      id: 1,
      title: "Unlimited LD clause — seen 6 times before",
      desc: "Two projects took losses on this exact wording. Flagged again in this tender.",
      badge: "Recurring risk · nudged",
      delayClass: "delay-[100ms]"
    },
    {
      id: 2,
      title: "Engineer-vehicle clause hidden in tech specs",
      desc: "Cost item outside the standard BOQ — missed on a Dubai bid once. Now auto-checked.",
      badge: "Playbook applied",
      delayClass: "delay-[500ms]"
    },
    {
      id: 3,
      title: "Tender vs. tech-spec steel-grade mismatch",
      desc: "A discrepancy pattern your teams have hit repeatedly — checked on every new spec version.",
      badge: "Always-on check",
      delayClass: "delay-[900ms]"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setHasIntersected(true)
        }
      },
      { threshold: 0.25 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  useEffect(() => {
    if (!hasIntersected) return

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
  }, [hasIntersected])

  return (
    <section 
      ref={sectionRef} 
      id="memory" 
      className="relative w-full bg-white py-[90px] px-6 sm:px-12 md:px-16 lg:px-20 border-b border-[#DDDDE6] overflow-hidden"
    >
      {/* Subtle Engineering Grid background */}
      <div className="absolute inset-0 bg-engineering-grid opacity-[0.015] pointer-events-none z-0" />

      {/* Grid container: equal columns (1fr 1fr) and exact gap: 56px matching alfredworks.html */}
      <div className="relative z-10 w-full max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[56px] items-center text-left">
        
        {/* Left Column: Copy & Phases */}
        <div className="flex flex-col gap-0">
          {/* Section Tag exactly matching alfredworks.html */}
          <div className="inline-flex items-center gap-[9px] bg-[#EDF4FB] border border-[#D6E6F5] px-[13px] py-[6px] rounded-[30px] self-start mb-[20px] select-none">
            <span className="w-[9px] h-[9px] rounded-[3px] bg-[#FFC20E] shrink-0" />
            <span className="text-[12.5px] font-sans text-[#1A3A5C] uppercase tracking-[0.01em] font-bold">
              Alfred Memory
            </span>
          </div>

          {/* Heading exactly matching alfredworks.html */}
          <h2 className="text-[26px] md:text-[36px] font-extrabold text-[#1A3A5C] leading-[1.12] tracking-[-0.025em] m-0 max-w-xl mb-[12px]">
            What one project learns, every project remembers.
          </h2>

          {/* Subtext exactly matching alfredworks.html */}
          <p className="text-[#6B6B74] text-[17px] leading-[1.55] max-w-lg m-0 mb-[28px] font-normal">
            The onerous clauses and risks your organization has hit before become a playbook Alfred applies automatically — so a risk caught once is never missed twice.
          </p>

          {/* Phases List: side-by-side grid rows matching alfredworks.html */}
          <div className="flex flex-col">
            {phases.map((phase, idx) => (
              <div 
                key={idx} 
                className={`grid grid-cols-[132px_1fr] gap-[18px] py-[16px] border-t border-[#DDDDE6] items-start ${
                  idx === phases.length - 1 ? 'border-b border-[#DDDDE6]' : ''
                }`}
              >
                <span className="text-[11px] font-bold tracking-[0.05em] uppercase text-[#2B5F96] pt-[2px] font-sans">
                  {phase.pl}
                </span>
                <p className="text-[13.5px] text-[#3A3A3F] leading-[1.55] m-0 font-normal font-sans">
                  {phase.pt}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Memory Playbook Mockup Panel */}
        <div className="w-full flex justify-center lg:justify-start">
          <div className="w-full max-w-[480px] bg-white border border-[#DDDDE6] rounded-[16px] shadow-[0_24px_56px_-26px_rgba(26,58,92,0.26)] overflow-hidden group transition-all duration-300 hover:shadow-2xl">
            {/* Top Bar */}
            <div className="flex items-center gap-2 px-4 py-[11px] bg-[#F4F4F7] border-b border-[#DDDDE6] relative select-none">
              <span className="w-2 h-2 rounded-full bg-[#DDDDE6]" />
              <span className="w-2 h-2 rounded-full bg-[#DDDDE6]" />
              <span className="w-2 h-2 rounded-full bg-[#DDDDE6]" />
              <span className="text-[11.5px] text-[#3A3A3F] font-semibold font-sans ml-2">Your Organisation's Playbook</span>
              <span className="text-[10px] text-[#2B5F96] font-mono ml-auto font-bold">
                learned across {bidsCount} bids
              </span>
            </div>

            {/* Content List matching alfredworks.html layout style with staggered slide-in on viewport intersection */}
            <div className="p-4 bg-white flex flex-col gap-[2px]">
              {playbookItems.map((item) => {
                const isHovered = hoveredRow === item.id
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredRow(item.id)}
                    onMouseLeave={() => setHoveredRow(null)}
                    className={`flex gap-[11px] items-start py-[12px] border-b border-[#DDDDE6] last:border-b-0 transition-all duration-700 ease-out cursor-pointer ${
                      isHovered ? 'bg-[#EDF4FB]/10 px-1 rounded-md' : ''
                    } ${item.delayClass} ${
                      hasIntersected 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-8 pointer-events-none'
                    }`}
                  >
                    {/* Star Icon Node exactly from alfredworks.html */}
                    <div className="w-[26px] h-[26px] rounded-[7px] bg-[#FFF6D6] flex items-center justify-center flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                        <path d="M10 1l2.5 5.5L18 7l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5L10 1z" fill="#FFC20E" />
                      </svg>
                    </div>

                    {/* Copy details exactly matching alfredworks.html */}
                    <div className="flex-1 min-w-0 text-left">
                      <h4 className="text-[12.5px] font-semibold text-[#111113] leading-[1.4] m-0 font-sans">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-[#6B6B74] leading-[1.45] m-0 mt-[2px] font-normal font-sans">
                        {item.desc}
                      </p>
                      
                      {/* Playbook Badge exactly matching alfredworks.html */}
                      <span className="text-[9.5px] font-bold text-[#B88500] uppercase tracking-[0.04em] mt-[6px] inline-block font-sans select-none">
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
