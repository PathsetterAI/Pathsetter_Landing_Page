import React, { useState } from 'react'
import { homepageFaqs as faqs } from '../data/homepageFaqs'

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null)

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <section id="faq" className="relative w-full bg-white py-[90px] px-6 sm:px-12 md:px-16 lg:px-20 border-b border-[#DDDDE6] overflow-hidden select-none">

      <div className="relative z-10 w-full max-w-[760px] mx-auto text-left">
        {/* Section Tag */}
        <div className="inline-flex items-center gap-[9px] bg-[#EDF4FB] border border-[#D6E6F5] px-[13px] py-[6px] rounded-[30px] self-start mb-[20px]">
          <span className="w-[9px] h-[9px] rounded-[3px] bg-[#FFC20E] shrink-0" />
          <span className="text-[12.5px] font-sans text-[#1A3A5C] uppercase tracking-[0.01em] font-bold">
            Alfred FAQ
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[26px] md:text-[36px] font-extrabold text-[#1A3A5C] leading-[1.12] tracking-[-0.025em] m-0 mb-[12px]">
          Frequently Asked Questions
        </h2>

        {/* Subtext */}
        <p className="text-[#6B6B74] text-[17px] leading-[1.55] m-0 mb-[40px] font-normal">
          Learn how Alfred processes contracts, integrates post-contract workflows, and secures claims.
        </p>

        {/* Accordions */}
        <div className="flex flex-col border-t border-[#DDDDE6]">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={idx}
                className="border-b border-[#DDDDE6] transition-all duration-300"
              >
                {/* Header button with px-0 to align the question exactly to the left edge */}
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between py-5 px-0 text-left border-none bg-transparent cursor-pointer group outline-none focus:outline-none focus-visible:outline-none focus:ring-0 active:outline-none select-none"
                >
                  <span className={`text-[15px] sm:text-[16px] font-bold transition-colors duration-200 ${isOpen ? 'text-[#2B5F96]' : 'text-[#1A3A5C] group-hover:text-[#2B5F96]'
                    }`}>
                    {faq.q}
                  </span>

                  {/* Plus/Minus Indicator */}
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ml-4 ${isOpen ? 'border-[#2B5F96] bg-[#EDF4FB] text-[#2B5F96]' : 'border-[#DDDDE6] text-[#6B6B74] group-hover:border-[#2B5F96] group-hover:text-[#2B5F96]'
                    }`}>
                    {isOpen ? (
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </div>
                </button>

                {/* 
                  Modern Tailwind Height Transition (grid-rows 0fr -> 1fr):
                  Calculates exact height dynamically to prevent vertical text snapping.
                  Padding is inside to prevent layout jumps on open/close start.
                */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[13.5px] text-[#3A3A3F] leading-[1.6] pb-5 m-0 font-normal font-sans pr-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
