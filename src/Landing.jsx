import React, { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ThesisSection from './components/ThesisSection'
import EarlyWarningSection from './components/EarlyWarningSection'
import CoPilotSection from './components/CoPilotSection'
import MemorySection from './components/MemorySection'
import StatsSection from './components/StatsSection'
import TestimonialsSection from './components/TestimonialsSection'
import CloseSection from './components/CloseSection'
import Footer from './components/Footer'
import SEO from './components/SEO'

// Restore Swiper CSS globally to fix the sliders
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function Landing() {
  return (
    <div className="relative w-full min-h-screen bg-[#F4F4F7]">
      <SEO
        title="Home"
        description="Contract intelligence for infrastructure and EPC project delivery. Alfred reads FIDIC, NHAI, PWD and Metro Rail contracts, maps obligations to schedules, and alerts teams."
      />
      <Navbar />

      {/* Standard normal scroll flow */}
      <div className="w-full">
        {/* Scene 1: Hero (White background fading to a soft shade at the bottom) */}
        <section id="hero" className="w-full bg-gradient-to-b from-white via-white to-[#EAEAEF] border-b border-[#DDDDE6] shadow-[0_4px_16px_rgba(26,58,92,0.03)]">
          <HeroSection />
        </section>

        {/* Scene 2: Thesis (Dark Navy background) */}
        <ThesisSection />

        {/* Scene 3: Capability 1 — Early Warning (White background) */}
        <EarlyWarningSection />

        {/* Scene 3.5: Capability 2 — Co-Pilot (Light grey background) */}
        <CoPilotSection />

        {/* Scene 3.8: Capability 3 — Memory (White background) */}
        <MemorySection />

        {/* Scene 3.9: Stats Section (Dark Navy background) */}
        <StatsSection />

        {/* Scene 4: Proof (White background to contrast grey cards) */}
        <section id="proof" className="w-full bg-white border-b border-[#DDDDE6]">
          <TestimonialsSection />
        </section>

        {/* Scene 5: Close (White background with yellow glow and Footer) */}
        <section id="close" className="w-full bg-white">
          <div className="w-full">
            <CloseSection />
          </div>
          <Footer />
        </section>
      </div>
    </div>
  )
}
