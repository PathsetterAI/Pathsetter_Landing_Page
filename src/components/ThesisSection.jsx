import React from 'react'

export default function ThesisSection() {
  return (
    <section id="thesis" className="relative w-full bg-[#1A3A5C] text-white py-20 sm:py-24 px-6 sm:px-12 md:px-16 lg:px-20 overflow-hidden text-center">
      {/* Light blueprint grid overlay */}
      <div className="absolute inset-0 bg-engineering-grid-light opacity-[0.03] pointer-events-none z-0" />
      
      {/* Outer framing box using engineering layout corners */}
      <div className="relative z-10 w-full max-w-[800px] mx-auto p-8 sm:p-12 md:p-16 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm">
        
        {/* Engineering Corner Brackets */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#FFC20E] -translate-x-1 -translate-y-1 rounded-tl" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#FFC20E] translate-x-1 -translate-y-1 rounded-tr" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#FFC20E] -translate-x-1 translate-y-1 rounded-bl" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#FFC20E] translate-x-1 translate-y-1 rounded-br" />

        <div className="flex flex-col gap-6 items-center">
          {/* Main Statement */}
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-white tracking-tight leading-[1.25] m-0 max-w-2xl">
            Every new version of a document is a chance for risk to slip in.
          </h2>

          {/* Core explanation */}
          <p className="text-[#D6E6F5] text-sm sm:text-base md:text-lg leading-relaxed max-w-xl m-0 font-medium">
            Alfred reads and remembers your project's risk — <strong className="text-[#FFD55A] font-semibold">across every contract, spec, and letter, from bid to closeout.</strong>
          </p>

          {/* Subtle separator */}
          <div className="w-full max-w-[150px] border-t border-white/10 my-2" />

          {/* Institutional kicker quote */}
          <p className="text-zinc-400 text-xs sm:text-[13px] leading-relaxed max-w-xl m-0 font-mono tracking-wide">
            Ask anyone who's fought a construction claim: it's rarely lost on merit. It's lost on a <strong className="text-white font-semibold">missed notice period</strong>, or a <strong className="text-white font-semibold">letter that was never sent.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
