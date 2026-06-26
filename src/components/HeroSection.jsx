import React, { useState } from 'react'
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

const scenarios = [
  {
    phase: "1. THE BID",
    badge: "TENDER ANALYSIS",
    title: "The Unpriced Testing spec",
    subtitle: "Scenario 1 of 4",
    desc: "The tender specification said 'as per relevant codes.' Hidden deep inside Section 12.3 of the technical volumes was a mandatory dynamic testing regime that your estimating team completely missed.",
    alertText: "You win the bid, but you're contractually committed to over ₹1.5 Cr in unpriced testing overheads. Margin leakage begins before ground is broken.",
    alertType: "error",
    howSolves: "How Alfred Solves: Alfred reads the whole tender on Day -15. It surfaces the buried spec mismatch, flags the unpriced overheads, and auto-drafts a pre-bid clarification query for your estimators.",
    rightCard: {
      header: "ALFRED TENDER PARSER",
      subheader: "CPWD Sec 12.3",
      quote: `"...Contractor to bear all third-party testing charges of sub-soil structures under specialized codes. Pricing is deemed integrated within general overheads..."`,
      statusTitle: "ONEROUS CLAUSE DETECTED",
      statusDesc: "Standard overhead markup excludes dynamic sub-soil regimes. Proposed query: 'Please confirm custom BOQ line item for Sub-soil testing as per Sec 12.3.'",
      statusType: "warning",
      metricLabel: "BURIED RISK FLAGGED",
      metricValue: "₹1.5 Cr Unpriced",
      metricColor: "text-[#1A3A5C]"
    }
  },
  {
    phase: "2. THE BUILD",
    badge: "SITE EVENTS",
    title: "The Silent Site Delay",
    subtitle: "Scenario 2 of 4",
    desc: "Eight months in, drawing #DRW-042 (Revised Foundation) arrives 10 days late. Your site team halts pier concrete work to accommodate it. They perform the work diligently — but they don't file a formal notice.",
    alertText: "A delay is a variation, and a variation requires a notice within 28 days. Because site teams are focused on execution, the clock runs down silently.",
    alertType: "error",
    howSolves: "How Alfred Solves: Alfred tracks your Primavera P6 schedule and daily site logs (DPRs) independently. It matches the site log mentioning 'concrete works halted' to Drawing #DRW-042 and FIDIC Clause 20.1 automatically.",
    rightCard: {
      header: "CONTEXT ENGINE PIPELINE",
      subheader: "P6 & DPR Sync",
      isLog: true,
      logTitle: "Daily Site Log #120: Delayed",
      quote: `"Pier concrete work suspended due to late drawing DRW-042."`,
      statusTitle: "OBLIGATION MAPPED",
      statusValue: "FIDIC Cl. 20.1",
      statusType: "info",
      metricLabel: "COMPLIANCE CLOCK RUNNING",
      metricValue: "Day 10 of 28",
      metricColor: "text-[#1A3A5C]"
    }
  },
  {
    phase: "3. THE HOLE",
    badge: "CLAIM OVERRUN",
    title: "The Dead Claim",
    subtitle: "Scenario 3 of 4",
    desc: "By the time the site team compiles concrete receipts and informs the commercial office, 45 days have passed. The claim is raised to the client's representative.",
    alertText: "The client rejects the claim as 'time-barred' under Clause 20.1. You lose ₹6 Cr of legitimate entitlement, not because your delay was fake, but because your notice was late.",
    alertType: "error",
    howSolves: null,
    rightCard: {
      header: "DEADLINE TIME-OUT ALERT",
      subheader: "Entitlement Lost",
      isAlert: true,
      alertValue: "₹6,0,00,000",
      alertLabel: "REJECTED DUE TO LATE NOTIFICATION (DAY 45)",
      quote: `Standard FIDIC 28-day notice rule enforced strictly by client representative. Claim is permanently dead.`,
      metricLabel: "MARGIN LOST UNNOTICED",
      metricValue: "₹6 Crores",
      metricColor: "text-[#B52B1A]"
    }
  },
  {
    phase: "4. WITH ALFRED",
    badge: "ALFRED RESOLUTION",
    title: "The Closed Margin Hole",
    subtitle: "Scenario 4 of 4",
    desc: "With Alfred, the bidding risk was flagged and carried over. The site delay was mapped on Day 1. Alfred actively alerts your commercial team before the compliance clock gets close.",
    alertText: "None. You stay contractually obedient with minimal overhead, protecting your project's bottom-line profitability.",
    alertType: "success",
    howSolves: null,
    rightCard: {
      header: "ALFRED CLAIM GENERATOR",
      subheader: "READY TO SEND",
      isDraft: true,
      draftTitle: "PRE-DRAFTED CORRESPONDENCE:",
      quote: `Subject: Notice of Claim under FIDIC Cl. 20.1\n\n"We hereby give notice of claim for extension of time regarding late foundation drawings DRW-..."`,
      statusTitle: "✓ Notice ready on Day 2",
      statusValue: "Review Notice →",
      statusType: "success",
      metricLabel: "MARGIN PROTECTED",
      metricValue: "100%",
      metricColor: "text-[#145C35]"
    }
  }
]

export default function HeroSection() {
  const navigate = useNavigate()
  const [activeScenario, setActiveScenario] = useState(0)

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

  const nextScenario = () => {
    setActiveScenario((prev) => (prev < 3 ? prev + 1 : prev))
  }

  const prevScenario = () => {
    setActiveScenario((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const current = scenarios[activeScenario]

  return (
    <section className="relative w-full bg-transparent overflow-hidden pt-22 pb-16 sm:pt-28 sm:pb-24 px-6 sm:px-12 md:px-16 lg:px-20 z-10">
      {/* Yellow radial glow accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 194, 14, 0.05), transparent 70%)'
        }}
      />

      <div className="relative z-10 w-full max-w-[1100px] mx-auto flex flex-col gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-4 lg:gap-4 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="flex flex-col gap-5 text-left items-start">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#FFC20E] px-4 py-1.5 rounded-full">
              <span className="text-[10px] font-mono text-[#B88500] uppercase tracking-wider font-bold">
                Contract Intelligence · Bid to Handover
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[36px] xl:text-[38px] font-bold leading-[1.25] text-[#1A3A5C] tracking-tight m-0 max-w-xl">
              Your contract runs <br />
              from the first bid to the <br />
              final claim. <br />
              <span className="relative inline-block mt-2 font-bold text-[#1A3A5C]">
                So does Alfred.
                <span className="absolute bottom-[-4px] left-0 right-0 h-[3px] bg-[#FFC20E] rounded" />
              </span>
            </h1>

            {/* Description */}
            <div className="flex flex-col gap-4 max-w-lg mt-1 text-[#5A5A62] text-xs sm:text-[13.5px] leading-[1.7] font-normal">
              <p className="m-0">
                <strong className="text-[#1A3A5C] font-semibold">Before you bid,</strong> Alfred catches the onerous clause and unpriced testing spec you would have calculated wrong.
              </p>
              <p className="m-0">
                <strong className="text-[#1A3A5C] font-semibold">Once you have won,</strong> it tracks every site event and Primavera P6 update against the contract schedule — and drafts the claim notice before a deadline times out your entitlement.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-3">
              <button
                onClick={() => {
                  navigate('/demo')
                  window.scrollTo(0, 0)
                }}
                className="bg-[#1A3A5C] text-white py-2 px-5 rounded-lg font-semibold cursor-pointer text-[13px] transition-all duration-200 hover:bg-[#2B5F96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A3A5C] focus-visible:outline-offset-2 active:scale-95 shadow-[0_2px_8px_rgba(26,58,92,0.15)]"
              >
                Schedule a Demo
              </button>

              <button
                onClick={() => {
                  const element = document.getElementById('solution')
                  if (element) {
                    if (window.lenis) {
                      window.lenis.scrollTo(element, { offset: -80 })
                    } else {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }
                }}
                className="bg-transparent border-none text-[13px] font-semibold text-[#2B5F96] hover:text-[#5B8EC4] transition-colors cursor-pointer py-2 px-1 hover:underline flex items-center gap-1"
              >
                See how Alfred works →
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Simulator Component */}
          <div className="relative w-full flex justify-center lg:justify-start z-10">
            <div className="w-full max-w-[620px] min-h-[500px] sm:min-h-[480px] bg-white border border-[#DDDDE6] rounded-2xl flex flex-col justify-between shadow-lg relative overflow-hidden">
              {/* Header bar */}
              <div className="bg-[#1A3A5C] px-5 py-3 flex items-center justify-between text-white shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFC20E]" />
                  <span className="text-[10px] font-mono tracking-wider font-bold uppercase">Chronology of a Contract Hole</span>
                </div>
                <span className="text-[9px] font-mono bg-white/10 border border-white/20 px-2 py-0.5 rounded text-white/90">
                  Interactive Simulator
                </span>
              </div>

              {/* Tabs selector exactly as screenshot */}
              <div className="bg-[#F4F4F7] border-b border-[#DDDDE6] p-1.5 flex items-center justify-between gap-1 shrink-0">
                {scenarios.map((sc, idx) => {
                  const isActive = activeScenario === idx
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveScenario(idx)}
                      className={`flex-1 text-center py-2 px-1 text-[9px] sm:text-[10px] font-bold tracking-wide transition-all cursor-pointer rounded-md border ${isActive
                        ? 'bg-white text-[#1D4ED8] border-[#DDDDE6] shadow-sm'
                        : 'text-[#6B6B74] hover:text-[#1A3A5C] bg-transparent border-transparent'
                        }`}
                    >
                      {sc.phase}
                    </button>
                  )
                })}
              </div>

              {/* Scenario Content Body */}
              <div className="flex-1 p-5 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-5 text-left items-stretch bg-white">
                {/* Scenario Copy (Left Side) */}
                <div className="flex flex-col justify-between gap-3 min-h-[300px]">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono text-[#B88500] uppercase tracking-wider font-bold bg-[#FFF6D6] px-2 py-0.5 rounded border border-[#B88500]/10">
                        {current.badge}
                      </span>
                      <span className="text-[10px] text-[#6B6B74] font-mono font-medium">
                        {current.subtitle}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-[#1A3A5C] m-0">
                      {current.title}
                    </h3>
                    <p className="text-secondary-mid text-[11px] sm:text-xs leading-relaxed m-0">
                      {current.desc}
                    </p>
                  </div>

                  {/* Alert box */}
                  <div className={`p-3 rounded-lg border text-[11px] leading-relaxed ${current.alertType === 'success'
                    ? 'bg-[#E4F3EC] border-[#C2E3D2] text-[#145C35]'
                    : 'bg-[#FDF2F2] border-[#FBD5D5] text-[#9B1C1C] font-semibold'
                    }`}>
                    {current.alertText}
                  </div>

                  {/* How Alfred Solves */}
                  {current.howSolves ? (
                    <div className="bg-[#FFF6D6]/60 border border-[#FFC20E]/20 p-3 rounded-lg text-[11px] text-[#7A5B05] leading-relaxed mt-auto font-medium">
                      {current.howSolves}
                    </div>
                  ) : (
                    <div className="flex-1" />
                  )}
                </div>

                {/* Mockup Card (Right Side) */}
                <div className="bg-[#F4F4F7] border border-[#DDDDE6] rounded-xl p-3 flex flex-col justify-between gap-3 min-h-[300px]">
                  {/* Header info */}
                  <div className="flex items-center justify-between border-b border-[#DDDDE6] pb-1.5 shrink-0">
                    <span className="text-[9px] text-[#6B6B74] font-mono font-bold uppercase">{current.rightCard.header}</span>
                    <span className="text-[9px] text-[#2B5F96] font-mono font-semibold">{current.rightCard.subheader}</span>
                  </div>

                  {/* Log specific view */}
                  {current.rightCard.isLog && (
                    <div className="bg-amber-50 border border-amber-200 rounded px-2 py-0.5 flex items-center justify-between text-[9px] font-mono font-bold text-amber-700 shrink-0">
                      <span>{current.rightCard.logTitle}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    </div>
                  )}

                  {/* Dead claim alert view */}
                  {current.rightCard.isAlert && (
                    <div className="bg-red-50 border border-red-200 rounded p-2 text-center flex flex-col gap-0.5 shrink-0">
                      <span className="text-[9px] font-mono text-red-600 font-bold uppercase tracking-wider">{current.rightCard.header}</span>
                      <span className="text-base font-bold text-red-700 tracking-tight leading-none">{current.rightCard.alertValue}</span>
                      <span className="text-[8px] font-mono text-red-600 font-bold leading-tight">{current.rightCard.alertLabel}</span>
                    </div>
                  )}

                  {/* Quote block */}
                  <div className="bg-white border border-[#DDDDE6] rounded p-2.5 flex-1 flex flex-col justify-center overflow-y-auto no-scrollbar">
                    {current.rightCard.isDraft && (
                      <div className="text-[8px] font-mono font-bold text-[#6B6B74] mb-1 uppercase tracking-wider">
                        {current.rightCard.draftTitle}
                      </div>
                    )}
                    <p className="text-[10px] text-[#3A3A3F] font-mono leading-normal m-0 italic whitespace-pre-line">
                      {current.rightCard.quote}
                    </p>
                  </div>

                  {/* Bottom status/actions */}
                  {current.rightCard.statusTitle && (
                    <div className={`p-2 rounded border text-[9px] shrink-0 ${current.rightCard.statusType === 'warning'
                      ? 'bg-amber-50 border-amber-200 text-amber-800'
                      : 'bg-emerald-50 border-emerald-200 text-emerald-800'
                      }`}>
                      <div className="font-bold flex items-center gap-0.5">
                        {current.rightCard.statusTitle}
                      </div>
                      {current.rightCard.statusDesc && (
                        <p className="m-0 mt-0.5 opacity-90 leading-normal">{current.rightCard.statusDesc}</p>
                      )}
                      {current.rightCard.statusValue && (
                        <div className="mt-1 font-semibold underline text-[#2B5F96] hover:text-[#1A3A5C] cursor-pointer">
                          {current.rightCard.statusValue}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Metric calculation */}
                  <div className="border-t border-[#DDDDE6] pt-2 flex flex-col gap-0.5 shrink-0 text-left">
                    <span className="text-[8px] font-mono text-[#6B6B74] uppercase tracking-wider font-semibold">
                      {current.rightCard.metricLabel}
                    </span>
                    <span className={`text-sm sm:text-base font-bold leading-none tracking-tight ${current.rightCard.metricColor}`}>
                      {current.rightCard.metricValue}
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer Navigation with clean dots */}
              <div className="bg-[#F4F4F7] border-t border-[#DDDDE6] px-5 py-2.5 flex items-center justify-between text-[11px] shrink-0 select-none font-medium">
                <button
                  disabled={activeScenario === 0}
                  onClick={prevScenario}
                  className="bg-transparent border-none p-1 font-semibold text-[#2B5F96] disabled:text-[#6B6B74]/40 hover:text-[#1A3A5C] cursor-pointer transition-colors disabled:pointer-events-none text-[11px]"
                >
                  &lt; Previous Phase
                </button>

                {/* Minimal Indicator Dots */}
                <div className="flex gap-1.5">
                  {scenarios.map((_, idx) => (
                    <span
                      key={idx}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${activeScenario === idx ? 'bg-[#1A3A5C] scale-110' : 'bg-[#DDDDE6]'
                        }`}
                    />
                  ))}
                </div>

                {activeScenario === 3 ? (
                  <button
                    onClick={() => {
                      const el = document.getElementById('solution');
                      if (el) {
                        if (window.lenis) {
                          window.lenis.scrollTo(el, { offset: -80 });
                        } else {
                          el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    className="bg-transparent border-none p-1 font-bold text-[#B88500] hover:text-amber-800 cursor-pointer transition-colors text-[11px]"
                  >
                    See detailed demo &gt;
                  </button>
                ) : (
                  <button
                    onClick={nextScenario}
                    className="bg-transparent border-none p-1 font-semibold text-[#2B5F96] hover:text-[#1A3A5C] cursor-pointer transition-colors text-[11px]"
                  >
                    Next Scenario &gt;
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Proof Strip */}
        <div className="w-full border-t border-[#DDDDE6] pt-8 mt-4">
          <p className="text-[10px] text-[#6B6B74] uppercase tracking-wider font-semibold m-0 mb-4 text-center">
            Trusted by teams managing ₹10,000 Cr+ in infrastructure portfolios
          </p>
          <div className="w-full overflow-hidden relative py-1 select-none">
            {/* Fade overlays for smooth visual edges */}
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex animate-marquee items-center gap-16">
              {sponsors.map((logo, index) => (
                <img
                  key={`logo-${index}`}
                  src={logo.src}
                  alt={`Partner ${index + 1}`}
                  className={`${
                    logo.isSmall ? 'h-14 sm:h-[72px]' : 'h-10 sm:h-[50px]'
                  } w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300`}
                />
              ))}
              {/* Duplicate set for seamless looping */}
              {sponsors.map((logo, index) => (
                <img
                  key={`logo-dup-${index}`}
                  src={logo.src}
                  alt={`Partner Dup ${index + 1}`}
                  className={`${
                    logo.isSmall ? 'h-14 sm:h-[72px]' : 'h-10 sm:h-[50px]'
                  } w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
