import React, { useState } from 'react'

const enterpriseFeatures = [
  {
    title: "JV Consortium Sandbox",
    subtitle: "Isolated Multi-Party Workspace",
    description: "Spin up shared yet isolated data workspaces for joint ventures. Ensure different contractors, consultants, and developers collaborate under strict data walls with zero leak risk.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    title: "Sovereign & On-Premise Cloud",
    subtitle: "Government & Agency Compliant",
    description: "Deploys directly on-premise or within national government cloud architectures (NIC, AWS GovCloud) to meet strict capital project hosting regulations.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </svg>
    )
  },
  {
    title: "Audit-Grade Accountability",
    subtitle: "Traceable Claims Logic",
    description: "Every contract obligation matched or claim auto-drafted includes exact page, clause, and sub-clause reference citations, ensuring AI-generated items withstand legal audits.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </svg>
    )
  },
  {
    title: "Historical Intelligence",
    subtitle: "Benchmark Across Past Packages",
    description: "Leverage machine learning to analyze delay patterns, material price escalation, and dispute outcomes across historical packages to optimize future bids.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    )
  },
  {
    title: "Granular Access Governance",
    subtitle: "Contractor vs Owner Privileges",
    description: "Define distinct permission boundaries for JV partners, independent engineers, authority auditors, and subcontractors, controlling document visibility at a granular scale.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    )
  },
  {
    title: "Connected Infrastructure APIs",
    subtitle: "Interoperable with Design & GIS",
    description: "Connects with custom ERPs, GIS databases, and engineering design engines (Autodesk) via secure enterprise APIs for complete data alignment.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    )
  }
]

function EnterpriseSection() {
  const [activeIdx, setActiveIdx] = useState(0)
  const activeFeature = enterpriseFeatures[activeIdx]

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 bg-primary-light relative z-10 overflow-hidden border-t border-border w-full">
      <div className="max-w-[1300px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto flex flex-col gap-4">
          <div
            className="text-xs font-mono text-[#2B5F96] uppercase tracking-[2px] mb-2 inline-block py-1.5 px-4 bg-[#D6E6F5] rounded-full border border-[#2B5F96]/20 w-fit mx-auto"
          >
            Enterprise Ready
          </div>
          
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.15] text-secondary-light font-accent tracking-tight m-0"
          >
            Built for Megaproject Scale & Security
          </h2>
          
          <p
            className="text-sm sm:text-base text-secondary-mid max-w-[600px] mx-auto leading-relaxed font-primary"
          >
            Enterprise-grade governance, isolated data vaults, and government-compliant architectures designed for joint ventures and high-stakes capital portfolios.
          </p>
        </div>

        {/* 3x2 Grid on Left, Content Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 bg-primary-bg border border-border rounded-3xl p-6 sm:p-10 md:p-14 shadow-[0_15px_50px_rgba(37,28,20,0.02)]">
          
          {/* Left Side: 3x2 Grid of Interactive Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 self-center">
            {enterpriseFeatures.map((feature, index) => {
              const isActive = activeIdx === index
              const numStr = String(index + 1).padStart(2, '0')

              return (
                <button
                  key={index}
                  onClick={() => setActiveIdx(index)}
                  className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 focus:outline-none relative overflow-hidden group w-full ${
                    isActive 
                      ? 'bg-white border-[#2B5F96] shadow-sm' 
                      : 'bg-transparent border-transparent hover:bg-white/40 hover:border-border'
                  }`}
                >
                  {/* Left branding blue indicator strip */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2B5F96] rounded-r" />
                  )}

                  {/* Icon Block */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#D6E6F5] border-[#2B5F96]/20 text-[#2B5F96]' 
                      : 'bg-white border-border text-secondary-mid group-hover:text-[#2B5F96]'
                  }`}>
                    {feature.icon}
                  </div>

                  {/* Content block */}
                  <div className="flex flex-col gap-1 pr-4">
                    <div className="flex items-center gap-2">
                      <span className={`font-mono text-[0.6rem] font-bold ${isActive ? 'text-[#2B5F96]' : 'text-secondary-dark'}`}>
                        {numStr} //
                      </span>
                      <span className="font-mono text-[0.55rem] text-secondary-dark tracking-wider uppercase font-bold">
                        {feature.subtitle}
                      </span>
                    </div>
                    <h3 className="font-accent text-base sm:text-lg text-secondary-light font-bold leading-tight m-0">
                      {feature.title}
                    </h3>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right Side: Static Detailed Info Display Panel */}
          <div className="bg-white border border-border border-t-4 border-t-[#FFC20E] rounded-3xl p-8 sm:p-10 shadow-[0_15px_45px_-10px_rgba(43,95,150,0.05)] relative overflow-hidden flex flex-col gap-4 text-left min-h-[310px] lg:h-[330px] self-center w-full">
            {/* Visual Accent Corner Glow */}
            <div className="absolute -right-12 -bottom-12 w-36 h-36 bg-[#D6E6F5]/40 rounded-full blur-[40px] pointer-events-none" />

            {/* Category & Title */}
            <div className="flex flex-col gap-1">
              <div className="font-mono text-[0.65rem] text-secondary-dark tracking-widest uppercase font-bold">
                {activeFeature.subtitle}
              </div>
              <h3 className="font-accent text-2xl sm:text-3xl text-secondary-light font-bold m-0 leading-tight">
                {activeFeature.title}
              </h3>
            </div>

            <div className="h-px bg-border w-full" />

            {/* Feature Description */}
            <p className="font-primary text-[0.95rem] text-secondary-mid leading-relaxed m-0">
              {activeFeature.description}
            </p>

            {/* Dynamic Outcomes checklist matching the module context */}
            <div className="flex flex-col gap-2.5 pt-1">
              <span className="text-[0.65rem] font-mono text-[#B88500] uppercase tracking-wider font-bold">Scope & Capabilities</span>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
                {[
                  activeIdx === 0 && "Virtual legal data-rooms mapped per joint-venture contractor with zero crosstalk",
                  activeIdx === 0 && "Secure metadata tags that isolate owner drafts from sub-tier contractors",
                  activeIdx === 1 && "Complete local deployment onto private state clouds (NIC / NIC-NET / AWS GovCloud)",
                  activeIdx === 1 && "Air-gapped enterprise setups available for defense and strategic transport works",
                  activeIdx === 2 && "Automated legal citation generator mapping claims to clauses and page lines",
                  activeIdx === 2 && "Sub-clause compliance triggers that withstand independent third-party audits",
                  activeIdx === 3 && "Delay risk benchmark models built on historical regional infrastructure packages",
                  activeIdx === 3 && "WBS pattern recognition that alerts of price escalation variables in real-time",
                  activeIdx === 4 && "RBAC console for project management consultants, authority engineers, and contractors",
                  activeIdx === 4 && "Granular read-write permissions mapped to individual contract obligations",
                  activeIdx === 5 && "BIM (Autodesk Revit/Navisworks) model metadata extraction via automated pipeline",
                  activeIdx === 5 && "Direct REST integration with regional GIS surveys, Primavera P6 databases, and SAP"
                ]
                  .filter(Boolean)
                  .map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-secondary-mid font-primary">
                      <svg className="w-3.5 h-3.5 text-[#2B5F96] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default EnterpriseSection
