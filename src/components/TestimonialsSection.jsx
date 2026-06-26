import React from 'react'

const clientDeployments = [
  {
    name: "Zetwerk",
    badge: "FULL-STACK",
    subtitle: "EPC - Energy",
    desc: '"Full-stack Alfred — EOT letters on FIDIC, DPR analysis and milestone invoicing across 20+ projects."',
    status: "Active Deployment"
  },
  {
    name: "MEIL",
    badge: "ERP-INTEGRATED",
    subtitle: "Large EPC",
    desc: '"First ERP-Integrated deployment, validated across multiple sites on a Tier-1 EPC."',
    status: "Active Deployment"
  },
  {
    name: "Bondada",
    badge: "BID RISK",
    subtitle: "EPC Contractor",
    desc: '"Tender risk review — flags contractual risk before signing."',
    status: "Active Deployment"
  },
  {
    name: "APEPDCL",
    badge: "COMPLIANCE",
    subtitle: "State DISCOM",
    desc: '"Compliance workspace + document control for PM KUSUM obligations."',
    status: "Active Deployment"
  },
  {
    name: "Purelight",
    badge: "DRAFTING",
    subtitle: "Solar Developer",
    desc: '"Letter generation + comms agents for developer-side operations."',
    status: "Active Deployment"
  }
]

export default function TestimonialsSection() {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-12 py-20 sm:py-28 text-center flex flex-col gap-12">

      {/* Header */}
      <div className="flex flex-col items-center text-center gap-2.5 max-w-2xl mx-auto">
        <span className="text-[10px] font-mono text-[#B88500] uppercase tracking-widest font-bold">
          CLIENT DEPLOYMENTS
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#1A3A5C] m-0 leading-tight tracking-tight">
          Real tenders. Real contracts. Real money kept.
        </h2>
        <p className="text-[#5A5A62] text-xs sm:text-[13px] leading-relaxed max-w-xl m-0 mt-1">
          From tier-1 infrastructure projects to renewable energy developers, Alfred monitors execution parameters daily.
        </p>
      </div>

      {/* Deployments Cards Row */}
      <div
        className="flex overflow-x-auto lg:grid lg:grid-cols-5 gap-3.5 w-full pb-4 no-scrollbar lg:overflow-visible [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {clientDeployments.map((client, index) => (
          <div
            key={index}
            className="bg-[#F4F4F7] border border-[#DDDDE6] rounded-xl p-4 flex flex-col justify-between min-w-[250px] lg:min-w-0 min-h-[135px] lg:min-h-[145px] hover:border-[#1A3A5C]/40 hover:bg-white hover:shadow-md transition-all duration-300 relative text-left"
          >
            {/* Top row: Client name & badge */}
            <div className="flex justify-between items-start gap-2">
              <span className="font-bold text-[#1A3A5C] text-[13.5px] sm:text-[14.5px]">
                {client.name}
              </span>
              <span className="text-[8px] sm:text-[8.5px] font-mono font-bold text-[#B88500] tracking-wider uppercase pt-0.5">
                {client.badge}
              </span>
            </div>

            {/* Subtitle */}
            <div className="text-[9.5px] sm:text-[10.5px] text-[#6B6B74] mt-0.5 mb-2.5">
              {client.subtitle}
            </div>

            {/* Description */}
            <p className="text-[11px] sm:text-[12px] text-[#3A3A3F] leading-relaxed italic m-0 mb-3 flex-grow font-primary">
              {client.desc}
            </p>

            {/* Footer */}
            <div className="pt-2 flex items-center gap-1.5 text-[9.5px] sm:text-[10px] text-[#145C35] font-semibold tracking-wide mt-auto">
              <svg className="w-3.5 h-3.5 text-[#145C35] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span>{client.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Dark Quote Banner */}
      <div className="w-full max-w-[1000px] mx-auto bg-[#1A3A5C] rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg text-white flex flex-col md:flex-row gap-4 items-start relative overflow-hidden mt-6 text-left">
        {/* Quote Icon */}
        <div className="w-12 h-12 rounded-xl bg-[#234368] flex items-center justify-center text-[#FFC20E] text-2xl font-serif font-bold shrink-0 select-none">
          “
        </div>

        {/* Content Box */}
        <div className="flex-1 flex flex-col gap-3 w-full">
          {/* Quote text */}
          <p className="text-sm sm:text-base md:text-[17px] leading-relaxed text-zinc-400 m-0 font-medium">
            "Alfred flagged a testing obligation buried in the technical spec that wasn't in our BOQ. On a fixed-price bid, <span className="underline decoration-[#FFC20E] decoration-2 underline-offset-4 font-bold text-[#FFC20E]">that line alone would have come straight out of our margin</span>. We priced it instead."
          </p>

          {/* Footer Area: Attribution on left, Pill badge on right */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 w-full">
            <div className="flex flex-col text-left">
              <span className="font-semibold text-white text-xs sm:text-sm">Bid Manager</span>
              <span className="text-zinc-400 text-[10px] sm:text-xs mt-0.5 font-normal">Tier-1 EPC Contractor · India Operations</span>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-white/5 border border-[#FFC20E]/30 rounded-full px-3 py-1 self-start sm:self-auto select-none">

              <span className="text-[9px] font-mono font-bold tracking-wider text-[#FFC20E] uppercase">
                VERIFIED CLAIM PROTECTION
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
