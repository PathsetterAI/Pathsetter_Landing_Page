import React from 'react'
import { motion } from 'framer-motion'

function VisionSection() {
  const pillars = [
    {
      badge: "PILLAR 01 // ANALYSIS",
      title: "Contract Intelligence",
      tagline: "Unlocking hidden risk, monitoring obligations, and preventing value leakage across complex agreements.",
      points: [
        "Obligations, claims & proactive risk reasoning",
        "Site updates cross-referenced directly with contract clauses",
        "Automated notice generation and claim compliance tracking",
        "Agentic workflows mapped directly to contractual commitments"
      ],
      outcome: "Zero missed deadlines or unmitigated claims"
    },
    {
      badge: "PILLAR 02 // TIMELINES",
      title: "Schedule Assistance",
      tagline: "Protecting project velocity by predicting slippage, analyzing logic paths, and attributing delay.",
      points: [
        "Schedule analysis including CPM, delay, and float consumption",
        "Impact forecasting connecting timeline changes to cost risk",
        "Critical path optimization and bottleneck identification",
        "Automatic updates aligned with historical execution speed"
      ],
      outcome: "Minimized schedule slippage and delay disputes"
    }
  ]

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 bg-[#ebe4d8] relative z-10 border-t border-border">
      <div className="max-w-[1300px] mx-auto flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4">
          <div className="text-xs font-mono text-accent uppercase tracking-[2px] mb-2 inline-block py-1.5 px-4 bg-accent-light rounded-full border border-accent/20">
            Our Vision: Phase 1
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.15] text-secondary-light font-accent tracking-tight m-0">
            Contract Intelligence & <br />
            <span className="font-normal text-secondary-mid">Schedule Assistance.</span>
          </h2>
          
          <p className="text-sm sm:text-base text-secondary-mid leading-relaxed font-primary font-normal m-0">
            Our immediate release delivers deep AI reasoning and timeline protection at the core of capital projects, driven by a unified ontology backbone.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
          {pillars.map((p, i) => (
            <div 
              key={i} 
              className="bg-white border border-accent/30 rounded-2xl p-8 sm:p-10 flex flex-col justify-between text-left shadow-[0_10px_35px_rgba(0,107,84,0.02)] relative group hover:shadow-[0_15px_40px_rgba(0,107,84,0.04)] transition-all duration-300"
            >
              <div className="flex flex-col gap-6">
                {/* Badge & Title */}
                <div className="flex flex-col gap-2">
                  <span className="text-[0.65rem] font-mono text-accent font-bold tracking-widest">{p.badge}</span>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-secondary-light font-accent leading-tight m-0">
                    {p.title}
                  </h3>
                </div>

                <p className="text-sm text-secondary-mid leading-relaxed font-primary font-normal m-0 border-l-2 border-accent/30 pl-4">
                  {p.tagline}
                </p>

                <div className="h-px bg-border w-full" />

                {/* Points */}
                <ul className="flex flex-col gap-4 my-2">
                  {p.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-secondary-mid leading-relaxed">
                      <span className="text-accent text-[0.6rem] leading-none mt-1.5 font-mono">▪</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                <span className="text-[0.6rem] font-mono text-secondary-dark tracking-wider uppercase">EXPECTED OUTCOME</span>
                <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-accent-light border border-accent/10 text-accent uppercase tracking-wider">
                  {p.outcome}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Progression Footer - Simplified for Phase 1 outcome */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono text-secondary-dark border border-accent/20 bg-white py-4 px-6 rounded-full w-fit mx-auto shadow-sm">
          <span className="font-semibold text-secondary-light">Deployment Model:</span>
          <span>Ontology Integration</span>
          <span className="text-accent">→</span>
          <span>Contract Assistance</span>
          <span className="text-accent">→</span>
          <span>Schedule Protection</span>
        </div>

      </div>
    </section>
  )
}

export default VisionSection
