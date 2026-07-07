import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CloseSection() {
  const navigate = useNavigate()

  return (
    <div className="w-full flex flex-col justify-center items-center py-[100px] px-6 sm:px-12 md:px-16 lg:px-20 relative overflow-hidden bg-[#F4F4F7]">
      
      <div className="max-w-3xl text-center relative z-10 flex flex-col items-center gap-4">
        {/* Eyebrow */}
        <span className="text-[10px] font-mono text-[#B88500] uppercase tracking-widest font-bold">
          READY TO SEE ALFRED?
        </span>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-bold text-[#1A3A5C] leading-[1.2] m-0 tracking-tight max-w-2xl">
          Bring a tender. Watch Alfred <br className="hidden sm:inline" />
          <span className="relative inline-block mt-0.5">
            read it.
            <span className="absolute bottom-[-4px] left-0 right-0 h-[3px] bg-[#FFC20E] rounded" />
          </span>
        </h2>

        {/* Description */}
        <p className="text-[#5A5A62] text-xs sm:text-[13.5px] leading-relaxed max-w-lg m-0 mt-1">
          Book 30 minutes and bring a real one. We'll run it against the standard you choose, surface the risks you'd want to price or query, and hand you what Alfred built. Live.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => {
            navigate('/demo')
            window.scrollTo(0, 0)
          }}
          className="bg-[#1A3A5C] text-white py-2.5 px-6 rounded-lg font-semibold cursor-pointer text-xs sm:text-[13px] transition-all duration-200 hover:bg-[#2B5F96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A3A5C] focus-visible:outline-offset-2 active:scale-95 shadow-[0_4px_16px_rgba(26,58,92,0.15)] flex items-center gap-2 mt-2"
        >
          {/* Calendar Icon */}
          <svg className="w-4 h-4 text-[#FFC20E] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Schedule a Demo</span>
        </button>

        {/* Sub-text checkmark pill - centered, high visibility against #F4F4F7 */}
        <div className="inline-flex items-center gap-2 bg-white border border-[#DDDDE6] rounded-full px-4 py-1.5 shadow-sm text-[11px] text-[#5A5A62] mt-4 select-none font-medium">
          <svg className="w-3.5 h-3.5 text-[#145C35] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
          <span>30 minutes · No commitment · Bring a real tender</span>
        </div>
      </div>
    </div>
  )
}
