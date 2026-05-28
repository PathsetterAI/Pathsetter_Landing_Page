import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import DecisionCalculator from '../components/DecisionCalculator';

import statCalloutCard from '../assets/stat_callout_card.svg';
import decisionCascadeDiagram from '../assets/decision_cascade_diagram.svg';

function Blogs() {
  return (
    <div className="bg-primary-bg min-h-screen w-full text-secondary-light font-primary selection:bg-accent/30">
      <SEO 
        title="$45,662 Per Day: The Real Cost of a Stalled Decision" 
        description="A strong opening paragraph explaining decision latency in construction, highlighting the daily burn rate impact and why delayed decisions are the biggest hidden cost in EPC projects."
      />
      <Navbar />

      {/* Hero Section */}
      <section className="mt-20 pt-20 pb-12 px-4 sm:px-8 relative overflow-hidden">
        {/* Background Gradients */}
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        <div 
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-4/5 h-[400px] pointer-events-none z-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 191, 153, 0.1), transparent 70%)'
          }}
        />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs sm:text-sm text-accent font-semibold uppercase tracking-[3px] font-primary mb-6 inline-block py-2 px-4 bg-accent/10 rounded-full border border-accent/20">
              Project Intelligence
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-8 font-accent">
              <span className="text-accent bg-gradient-to-br from-accent to-accent-hover bg-clip-text text-transparent">$45,662 Per Day:</span><br/> The Real Cost of a Stalled Decision
            </h1>
            <p className="text-lg md:text-xl text-secondary-mid max-w-3xl mx-auto leading-relaxed">
              Every day a critical decision is delayed in construction, the meter keeps running. Decision latency isn't just a schedule slipped—it's the single biggest hidden cost in EPC projects, silently eroding your margins and compounding downstream delays while the daily burn rate marches on.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-8 bg-primary-bg relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex justify-center"
          >
            <img src={statCalloutCard} alt="Stat Callout" className="w-full max-w-2xl rounded-2xl shadow-xl border border-white/5" />
          </motion.div>

          {/* Section 1 */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="prose prose-invert prose-lg max-w-none text-secondary-mid mb-16"
          >
             <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-accent">The Anatomy of Decision Latency</h2>
             <p className="mb-4 text-[#D1D9E0] text-lg leading-loose">
                Decision latency in construction refers to the time gap between when an actionable issue is identified and when a definitive decision is made and executed. In capital projects, every piece of missing information triggers a waiting period.
             </p>
             <p className="text-[#D1D9E0] text-lg leading-loose">
                Our data shows that decision cycle times typically range from <strong className="text-white">6 to 18 days</strong> for RFI approvals, scope changes, and technical clarifications. When the daily cost of labor, equipment rental, and overhead burns regardless of progress, a 12-day decision cycle isn't an administrative bottleneck—it's a massive financial leak over the lifespan of a multi-million dollar EPC project.
             </p>
          </motion.div>

          {/* Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-20 flex justify-center w-full"
          >
            <div className="w-full bg-[#0D1B2A]/50 border border-white/10 rounded-2xl p-4 sm:p-8 flex items-center justify-center shadow-2xl backdrop-blur-sm">
                <img src={decisionCascadeDiagram} alt="Decision Cascade Diagram" className="w-full max-w-3xl" />
            </div>
          </motion.div>

          {/* Root Causes */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-20"
          >
             <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 font-accent text-center">Root Causes of Stalled Decisions</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-[#161b1f] to-[#0b0f12] border border-white/10 p-8 rounded-2xl hover:border-accent/40 hover:shadow-[0_4px_20px_rgba(0,191,153,0.1)] transition-all duration-300">
                   <div className="w-12 h-12 bg-accent/10 border border-accent/20 text-accent flex items-center justify-center rounded-xl mb-6 shadow-[inset_0_0_15px_rgba(0,191,153,0.2)]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                   </div>
                   <h3 className="text-xl font-bold text-white mb-3">Approval Architecture Delays</h3>
                   <p className="text-secondary-mid text-sm leading-relaxed">Complex, deeply nested approval hierarchies create unnecessary barriers. Often, the individuals with the context don't have the authority, and those with the authority lack real-time context.</p>
                </div>
                <div className="bg-gradient-to-br from-[#161b1f] to-[#0b0f12] border border-white/10 p-8 rounded-2xl hover:border-accent/40 hover:shadow-[0_4px_20px_rgba(0,191,153,0.1)] transition-all duration-300">
                   <div className="w-12 h-12 bg-accent/10 border border-accent/20 text-accent flex items-center justify-center rounded-xl mb-6 shadow-[inset_0_0_15px_rgba(0,191,153,0.2)]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"/><polyline points="14 2 14 8 20 8"/><path d="M2 15h10"/><path d="m9 18 3-3-3-3"/></svg>
                   </div>
                   <h3 className="text-xl font-bold text-white mb-3">Fragmented Data</h3>
                   <p className="text-secondary-mid text-sm leading-relaxed">Information scattered across emails, spreadsheets, and legacy systems means project managers spend more time gathering facts than analyzing solutions.</p>
                </div>
                <div className="bg-gradient-to-br from-[#161b1f] to-[#0b0f12] border border-white/10 p-8 rounded-2xl hover:border-accent/40 hover:shadow-[0_4px_20px_rgba(0,191,153,0.1)] transition-all duration-300">
                   <div className="w-12 h-12 bg-accent/10 border border-accent/20 text-accent flex items-center justify-center rounded-xl mb-6 shadow-[inset_0_0_15px_rgba(0,191,153,0.2)]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                   </div>
                   <h3 className="text-xl font-bold text-white mb-3">Slow Communication</h3>
                   <p className="text-secondary-mid text-sm leading-relaxed">Lack of transparency leads to 'hidden problems' where teams hesitate to report blockers until they escalate into critical path disruptions.</p>
                </div>
             </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-16 bg-white/5 border border-white/10 p-8 sm:p-10 rounded-[2rem]"
          >
             <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 font-accent">The 3-Part Solution Structure</h2>
             <div className="space-y-10">
                <div className="flex gap-6 sm:gap-8 items-start relative pb-10 border-b border-white/10 last:border-0 last:pb-0">
                   <div className="text-5xl font-bold text-accent/20 font-accent w-16 text-center select-none">01</div>
                   <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Redesign Approval Workflows</h3>
                      <p className="text-secondary-mid leading-relaxed text-lg">Flatten hierarchies where possible and pre-approve standardized scopes of work. Empower site leaders to make rapid decisions on low-risk issues by establishing clear financial and impact thresholds.</p>
                   </div>
                </div>
                <div className="flex gap-6 sm:gap-8 items-start relative pb-10 border-b border-white/10 last:border-0 last:pb-0">
                   <div className="text-5xl font-bold text-accent/20 font-accent w-16 text-center select-none">02</div>
                   <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Use AI for Real-Time Data</h3>
                      <p className="text-secondary-mid leading-relaxed text-lg">Implement AI-driven dashboards to aggregate cost, schedule, and safety data instantly. By providing executives with synthesized, real-time intelligence, the fact-finding phase drops from days to seconds.</p>
                   </div>
                </div>
                <div className="flex gap-6 sm:gap-8 items-start relative pb-10 border-b border-white/10 last:border-0 last:pb-0">
                   <div className="text-5xl font-bold text-accent/20 font-accent w-16 text-center select-none">03</div>
                   <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Improve Reporting Culture</h3>
                      <p className="text-secondary-mid leading-relaxed text-lg">Shift the paradigm from penalizing bad news to rewarding early blocker identification. A proactive culture ensures issues are escalated when they are small and inexpensive to solve.</p>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* Interactive Calculator Embed */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
             <DecisionCalculator />
          </motion.div>

          {/* Conclusion */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mt-20 border-t border-accent/20 pt-16 text-center sm:text-left"
          >
             <h2 className="text-3xl font-bold text-white mb-6 font-accent">Faster Decisions = <span className="text-accent border-b border-accent/30 pb-2">Competitive Advantage</span></h2>
             <p className="text-secondary-mid leading-relaxed text-xl max-w-3xl">
                The financial impact of decision delays is undeniable. By transforming your organization's decision architecture and leveraging modern AI project intelligence, you don't just stop the daily cash burn—you accelerate project delivery. Organizations that decide faster build faster, securing a massive competitive advantage in today's demanding EPC market.
             </p>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Blogs
