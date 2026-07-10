import React, { useState, useEffect, useRef } from 'react'

const ShieldAlertIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
)

const FileSearchIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <circle cx="11.5" cy="14.5" r="2.5" />
    <line x1="18" y1="21" x2="13.25" y2="16.25" />
  </svg>
)

const CompareIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
)

export default function MemorySection() {
  const [bidsCount, setBidsCount] = useState(0)
  const [hoveredRow, setHoveredRow] = useState(null)
  const sectionRef = useRef(null)
  const [hasIntersected, setHasIntersected] = useState(false)

  const phases = [
    {
      pl: "Bidding",
      pt: "Remembers the onerous clauses and risks your organization has hit before, and nudges your team the moment one shows up again, building your playbook with every bid."
    },
    {
      pl: "Pre-Construction",
      pt: "Applies those playbooks: the same alerts and nudges, now grounded in your organization's own history."
    },
    {
      pl: "Execution",
      pt: "Keeps applying that institutional memory through execution, so a risk caught once is never missed twice."
    }
  ]

  const playbookItems = [
    {
      id: 1,
      title: "Unlimited LD clause: seen 6 times before",
      desc: "Two projects took losses on this exact wording. Flagged again in this tender.",
      badge: "Recurring risk · nudged",
      delayClass: "delay-[100ms]",
      Icon: ShieldAlertIcon,
      iconBg: "bg-[#FCECEA] border border-[#f3cfca]",
      iconColor: "text-[#B52B1A]"
    },
    {
      id: 2,
      title: "Engineer-vehicle clause hidden in tech specs",
      desc: "Cost item outside the standard BOQ, missed on a Dubai bid once. Now auto-checked.",
      badge: "Playbook applied",
      delayClass: "delay-[500ms]",
      Icon: FileSearchIcon,
      iconBg: "bg-[#EDF4FB] border border-[#D6E6F5]",
      iconColor: "text-[#2B5F96]"
    },
    {
      id: 3,
      title: "Tender vs. tech-spec steel-grade mismatch",
      desc: "A discrepancy pattern your teams have hit repeatedly, checked on every new spec version.",
      badge: "Always-on check",
      delayClass: "delay-[900ms]",
      Icon: CompareIcon,
      iconBg: "bg-[#E4F3EC] border border-[#cbe6d7]",
      iconColor: "text-[#145C35]"
    }
  ]

  useEffect(() => {
    const currentRef = sectionRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setHasIntersected(true)
        }
      },
      { threshold: 0.25 }
    )

    if (currentRef) observer.observe(currentRef)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
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
      <div className="absolute inset-0 bg-engineering-grid opacity-[0.35] pointer-events-none z-0" />

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
            The onerous clauses and risks your organization has hit before become a playbook Alfred applies automatically, so a risk caught once is never missed twice.
          </p>

          {/* Phases List: side-by-side grid rows matching alfredworks.html */}
          <div className="flex flex-col">
            {phases.map((phase, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 sm:grid-cols-[132px_1fr] gap-2 sm:gap-[18px] py-[16px] border-t border-[#DDDDE6] items-start ${idx === phases.length - 1 ? 'border-b border-[#DDDDE6]' : ''
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
          <div className="w-full max-w-[480px] bg-white border border-[#DDDDE6] rounded-[24px] shadow-[0_30px_70px_-20px_rgba(26,58,92,0.22),_0_2px_15px_rgba(17,17,19,0.05)] overflow-hidden group transition-all duration-300 hover:shadow-[0_40px_80px_-15px_rgba(26,58,92,0.3)]">
            {/* Top Bar */}
            <div className="flex items-center gap-2 px-4 py-[11px] bg-[#F4F4F7] border-b border-[#DDDDE6] relative select-none">
              <span className="w-[10px] h-[10px] rounded-full bg-[#FF5F56] shadow-sm flex-shrink-0" />
              <span className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E] shadow-sm flex-shrink-0" />
              <span className="w-[10px] h-[10px] rounded-full bg-[#27C93F] shadow-sm flex-shrink-0" />
              <span className="text-[11.5px] text-[#3A3A3F] font-semibold font-sans ml-2">Alfred · Your Organisation's Playbook</span>
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
                    className={`flex gap-[11px] items-start py-[12px] border-b border-[#DDDDE6] last:border-b-0 transition-all duration-700 ease-out cursor-pointer ${isHovered ? 'bg-[#EDF4FB]/10 px-1 rounded-md' : ''
                      } ${item.delayClass} ${hasIntersected
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-8 pointer-events-none'
                      }`}
                  >
                    {/* Custom Playbook Icon Node */}
                    <div className={`w-[26px] h-[26px] rounded-[7px] ${item.iconBg} ${item.iconColor} flex items-center justify-center flex-shrink-0`}>
                      <item.Icon />
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
