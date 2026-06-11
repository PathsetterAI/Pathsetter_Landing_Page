import React from 'react'
import { motion } from 'framer-motion'

function VisionSection() {
  const horizons = [
    {
      phase: "PHASE 1",
      title: "Contract & Schedule Assistant",
      license: "USER-BASED LICENSE",
      wedge: "Today's Wedge",
      points: [
        "Obligations, claims & risk reasoning",
        "Schedule analysis (CPM, delay, float)",
        "Site updates contract cross-reference",
        "Agentic workflows tied to obligations"
      ]
    },
    {
      phase: "PHASE 2",
      title: "Project Services as Outcomes",
      license: "AGENT-BASED LICENSE",
      wedge: "Growth Phase",
      points: [
        "Humans + agents service delivery",
        "Alfred core powers PMC field teams",
        "Co-built playbooks per vertical",
        "Reduce PMC unit-economics cost"
      ]
    },
    {
      phase: "PHASE 3",
      title: "Agentic OS for Construction",
      license: "OUTCOME-BASED LICENSE",
      wedge: "Future State",
      points: [
        "Agent-to-agent orchestration",
        "User-facing agents for every role",
        "Open agent marketplace (3rd party)",
        "Outcomes priced — not seats"
      ]
    }
  ]

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 bg-primary-bg relative z-10 border-t border-black/5">
      <div className="max-w-[1300px] mx-auto flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4">
          <div className="text-xs font-mono text-accent uppercase tracking-[2px] mb-2 inline-block py-1.5 px-4 bg-accent/5 rounded-full border border-accent/10">
            Our Vision
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.15] text-secondary-light font-accent tracking-tight m-0">
            From Contract Assistant <br />
            <span className="font-normal text-secondary-mid">to the Operating System of Construction.</span>
          </h2>
          
          <p className="text-sm sm:text-base text-secondary-mid leading-relaxed font-primary font-light m-0">
            A three-horizon progression driven by one unified ontology backbone, shifting control from manual seats to automated outcomes.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-black/5 divide-y md:divide-y-0 md:divide-x divide-black/5 bg-primary-light rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.02)] overflow-hidden">
          {horizons.map((h, i) => (
            <div key={i} className="p-8 sm:p-10 flex flex-col gap-6 text-left relative group hover:bg-black/[0.005] transition-colors duration-300">
              
              {/* Card Header */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-[0.65rem] font-mono text-accent font-bold tracking-widest">{h.phase}</span>
                  <span className="text-[0.55rem] font-mono font-medium px-2 py-0.5 rounded bg-black/5 border border-black/5 text-secondary-dark uppercase tracking-wider">
                    {h.wedge}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-secondary-light font-accent mt-2 leading-tight">
                  {h.title}
                </h3>
                <span className="text-[0.6rem] font-mono text-secondary-dark tracking-wider uppercase mt-1">
                  {h.license}
                </span>
              </div>

              <div className="h-px bg-black/5 w-full" />

              {/* Bullet Points */}
              <ul className="flex flex-col gap-3.5 my-2">
                {h.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-secondary-mid leading-relaxed">
                    <span className="text-accent text-[0.6rem] leading-none mt-1.5 font-mono">▪</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

        {/* Progression Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono text-secondary-dark border border-black/5 bg-primary-light py-4 px-6 rounded-full w-fit mx-auto shadow-sm">
          <span className="font-semibold text-secondary-light">Model Shift:</span>
          <span>User License</span>
          <span className="text-accent">→</span>
          <span>Agent License</span>
          <span className="text-accent">→</span>
          <span>Outcome License</span>
        </div>

      </div>
    </section>
  )
}

export default VisionSection
