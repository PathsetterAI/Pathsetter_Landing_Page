import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CloseSection() {
  const navigate = useNavigate()

  return (
    <div className="w-full flex flex-col justify-center items-center py-10 sm:py-16 px-6 sm:px-12 relative overflow-hidden bg-transparent">
      {/* Yellow radial glow accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0" 
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 194, 14, 0.06), transparent 70%)'
        }}
      />

      <div className="max-w-3xl text-center relative z-10 flex flex-col items-center gap-3.5">
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

        {/* Sub-text checkmark pill */}
        <div className="inline-flex items-center gap-2 bg-white border border-[#DDDDE6] rounded-full px-4 py-1.5 shadow-sm text-[11px] text-[#5A5A62] mt-0.5 select-none font-medium">
          <svg className="w-3.5 h-3.5 text-[#145C35] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
          <span>30 minutes · No commitment · Bring a real tender</span>
        </div>

        {/* Faint divider line */}
        <div className="w-full max-w-[500px] border-t border-[#DDDDE6]/60 my-4" />

        {/* Reads Against Title */}
        <div className="text-[9px] font-mono text-[#6B6B74] uppercase tracking-wider font-bold">
          ALFRED READS AGAINST:
        </div>

        {/* Tag pills */}
        <div className="flex flex-wrap justify-center gap-2.5 max-w-xl">
          {["FIDIC", "CPWD GCC", "NHAI", "Metro Rail", "Your own standard"].map((tag, idx) => (
            <span 
              key={idx}
              className="bg-white border border-[#DDDDE6] rounded-full px-4 py-1.5 text-xs text-[#1A3A5C] font-semibold shadow-sm select-none"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Security Compliance bottom badge */}
        <div className="flex items-center gap-1.5 text-[9.5px] sm:text-[10px] font-mono text-[#6B6B74] mt-4 select-none">
          <svg className="w-3.5 h-3.5 text-[#145C35] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>Enterprise grade ISO 27001 & SOC-2 compliance workspace</span>
        </div>
      </div>
    </div>
  )
}
