import React from 'react'

export default function ThesisSection() {
  return (
    <section className="bg-[#1A3A5C] text-white py-[84px] px-[28px] text-center w-full relative z-10 select-none">
      <div className="max-w-[760px] mx-auto flex flex-col items-center">
        {/* Title exactly from manager's HTML styles */}
        <h2 className="text-white text-[26px] md:text-[34px] lg:text-[38px] font-extrabold leading-tight tracking-tight m-0">
          Every new version of a document is a chance for risk to slip in.
        </h2>

        {/* Lede exactly from manager's HTML styles */}
        <p className="text-[18px] text-[#D6E6F5] mt-[22px] mb-[26px] leading-[1.55] m-0 font-normal">
          Alfred reads and remembers your project's risk —{' '}
          <strong className="text-[#FFD55A] font-semibold">
            across every contract, spec, and letter, from bid to closeout.
          </strong>
        </p>

        {/* Kicker exactly from manager's HTML styles */}
        <p className="text-[15px] text-[#cfe0f2] leading-[1.6] max-w-[60ch] mx-auto pt-[24px] border-t border-white/10 m-0 font-normal">
          Ask anyone who's fought a construction claim: it's rarely lost on merit. It's lost on a{' '}
          <strong className="text-white font-semibold">missed notice period</strong>, or a{' '}
          <strong className="text-white font-semibold">letter that was never sent.</strong>
        </p>
      </div>
    </section>
  )
}
