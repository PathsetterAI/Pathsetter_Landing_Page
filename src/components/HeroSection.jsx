import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import Sponsor1 from '../assets/sponsors/1.png'
import Sponsor2 from '../assets/sponsors/2.png'
import Sponsor3 from '../assets/sponsors/3.png'
import Sponsor4 from '../assets/sponsors/4.png'
import Sponsor5 from '../assets/sponsors/5.png'
import Sponsor6 from '../assets/sponsors/6.png'
import Sponsor7 from '../assets/sponsors/7.png'
import Sponsor8 from '../assets/sponsors/8.png'
import Sponsor9 from '../assets/sponsors/9.png'

export default function HeroSection() {
  const navigate = useNavigate()
  const sponsors = [
    Sponsor1, Sponsor2, Sponsor3, Sponsor4, Sponsor5, Sponsor6, Sponsor7, Sponsor8, Sponsor9
  ]

  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center bg-white overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 px-6 sm:px-12">
      {/* Yellow radial glow accent (Section 3.2) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none z-0" 
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 194, 14, 0.06), transparent 70%)'
        }}
      />

      <div className="relative z-10 w-full max-w-4xl flex flex-col gap-6 items-center">
        {/* Eyebrow */}
        <span className="text-[10px] font-mono text-[#1A3A5C] uppercase tracking-[2px] font-bold">
          Contract Intelligence
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-semibold leading-[1.25] text-[#111113] tracking-tight m-0 max-w-4xl">
          <span className="block">Every obligation in your contract.</span>
          <span className="text-brand-amber block mt-2 sm:mt-3">Tracked from bid to handover.</span>
        </h1>

        {/* Subheadline (Section 1.2 Copy) */}
        <p className="text-secondary-mid text-xs sm:text-[13px] leading-[1.65] max-w-2xl m-0 mt-2 font-normal">
          Alfred reads FIDIC, NHAI, PWD and Metro Rail contracts, maps every obligation to your P6 schedule, and alerts your team before a deadline is missed, a claim is lost, or a variation goes unrecorded. Built for GCs and EPCs running ₹2,000 Cr+ projects in India and the Middle East.
        </p>

        {/* CTA Buttons (Section 1.2 and 4.3 - Navy button only solid above the fold) */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
          <button
            onClick={() => {
              navigate('/demo')
              window.scrollTo(0, 0)
            }}
            className="bg-[#1A3A5C] text-white py-2 px-5 rounded-lg font-semibold cursor-pointer text-[13px] transition-all duration-200 hover:bg-[#2B5F96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A3A5C] focus-visible:outline-offset-2 active:scale-95 shadow-[0_2px_8px_rgba(26,58,92,0.15)]"
          >
            Schedule a Demo
          </button>
          
          <button
            onClick={() => {
              const element = document.getElementById('solution')
              if (element) {
                if (window.lenis) {
                  window.lenis.scrollTo(element, { offset: -80 })
                } else {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }
            }}
            className="bg-transparent border-none text-[13px] font-semibold text-[#2B5F96] hover:text-[#5B8EC4] transition-colors cursor-pointer py-2 px-1 hover:underline"
          >
            See how Alfred works →
          </button>
        </div>

        {/* Proof Strip (Section 1.2 - Trusted by strip) */}
        <div className="w-full max-w-2xl border-t border-[#DDDDE6] pt-6 mt-8">
          <p className="text-[10px] text-[#6B6B74] uppercase tracking-wider font-semibold m-0 mb-4">
            Trusted by teams managing ₹10,000 Cr+ in infrastructure portfolios
          </p>
          <div className="w-full overflow-hidden relative py-1 select-none">
            {/* Fade overlays for smooth visual edges */}
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            <div className="animate-marquee items-center gap-16">
              {sponsors.map((logo, index) => (
                <img
                  key={`logo-${index}`}
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="h-10 sm:h-12 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              ))}
              {/* Duplicate set for seamless looping */}
              {sponsors.map((logo, index) => (
                <img
                  key={`logo-dup-${index}`}
                  src={logo}
                  alt={`Partner Dup ${index + 1}`}
                  className="h-10 sm:h-12 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
