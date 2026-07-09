import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CloseSection() {
  const navigate = useNavigate()

  return (
    <div className="w-full flex flex-col justify-center items-center py-[110px] sm:py-[130px] md:py-[150px] px-6 sm:px-12 relative overflow-hidden bg-[#F4F4F7] border-b border-[#DDDDE6]">
      {/* Subtle Engineering Grid background */}
      <div className="absolute inset-0 bg-engineering-grid opacity-[0.35] pointer-events-none z-0" />

      {/* Centered card container with hand-tuned margin offsets */}
      <div className="max-w-3xl text-center relative z-10 flex flex-col items-center gap-0">

        {/* Intro text / question - Made yellow/gold (#B88500) */}
        <h3 className="text-base sm:text-[18px] md:text-[20px] font-bold text-[#B88500] tracking-tight m-0 mb-3 select-none">
          Still evaluating Alfred?
        </h3>

        {/* Enlarged Primary Headline */}
        <h2 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] font-extrabold text-[#1A3A5C] leading-[1.18] m-0 tracking-tight max-w-xl mb-6">
          Bring a real contract. <br className="hidden sm:inline" />
          <span className="relative inline-block mt-0.5">
            We'll run it live.
            <span className="absolute bottom-[-3px] left-0 right-0 h-[3px] bg-[#FFC20E] rounded" />
          </span>
        </h2>

        {/* CTA Button */}
        <button
          onClick={() => {
            navigate('/demo')
            window.scrollTo(0, 0)
          }}
          className="bg-[#1A3A5C] text-white py-3 px-8 rounded-lg font-semibold cursor-pointer text-sm sm:text-[15px] transition-all duration-200 hover:bg-[#2B5F96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A3A5C] focus-visible:outline-offset-2 active:scale-95 shadow-[0_4px_16px_rgba(26,58,92,0.15)] flex items-center gap-2 mb-5 border-none"
        >
          {/* Calendar Icon */}
          <svg className="w-4 h-4 text-[#FFC20E] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Schedule a Demo</span>
        </button>

        {/* Sub-text checkmark pill - centered, high visibility against #F4F4F7 */}
        <div className="inline-flex items-center gap-2 bg-white border border-[#DDDDE6] rounded-full px-4 py-1.5 shadow-sm text-[11px] text-[#5A5A62] select-none font-medium font-sans">
          <svg className="w-3.5 h-3.5 text-[#145C35] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
          <span>30 minutes · No commitment · Bring a real tender</span>
        </div>
      </div>
    </div>
  )
}
