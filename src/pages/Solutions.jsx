import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

function Solutions() {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('epcs') // 'epcs', 'owners', or 'pmcs'

  useEffect(() => {
    window.scrollTo(0, 0)
    
    // Check if redirect state was passed
    if (location.state?.tab) {
      const tabMap = {
        'epcs': 'epcs',
        'owners': 'owners',
        'pmcs': 'pmcs',
        'EPCs': 'epcs',
        'Owners': 'owners',
        'PMCs': 'pmcs'
      }
      const mapped = tabMap[location.state.tab]
      if (mapped) {
        setActiveTab(mapped)
      }
    }
  }, [location.state])

  const handleDemoClick = () => {
    navigate('/demo')
    window.scrollTo(0, 0)
  }

  // Tabs configurations
  const tabs = [
    {
      id: 'epcs',
      label: 'EPCs',
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 3a9 9 0 00-9 9v1h18v-1a9 9 0 00-9-9zM3 13h18M5 13v3a2 2 0 002 2h10a2 2 0 002-2v-3" />
        </svg>
      )
    },
    {
      id: 'owners',
      label: 'Owners',
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 'pmcs',
      label: 'PMCs',
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ]

  return (
    <div className="bg-[#F4F4F7] min-h-screen text-[#6B6B74] font-primary text-left selection:bg-[#FFC20E]/30 relative overflow-x-hidden">
      <SEO 
        title="Who It's For — Alfred" 
        description="Same contract. Different stake in it. Alfred bridges the informational gap between stakeholders on construction sites."
      />
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-24 px-6 sm:px-12 md:px-16 lg:px-20 relative z-10">
        {/* Top ambient radial yellow glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none z-0" 
          style={{
            background: 'radial-gradient(circle at center, rgba(255, 194, 14, 0.05), transparent 70%)'
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          
          {/* Header Block */}
          <div className="text-center flex flex-col gap-3 max-w-3xl mx-auto mb-10">
            {/* Eyebrow */}
            <div className="w-fit bg-[#FFF6D6] text-[#B88500] text-[10px] font-mono font-bold tracking-widest px-3.5 py-1 rounded-full uppercase border border-[#FFC20E]/10 mx-auto">
              WHO WE SERVE
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-[38px] lg:text-[40px] font-bold leading-[1.25] tracking-tight m-0 mt-2">
              <span className="text-[#1A3A5C]">Same contract.</span> <br />
              <span className="text-[#2B5F96]">Different stake in it.</span>
            </h1>
            <p className="text-[#5A5A62] text-xs sm:text-[13.5px] leading-relaxed m-0 mt-1 max-w-xl mx-auto font-normal">
              Alfred bridges the informational gap between stakeholders on construction sites, maintaining a single source of contractual truth.
            </p>
          </div>

          {/* Sticky/Tethered Tab Bar */}
          <div className="flex justify-center border-b border-[#DDDDE6]/50 pb-4 mb-8">
            <div className="flex bg-[#EAEAEF] p-1.5 rounded-xl gap-1.5">
              {tabs.map((tab) => {
                const active = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 border cursor-pointer select-none ${
                      active 
                      ? 'bg-white border-[#DDDDE6] text-[#1A3A5C] shadow-sm' 
                      : 'bg-transparent border-transparent text-[#5A5A62] hover:text-[#1A3A5C]'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Card Content Block */}
          <div className="bg-white border border-[#DDDDE6] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-sm min-h-[520px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              
              {/* EPCs Content */}
              {activeTab === 'epcs' && (
                <motion.div
                  key="epcs"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center w-full"
                >
                  {/* Left: Copy details */}
                  <div className="flex flex-col gap-4 text-left">
                    <span className="text-[#B88500] text-[10px] font-mono font-bold tracking-widest uppercase">
                      EPCS & GENERAL CONTRACTORS
                    </span>
                    <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#1A3A5C] leading-[1.3] m-0 mt-0.5">
                      Protect the margin you bid — from the clause you didn't catch to the claim you filed too late.
                    </h2>
                    
                    {/* Checklist bullets */}
                    <div className="flex flex-col gap-3.5 mt-4">
                      {[
                        { title: "Pre-bid risk scanning", desc: "Read tenders against standard codes in minutes." },
                        { title: "Zero notice-window leakages", desc: "Alert commercial teams before EOT deadlines expire." },
                        { title: "Evidence aggregation", desc: "Automatically draft structured claim letters with site DPR evidence linked." }
                      ].map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs sm:text-[13px] text-[#5A5A62] leading-relaxed">
                          {/* Green checkmark circle */}
                          <div className="w-4.5 h-4.5 rounded-full bg-[#E4F3EC] flex items-center justify-center shrink-0 border border-[#145C35]/10 mt-0.5 select-none">
                            <svg className="w-3 h-3 text-[#145C35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>
                            <strong className="text-[#1A3A5C] font-semibold">{bullet.title}:</strong> {bullet.desc}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={handleDemoClick}
                      className="bg-[#1A3A5C] text-white py-2.5 px-6 rounded-lg font-semibold cursor-pointer text-xs sm:text-[13px] transition-all duration-200 hover:bg-[#2B5F96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A3A5C] focus-visible:outline-offset-2 active:scale-95 shadow-[0_4px_16px_rgba(26,58,92,0.12)] text-center w-full sm:w-fit mt-6"
                    >
                      Request EPCs Demo
                    </button>
                  </div>

                  {/* Right: Mock Panel view */}
                  <div className="w-full bg-[#F4F4F7] border border-[#DDDDE6] rounded-xl overflow-hidden shadow-sm flex flex-col font-sans text-left">
                    {/* Header bar */}
                    <div className="bg-[#1A3A5C] text-white px-4 py-3 flex justify-between items-center text-[10px] sm:text-[11px] font-mono select-none">
                      <span>Alfred Contractor View – Margin Protection Register</span>
                      <span className="bg-[#FFC20E]/20 text-[#FFC20E] border border-[#FFC20E]/30 px-2 py-0.5 rounded text-[8px] font-bold tracking-widest">
                        SECURE
                      </span>
                    </div>

                    {/* Content area */}
                    <div className="p-4 sm:p-5 flex flex-col gap-4 bg-white">
                      {/* Red warning box */}
                      <div className="bg-[#FFF0F0] text-[#D32F2F] border border-[#FFD2D2] rounded-lg p-3 text-[11px] sm:text-xs flex justify-between items-center font-semibold">
                        <span>⚠️ 2 Late notice warnings active</span>
                        <span>EOT Cl. 5.1 risk</span>
                      </div>

                      {/* Row 1 */}
                      <div className="bg-[#F4F4F7] border border-[#DDDDE6] rounded-lg p-3 flex justify-between items-center text-xs">
                        <div className="flex flex-col gap-0.5">
                          <span className="font-bold text-[#1A3A5C]">Variation #12 (Soil excavation)</span>
                          <span className="text-[#5A5A62] text-[10.5px]">Engineer instructed overwork. No claim drafted yet.</span>
                        </div>
                        <span className="text-[#D32F2F] font-bold shrink-0 pl-2">Expires in 2 days</span>
                      </div>

                      {/* Row 2 */}
                      <div className="bg-[#F4F4F7] border border-[#DDDDE6] rounded-lg p-3 flex justify-between items-center text-xs">
                        <div className="flex flex-col gap-0.5">
                          <span className="font-bold text-[#1A3A5C]">Sub-base compaction delay</span>
                          <span className="text-[#5A5A62] text-[10.5px]">Heavy rainfall. Access path blocked.</span>
                        </div>
                        <span className="text-[#B88500] font-bold shrink-0 pl-2 flex items-center gap-1">
                          Draft notice ready <span className="text-[11px]">⚡</span>
                        </span>
                      </div>

                      {/* Card Footer */}
                      <div className="flex justify-between items-center text-[9px] sm:text-[10px] text-[#6B6B74] font-mono mt-4 pt-3 border-t border-[#DDDDE6]/50">
                        <span>Ref: FIDIC-Red-2017</span>
                        <span>Data classification: Enterprise Gated</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Owners Content */}
              {activeTab === 'owners' && (
                <motion.div
                  key="owners"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center w-full"
                >
                  {/* Left: Copy details */}
                  <div className="flex flex-col gap-4 text-left">
                    <span className="text-[#B88500] text-[10px] font-mono font-bold tracking-widest uppercase">
                      OWNERS & DEVELOPERS
                    </span>
                    <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#1A3A5C] leading-[1.3] m-0 mt-0.5">
                      Know your project's real contractual position — not the version that reaches you after it's a problem.
                    </h2>
                    
                    {/* Checklist bullets */}
                    <div className="flex flex-col gap-3.5 mt-4">
                      {[
                        { title: "Contractor compliance auditing", desc: "Monitor contractor notices against real-time site data." },
                        { title: "Early liquidated damages alerts", desc: "Track contractor obligations milestones under Cl. 47." },
                        { title: "Objective dispute resolution", desc: "Ground claims and extensions in clean, indisputable factual chains." }
                      ].map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs sm:text-[13px] text-[#5A5A62] leading-relaxed">
                          {/* Green checkmark circle */}
                          <div className="w-4.5 h-4.5 rounded-full bg-[#E4F3EC] flex items-center justify-center shrink-0 border border-[#145C35]/10 mt-0.5 select-none">
                            <svg className="w-3 h-3 text-[#145C35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>
                            <strong className="text-[#1A3A5C] font-semibold">{bullet.title}:</strong> {bullet.desc}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={handleDemoClick}
                      className="bg-[#1A3A5C] text-white py-2.5 px-6 rounded-lg font-semibold cursor-pointer text-xs sm:text-[13px] transition-all duration-200 hover:bg-[#2B5F96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A3A5C] focus-visible:outline-offset-2 active:scale-95 shadow-[0_4px_16px_rgba(26,58,92,0.12)] text-center w-full sm:w-fit mt-6"
                    >
                      Request Owners Demo
                    </button>
                  </div>

                  {/* Right: Mock Panel view */}
                  <div className="w-full bg-[#F4F4F7] border border-[#DDDDE6] rounded-xl overflow-hidden shadow-sm flex flex-col font-sans text-left">
                    {/* Header bar */}
                    <div className="bg-[#1A3A5C] text-white px-4 py-3 flex justify-between items-center text-[10px] sm:text-[11px] font-mono select-none">
                      <span>Alfred Developer View – Contractor Compliance Auditing</span>
                      <span className="bg-[#FFC20E]/20 text-[#FFC20E] border border-[#FFC20E]/30 px-2 py-0.5 rounded text-[8px] font-bold tracking-widest">
                        SECURE
                      </span>
                    </div>

                    {/* Content area */}
                    <div className="p-4 sm:p-5 flex flex-col gap-4 bg-white">
                      {/* Green alert box */}
                      <div className="bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9] rounded-lg p-3 text-[11px] sm:text-xs flex justify-between items-center font-semibold">
                        <span>✅ All contractor obligations synchronized</span>
                        <span>FIDIC compliant</span>
                      </div>

                      {/* Row 1 */}
                      <div className="bg-[#F4F4F7] border border-[#DDDDE6] rounded-lg p-3 flex justify-between items-center text-xs">
                        <div className="flex flex-col gap-0.5">
                          <span className="font-bold text-[#1A3A5C]">Milestone 2B: Foundations Complete</span>
                          <span className="text-[#5A5A62] text-[10.5px]">Actual progress: 92%. Planned: 100%.</span>
                        </div>
                        <span className="text-[#D32F2F] font-bold shrink-0 pl-2">Risk: 8d delay alert</span>
                      </div>

                      {/* Row 2 */}
                      <div className="bg-[#F4F4F7] border border-[#DDDDE6] rounded-lg p-3 flex justify-between items-center text-xs">
                        <div className="flex flex-col gap-0.5">
                          <span className="font-bold text-[#1A3A5C]">Contractor Notice Cl. 20.1 (Water main)</span>
                          <span className="text-[#5A5A62] text-[10.5px]">Fact audit: Work-front was clear on day 5 of notice window.</span>
                        </div>
                        <span className="text-[#2B5F96] font-bold shrink-0 pl-2">Alfred audit generated</span>
                      </div>

                      {/* Card Footer */}
                      <div className="flex justify-between items-center text-[9px] sm:text-[10px] text-[#6B6B74] font-mono mt-4 pt-3 border-t border-[#DDDDE6]/50">
                        <span>Ref: FIDIC-Red-2017</span>
                        <span>Data classification: Enterprise Gated</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* PMCs Content */}
              {activeTab === 'pmcs' && (
                <motion.div
                  key="pmcs"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center w-full"
                >
                  {/* Left: Copy details */}
                  <div className="flex flex-col gap-4 text-left">
                    <span className="text-[#B88500] text-[10px] font-mono font-bold tracking-widest uppercase">
                      PMCS & CONSULTANCIES
                    </span>
                    <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#1A3A5C] leading-[1.3] m-0 mt-0.5">
                      Deliver sharper oversight for your client — while your own team runs leaner.
                    </h2>
                    
                    {/* Checklist bullets */}
                    <div className="flex flex-col gap-3.5 mt-4">
                      {[
                        { title: "Automated document control", desc: "Offload routine compliance letter drafting to Alfred agents." },
                        { title: "Consistency across portfolios", desc: "Ensure the same rigorous standard of review on every project site." },
                        { title: "Fast fact-finding reports", desc: "Assemble multi-volume EOT recommendation briefs in under 5 minutes." }
                      ].map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs sm:text-[13px] text-[#5A5A62] leading-relaxed">
                          {/* Green checkmark circle */}
                          <div className="w-4.5 h-4.5 rounded-full bg-[#E4F3EC] flex items-center justify-center shrink-0 border border-[#145C35]/10 mt-0.5 select-none">
                            <svg className="w-3 h-3 text-[#145C35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>
                            <strong className="text-[#1A3A5C] font-semibold">{bullet.title}:</strong> {bullet.desc}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={handleDemoClick}
                      className="bg-[#1A3A5C] text-white py-2.5 px-6 rounded-lg font-semibold cursor-pointer text-xs sm:text-[13px] transition-all duration-200 hover:bg-[#2B5F96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A3A5C] focus-visible:outline-offset-2 active:scale-95 shadow-[0_4px_16px_rgba(26,58,92,0.12)] text-center w-full sm:w-fit mt-6"
                    >
                      Request PMCs Demo
                    </button>
                  </div>

                  {/* Right: Mock Panel view */}
                  <div className="w-full bg-[#F4F4F7] border border-[#DDDDE6] rounded-xl overflow-hidden shadow-sm flex flex-col font-sans text-left">
                    {/* Header bar */}
                    <div className="bg-[#1A3A5C] text-white px-4 py-3 flex justify-between items-center text-[10px] sm:text-[11px] font-mono select-none">
                      <span>Alfred Consultant View – PMC Analytics & Automation Log</span>
                      <span className="bg-[#FFC20E]/20 text-[#FFC20E] border border-[#FFC20E]/30 px-2 py-0.5 rounded text-[8px] font-bold tracking-widest">
                        SECURE
                      </span>
                    </div>

                    {/* Content area */}
                    <div className="p-4 sm:p-5 flex flex-col gap-4 bg-white">
                      {/* Blue alert box */}
                      <div className="bg-[#E3F2FD] text-[#1565C0] border border-[#BBDEFB] rounded-lg p-3 text-[11px] sm:text-xs flex justify-between items-center font-semibold">
                        <span>⚙️ 14 Junior engineering hours saved today</span>
                        <span>Auto-drafter</span>
                      </div>

                      {/* Row 1 */}
                      <div className="bg-[#F4F4F7] border border-[#DDDDE6] rounded-lg p-3 flex justify-between items-center text-xs">
                        <div className="flex flex-col gap-0.5">
                          <span className="font-bold text-[#1A3A5C]">Monthly EOT assessment report</span>
                          <span className="text-[#5A5A62] text-[10.5px]">Parsed 420 site records against FIDIC Clause 8.4.</span>
                        </div>
                        <span className="text-[#2E7D32] font-bold shrink-0 pl-2">Compiled (Word Doc)</span>
                      </div>

                      {/* Row 2 */}
                      <div className="bg-[#F4F4F7] border border-[#DDDDE6] rounded-lg p-3 flex justify-between items-center text-xs">
                        <div className="flex flex-col gap-0.5">
                          <span className="font-bold text-[#1A3A5C]">Client letter: Variation Rate recommendation</span>
                          <span className="text-[#5A5A62] text-[10.5px]">Clause 12 recommendation letter pre-drafted.</span>
                        </div>
                        <span className="text-[#2E7D32] font-bold shrink-0 pl-2">Awaiting Sign-off ✓</span>
                      </div>

                      {/* Card Footer */}
                      <div className="flex justify-between items-center text-[9px] sm:text-[10px] text-[#6B6B74] font-mono mt-4 pt-3 border-t border-[#DDDDE6]/50">
                        <span>Ref: FIDIC-Red-2017</span>
                        <span>Data classification: Enterprise Gated</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>
      </main>

      {/* Bottom CTA */}
      <section className="mb-20 container mx-auto px-4 text-center">
        <div className="bg-white p-6 md:p-10 rounded-[2rem] border border-[#DDDDE6] relative overflow-hidden max-w-5xl mx-auto shadow-sm">
          {/* Subtle radial yellow glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,194,14,0.04),transparent_70%)] pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A5C] mb-6 relative z-10">Ready to transform your delivery?</h2>
          <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={handleDemoClick}
              className="bg-[#1A3A5C] text-white px-6 py-3 rounded-lg font-bold uppercase tracking-widest text-xs transition-all duration-200 hover:bg-[#2B5F96] shadow-md cursor-pointer border-none"
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Solutions
