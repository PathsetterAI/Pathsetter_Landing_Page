import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const platformData = [
  {
    id: "knowledge-engine",
    category: "INTELLIGENT KNOWLEDGE ENGINE",
    description: "The project brain—structure your data into living intelligence.",
    features: [
      {
        title: "DocuHub — Project Data Hub",
        whatItDoes: "DocuHub is the authoritative repository for all project artifacts—documents, drawings, BOQs, contracts, SOPs, RFIs, reports, and approvals—structured into a single intelligence layer.",
        whyItMatters: "Infrastructure projects fail when critical knowledge is scattered across drives, emails, and folders.",
        outcomes: ["Eliminates document silos", "Improves traceability and audit readiness", "Prevents errors caused by outdated documents"],
        whoUsesIt: "Project Managers · Planners · Finance · Compliance",
        industries: "Solar · Wind · Campus Construction"
      },
      {
        title: "Ask Alfred — Semantic Project Intelligence",
        whatItDoes: "Ask Alfred enables natural-language interaction with the entire project—documents, drawings, schedules, execution data, and obligations.",
        whyItMatters: "Searching folders is slow. Asking questions is instant. Ask Alfred reduces decision latency and improves confidence.",
        outcomes: ["Faster decisions", "Fewer execution delays", "Democratized access to intelligence"],
        whoUsesIt: "Site Engineers · Project Controls · Management",
        industries: "All infrastructure projects"
      }
    ]
  },
  {
    id: "smart-staging",
    category: "SMART STAGING",
    description: "AI-driven workflows that turn scope into executable plans—faster and with fewer errors.",
    features: [
      {
        title: "Tender Discovery & Qualification",
        whatItDoes: "Automatically identifies and qualifies relevant tenders based on scope, capability, and past performance.",
        whyItMatters: "Teams waste time chasing low-fit opportunities. This focuses effort where win probability is highest.",
        outcomes: ["Higher bid efficiency", "Better pipeline quality", "Reduced manual screening time"],
        whoUsesIt: "Business Development · Strategy Teams",
        industries: "General Construction"
      },
      {
        title: "RFP Review & Draft Generator",
        whatItDoes: "Reads RFPs, identifies compliance requirements, and generates structured draft responses using historical credentials.",
        whyItMatters: "Manual RFP preparation is slow and error-prone.",
        outcomes: ["Faster turnaround", "Improved compliance accuracy", "Standardized proposal quality"],
        whoUsesIt: "Business Development · Bid Teams",
        industries: "General Construction"
      },
      {
        title: "Drawings Analysis",
        whatItDoes: "Understands technical drawings to extract scope, quantities, and dependencies.",
        whyItMatters: "Manual drawing interpretation causes estimation errors and rework.",
        outcomes: ["Improved estimation accuracy", "Reduced planning risk", "Instant scope visualization"],
        whoUsesIt: "Planning · Engineering · Estimation Teams",
        industries: "General Construction"
      },
      {
        title: "Drawings → BOQ Extraction",
        whatItDoes: "Automatically converts drawings into structured BOQs and quantities.",
        whyItMatters: "Quantity takeoff is one of the biggest sources of budget leakage.",
        outcomes: ["Reduced estimation errors", "Faster planning cycles", "Automated cost breakdown"],
        whoUsesIt: "Planning · Costing · Supply Chain",
        industries: "General Construction"
      },
      {
        title: "Work Package Generator",
        whatItDoes: "Breaks scope into executable work packages aligned with site execution.",
        whyItMatters: "Poor packaging leads to site confusion and delays.",
        outcomes: ["Better site coordination", "Faster execution", "Clearer responsibility assignment"],
        whoUsesIt: "Project Planning · Execution Teams",
        industries: "General Construction"
      },
      {
        title: "WBS & Gantt Generator",
        whatItDoes: "Creates a baseline WBS and schedule from scope and drawings.",
        whyItMatters: "Projects often start with unrealistic schedules.",
        outcomes: ["More reliable planning", "Reduced early-stage slippage", "Data-driven timelines"],
        whoUsesIt: "Planning · Project Controls",
        industries: "General Construction"
      }
    ]
  },
  {
    id: "unified-command",
    category: "UNIFIED COMMAND CENTER",
    description: "Live execution intelligence across sites, schedules, supply chains, and risk.",
    features: [
      {
        title: "Site Intelligence (Satellite / Drone)",
        whatItDoes: "Provides visual, layout-based progress tracking across sites and zones.",
        whyItMatters: "Text reports fail to convey ground reality.",
        outcomes: ["Faster understanding of site status", "Improved leadership visibility", "Remote monitoring capability"],
        whoUsesIt: "Execution · Leadership · PMO",
        industries: "General Construction"
      },
      {
        title: "KPI & Planned vs Actual Tracking",
        whatItDoes: "Tracks progress, productivity, and milestones against the baseline.",
        whyItMatters: "Delayed detection equals delayed action.",
        outcomes: ["Early intervention", "Improved predictability", "Accountable progress tracking"],
        whoUsesIt: "Project Controls · Management",
        industries: "General Construction"
      },
      {
        title: "Supply Chain Tracker",
        whatItDoes: "Tracks material flow from procurement to site usage.",
        whyItMatters: "Material delays cause idle labor and cost overruns.",
        outcomes: ["Reduced idle inventory", "Better supply coordination", "Just-in-time delivery support"],
        whoUsesIt: "Supply Chain · Execution",
        industries: "Supply Chain Intensive Projects"
      },
      {
        title: "AI Nudges & Early Warnings",
        whatItDoes: "Continuously analyzes execution signals to highlight risks—schedule drift, weather impact, supply issues.",
        whyItMatters: "Humans react late. AI sees patterns early.",
        outcomes: ["Reduced delays", "Lower value leakage", "Proactive risk mitigation"],
        whoUsesIt: "Project Controls · Leadership",
        industries: "General Construction"
      }
    ]
  },
  {
    id: "compliance-workspace",
    category: "COMPLIANCE WORKSPACE",
    description: "Autonomous obligation tracking, validation, and audit-ready assurance.",
    features: [
      {
        title: "Milestone & Obligation Tracking",
        whatItDoes: "Tracks contractual, regulatory, and PPA milestones automatically.",
        whyItMatters: "Missed obligations result in penalties and disputes.",
        outcomes: ["Higher compliance confidence", "Reduced legal exposure", "Automated deadline alerts"],
        whoUsesIt: "Finance · Legal · Owners",
        industries: "Regulatory Heavy Projects"
      },
      {
        title: "Evidence-Based Validation",
        whatItDoes: "Validates work completion using photos, reports, and geo-tagged data.",
        whyItMatters: "Claims without evidence create disputes.",
        outcomes: ["Faster billing approvals", "Strong audit defense", "Indisputable proof of work"],
        whoUsesIt: "Finance · Owners · Lenders",
        industries: "General Construction"
      },
      {
        title: "Audit & Governance Trails",
        whatItDoes: "Maintains immutable trails for decisions, approvals, and compliance.",
        whyItMatters: "Audits should be routine, not stressful.",
        outcomes: ["Faster audits", "Higher trust with stakeholders", "Complete historical record"],
        whoUsesIt: "Leadership · Government · Lenders",
        industries: "Government & Public Infrastructure"
      }
    ]
  }
]

const FeatureConsole = ({ section, inverted }) => {
  const [activeIdx, setActiveIdx] = useState(0)
  const activeFeature = section.features[activeIdx]

  return (
    <div className="bg-primary-bg/50 border border-white/5 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
      <div className={`flex flex-col ${inverted ? 'md:flex-row-reverse' : 'md:flex-row'} h-full min-h-[600px]`}>
        {/* Sidebar Menu - Left Side (Narrower) */}
        <div className={`w-full md:w-1/4 border-b md:border-b-0 ${inverted ? 'md:border-l' : 'md:border-r'} border-white/5 bg-white/[0.02]`}>
          <div className="p-6 border-b border-white/5">
            <h3 className="text-sm font-primary text-secondary-mid uppercase tracking-widest font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Modules
            </h3>
          </div>
          <div className="flex flex-col">
            {section.features.map((feature, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`text-left p-4 lg:p-5 transition-all duration-300 font-primary text-sm ${inverted ? 'border-r-2' : 'border-l-2'} relative group focus:outline-none ${
                    activeIdx === idx 
                    ? 'bg-white/[0.04] border-accent text-secondary-light' 
                    : 'border-transparent text-secondary-mid hover:bg-white/[0.02] hover:text-secondary-light'
                }`}
              >
                <div className={`flex items-center justify-between ${inverted ? 'flex-row-reverse' : 'flex-row'}`}>
                    <span className={`font-medium truncate ${inverted ? 'pl-2' : 'pr-2'}`}>{feature.title}</span>
                    {activeIdx === idx && (
                         <motion.div layoutId={`arrow-${section.id}`} className="text-accent flex-shrink-0">
                             <svg className={`w-4 h-4 ${inverted ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                             </svg>
                         </motion.div>
                    )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area - Right Side (Focus) */}
        <div className="w-full md:w-3/4 p-6 md:p-8 lg:p-10 flex flex-col relative overflow-hidden">
            {/* Visual Background Pattern */}
           <div className={`absolute inset-0 w-full h-full opacity-10 pointer-events-none ${inverted ? '-scale-x-100' : ''}`}>
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 blur-[100px] rounded-full mix-blend-screen" />
           </div>

          <AnimatePresence mode='wait'>
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, x: inverted ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: inverted ? 20 : -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col h-full z-10"
            >
              {/* Feature Header */}
              <div className="mb-6 lg:mb-8">
                 <h3 className="text-2xl md:text-3xl font-accent text-secondary-light mb-2">{activeFeature.title}</h3>
                 <div className="h-[1px] w-20 bg-accent my-4" />
              </div>

              {/* Main Content Split: Details + Visual Placeholder */}
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 flex-grow ${inverted ? '' : ''}`}>
                 {/* Text Details */}
                 <div className={`space-y-6 lg:space-y-8 ${inverted ? 'lg:order-last' : 'lg:order-first'}`}>
                    <div>
                        <span className="text-accent text-xs font-bold uppercase tracking-wider block mb-2">Capabilities</span>
                        <p className="text-secondary-light font-primary leading-relaxed text-[0.95rem]">
                            {activeFeature.whatItDoes}
                        </p>
                    </div>
                    
                    <div>
                        <span className="text-accent text-xs font-bold uppercase tracking-wider block mb-2">Value Proposition</span>
                        <p className="text-secondary-mid italic font-primary leading-relaxed text-[0.95rem] border-l-2 border-white/10 pl-3">
                            "{activeFeature.whyItMatters}"
                        </p>
                    </div>

                    <div>
                        <span className="text-accent text-xs font-bold uppercase tracking-wider block mb-2">Key Outcomes</span>
                        <ul className="space-y-2">
                            {activeFeature.outcomes.map((o, i) => (
                                <li key={i} className="flex items-start gap-2 text-secondary-mid text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                                    {o}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-white/5 text-xs text-secondary-mid font-primary">
                        <p className="mb-1"><span className="text-secondary-light font-semibold">Users:</span> {activeFeature.whoUsesIt}</p>
                        <p><span className="text-secondary-light font-semibold">Scope:</span> {activeFeature.industries}</p>
                    </div>
                 </div>

                 {/* Visual Media Placeholder */}
                 <div className={`relative h-full min-h-[250px] md:min-h-auto rounded-xl border border-white/10 bg-black/40 overflow-hidden group ${inverted ? 'lg:order-first' : 'lg:order-last'}`}>
                     {/* Placeholder UI for Future Video/Image */}
                     <div className="absolute inset-0 flex flex-col items-center justify-center text-secondary-dark p-6 text-center">
                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 border border-white/10">
                            <svg className="w-6 h-6 text-accent/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <p className="text-sm font-mono uppercase tracking-widest opacity-60">Interactive Preview</p>
                        <p className="text-xs text-secondary-dark mt-2">Media Component Coming Soon</p>
                        
                        {/* Fake UI Lines */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none">
                            <div className="absolute bottom-4 left-4 right-4 h-2 bg-white/10 rounded-full" />
                            <div className="absolute bottom-8 left-4 w-1/2 h-2 bg-white/10 rounded-full" />
                            <div className="absolute top-4 right-4 w-20 h-2 bg-accent/20 rounded-full" />
                        </div>
                     </div>
                 </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

function Platform() {
  return (
    <div className="min-h-screen bg-primary-bg flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
         {/* Page Header */}
         <div className="container mx-auto px-4 mb-24 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-[3px] uppercase mb-8 backdrop-blur-sm">
                 <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_10px_#00bf99]" />
                 Platform Capabilities
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-accent text-secondary-light mb-6 tracking-tight">
                One System.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E6EEF0] to-[#94A3B8]">Infinite Intelligence.</span>
              </h1>
              <p className="max-w-3xl mx-auto text-sm md:text-base text-secondary-mid font-primary leading-relaxed opacity-90">
                Explore the modular engines that power the Alfred Operating System. 
                Select a feature below to view capabilities.
              </p>
            </motion.div>
         </div>

         {/* Sections */}
         <div className="space-y-40 container mx-auto px-4 max-w-7xl">
            {platformData.map((section, idx) => {
               const inverted = idx % 2 !== 0; // Invert every second item
               
               return (
               <section key={section.id} id={section.id} className="scroll-mt-32">
                  {/* Category Title */}
                  <div className={`mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6 ${inverted ? 'md:flex-row-reverse text-right' : ''}`}>
                       <div className="max-w-3xl">
                         <span className={`text-accent font-mono text-sm tracking-widest uppercase mb-3 block ${inverted ? 'ml-auto' : ''}`}>0{idx + 1} // SYSTEM MODULE</span>
                         <h2 className="text-3xl md:text-5xl font-accent text-secondary-light mb-4">{section.category}</h2>
                         <p className="text-secondary-mid font-primary text-lg leading-relaxed">
                           {section.description}
                         </p>
                       </div>
                  </div>

                  {/* Interactive Console */}
                  <FeatureConsole section={section} inverted={inverted} />
               </section>
            )})}
         </div>

         {/* Bottom CTA */}
         <section className="mt-40 container mx-auto px-4 text-center">
             <div className="bg-gradient-to-b from-white/[0.05] to-transparent p-12 md:p-20 rounded-[2rem] border border-white/10 relative overflow-hidden max-w-5xl mx-auto">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,191,153,0.15),transparent_70%)] pointer-events-none" />
                
                <h2 className="text-4xl md:text-5xl font-accent text-secondary-light mb-8 relative z-10">Ready to transform your delivery?</h2>
                <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
                   <button className="bg-accent text-primary-bg px-8 py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-accent-hover transition-all shadow-[0_0_20px_rgba(0,191,153,0.3)] hover:shadow-[0_0_30px_rgba(0,191,153,0.5)] transform hover:-translate-y-1">
                      Schedule a Demo
                   </button>
                   <button className="px-8 py-4 rounded-lg font-bold uppercase tracking-widest text-secondary-light border border-white/20 hover:bg-white/5 transition-colors">
                      Contact Sales
                   </button>
                </div>
             </div>
         </section>
      </main>

      <Footer />
    </div>
  )
}

export default Platform
