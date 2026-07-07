import React, { useState, useEffect, useRef } from 'react'

export default function EarlyWarningSection() {
  const [hasIntersected, setHasIntersected] = useState(false)
  const [hoveredAlert, setHoveredAlert] = useState(null)
  const sectionRef = useRef(null)

  const phases = [
    {
      pl: "Bidding",
      pt: "Scans bid documents and technical specifications for onerous clauses and terms that fall outside industry norms."
    },
    {
      pl: "Pre-Construction",
      pt: "Pulls every obligation buried in the contract and turns it into an alert with an owner attached."
    },
    {
      pl: "Execution",
      pt: "Watches contracts and schedule together — flags variations, LD exposure, and site events that could justify a claim or EOT, as they happen."
    }
  ]

  const alerts = [
    {
      id: "crit",
      type: "critical",
      title: "Piping erection 40% behind plan",
      desc: "Threatens Milestone 7 · DPR 12–18 Jun · routed to piping engineer + planner",
      code: "DPR 12-18 Jun",
      badgeColor: "bg-[#B52B1A] text-white",
      borderColor: "border-[#B52B1A] border-l-4",
      delayClass: "delay-[100ms]"
    },
    {
      id: "warn",
      type: "warning",
      title: "LD exposure forming on Zone 3",
      desc: "Slippage now triggers liquidated-damages risk · Clause 8.7",
      code: "Clause 8.7",
      badgeColor: "bg-[#B88500] text-white",
      borderColor: "border-[#B88500] border-l-4",
      delayClass: "delay-[500ms]"
    },
    {
      id: "info",
      type: "info",
      title: "Draft EOT notice prepared",
      desc: "Notice window open for 18 more days · Clause 20.1",
      code: "Clause 20.1",
      badgeColor: "bg-[#2B5F96] text-white",
      borderColor: "border-[#2B5F96] border-l-4",
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

  return (
    <section 
      ref={sectionRef} 
      id="capabilities" 
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
              Alfred Early Warning
            </span>
          </div>

          {/* Heading exactly matching alfredworks.html */}
          <h2 className="text-[26px] md:text-[36px] font-extrabold text-[#1A3A5C] leading-[1.12] tracking-[-0.025em] m-0 max-w-xl mb-[12px]">
            Catches the risk in the document before it becomes a problem on&nbsp;site.
          </h2>

          {/* Subtext exactly matching alfredworks.html */}
          <p className="text-[#6B6B74] text-[17px] leading-[1.55] max-w-lg m-0 mb-[28px] font-normal">
            Alfred reads contract, schedule, and site reality together — and surfaces what threatens the project the moment it appears.
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

        {/* Right Column: Visual Anchor Alert Panel & Outcomes */}
        <div className="w-full flex flex-col gap-6 justify-center">
          {/* Mockup Card */}
          <div className="w-full bg-white border border-[#DDDDE6] rounded-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl">
            {/* Top Bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#F4F4F7] border-b border-[#DDDDE6] relative overflow-hidden select-none">
              <span className="w-2 h-2 rounded-full bg-[#DDDDE6]" />
              <span className="w-2 h-2 rounded-full bg-[#DDDDE6]" />
              <span className="w-2 h-2 rounded-full bg-[#DDDDE6]" />
              <span className="text-[10.5px] text-[#6B6B74] font-semibold font-mono ml-2">Alert Centre</span>
              <span className="text-[9px] text-[#6B6B74] font-mono ml-auto">routed by role · Zone 3</span>
              {/* Subtle sweep line across header */}
              <div className="absolute bottom-0 left-0 h-[2px] w-[35%] bg-gradient-to-r from-transparent via-[#2B5F96] to-transparent -translate-x-[120%] group-hover:animate-[scanx_2s_ease-in-out_infinite]" />
            </div>

            {/* Body - Staggered Slide-in transition */}
            <div className="p-4 flex flex-col gap-3.5 bg-white">
              {alerts.map((alert) => {
                const isHovered = hoveredAlert === alert.id
                return (
                  <div
                    key={alert.id}
                    onMouseEnter={() => setHoveredAlert(alert.id)}
                    onMouseLeave={() => setHoveredAlert(null)}
                    className={`flex gap-3.5 p-3.5 rounded-xl border border-[#DDDDE6] bg-white transition-all duration-700 ease-out cursor-pointer ${alert.borderColor} ${alert.delayClass} ${
                      hasIntersected 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-8 pointer-events-none'
                    } ${
                      isHovered ? 'translate-x-1.5 shadow-md border-r-[#DDDDE6]' : 'shadow-sm'
                    }`}
                  >
                    {/* Severity Badge */}
                    <div className="flex-shrink-0 select-none">
                      <span className={`inline-flex items-center justify-center text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded relative ${alert.badgeColor}`}>
                        {alert.type}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[13px] sm:text-[14px] font-bold text-[#111113] tracking-tight leading-tight m-0">
                        {alert.title}
                      </h4>
                      <p className="text-[11px] sm:text-[11.5px] text-[#6B6B74] leading-relaxed m-0 mt-1">
                        {alert.desc.split(alert.code)[0]}
                        <code className="bg-[#F4F4F7] border border-[#DDDDE6] rounded px-1.5 py-0.5 text-[10px] font-mono text-[#2B5F96] font-bold">
                          {alert.code}
                        </code>
                        {alert.desc.split(alert.code)[1]}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Outcomes Metrics Card */}
          <div className={`grid grid-cols-3 gap-4 bg-[#F4F4F7] border border-[#DDDDE6] rounded-xl p-4 text-center divide-x divide-[#DDDDE6] transition-all duration-1000 delay-[1300ms] ${
            hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}>
            <div className="flex flex-col gap-1 items-center justify-center">
              <span className="text-[15px] sm:text-base font-extrabold text-[#1A3A5C] tracking-tight leading-none">
                18 Days
              </span>
              <span className="text-[9px] sm:text-[9.5px] font-mono text-[#6B6B74] uppercase tracking-wider font-semibold">
                Detected Earlier
              </span>
            </div>
            
            <div className="flex flex-col gap-1 items-center justify-center pl-2">
              <span className="text-[15px] sm:text-base font-extrabold text-[#B52B1A] tracking-tight leading-none">
                Potential LD
              </span>
              <span className="text-[9px] sm:text-[9.5px] font-mono text-[#6B6B74] uppercase tracking-wider font-semibold">
                Avoided
              </span>
            </div>
            
            <div className="flex flex-col gap-1 items-center justify-center pl-2">
              <span className="text-[15px] sm:text-base font-extrabold text-[#145C35] tracking-tight leading-none">
                42 Seconds
              </span>
              <span className="text-[9px] sm:text-[9.5px] font-mono text-[#6B6B74] uppercase tracking-wider font-semibold">
                Notice Drafted
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
