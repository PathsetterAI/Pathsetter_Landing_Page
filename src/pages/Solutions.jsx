import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// --- Data Definitions ---

const solutionsData = {
  customer: [
    {
      title: "EPCs",
      sub: "Engineering, Procurement & Construction",
      context: "EPCs operate under intense margin pressure, fragmented planning, and site-level chaos. Bids are rushed, execution visibility is partial, and delays translate directly into cost overruns and disputes.",
      modules: ["Smart Staging", "Unified Command Center", "Field App", "Intelligent Knowledge Engine", "Agent Platform"],
      capabilities: [
        "RFP review and bid drafting",
        "Drawings → BOQ → WBS → Gantt automation",
        "Site-wise progress visualization",
        "Supply chain tracking across sites",
        "AI nudges for delays, weather, and dependencies"
      ],
      contextAdvantage: "Alfred understands EPC reality: That a delayed pile foundation blocks module mounting. That material delivery delays impact labor productivity. The knowledge graph links design → plan → execution → billing, enabling EPC teams to reason, not guess.",
      roi: [
        "3–5× higher bid throughput",
        "Reduced value leakage during execution",
        "Fewer site escalations and rework",
        "Improved schedule predictability"
      ],
      roiSummary: "EPC teams spend less time firefighting and more time delivering."
    },
    {
      title: "Project Owners / Developers",
      sub: "Portfolio & Asset Management",
      context: "Owners struggle with opaque execution, over-dependence on EPC reports, and delayed visibility into risks that directly affect IRR.",
      modules: ["Unified Command Center", "Intelligent Knowledge Engine", "Ask Alfred", "Agent Platform"],
      capabilities: [
        "Portfolio-level progress dashboards",
        "Milestone and PPA obligation tracking",
        "Evidence-backed completion validation",
        "AI alerts on execution drift"
      ],
      contextAdvantage: "Alfred links contracts, PPAs, execution milestones, and site evidence into one model—so owners see what’s really happening, not just reported status.",
      roi: [
        "Faster intervention on at-risk projects",
        "Reduced disputes with EPCs",
        "Better IRR protection through fewer delays"
      ],
      roiSummary: "Owners gain control without micromanagement."
    },
    {
      title: "Lending Institutions",
      sub: "Investment & Risk Control",
      context: "Lenders rely on static reports, delayed audits, and manual site verification—introducing risk in disbursements and exposure.",
      modules: ["Unified Command Center", "Intelligent Knowledge Engine", "Ask Alfred", "Agent Platform"],
      capabilities: [
        "Milestone-linked progress verification",
        "Visual and document-backed evidence",
        "Compliance and obligation tracking",
        "Risk alerts before disbursement"
      ],
      contextAdvantage: "Alfred correlates financial milestones with physical progress, giving lenders real execution intelligence instead of paperwork.",
      roi: [
        "Reduced financing risk",
        "Faster, more confident disbursements",
        "Stronger audit and governance posture"
      ],
      roiSummary: "Lending decisions become data-driven, not assumption-driven."
    },
    {
      title: "Government Bodies",
      sub: "Public Infrastructure Oversight",
      context: "Public projects suffer from reporting opacity, delayed audits, and limited real-time oversight across departments and contractors.",
      modules: ["Unified Command Center", "Field App", "Intelligent Knowledge Engine", "Ask Alfred", "Agent Platform"],
      capabilities: [
        "Centralized project oversight",
        "Geo-tagged site updates and evidence",
        "Automated compliance checks",
        "AI search across submissions and reports"
      ],
      contextAdvantage: "Alfred connects approvals, site activity, compliance, and outcomes, enabling transparent governance at scale.",
      roi: [
        "Reduced manual review effort",
        "Higher accountability",
        "Faster decision-making"
      ],
      roiSummary: "Governance shifts from reactive audits to continuous oversight."
    }
  ],
  department: [
    {
      name: "Business Development",
      pain: "Manual RFP preparation, inconsistent bids, and limited capacity.",
      modulesUsed: ["Smart Staging", "DocuHub", "Ask Alfred"],
      capabilities: ["Tender discovery and qualification", "RFP draft generation", "Instant access to past credentials"],
      roi: "Faster bids, Higher win probability, Less weekend firefighting"
    },
    {
      name: "Project Planning",
      pain: "Poor estimation, unrealistic schedules, and disconnected handovers.",
      modulesUsed: ["Smart Staging", "Knowledge Engine", "Agent Platform"],
      capabilities: ["Drawings-to-BOQ automation", "Work package and WBS generation", "Baseline Gantt creation"],
      roi: "Better planning accuracy, Faster mobilization, Reduced early slippage"
    },
    {
      name: "Project Controls",
      pain: "Late visibility into delays and risks.",
      modulesUsed: ["Unified Command Center", "AI Nudges", "Ask Alfred"],
      capabilities: ["Planned vs actual tracking", "Predictive delay detection", "Risk intelligence"],
      roi: "Fewer surprises, Proactive intervention"
    },
    {
      name: "Project Execution",
      pain: "WhatsApp chaos, unclear priorities, and delayed escalation.",
      modulesUsed: ["Field App", "Command Center", "Knowledge Engine"],
      capabilities: ["Structured site updates", "Visual progress tracking", "On-site AI search"],
      roi: "Faster issue resolution, Better site-HQ alignment"
    },
    {
      name: "Finance",
      pain: "Disputes, delayed billing, and audit stress.",
      modulesUsed: ["Compliance Workspace", "DocuHub", "Ask Alfred"],
      capabilities: ["Evidence-based validation", "Milestone tracking", "Audit trails"],
      roi: "Faster billing, Reduced disputes"
    },
    {
      name: "Supply Chain",
      pain: "Material delays, idle inventory, and poor coordination.",
      modulesUsed: ["Command Center", "Agent Platform", "Knowledge Engine"],
      capabilities: ["Supply tracking", "Cross-site optimization", "Delay alerts"],
      roi: "Reduced waste, Improved utilization"
    }
  ],
  industry: [
    {
      title: "Utility-Scale Solar",
      solves: "Mobilization delays, Grid & PPA milestone risk, Weather-driven execution issues",
      keyModules: ["Smart Staging", "Command Center", "Compliance Workspace"],
      roi: "Faster COD, Improved IRR"
    },
    {
      title: "Wind Energy",
      solves: "Multi-site complexity, Weather sensitivity, Logistics challenges",
      keyModules: ["Smart Staging", "Command Center", "Agent Platform"],
      roi: "Better schedule reliability, Reduced idle time"
    },
    {
      title: "Campus & Commercial Construction",
      solves: "Trade coordination issues, Rework and handover delays",
      keyModules: ["Knowledge Engine", "Command Center", "Field App"],
      roi: "Reduced rework, Smoother execution"
    }
  ]
}

// --- Icons / Helpers ---

const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`relative px-6 py-3 text-sm sm:text-base font-primary tracking-wide transition-all duration-300 ${
      active ? 'text-accent font-semibold' : 'text-secondary-mid hover:text-white'
    }`}
  >
    {children}
    {active && (
      <motion.div
        layoutId="activeTab"
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent shadow-[0_0_10px_rgba(0,191,153,0.5)]"
      />
    )}
  </button>
)

// --- Main Component ---

function Solutions() {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('customer')
  const [highlightedItem, setHighlightedItem] = useState(null)

  // Handle navigation from Navbar dropdown
  useEffect(() => {
    if (location.state?.tab) {
      // 1. Set Active Tab
      const categoryMap = {
        "Customer Type": "customer",
        "Department": "department",
        "Industry": "industry"
      }
      const newTab = categoryMap[location.state.tab] || 'customer'
      setActiveTab(newTab)

      // 2. Handle Scroll & Highlight
      if (location.state.scrollTo) {
         // Tiny timeout to allow DOM to update with new tab content
         setTimeout(() => {
            const id = location.state.scrollTo.replace(/\s+/g, '-').toLowerCase()
            const element = document.getElementById(id)
            if (element) {
               element.scrollIntoView({ behavior: 'smooth', block: 'center' })
               
               // Trigger Highlight Effect
               setHighlightedItem(location.state.scrollTo)
               // Remove Highlight after 2 seconds
               setTimeout(() => setHighlightedItem(null), 2000)
            }
         }, 100)
      } else {
         window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else {
        window.scrollTo(0, 0)
    }
  }, [location.state])

  // Helper to check if item is highlighted
  const isHighlighted = (title) => highlightedItem === title

  return (
    <div className="bg-primary-bg min-h-screen text-secondary-light selection:bg-accent/30 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 px-4 sm:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-accent text-white mb-6 relative z-10"
        >
          Alfred for <span className="text-accent underline decoration-accent/30 underline-offset-8">Every Stakeholder</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-base sm:text-lg text-secondary-mid max-w-2xl mx-auto font-primary leading-relaxed"
        >
          Adapts to your role, your industry, and your challenges.
        </motion.p>
      </section>

      {/* Tabs Control */}
      <div className="sticky top-24 z-40 bg-primary-bg/80 backdrop-blur-md border-b border-white/10 mb-12">
        <div className="max-w-[1400px] mx-auto flex justify-center gap-4 sm:gap-12 overflow-x-auto px-4 no-scrollbar">
          <TabButton active={activeTab === 'customer'} onClick={() => setActiveTab('customer')}>
            BY CUSTOMER
          </TabButton>
          <TabButton active={activeTab === 'department'} onClick={() => setActiveTab('department')}>
            BY DEPARTMENT
          </TabButton>
          <TabButton active={activeTab === 'industry'} onClick={() => setActiveTab('industry')}>
            BY INDUSTRY
          </TabButton>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 pb-32 min-h-[600px]">
        <AnimatePresence mode="wait">
          
          {/* --- CUSTOMER TAB --- */}
          {activeTab === 'customer' && (
            <motion.div
              key="customer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-24" // Increased spacing between sections
            >
              {solutionsData.customer.map((item, index) => (
                <div 
                  key={index} 
                  id={item.title.replace(/\s+/g, '-').toLowerCase()}
                  className={`group relative transition-all duration-500 rounded-3xl p-4 sm:p-6 ${
                    isHighlighted(item.title) ? 'bg-accent/5' : ''
                  }`}
                >
                  {/* Decorative Background Elements */}
                   <div className={`absolute -left-20 top-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none transition-opacity duration-700 ${
                      isHighlighted(item.title) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                   }`} />
                  
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
                    {/* Left Column: Semantic Header & Context */}
                    <div className="lg:sticky lg:top-40">
                      <div className="inline-flex items-center gap-3 mb-6">
                        <span className="text-4xl text-accent opacity-50 font-accent">0{index + 1}</span>
                        <div className="h-[1px] w-12 bg-accent/50"></div>
                      </div>
                      
                      <h3 className="text-3xl sm:text-4xl font-accent text-white mb-4 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-accent uppercase tracking-widest font-bold mb-8 opacity-90">{item.sub}</p>
                      
                      <div className={`bg-white/[0.03] border border-white/10 p-6 rounded-r-xl mb-8 backdrop-blur-sm relative overflow-hidden transition-colors duration-500 ${
                         isHighlighted(item.title) ? 'bg-white/[0.05]' : 'group-hover:bg-white/[0.05]'
                      }`}>
                         {/* Red accent line */}
                         <div className={`absolute left-0 top-0 bottom-0 w-1 bg-red-400 transition-shadow duration-500 ${
                            isHighlighted(item.title) ? 'shadow-[0_0_10px_rgba(248,113,113,0.5)]' : 'group-hover:shadow-[0_0_10px_rgba(248,113,113,0.5)]'
                         }`} />
                        
                        <h4 className="text-xs font-bold text-red-400 mb-3 uppercase tracking-widest flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                          The Challenge
                        </h4>
                        <p className="text-secondary-light leading-relaxed font-primary text-base">
                          {item.context}
                        </p>
                      </div>

                       <div className={`bg-gradient-to-r from-accent/5 to-transparent border border-accent/20 p-6 rounded-r-xl relative overflow-hidden transition-colors duration-500 ${
                          isHighlighted(item.title) ? 'from-accent/10' : 'group-hover:from-accent/10'
                       }`}>
                          {/* Accent line */}
                          <div className={`absolute left-0 top-0 bottom-0 w-1 bg-accent transition-shadow duration-500 ${
                             isHighlighted(item.title) ? 'shadow-[0_0_15px_rgba(0,191,153,0.6)]' : 'group-hover:shadow-[0_0_15px_rgba(0,191,153,0.6)]'
                          }`} />
                          
                        <h4 className="text-xs font-bold text-accent mb-3 uppercase tracking-widest flex items-center gap-2">
                           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                           Alfred's Advantage
                        </h4>
                         <p className="text-white leading-relaxed font-primary text-base italic">
                           "{item.contextAdvantage}"
                         </p>
                      </div>
                    </div>

                    {/* Right Column: Solution Details */}
                    <div className="grid grid-cols-1 gap-8">
                       {/* Modules Card */}
                      <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/20 rounded-2xl p-8 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,191,153,0.1)] transition-all duration-300 backdrop-blur-md overflow-hidden group/card">
                        {/* Additional dark overlay for contrast */}
                        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                        
                        {/* Glass highlight */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                        
                        <h4 className="text-sm font-bold text-accent/90 mb-6 uppercase tracking-widest border-b border-white/10 pb-4 relative z-10">Modules Deployed</h4>
                        <div className="flex flex-wrap gap-3 relative z-10">
                          {item.modules.map(mod => (
                            <span key={mod} className="px-4 py-2 bg-white/10 border border-white/10 rounded-lg text-sm text-gray-100 font-primary hover:bg-accent/10 hover:text-white hover:border-accent/30 transition-all duration-300">
                              {mod}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Capabilities */}
                        <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/20 rounded-2xl p-8 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,191,153,0.1)] transition-all duration-300 backdrop-blur-md overflow-hidden group/card">
                           {/* Additional dark overlay for contrast */}
                           <div className="absolute inset-0 bg-black/20 pointer-events-none" />

                           {/* Glass highlight */}
                           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                           
                           <h4 className="text-sm font-bold text-accent/90 mb-6 uppercase tracking-widest border-b border-white/10 pb-4 relative z-10">Capabilities</h4>
                           <ul className="space-y-4 relative z-10">
                             {item.capabilities.map((cap, i) => (
                               <li key={i} className="flex items-start gap-3 text-sm text-gray-300 group-hover/card:text-white transition-colors">
                                 <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/50 group-hover/card:bg-accent shadow-[0_0_8px_rgba(0,191,153,0.5)] flex-shrink-0 transition-colors" />
                                 <span className="leading-relaxed">{cap}</span>
                               </li>
                             ))}
                           </ul>
                        </div>

                        {/* ROI */}
                        <div className="relative bg-gradient-to-br from-white/[0.07] to-accent/[0.05] border border-accent/20 rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(0,191,153,0.2)] transition-all duration-300 overflow-hidden group/card backdrop-blur-sm">
                           {/* Glass highlight */}
                           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 group-hover/card:opacity-100 transition-opacity duration-300" />
                           <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[40px] pointer-events-none" />
                           
                           <h4 className="text-sm font-bold text-accent mb-6 uppercase tracking-widest border-b border-accent/10 pb-4 relative z-10">ROI & Impact</h4>
                           <ul className="space-y-4 mb-6 relative z-10">
                             {item.roi.map((r, i) => (
                               <li key={i} className="flex items-start gap-3 text-sm text-white font-medium">
                                 <span className="text-accent text-lg leading-none">↗</span>
                                 <span className="leading-relaxed">{r}</span>
                               </li>
                             ))}
                           </ul>
                           <p className="text-xs text-secondary-mid pt-4 border-t border-white/10 italic relative z-10">
                             {item.roiSummary}
                           </p>
                        </div>
                      </div>
                    </div>
                  </div>
                   {index !== solutionsData.customer.length - 1 && (
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-24" />
                   )}
                </div>
              ))}
            </motion.div>
          )}

          {/* --- DEPARTMENT TAB --- */}
          {activeTab === 'department' && (
            <motion.div
              key="department"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {solutionsData.department.map((dept, index) => (
                <div 
                   key={index}
                   id={dept.name.replace(/\s+/g, '-').toLowerCase()} 
                   className={`relative bg-gradient-to-br from-white/[0.08] to-white/[0.03] rounded-2xl p-8 transition-all duration-300 group flex flex-col h-full backdrop-blur-md overflow-hidden ${
                      isHighlighted(dept.name)
                      ? 'border border-accent/50 shadow-[0_0_30px_rgba(0,191,153,0.1)] -translate-y-1'
                      : 'border border-white/20 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,191,153,0.1)] hover:-translate-y-1'
                   }`}
                >
                  {/* Additional dark overlay for contrast */}
                  <div className="absolute inset-0 bg-black/20 pointer-events-none" />

                  {/* Glass highlight effect */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent transition-opacity duration-300 ${
                     isHighlighted(dept.name) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`} />
                  
                  <div className="mb-6 flex items-start justify-between relative z-10">
                     <h3 className="text-xl font-accent text-white group-hover:text-accent transition-colors tracking-wide">{dept.name}</h3>
                     <div className="h-8 w-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/30 transition-all">
                        <span className="text-white/90 group-hover:text-accent font-primary text-xs font-bold">{index + 1}</span>
                     </div>
                  </div>
                  
                  <div className="flex-grow relative z-10">
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6 group-hover:bg-red-500/[0.15] transition-colors">
                      <span className="text-red-400 font-bold block mb-2 text-xs uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" /> Pain Point
                      </span>
                      <p className="text-sm text-gray-200 leading-relaxed font-primary">
                        {dept.pain}
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <span className="text-xs font-bold text-accent/90 block mb-3 uppercase tracking-wide">Modules</span>
                      <div className="flex flex-wrap gap-2">
                        {dept.modulesUsed.map(mod => (
                           <span key={mod} className="text-[11px] px-2.5 py-1 bg-white/10 rounded-md border border-white/10 text-gray-100 group-hover:border-accent/30 group-hover:text-white transition-colors">
                             {mod}
                           </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <span className="text-xs font-bold text-accent/90 block mb-3 uppercase tracking-wide">Capabilities</span>
                      <ul className="space-y-2">
                        {dept.capabilities.map((cap, i) => (
                          <li key={i} className="text-sm text-gray-300 flex items-start gap-2 group-hover:text-white transition-colors">
                             <div className="mt-1.5 w-1 h-1 rounded-full bg-white/50 group-hover:bg-accent transition-colors" /> {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10 relative z-10">
                    <span className="text-xs font-bold text-accent block mb-2 uppercase tracking-wide">ROI Impact</span>
                    <p className="text-sm text-white font-medium leading-relaxed">{dept.roi}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* --- INDUSTRY TAB --- */}
          {activeTab === 'industry' && (
            <motion.div
              key="industry"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {solutionsData.industry.map((ind, index) => (
                 <div 
                    key={index} 
                    id={ind.title.replace(/\s+/g, '-').toLowerCase()}
                    className={`feature-card relative overflow-hidden bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-10 rounded-3xl group text-center transition-all duration-500 ${
                       isHighlighted(ind.title) 
                       ? 'border border-accent/30 shadow-[0_0_50px_rgba(0,191,153,0.15)] bg-white/[0.05]'
                       : 'border border-white/10 hover:shadow-[0_0_50px_rgba(0,191,153,0.15)] hover:border-accent/30'
                    }`}
                 >
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-accent/5 to-transparent transition-opacity duration-500 ${
                       isHighlighted(ind.title) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`} />
                    
                    <div className="relative z-10 flex flex-col h-full">
                       <h3 className={`text-3xl font-accent text-white mb-8 transition-colors ${
                          isHighlighted(ind.title) ? 'text-accent' : 'group-hover:text-accent'
                       }`}>{ind.title}</h3>
                       
                       <div className={`bg-white/5 rounded-xl p-6 mb-8 backdrop-blur-sm border border-white/5 transition-colors ${
                          isHighlighted(ind.title) ? 'border-accent/10' : 'group-hover:border-accent/10'
                       }`}>
                          <h4 className="text-xs font-bold text-secondary-mid mb-3 uppercase tracking-widest">Solves</h4>
                          <p className="text-sm text-white/90 leading-relaxed font-primary">{ind.solves}</p>
                       </div>

                       <div className="mb-auto">
                          <h4 className="text-xs font-bold text-secondary-mid mb-4 uppercase tracking-widest">Core Modules</h4>
                          <div className="flex flex-wrap justify-center gap-2">
                            {ind.keyModules.map(k => (
                              <span key={k} className={`text-xs px-3 py-1.5 bg-accent/5 text-accent/80 rounded-full border border-accent/10 transition-colors ${
                                 isHighlighted(ind.title) ? 'bg-accent/10 text-accent' : 'group-hover:bg-accent/10 group-hover:text-accent'
                              }`}>
                                {k}
                              </span>
                            ))}
                          </div>
                       </div>

                       <div className="pt-8 border-t border-white/10 mt-8">
                          <h4 className="text-xs font-bold text-secondary-mid mb-1 uppercase tracking-widest">Expected ROI</h4>
                          <p className={`text-xl font-bold text-white transition-transform duration-300 ${
                             isHighlighted(ind.title) ? 'scale-105' : 'group-hover:scale-105'
                          }`}>{ind.roi}</p>
                       </div>
                    </div>
                 </div>
              ))}
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Bottom CTA */}
      <section className="mb-20 container mx-auto px-4 text-center">
          <div className="bg-gradient-to-b from-white/[0.05] to-transparent p-6 md:p-10 rounded-[2rem] border border-white/10 relative overflow-hidden max-w-5xl mx-auto">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,191,153,0.15),transparent_70%)] pointer-events-none" />
            
            <h2 className="text-3xl md:text-4xl font-accent text-secondary-light mb-6 relative z-10">Ready to transform your delivery?</h2>
            <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => {
                    navigate('/book-demo')
                    window.scrollTo(0, 0)
                  }}
                  className="bg-accent text-primary-bg px-6 py-3 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-accent-hover transition-all shadow-[0_0_20px_rgba(0,191,153,0.3)] hover:shadow-[0_0_30px_rgba(0,191,153,0.5)] transform hover:-translate-y-1"
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
