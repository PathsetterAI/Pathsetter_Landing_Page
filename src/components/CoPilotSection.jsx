import React, { useState, useEffect, useRef } from 'react'

export default function CoPilotSection() {
  const [typedLength, setTypedLength] = useState(0)
  const [showMeta, setShowMeta] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const timerRef = useRef(null)

  const phases = [
    {
      pl: "Bidding",
      pt: "Drafts pre-bid queries, RFIs, summaries, and tracks risk shifts between specification versions."
    },
    {
      pl: "Pre-Construction",
      pt: "Drafts claim letters, contract amendments, and custom BOQs ready for commercial review."
    },
    {
      pl: "Execution",
      pt: "Synthesizes daily site logs (DPRs) into progress, variance, and billing-readiness analysis."
    }
  ]

  // Typing content split into styled segments to prevent visual snapping/flicker
  const part1 = "We hereby give notice, "
  const part2 = "within the 28-day period required under Clause 20.1"
  const part3 = ", of a delay event arising from the revised piping routing instructed under Change Order #14."
  const totalLength = part1.length + part2.length + part3.length

  useEffect(() => {
    setIsTyping(true)
    setShowMeta(false)
    setTypedLength(0)

    const type = () => {
      timerRef.current = setInterval(() => {
        setTypedLength((prev) => {
          if (prev >= totalLength) {
            clearInterval(timerRef.current)
            setIsTyping(false)
            // Stagger the reveal of meta info and actions
            setTimeout(() => setShowMeta(true), 400)
            return totalLength
          }
          return prev + 1
        })
      }, 15) // Speed of typing
    }

    // Delay start of typing slightly for user focus
    const startTimeout = setTimeout(type, 800)

    return () => {
      clearTimeout(startTimeout)
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const handleReplay = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    setIsTyping(true)
    setShowMeta(false)
    setTypedLength(0)
    
    const type = () => {
      timerRef.current = setInterval(() => {
        setTypedLength((prev) => {
          if (prev >= totalLength) {
            clearInterval(timerRef.current)
            setIsTyping(false)
            setTimeout(() => setShowMeta(true), 400)
            return totalLength
          }
          return prev + 1
        })
      }, 15)
    }
    type()
  }

  // Render text based on current typed progress
  const renderTypedText = () => {
    let renderedPart1 = ""
    let renderedPart2 = ""
    let renderedPart3 = ""
    let cursorInPart = 1

    if (typedLength <= part1.length) {
      renderedPart1 = part1.slice(0, typedLength)
      cursorInPart = 1
    } else if (typedLength <= part1.length + part2.length) {
      renderedPart1 = part1
      renderedPart2 = part2.slice(0, typedLength - part1.length)
      cursorInPart = 2
    } else {
      renderedPart1 = part1
      renderedPart2 = part2
      renderedPart3 = part3.slice(0, typedLength - part1.length - part2.length)
      cursorInPart = 3
    }

    return (
      <p className="text-[11.5px] leading-relaxed text-[#3A3A3F] m-0 font-normal">
        {renderedPart1}
        {cursorInPart === 1 && <span className="inline-block w-[2px] h-[12px] bg-[#2B5F96] ml-0.5 animate-pulse" />}
        
        {renderedPart2 && (
          <span className="bg-[#FFF6D6] text-[#B88500] px-1 py-0.5 rounded font-semibold transition-all duration-300">
            {renderedPart2}
            {cursorInPart === 2 && <span className="inline-block w-[2px] h-[12px] bg-[#2B5F96] ml-0.5 animate-pulse" />}
          </span>
        )}
        
        {renderedPart3}
        {cursorInPart === 3 && typedLength < totalLength && (
          <span className="inline-block w-[2px] h-[12px] bg-[#2B5F96] ml-0.5 animate-pulse" />
        )}
      </p>
    )
  }

  return (
    <section className="relative w-full bg-[#F4F4F7] py-20 sm:py-24 px-6 sm:px-12 md:px-16 lg:px-20 border-b border-[#DDDDE6] overflow-hidden">
      {/* Subtle Engineering Grid background */}
      <div className="absolute inset-0 bg-engineering-grid opacity-[0.015] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center text-left">
        
        {/* Visual Panel Column first (flip layout on desktop) */}
        <div className="w-full flex justify-center lg:justify-start lg:order-2">
          <div className="w-full max-w-[480px] bg-white border border-[#DDDDE6] rounded-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl">
            {/* Top Bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#F4F4F7] border-b border-[#DDDDE6] relative">
              <span className="w-2 h-2 rounded-full bg-[#DDDDE6]" />
              <span className="w-2 h-2 rounded-full bg-[#DDDDE6]" />
              <span className="w-2 h-2 rounded-full bg-[#DDDDE6]" />
              <span className="text-[10.5px] text-[#2B5F96] font-bold font-mono ml-2">Draft · EOT Claim Letter</span>
              
              <div className="flex items-center gap-2 ml-auto">
                <span className="text-[9px] text-[#6B6B74] font-mono select-none">
                  {isTyping ? "Drafting..." : "v1 · auto-saved"}
                </span>
                
                {/* Replay action */}
                <button
                  onClick={handleReplay}
                  disabled={isTyping}
                  className="p-1 rounded bg-[#DDDDE6]/50 hover:bg-[#DDDDE6] text-[#6B6B74] hover:text-[#1A3A5C] transition-colors border-none cursor-pointer flex items-center justify-center shrink-0 w-5 h-5 disabled:opacity-40 disabled:pointer-events-none"
                  title="Replay drafting simulator"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8.89M9 11l3 3L22 4" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Document Content Canvas */}
            <div className="p-4 sm:p-5 flex flex-col gap-3 bg-white min-h-[260px]">
              <div className="text-xs sm:text-[13px] font-bold text-[#1A3A5C] leading-tight m-0">
                Notice of Delay &amp; Extension of Time
              </div>
              <div className="text-[10px] text-[#6B6B74] font-mono leading-none">
                Re: Zone 3 piping — Change Order #14
              </div>
              
              {/* Typewriter text output */}
              <div className="border border-[#DDDDE6]/60 rounded-lg p-3 bg-[#F4F4F7]/20 min-h-[85px] flex flex-col justify-center">
                {renderTypedText()}
              </div>

              {/* Grounded Citation details (reveals after typing is done) */}
              <div className={`flex gap-2 p-3 bg-[#EDF4FB] border border-[#D6E6F5] rounded-xl text-[10.5px] text-[#1A3A5C] leading-relaxed transition-all duration-500 ease-out ${
                showMeta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
              }`}>
                <span className="font-mono text-[#2B5F96]">◆</span>
                <div>
                  <strong className="font-semibold text-[#2B5F96]">Grounded in:</strong> Change Order #14 · Clause 13 (Variations) · Clause 20.1 (Claims) · Zone 3 schedule variance (DPR 12–18 Jun)
                </div>
              </div>

              {/* Footer review action (reveals after typing is done) */}
              <div className={`flex items-center gap-3 pt-3 border-t border-[#DDDDE6] mt-1 transition-all duration-500 ease-out ${
                showMeta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
              }`}>
                <span className="text-[9px] font-bold text-[#B88500] bg-[#FFF6D6] px-2 py-1 rounded select-none">
                  Review-tier
                </span>
                
                <button
                  onClick={() => alert("EOT Claim Approved (Simulation only).")}
                  className="text-[11px] font-bold text-white bg-[#2B5F96] hover:bg-[#1A3A5C] px-3.5 py-1.5 rounded-lg border-none cursor-pointer transition-colors"
                >
                  Approve &amp; send
                </button>
                
                <span className="text-[9.5px] text-[#ADADB8] font-medium ml-auto">
                  Alfred never auto-sends
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Copy & Phases (Left on desktop) */}
        <div className="flex flex-col gap-6 lg:order-1">
          {/* Section Tag */}
          <div className="inline-flex items-center gap-2 bg-[#EDF4FB] border border-[#D6E6F5] px-3.5 py-1.5 rounded-full self-start">
            <span className="w-2 h-2 rounded bg-[#FFC20E] shrink-0" />
            <span className="text-[11px] font-mono text-[#1A3A5C] uppercase tracking-wide font-bold">
              Alfred Co-Pilot
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-[#1A3A5C] leading-[1.2] m-0 tracking-tight">
            Does the writing, so your team can do the thinking.
          </h2>

          {/* Description */}
          <p className="text-[#5A5A62] text-xs sm:text-[13.5px] leading-relaxed max-w-lg m-0 mt-1">
            Every draft comes grounded in your own documents and cited to its source — ready for review, never from a blank page.
          </p>

          {/* Lifecycle Phases */}
          <div className="flex flex-col gap-1.5 mt-3 border-t border-[#DDDDE6] pt-1">
            {phases.map((phase, idx) => (
              <div key={idx} className="grid grid-cols-[120px_1fr] gap-4 py-4 border-b border-[#DDDDE6]/60 items-start">
                <span className="text-[10px] font-mono text-[#2B5F96] uppercase tracking-wider font-bold pt-0.5">
                  {phase.pl}
                </span>
                <p className="text-[#5A5A62] text-xs sm:text-[13px] leading-relaxed m-0">
                  {phase.pt}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
