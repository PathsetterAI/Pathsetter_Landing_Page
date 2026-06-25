import React from 'react'

const stats = [
  {
    metric: "₹5.71 Lakh Cr",
    label: "MoSPI Cost Escalation",
    desc: "Cumulative cost overruns across active Indian megaprojects due to schedule slippage."
  },
  {
    metric: "80% / 20 mo",
    label: "Average Overrun & Delay",
    desc: "Typical timeline slippage before contract obligations are audited and claims filed."
  },
  {
    metric: "14 months",
    label: "Dispute Resolution Latency",
    desc: "Average time required to retrospectively reconstruct evidence for an EOT claim."
  }
]

export default function ProblemSection() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-20 sm:py-28 px-6 sm:px-12 relative overflow-hidden bg-[#1A3A5C]">
      {/* Background Engineering grid pattern (Section 2.2 light blueprint style) */}
      <div className="absolute inset-0 bg-engineering-grid-light opacity-10 pointer-events-none z-0" />
      
      <div className="w-full max-w-[1200px] mx-auto relative z-10 flex flex-col gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6 text-left">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-[10px] font-mono text-[#FFC20E] uppercase tracking-widest font-bold">
              The Exposure
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white m-0 leading-tight">
              Traditional EPC Project Delivery is Bleeding Margin
            </h2>
            <p className="text-[#ADADB8] text-xs leading-relaxed m-0 mt-1">
              Infrastructure complexity has outpaced manual spreadsheets and legacy project controls.
            </p>
          </div>
        </div>

        {/* 3 Stat Cards (Section 2.4 - Ink bg, 3px Yellow top border, Yellow numerals) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-[#111113] border-t-[3px] border-t-[#FFC20E] rounded-xl p-6 sm:p-8 flex flex-col gap-4 text-left shadow-lg"
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#FFC20E] leading-none tracking-tight">
                {stat.metric}
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono text-[#6B6B74] uppercase tracking-wider font-bold">
                  {stat.label}
                </span>
                <p className="text-xs text-[#ADADB8] leading-relaxed m-0 mt-1">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Insight Strip (Section 3.2) */}
        <div className="bg-[#111113]/50 border border-white/10 rounded-xl p-4 sm:p-6 text-left mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs text-[#ADADB8] leading-relaxed m-0 max-w-2xl">
            <strong className="text-[#FFC20E]">Direct Leakage:</strong> Megaprojects lose up to 10% of their contract value to unrecorded variations, missed notice deadlines, and late Extension of Time (EOT) claims. Reactive documentation reconstruction is no longer viable.
          </p>
          <span className="text-[10px] font-mono text-[#FFC20E] font-bold bg-[#FFC20E]/10 border border-[#FFC20E]/20 px-3 py-1 rounded shrink-0 w-fit">
            LD Risk Exposure
          </span>
        </div>

      </div>
    </div>
  )
}
