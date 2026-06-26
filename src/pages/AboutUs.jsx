import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden selection:bg-[#FFC20E]/30 text-left">
      <SEO 
        title="About Us" 
        description="Meet Alfred, contract intelligence for infrastructure and EPC project delivery. We are restoring margin certainty to the physical builders of our world."
      />
      <Navbar />
      
      <main className="flex-grow pt-24 sm:pt-32 pb-16 sm:pb-24 px-6 sm:px-12 md:px-16 lg:px-20 z-10 relative">
        {/* Yellow radial glow accent top */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none z-0" 
          style={{
            background: 'radial-gradient(circle at center, rgba(255, 194, 14, 0.05), transparent 70%)'
          }}
        />

        <div className="max-w-[1100px] mx-auto relative z-10 flex flex-col gap-12 sm:gap-16">
          
          {/* Section 1: Hero Intro */}
          <div className="flex flex-col gap-4 text-left max-w-3xl">
            {/* Eyebrow */}
            <div className="w-fit bg-[#FFF6D6] text-[#B88500] text-[10px] font-mono font-bold tracking-widest px-3.5 py-1 rounded-full uppercase border border-[#FFC20E]/10">
              OUR MISSION & STORY
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-[38px] lg:text-[40px] font-bold text-[#1A3A5C] leading-[1.25] tracking-tight m-0 mt-2">
              Restoring margin certainty <br />
              to the physical builders of our world.
            </h1>

            {/* Description */}
            <p className="text-[#5A5A62] text-xs sm:text-[14.5px] leading-relaxed m-0 mt-1 max-w-2xl font-normal">
              Large-scale construction is the backbone of civilization. Yet, the builders who shoulder the highest execution risks operate on razor-thin, leaking margins. Alfred was born to change this.
            </p>
          </div>

          {/* Section 2: Two Problem & Insight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-2">
            
            {/* Card 1: The Problem We Solve */}
            <div className="bg-white border border-[#DDDDE6] rounded-2xl p-6 sm:p-8 flex flex-col gap-4 shadow-sm hover:border-[#1A3A5C]/30 transition-all duration-300">
              <div className="flex items-center gap-3">
                {/* Shield Yellow Icon */}
                <div className="w-9 h-9 rounded-lg bg-[#FFF6D6] flex items-center justify-center text-[#B88500] shrink-0 border border-[#FFC20E]/10">
                  <svg className="w-5 h-5 text-[#B88500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#1A3A5C] text-[12.5px] sm:text-[13.5px] tracking-wider uppercase m-0">
                  THE PROBLEM WE SOLVE
                </h3>
              </div>
              <p className="text-[#5A5A62] text-xs sm:text-[13.5px] leading-relaxed m-0 mt-0.5">
                Major infrastructure projects leak 5% to 15% of their total contract value through un-tracked obligations, un-notified site variations, and missed time-bar notice windows. By the time a delay reaches the head office, the contractual claim is already legally dead.
              </p>
            </div>

            {/* Card 2: Our Founding Insight */}
            <div className="bg-white border border-[#DDDDE6] rounded-2xl p-6 sm:p-8 flex flex-col gap-4 shadow-sm hover:border-[#1A3A5C]/30 transition-all duration-300">
              <div className="flex items-center gap-3">
                {/* Compass Blue Icon */}
                <div className="w-9 h-9 rounded-lg bg-[#EDF4FB] flex items-center justify-center text-[#2B5F96] shrink-0 border border-[#2B5F96]/10">
                  <svg className="w-5 h-5 text-[#2B5F96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#1A3A5C] text-[12.5px] sm:text-[13.5px] tracking-wider uppercase m-0">
                  OUR FOUNDING INSIGHT
                </h3>
              </div>
              <p className="text-[#5A5A62] text-xs sm:text-[13.5px] leading-relaxed m-0 mt-0.5">
                Skeptical project teams don't need more heavy general collaboration tools; they need real contract intelligence. To preserve margin, site progress must be synchronized with contract terms in real time.
              </p>
            </div>

          </div>

          {/* Section 3: What We're Building */}
          <div className="bg-white border border-[#DDDDE6] rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col gap-6 shadow-sm w-full text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1A3A5C] m-0">
              What We're Building
            </h3>
            
            <p className="text-[#5A5A62] text-xs sm:text-[13.5px] leading-relaxed m-0 max-w-4xl">
              Alfred is the core contract-intelligence system for large-scale construction. It reads deep tender terms, extracts complex performance parameters, and monitors daily execution data. Our goal is to prevent margin loss before a late warning or dead notice ever opens a gap.
            </p>

            {/* Yellow quote container */}
            <div className="bg-[#FFFBF0] border border-[#FFC20E]/20 rounded-xl p-4 sm:p-5 text-left mt-2">
              <p className="text-[#1A3A5C] text-xs sm:text-[13.5px] leading-relaxed m-0 italic font-medium">
                "We believe the builders of our critical railways, metro routes, energy grids, and ports deserve the same level of software precision that high-frequency trading firms demand."
              </p>
            </div>
          </div>

          {/* Section 4: Forward-Deployed Banner */}
          <div className="bg-[#1A3A5C] text-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg flex flex-col gap-6 w-full text-left relative overflow-hidden mt-2">
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
            
            <div className="flex flex-col gap-2 relative z-10 max-w-4xl">
              {/* Gold Eyebrow */}
              <span className="text-[9px] font-mono font-bold tracking-widest text-[#FFC20E] uppercase">
                THE FORWARD-DEPLOYED OPERATIONAL MODEL
              </span>
              
              {/* Title */}
              <h2 className="text-xl sm:text-2xl md:text-[26px] font-bold text-white m-0 mt-1">
                We Don't Just Ship API Keys; We Deploy Engineers.
              </h2>
              
              {/* Body */}
              <p className="text-zinc-300 text-xs sm:text-[13.5px] leading-relaxed m-0 mt-2 font-normal">
                We understand that enterprise infrastructure buyers do not have the bandwidth for months of complex custom API work. That is why Alfred is shipped alongside our Forward-Deployed Engineers (FDEs). Our engineers build your localized CPWD or proprietary risk playbooks and configure your integrations with Oracle Aconex, SAP, or Primavera P6 in a matter of days.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full border-t border-white/10 my-1 relative z-10" />

            {/* Three columns features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 mt-1">
              {/* Col 1 */}
              <div className="flex flex-col gap-1.5">
                <span className="text-sm font-bold text-[#FFC20E]">
                  01. Setup in Days
                </span>
                <p className="text-zinc-300 text-xs sm:text-[12.5px] leading-relaxed m-0">
                  We integrate with Aconex, Primavera, and local ERP files.
                </p>
              </div>

              {/* Col 2 */}
              <div className="flex flex-col gap-1.5">
                <span className="text-sm font-bold text-[#FFC20E]">
                  02. Hand-Tuned Rules
                </span>
                <p className="text-zinc-300 text-xs sm:text-[12.5px] leading-relaxed m-0">
                  Your unique historical bid parameters and GCCs uploaded.
                </p>
              </div>

              {/* Col 3 */}
              <div className="flex flex-col gap-1.5">
                <span className="text-sm font-bold text-[#FFC20E]">
                  03. Secure Sovereign
                </span>
                <p className="text-zinc-300 text-xs sm:text-[12.5px] leading-relaxed m-0">
                  Your documents stay inside your secure enterprise boundaries.
                </p>
              </div>
            </div>

          </div>

          {/* Section 5: Badges Footer Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4 border-t border-[#DDDDE6] pt-6 w-full text-[#6B6B74]">
            {/* Backed Badge */}
            <div className="flex items-center gap-2 text-left">
              <div className="w-7 h-7 rounded-lg bg-[#EDF4FB] flex items-center justify-center shrink-0 border border-[#2B5F96]/10 select-none">
                <svg className="w-4 h-4 text-[#2B5F96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono leading-tight max-w-[280px]">
                Backed by leading enterprise tech institutional capital and construction leaders.
              </span>
            </div>

            {/* SOC-2 Badge */}
            <div className="flex items-center gap-2 text-left sm:text-right select-none">
              <div className="w-7 h-7 rounded-lg bg-[#E4F3EC] flex items-center justify-center shrink-0 border border-[#145C35]/10">
                <svg className="w-4 h-4 text-[#145C35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono leading-tight">
                SOC-2 Type II Certified Workspace
              </span>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
