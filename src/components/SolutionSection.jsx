import React from 'react'
import { useNavigate } from 'react-router-dom'

// Set your image file path here (e.g. import MockupImg from '../assets/mockup.png')
// If MOCKUP_IMAGE is defined, it will render the image directly. Otherwise, it renders a premium placeholder.
const MOCKUP_IMAGE = ""

const lifecycleStages = [
  {
    stage: "1",
    label: "WIN IT",
    title: "Bid risk review",
    desc: "Surfaces onerous clauses, spec mismatches and hidden costs before you price the bid."
  },
  {
    stage: "2",
    label: "SET IT UP",
    title: "Obligation extraction",
    desc: "Every deadline, notice window and milestone mapped to your P6 schedule."
  },
  {
    stage: "3",
    label: "RUN IT",
    title: "In-project tracking",
    desc: "Site progress cross-referenced to obligations. Notices drafted before windows close."
  },
  {
    stage: "4",
    label: "DEFEND IT",
    title: "Claims & EOT",
    desc: "Promote a finding into a draft claim under the right clause, evidence attached."
  }
]

export default function SolutionSection() {
  const navigate = useNavigate()

  return (
    <div className="w-full max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-center px-6 sm:px-12 py-20 sm:py-28 text-left">
      
      {/* Left Side: Copy and Steps list */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          {/* Eyebrow */}
          <div className="text-[10px] font-mono text-[#B88500] uppercase tracking-widest font-bold">
            HOW ALFRED WORKS
          </div>
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#1A3A5C] m-0 leading-[1.2] tracking-tight">
            One obligation graph. <br />
            Bid to handover.
          </h2>
          {/* Description */}
          <p className="text-[#5A5A62] text-xs sm:text-[13.5px] leading-relaxed max-w-lg m-0 mt-1">
            Alfred reads across the whole contract — the tender you're pricing, the schedule you're running, the work logged on site — and keeps them reconciled the entire way through.
          </p>
        </div>

        {/* Steps List */}
        <div className="flex flex-col gap-5 mt-3">
          {lifecycleStages.map((stage, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              {/* Yellow Circle Number */}
              <div className="w-6 h-6 rounded-full bg-[#FFC20E] text-[#1A3A5C] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                {stage.stage}
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1.5 flex-wrap text-[12.5px] sm:text-[13.5px]">
                  <span className="font-bold text-[#B88500] uppercase tracking-wider">
                    {stage.label}
                  </span>
                  <span className="text-[#6B6B74]/40 font-bold">·</span>
                  <span className="font-bold text-[#1A3A5C]">
                    {stage.title}
                  </span>
                </div>
                <p className="text-[#5A5A62] text-xs sm:text-[12.5px] leading-relaxed m-0 mt-0.5">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
          <button
            onClick={() => {
              navigate('/demo')
              window.scrollTo(0, 0)
            }}
            className="bg-[#1A3A5C] text-white py-2.5 px-6 rounded-lg font-semibold cursor-pointer text-[13px] transition-all duration-200 hover:bg-[#2B5F96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A3A5C] focus-visible:outline-offset-2 active:scale-95 shadow-[0_2px_8px_rgba(26,58,92,0.15)] w-full sm:w-auto"
          >
            Book a Trial Run
          </button>

          <button
            onClick={() => {
              const element = document.getElementById('proof')
              if (element) {
                if (window.lenis) {
                  window.lenis.scrollTo(element, { offset: -80 })
                } else {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }
            }}
            className="bg-transparent border-none text-[13px] font-semibold text-[#2B5F96] hover:text-[#5B8EC4] transition-colors cursor-pointer py-2.5 px-1 hover:underline flex items-center gap-1"
          >
            See our verified deployments →
          </button>
        </div>
      </div>

      {/* Right Side: Mockup Image / Placeholder Panel */}
      <div className="w-full min-h-[460px] bg-white border border-[#DDDDE6] rounded-2xl shadow-[0_4px_24px_rgba(26,58,92,0.04)] relative overflow-hidden flex flex-col justify-between p-6 sm:p-8">
        {MOCKUP_IMAGE ? (
          <img 
            src={MOCKUP_IMAGE} 
            alt="Alfred Platform Mockup" 
            className="w-full h-full object-contain rounded-lg"
          />
        ) : (
          <div className="flex-1 flex flex-col justify-between h-full">
            {/* Mockup Title bar */}
            <div className="flex items-center justify-between border-b border-[#DDDDE6] pb-3 shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#B52B1A]/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#B88500]/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#145C35]/40" />
                <span className="text-[10px] text-[#6B6B74] font-mono ml-2">alfredworks.ai/platform_view</span>
              </div>
              <span className="text-[10px] text-[#6B6B74] font-mono font-medium border border-[#DDDDE6] px-2 py-0.5 rounded">
                Mockup View
              </span>
            </div>

            {/* Placeholder Canvas Area */}
            <div className="flex-1 flex flex-col items-center justify-center py-10 px-4 text-center my-4 border-2 border-dashed border-[#DDDDE6] rounded-xl bg-[#F4F4F7]/40 relative group transition-colors duration-300 hover:bg-[#F4F4F7]/70">
              {/* Decorative radial yellow glow on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255, 194, 14, 0.08), transparent 70%)'
                }}
              />
              <svg className="w-12 h-12 text-[#2B5F96]/40 mb-3 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h4 className="text-xs font-semibold text-[#1A3A5C] mb-1">
                Platform Screenshot Placeholder
              </h4>
              <p className="text-[10px] text-[#6B6B74] max-w-[240px] leading-relaxed">
                Add your mockup image here later. The design automatically scales it perfectly to fit this canvas frame.
              </p>
            </div>

            {/* Mockup Status bar */}
            <div className="border-t border-[#DDDDE6] pt-3 flex items-center justify-between text-[10px] text-[#6B6B74] font-mono shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#1A3A5C]/40" />
                <span>Responsive Frame</span>
              </div>
              <span className="italic">Ready for Mockup Upload</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
