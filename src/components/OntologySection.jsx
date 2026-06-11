import React from 'react'
import { motion } from 'framer-motion'

function OntologySection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 bg-primary-bg relative z-10 border-t border-black/5">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
        
        {/* Left Column: Typographic Copy & Narrative */}
        <div className="flex flex-col gap-6 text-left">
          <div className="text-xs font-mono text-accent uppercase tracking-[2px] mb-2 inline-block py-1.5 px-4 bg-accent/5 rounded-full border border-accent/10 w-fit">
            The Moat — Ontology First
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.15] text-secondary-light font-accent tracking-tight m-0">
            The Graph Drives Intelligence.<br />
            <span className="font-normal text-secondary-mid">The LLM is just the surface.</span>
          </h2>
          
          <p className="text-base sm:text-lg text-secondary-mid leading-relaxed font-primary font-light m-0">
            Infrastructure megaprojects are too complex for raw LLMs. When generic AI models read contract PDFs, they hallucinate. 
            Alfred is built differently: it structures project scope, variables, and schedules into a living graph ontology.
          </p>

          <p className="text-sm sm:text-base text-secondary-mid leading-relaxed font-primary font-light m-0">
            We ship a pre-built compliance core: <strong className="text-secondary-light font-semibold">FIDIC · NHAI · Metro Rail · PWD · IRCON · RVNL · AIA · IFC</strong> contracts and risk playbooks. 
            Forward Deployed Engineers (FDEs) map your custom project hierarchy, KPI definitions, and vendor rules onto Alfred’s graph, linking it to your ERP, schedule (Primavera P6), and document systems.
          </p>
        </div>

        {/* Right Column: Visual CSS Node Diagram */}
        <div className="w-full relative flex items-center justify-center p-4 sm:p-8 bg-primary-light border border-black/10 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.03)] overflow-hidden">
          {/* Subtle grid line backdrop */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
          
          <div className="w-full max-w-[420px] flex flex-col gap-6 relative z-10 py-4">
            
            {/* Input Nodes */}
            <div className="flex flex-col gap-3">
              {[
                { title: "FIDIC Cl. 8.4 (Delay Obligation)", type: "Contract Clause", badge: "FIDIC Core" },
                { title: "WBS Activity #1209: Piling Phase 2", type: "Primavera P6 Task", badge: "Float: 4d" },
                { title: "Site update: Rain delay slip (24h)", type: "DPR Progress Feed", badge: "Daily Report" }
              ].map((node, idx) => (
                <div key={idx} className="bg-primary-bg border border-black/5 rounded-lg p-3 flex items-center justify-between text-left shadow-sm">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[0.6rem] text-secondary-dark font-mono uppercase tracking-wider">{node.type}</span>
                    <span className="text-xs font-semibold text-secondary-light">{node.title}</span>
                  </div>
                  <span className="text-[0.55rem] font-mono px-2 py-0.5 rounded bg-black/5 border border-black/5 text-secondary-mid shrink-0">
                    {node.badge}
                  </span>
                </div>
              ))}
            </div>

            {/* Connecting Lines Graphic */}
            <div className="h-8 flex justify-center items-center relative">
              <div className="absolute top-0 bottom-0 w-px bg-dashed border-l border-dashed border-accent/30" />
              <div className="w-4 h-4 rounded-full bg-accent flex items-center justify-center text-white text-[0.6rem] shadow-[0_0_10px_rgba(0,143,112,0.3)] z-10 animate-pulse">
                ↓
              </div>
            </div>

            {/* Central Graph Processing Node */}
            <div className="bg-gradient-to-br from-accent/5 to-accent/[0.01] border-2 border-accent/30 rounded-xl p-4 flex flex-col items-center gap-1.5 shadow-[0_10px_30px_rgba(0,143,112,0.04)] text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />
              <span className="text-[0.65rem] text-accent font-mono tracking-widest uppercase font-bold">Alfred Graph Ontology</span>
              <span className="text-xs font-medium text-secondary-light">Logical Relationship Synced</span>
              <span className="text-[0.6rem] text-secondary-dark font-mono">No Hallucination · Deterministic Reasoning</span>
            </div>

            {/* Connecting Lines Graphic */}
            <div className="h-8 flex justify-center items-center relative">
              <div className="absolute top-0 bottom-0 w-px bg-dashed border-l border-dashed border-accent/30" />
              <div className="w-4 h-4 rounded-full bg-accent flex items-center justify-center text-white text-[0.6rem] shadow-[0_0_10px_rgba(0,143,112,0.3)] z-10 animate-pulse">
                ↓
              </div>
            </div>

            {/* Output Node */}
            <div className="bg-secondary-light text-primary-bg border border-secondary-light rounded-lg p-3.5 flex items-center justify-between text-left shadow-lg">
              <div className="flex flex-col gap-0.5">
                <span className="text-[0.6rem] text-primary-bg/60 font-mono uppercase tracking-wider">Automated Workflow Triggered</span>
                <span className="text-xs font-bold text-white">Notice of Delay & EOT Claim Drafted</span>
              </div>
              <span className="text-[0.55rem] font-mono px-2.5 py-1 rounded bg-accent text-white font-bold uppercase shrink-0 tracking-wider">
                Ready
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default OntologySection
