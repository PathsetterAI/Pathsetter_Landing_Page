import React, { useEffect, useState, useRef } from 'react'

function StatCard({ targetNum, label, duration = 1500 }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const increment = targetNum / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= targetNum) {
              setCount(targetNum)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) observer.observe(cardRef.current)

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current)
    }
  }, [targetNum, duration, hasAnimated])

  return (
    <div
      ref={cardRef}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
    >
      <span className="text-4xl sm:text-5xl md:text-6xl font-black text-[#FFC20E] tracking-tight leading-none font-mono">
        {count}
      </span>
      <p className="text-zinc-300 text-xs sm:text-[13px] leading-relaxed m-0 mt-4 max-w-[200px]">
        {label}
      </p>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="relative w-full bg-[#1A3A5C] text-white py-20 sm:py-24 px-6 sm:px-12 md:px-16 lg:px-20 overflow-hidden text-center">
      {/* Light blueprint grid overlay */}
      <div className="absolute inset-0 bg-engineering-grid-light opacity-[0.08] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-[900px] mx-auto flex flex-col gap-10 items-center">
        <div className="flex flex-col gap-3 max-w-xl">
          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-white tracking-tight leading-tight m-0">
            Alfred never sleeps.
          </h2>
          <p className="text-[#D6E6F5] text-xs sm:text-[13.5px] leading-relaxed m-0 font-medium opacity-90">
            The constant guardian of your project's margins and your team's reputation.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          <StatCard targetNum={20} label="Risks with material impact detected across the project" />
          <StatCard targetNum={13} label="EOT notice alerts raised to project teams" />
          <StatCard targetNum={50} label="LD clause alerts raised to project teams" />
        </div>
      </div>
    </section>
  )
}
