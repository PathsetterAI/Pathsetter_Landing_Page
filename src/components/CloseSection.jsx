import React from 'react'
import { useNavigate } from 'react-router-dom'

const contractPills = [
  'FIDIC Red Book',
  'FIDIC Yellow Book',
  'FIDIC Silver Book',
  'NHAI Contracts',
  'Metro Rail',
  'PWD Contracts',
  'IRCON',
  'RVNL',
  'AIA',
  'IFC Standards'
]

export default function CloseSection() {
  const navigate = useNavigate()

  return (
    <div className="w-full flex flex-col justify-center items-center py-20 sm:py-28 px-6 sm:px-12 relative overflow-hidden bg-transparent">
      {/* Yellow radial glow accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0" 
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 194, 14, 0.08), transparent 70%)'
        }}
      />

      <div className="max-w-3xl text-center relative z-10 flex flex-col items-center gap-8">
        {/* Eyebrow */}
        <span className="text-[10px] font-mono text-[#B88500] uppercase tracking-widest font-bold bg-[#FFF6D6] px-4 py-1.5 rounded-full border border-[#B88500]/10">
          Get Started
        </span>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A3A5C] leading-[1.2] m-0 tracking-tight">
          Every obligation. Tracked from bid to handover.
        </h2>

        {/* Description */}
        <p className="text-secondary-mid text-sm max-w-lg leading-relaxed m-0">
          Alfred reads your infrastructure contracts, maps obligations to your Primavera P6 or MS Project schedule, and alerts your team before a deadline is missed.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => {
            navigate('/demo')
            window.scrollTo(0, 0)
          }}
          className="bg-[#1A3A5C] text-white py-2 px-5 rounded-lg font-semibold cursor-pointer text-[13px] transition-all duration-200 hover:bg-[#2B5F96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A3A5C] focus-visible:outline-offset-2 active:scale-95 shadow-[0_4px_16px_rgba(26,58,92,0.15)] mt-2"
        >
          Schedule a Demo
        </button>

        {/* Contract pills */}
        <div className="flex flex-wrap justify-center gap-2 max-w-xl mt-6">
          {contractPills.map((pill, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono text-[#6B6B74] bg-white border border-[#DDDDE6] px-3 py-1.5 rounded-md hover:border-[#1A3A5C] hover:text-[#1A3A5C] transition-colors"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
