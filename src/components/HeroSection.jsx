import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Sponsor2 from '../assets/sponsors/2.png'
import Sponsor3 from '../assets/sponsors/3.png'
import Sponsor4 from '../assets/sponsors/4.png'
import Sponsor5 from '../assets/sponsors/5.png'
import Sponsor6 from '../assets/sponsors/6.png'
import Sponsor7 from '../assets/sponsors/7.png'
import Sponsor8 from '../assets/sponsors/8.png'
import Sponsor9 from '../assets/sponsors/9.png'
import Sponsor10 from '../assets/sponsors/10.png'
import Sponsor11 from '../assets/sponsors/11.png'

export default function HeroSection() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)

  const sponsors = [
    { src: Sponsor2, isSmall: true },
    { src: Sponsor3, isSmall: true },
    { src: Sponsor4, isSmall: true },
    { src: Sponsor5, isSmall: true },
    { src: Sponsor6, isSmall: true },
    { src: Sponsor7, isSmall: true },
    { src: Sponsor8, isSmall: false },
    { src: Sponsor9, isSmall: false },
    { src: Sponsor10, isSmall: false },
    { src: Sponsor11, isSmall: false }
  ]

  // Exact step timing from manager's loop concept
  useEffect(() => {
    const timings = [2500, 2500, 2500, 7500]
    const timer = setTimeout(() => {
      setCurrentStep((prev) => (prev >= 3 ? 0 : prev + 1))
    }, timings[currentStep])

    return () => clearTimeout(timer)
  }, [currentStep])

  return (
    <section className="relative w-full bg-transparent overflow-hidden pt-[140px] pb-[60px] z-10">
      {/* Background radial-gradient overlay exactly from manager's stylesheet */}
      <div
        className="absolute top-[-140px] right-[-120px] w-[520px] h-[520px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(255,194,14,.10), transparent 62%)'
        }}
      />
      <div className="absolute inset-0 bg-engineering-grid opacity-[0.02] pointer-events-none z-0" />

      {/* Container wrap matching manager's widths and paddings */}
      <div className="relative z-10 w-full max-w-[1180px] mx-auto px-[28px] flex flex-col gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-[52px] items-center">
          {/* Left Column: Copy & Actions */}
          <div className="flex flex-col gap-0 text-left items-start">
            {/* Eyebrow exactly from manager's stylesheet */}
            <div className="inline-flex items-center gap-[8px] mb-[22px] select-none">
              <span className="w-[7px] h-[7px] bg-[#FFC20E] rounded-[2px] shrink-0" />
              <span className="text-[12px] font-mono text-[#B88500] uppercase tracking-[0.04em] font-semibold leading-none">
                Construction contract risk intelligence
              </span>
            </div>

            {/* Headline exactly from manager's stylesheet */}
            <h1 className="text-[32px] sm:text-[38px] lg:text-[46px] font-extrabold leading-[1.08] text-[#1A3A5C] tracking-[-0.03em] m-0 max-w-xl">
              Your project spans 10,000 pages of contracts, specs, DPRs and letters. Your team is expected to remember all of them.
            </h1>

            {/* Description subtext exactly from manager's stylesheet */}
            <p className="max-w-[46ch] mt-[22px] mb-[30px] text-[#6B6B74] text-[16.5px] leading-[1.6] font-normal m-0">
              Manual review doesn't fail because people aren't careful — it fails because{' '}
              <strong className="text-[#3A3A3F] font-semibold">
                no one can cross-reference thousands of pages under deadline.
              </strong>{' '}
              <span className="text-[#111113] font-semibold underline decoration-[#FFC20E] decoration-[3px] underline-offset-[3px]">
                Alfred
              </span>{' '}
              does, and flags what can hurt the project while there's still time to act.
            </p>

            {/* CTA Buttons exactly from manager's stylesheet sizes */}
            <div className="flex flex-row items-center gap-[12px] w-full sm:w-auto">
              <button
                onClick={() => {
                  navigate('/demo')
                  window.scrollTo(0, 0)
                }}
                className="bg-[#2B5F96] hover:bg-[#1A3A5C] text-white px-[24px] py-[14px] text-[14.5px] rounded-[11px] font-semibold cursor-pointer transition-all duration-150 active:scale-98 shadow-[0_8px_22px_rgba(26,58,92,0.26)] border-none shrink-0"
              >
                Schedule a Demo
              </button>

              <button
                onClick={() => {
                  const element = document.getElementById('capabilities') || document.getElementById('thesis')
                  if (element) {
                    if (window.lenis) {
                      window.lenis.scrollTo(element, { offset: -80 })
                    } else {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }
                }}
                className="bg-transparent text-[#1A3A5C] border border-[#DDDDE6] hover:border-[#5B8EC4] hover:bg-[#EDF4FB] px-[24px] py-[14px] text-[14.5px] rounded-[11px] font-semibold cursor-pointer transition-all duration-150 shrink-0"
              >
                See how Alfred works
              </button>
            </div>

            {/* Target Markets note exactly from manager's stylesheet */}
            <p className="text-[12.5px] text-[#ADADB8] mt-[15px] font-normal m-0 select-none">
              Built for FIDIC, CPWD and EPC contracts — across India &amp; the Middle East.
            </p>
          </div>

          {/* Right Column: Live Conversation Flow Panel matching manager's panel styles */}
          <div className="relative w-full flex justify-center lg:justify-start z-10">
            <div className="w-full max-w-[530px] bg-white border border-[#DDDDE6] rounded-[16px] flex flex-col justify-between shadow-[0_30px_70px_-26px_rgba(26,58,92,0.32),_0_2px_8px_rgba(17,17,19,0.05)] relative overflow-hidden">

              {/* Panel Header exactly from manager's stylesheet */}
              <div className="bg-[#F4F4F7] border-b border-[#DDDDE6] px-[16px] py-[12px] flex items-center justify-between shrink-0 select-none">
                <div className="flex items-center gap-[8px]">
                  <span className="w-[9px] h-[9px] rounded-full bg-[#DDDDE6]" />
                  <span className="w-[9px] h-[9px] rounded-full bg-[#DDDDE6]" />
                  <span className="w-[9px] h-[9px] rounded-full bg-[#DDDDE6]" />
                  <span className="text-[12px] text-[#3A3A3F] font-semibold font-sans ml-[6px]">Alfred · Northgate EPC — Package 2</span>
                </div>
                {/* Live Indicator */}
                <span className="inline-flex items-center gap-[6px] text-[10px] font-bold text-[#145C35] uppercase tracking-[0.05em] font-sans">
                  <span className="w-[6px] h-[6px] rounded-full bg-[#145C35] animate-pulse" />
                  Live
                </span>
              </div>

              {/* Dynamic steps container matching flow height and paddings */}
              <div className="p-[16px] flex flex-col gap-[10px] min-h-[328px] bg-white text-left justify-start">

                {/* Step 1: Owner (Always visible) */}
                <div className="flex gap-[12px] items-start p-[13px_14px] rounded-[12px] border border-[#DDDDE6] bg-white transition-all duration-300">
                  <span className="w-[30px] h-[30px] rounded-[8px] bg-[#F4F4F7] flex-shrink-0 flex items-center justify-center text-sm select-none">📄</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-bold tracking-[0.05em] uppercase text-[#6B6B74] mb-[3px] font-sans">Owner</div>
                    <div className="text-[13px] leading-[1.45] text-[#3A3A3F]">
                      Issued <strong className="text-[#111113] font-semibold">Change Order #14</strong> — revised piping routing, Zone 3.
                    </div>
                  </div>
                </div>

                {/* Step 2: Alfred flags */}
                <div
                  className={`flex gap-[12px] items-start p-[13px_14px] rounded-[12px] border border-[#f0d2cd] bg-white transition-all duration-500 ease-out ${currentStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                    }`}
                >
                  <span className="w-[30px] h-[30px] rounded-[8px] bg-[#FCECEA] flex-shrink-0 flex items-center justify-center select-none">
                    <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                      <path d="M10 2l8 14H2L10 2z" fill="#B52B1A" />
                      <rect x="9" y="7" width="2" height="5" fill="#fff" />
                      <rect x="9" y="13" width="2" height="2" fill="#fff" />
                    </svg>
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-bold tracking-[0.05em] uppercase text-[#B52B1A] mb-[3px] font-sans">Alfred · flagged</div>
                    <div className="text-[13px] leading-[1.45] text-[#3A3A3F]">
                      Contractual impact detected. The change triggers a <strong className="text-[#111113] font-semibold">variation under Clause 13</strong> and creates <strong className="text-[#111113] font-semibold">LD exposure</strong> if the milestone slips.
                    </div>
                    <div className="mt-[8px] flex gap-[6px] flex-wrap">
                      <span className="text-[10px] font-semibold px-[8px] py-[3px] rounded-[6px] bg-[#FCECEA] text-[#B52B1A] tracking-[0.02em] font-sans">Critical</span>
                      <span className="text-[10px] font-semibold px-[8px] py-[3px] rounded-[6px] bg-[#FFF6D6] text-[#B88500] tracking-[0.02em] font-sans">LD exposure</span>
                      <span className="text-[10px] font-semibold px-[8px] py-[3px] rounded-[6px] bg-[#EDF4FB] text-[#2B5F96] tracking-[0.02em] font-sans">Clause 13</span>
                    </div>
                  </div>
                </div>

                {/* Step 3: Nudge */}
                <div
                  className={`flex gap-[12px] items-start p-[13px_14px] rounded-[12px] border border-[#f0dfa3] bg-[#FFF6D6] transition-all duration-500 ease-out ${currentStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                    }`}
                >
                  <span className="w-[30px] h-[30px] rounded-[8px] bg-[#FFC20E] flex-shrink-0 flex items-center justify-center select-none">
                    <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                      <path d="M10 2a5 5 0 0 0-5 5c0 2 1 3 1 5h8c0-2 1-3 1-5a5 5 0 0 0-5-5z" fill="#111113" />
                      <rect x="7" y="15" width="6" height="2" rx="1" fill="#111113" />
                    </svg>
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-bold tracking-[0.05em] uppercase text-[#B88500] mb-[3px] font-sans">Nudge</div>
                    <div className="text-[13px] leading-[1.45] text-[#3A3A3F]">
                      This event supports an <strong className="text-[#111113] font-semibold">EOT claim</strong>. Generate the claim while the notice window is open?
                    </div>
                  </div>
                </div>

                {/* Step 4: Alfred drafted */}
                <div
                  className={`flex gap-[12px] items-start p-[13px_14px] rounded-[12px] border border-[#D6E6F5] bg-white transition-all duration-500 ease-out ${currentStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                    }`}
                >
                  <span className="w-[30px] h-[30px] rounded-[8px] bg-[#EDF4FB] flex-shrink-0 flex items-center justify-center select-none">
                    <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                      <path d="M4 3h9l3 3v11H4V3z" fill="#2B5F96" />
                      <path d="M13 3v3h3" fill="#5B8EC4" />
                      <rect x="6" y="9" width="8" height="1.5" fill="#fff" />
                      <rect x="6" y="12" width="6" height="1.5" fill="#fff" />
                    </svg>
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-bold tracking-[0.05em] uppercase text-[#2B5F96] mb-[3px] font-sans">Alfred · drafted</div>
                    <div className="text-[13px] leading-[1.45] text-[#3A3A3F]">
                      <strong className="text-[#111113] font-semibold">EOT claim letter</strong> ready — grounded in the change order, Clause 13, and Zone 3 schedule variance.
                    </div>
                    <div className="mt-[10px] flex items-center gap-[8px]">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          navigate('/demo')
                        }}
                        className="text-[12px] font-semibold text-white bg-[#2B5F96] hover:bg-[#1A3A5C] px-[12px] py-[6px] rounded-[7px] cursor-pointer transition-colors border-none leading-none select-none"
                      >
                        Review &amp; send
                      </button>
                      <span className="text-[10.5px] text-[#6B6B74]">
                        Nothing is ever auto-sent — the send button stays human.
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Proof Strip */}
        <div className="w-full border-t border-[#DDDDE6] pt-8 mt-4">
          <p className="text-[10px] text-[#6B6B74] uppercase tracking-wider font-semibold m-0 mb-4 text-center select-none">
            Trusted by teams managing ₹10,000 Cr+ in infrastructure portfolios
          </p>
          <div className="w-full overflow-hidden relative py-1 select-none marquee-fade">
            <div className="flex animate-marquee items-center gap-16">
              {sponsors.map((logo, index) => (
                <img
                  key={`logo-${index}`}
                  src={logo.src}
                  alt={`Partner ${index + 1}`}
                  className={`${logo.isSmall ? 'h-16 sm:h-[80px]' : 'h-12 sm:h-[56px]'
                    } w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300`}
                />
              ))}
              {/* Duplicate set for seamless looping */}
              {sponsors.map((logo, index) => (
                <img
                  key={`logo-dup-${index}`}
                  src={logo.src}
                  alt={`Partner Dup ${index + 1}`}
                  className={`${logo.isSmall ? 'h-16 sm:h-[80px]' : 'h-12 sm:h-[56px]'
                    } w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
