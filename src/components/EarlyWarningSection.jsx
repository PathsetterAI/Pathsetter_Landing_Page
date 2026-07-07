import React, { useState } from 'react'

export default function EarlyWarningSection() {
  const [hoveredAlert, setHoveredAlert] = useState(null)

  const phases = [
    {
      pl: "Bidding",
      pt: "Scans specs for onerous clauses and terms outside industry norms before pricing."
    },
    {
      pl: "Pre-Construction",
      pt: "Extracts every buried contract obligation and converts them to alerts with assigned owners."
    },
    {
      pl: "Execution",
      pt: "Syncs schedule & contracts to flag variations, LD risk, and claim opportunities in real time."
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
      borderColor: "border-[#B52B1A] border-l-4"
    },
    {
      id: "warn",
      type: "warning",
      title: "LD exposure forming on Zone 3",
      desc: "Slippage now within liquidated-damages window · Clause 8.7",
      code: "Clause 8.7",
      badgeColor: "bg-[#B88500] text-white",
      borderColor: "border-[#B88500] border-l-4"
    },
    {
      id: "info",
      type: "info",
      title: "Spec revision changes rebar grade",
      desc: "Tender vs. tech-spec mismatch flagged for review · Rev C",
      code: "Rev C",
      badgeColor: "bg-[#2B5F96] text-white",
      borderColor: "border-[#2B5F96] border-l-4"
    }
  ]

  return (
    <section id="capabilities" className="relative w-full bg-white py-20 sm:py-24 px-6 sm:px-12 md:px-16 lg:px-20 border-b border-[#DDDDE6] overflow-hidden">
      {/* Subtle Engineering Grid background */}
      <div className="absolute inset-0 bg-engineering-grid opacity-[0.015] pointer-events-none z-0" />
      
      <div className="relative z-10 w-full max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center text-left">
        
        {/* Left Column: Copy & Phases */}
        <div className="flex flex-col gap-6">
          {/* Section Tag */}
          <div className="inline-flex items-center gap-2 bg-[#EDF4FB] border border-[#D6E6F5] px-3.5 py-1.5 rounded-full self-start">
            <span className="w-2 h-2 rounded bg-[#FFC20E] shrink-0" />
            <span className="text-[11px] font-mono text-[#1A3A5C] uppercase tracking-wide font-bold">
              Alfred Early Warning
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-[#1A3A5C] leading-[1.2] m-0 tracking-tight">
            Catches the risk in the document before it becomes a problem on site.
          </h2>

          {/* Description */}
          <p className="text-[#5A5A62] text-xs sm:text-[13.5px] leading-relaxed max-w-lg m-0 mt-1">
            Alfred reads contract, schedule, and site reality together — and surfaces what threatens the project the moment it appears.
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

        {/* Right Column: Alert Centre Mockup Panel */}
        <div className="w-full flex justify-center lg:justify-start">
          <div className="w-full max-w-[480px] bg-white border border-[#DDDDE6] rounded-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl">
            {/* Top Bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#F4F4F7] border-b border-[#DDDDE6] relative overflow-hidden">
              <span className="w-2 h-2 rounded-full bg-[#DDDDE6]" />
              <span className="w-2 h-2 rounded-full bg-[#DDDDE6]" />
              <span className="w-2 h-2 rounded-full bg-[#DDDDE6]" />
              <span className="text-[10.5px] text-[#6B6B74] font-semibold font-mono ml-2">Alert Centre</span>
              <span className="text-[9px] text-[#6B6B74] font-mono ml-auto">routed by role · Zone 3</span>
              {/* Scanning sweep effect on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-[35%] bg-gradient-to-r from-transparent via-[#2B5F96] to-transparent -translate-x-[120%] group-hover:animate-[scanx_1.8s_ease-in-out_infinite]" />
            </div>

            {/* Body */}
            <div className="p-4 flex flex-col gap-3.5 bg-white">
              {alerts.map((alert) => {
                const isHovered = hoveredAlert === alert.id
                return (
                  <div
                    key={alert.id}
                    onMouseEnter={() => setHoveredAlert(alert.id)}
                    onMouseLeave={() => setHoveredAlert(null)}
                    className={`flex gap-3.5 p-3.5 rounded-xl border border-[#DDDDE6] bg-white transition-all duration-300 ${alert.borderColor} ${
                      isHovered ? 'translate-x-1.5 shadow-md border-r-[#DDDDE6]' : 'shadow-sm'
                    }`}
                  >
                    {/* Severity Badge */}
                    <div className="flex-shrink-0">
                      <span className={`inline-flex items-center justify-center text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded relative ${alert.badgeColor}`}>
                        {alert.type === 'critical' && (
                          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#B52B1A] animate-ping" />
                        )}
                        {alert.type}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-[13px] font-semibold text-[#111113] tracking-tight leading-tight m-0">
                        {alert.title}
                      </h4>
                      <p className="text-[10.5px] text-[#6B6B74] leading-relaxed m-0 mt-1">
                        {alert.desc.split(alert.code)[0]}
                        <code className="bg-[#F4F4F7] border border-[#DDDDE6] rounded px-1 py-0.5 text-[9.5px] font-mono text-[#2B5F96] font-semibold">
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
        </div>

      </div>
    </section>
  )
}
