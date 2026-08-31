import React from 'react'
import thesisBlueprint from '../assets/home-thesis-blueprint.jpg'

export default function ThesisSection() {
  return (
    <section className="isolate overflow-hidden bg-[#1A3A5C] text-white py-[84px] px-6 sm:px-[28px] text-center w-full relative z-10 select-none">
      {/* Photo by Ivan S via Pexels: https://www.pexels.com/photo/text-4458202/ */}
      <img
        src={thesisBlueprint}
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-40 saturate-50 contrast-125"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 z-[1] bg-[#123454]/80 pointer-events-none" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#1A3A5C]/45 via-transparent to-[#1A3A5C]/55 pointer-events-none" />
      {/* Subtle Light Blueprint Grid background */}
      <div className="absolute inset-0 bg-engineering-grid-light opacity-[0.06] pointer-events-none z-[3]" />
      <div className="relative z-10 max-w-[760px] mx-auto flex flex-col items-center">
        {/* Title exactly from manager's HTML styles */}
        <h2 className="text-white text-[26px] md:text-[34px] lg:text-[38px] font-extrabold leading-tight tracking-tight m-0">
          Every new version of a document is a chance for risk to slip in.
        </h2>

        {/* Lede exactly from manager's HTML styles */}
        <p className="text-[18px] text-[#D6E6F5] mt-[22px] mb-[26px] leading-[1.55] m-0 font-normal">
          Alfred reads and remembers your project's risk,{' '}
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
