import React, { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
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

        {/* Scene 2: Problem (Navy background) */}
        <section id="problem" className="w-full bg-[#1A3A5C]">
          <ProblemSection />
        </section>

        {/* Scene 3: Solution (White background) */}
        <section id="solution" className="w-full bg-white border-b border-[#DDDDE6]">
          <SolutionSection />
        </section>

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
