import React, { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

// Premium Inline SVGs / Icons mapped from solutions.html
const IconTk = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="shrink-0 inline-block align-middle">
    <circle cx="10" cy="10" r="10" fill="#EDF4FB"/>
    <path d="M6 10.4l2.5 2.5L14 7" stroke="#2B5F96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconAr = () => (
  <svg width="12" height="12" viewBox="0 0 20 20" fill="none" className="shrink-0 inline-block align-middle">
    <path d="M4 10h10M10 5l5 5-5 5" stroke="#145C35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconHh = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-[18px] h-[18px] shrink-0 inline-block align-middle">
    <path d="M4 17h16v2H4z" fill="#1A3A5C"/>
    <path d="M6 17c0-3.5 2.4-6 6-6s6 2.5 6 6" stroke="#1A3A5C" strokeWidth="2" fill="none"/>
    <rect x="11" y="6" width="2" height="4" rx="1" fill="#FFC20E"/>
  </svg>
)

// Helper: CountUp animates numeric figures when startTrigger matches true
function CountUp({ to, duration = 1100, suffix = '', decimals = 0, startTrigger = false }) {
  const [value, setValue] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!startTrigger || hasAnimated.current) return
    hasAnimated.current = true

    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setValue(to)
      return
    }

    let startTime = null
    const frame = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3) // cubic ease-out
      setValue(to * ease)
      if (progress < 1) {
        requestAnimationFrame(frame)
      } else {
        setValue(to)
      }
    }
    requestAnimationFrame(frame)
  }, [startTrigger, to, duration])

  const formatted = decimals ? value.toFixed(decimals) : Math.round(value)
  return <span>{formatted}{suffix}</span>
}

// Helper: Glimpse observed card wrapper
function GlimpsePanel({ active, children }) {
  const [play, setPlay] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (active) {
      setPlay(false)
      const timer = setTimeout(() => setPlay(true), 50)
      return () => clearTimeout(timer)
    } else {
      setPlay(false)
    }
  }, [active])

  return (
    <div
      ref={ref}
      className="w-full flex flex-col gap-4"
    >
      {children(play)}
    </div>
  )
}

function Solutions() {
  const location = useLocation()
  const navigate = useNavigate()

  const [activeTabIdx, setActiveTabIdx] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isAuto, setIsAuto] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  // Map incoming redirect tabs to index (EPC and GC combined)
  useEffect(() => {
    window.scrollTo(0, 0)
    if (location.state?.tab) {
      const tabMap = {
        'epcs': 0,
        'epc': 0,
        'gc': 0,
        'pmcs': 1,
        'pmc': 1,
        'owners': 2,
        'owner': 2
      }
      const mappedIdx = tabMap[location.state.tab]
      if (mappedIdx !== undefined) {
        setActiveTabIdx(mappedIdx)
        setIsAuto(false) // Disable auto-cycle on manual redirection
      }
    }
  }, [location.state])

  // Timer interval loops for auto-cycling segment tabs (6 seconds dwell)
  useEffect(() => {
    if (!isAuto || isPaused) return
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveTabIdx((idx) => (idx + 1) % 3)
          return 0
        }
        return prev + 1.666 // 1.666% every 100ms builds 100% in 6 seconds
      })
    }, 100)
    return () => clearInterval(interval)
  }, [isAuto, isPaused])

  // Reset progress when tab index changes
  useEffect(() => {
    if (isAuto) {
      setProgress(0)
    }
  }, [activeTabIdx, isAuto])

  const handleTabClick = (idx) => {
    setIsAuto(false)
    setActiveTabIdx(idx)
    setProgress(100)
  }

  const handleDemoClick = () => {
    navigate('/demo')
    window.scrollTo(0, 0)
  }

  const tabList = [
    {
      id: 'epc-gc',
      label: 'EPC & General Contractors',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0 transition-colors">
          <path d="M3 21h18M6 21V7l6-3 6 3v14" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
          <path d="M10 21v-4h4v4" stroke="currentColor" strokeWidth="1.8"/>
        </svg>
      )
    },
    {
      id: 'pmc',
      label: 'PMC / QS Consultants',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0 transition-colors">
          <path d="M4 5h16v11H4zM9 20h6M12 16v4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'owner',
      label: 'Owners',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0 transition-colors">
          <path d="M3 11l9-7 9 7M5 10v10h14V10" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        </svg>
      )
    }
  ]

  return (
    <div className="bg-white text-[#3A3A3F] font-sans antialiased">
      <SEO
        title="Alfred — Solutions · Built for everyone who lives in the contract"
        description="Whether you carry the risk, run the site, advise the client, or own the project — Alfred reads the same contract from your seat. One intelligence layer configured to how you work."
      />
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-24 pb-12 sm:pt-28 md:pt-32 md:pb-16">
        <div className="absolute -top-40 -right-32 w-[520px] h-[520px] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(255,194,14,0.1), transparent 62%)' }} />
        <div className="max-w-[1180px] mx-auto px-7 relative z-10">
          <div className="max-w-[820px]">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#B88500] uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#FFC20E]" />
              Solutions
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold leading-[1.1] tracking-tight text-[#1A3A5C] mb-4">
              Built for everyone who lives in the contract.
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-[#6B6B74] mt-5">
              Whether you carry the risk, run the site, advise the client, or own the project — Alfred reads the same contract from <b>your</b> seat. One intelligence layer, configured to how you work.
            </p>
          </div>
        </div>
      </section>

      {/* SEGMENT SWITCHER */}
      <section
        className="py-6 pb-16 md:pb-24"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="max-w-[1180px] mx-auto px-7">
          {/* Tab bar list (Hiding scrollbar via arbitrary class) */}
          <div className="flex gap-1 border-b border-[#DDDDE6] overflow-x-auto relative mb-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="tablist" aria-label="Solutions by company type">
            {tabList.map((tab, idx) => {
              const active = activeTabIdx === idx
              return (
                <button
                  key={tab.id}
                  role="tab"
                  onClick={() => handleTabClick(idx)}
                  className={`relative bg-transparent border-none cursor-pointer px-[18px] py-4 text-sm font-semibold whitespace-nowrap flex items-center gap-2 transition-colors duration-200 outline-none ${
                    active ? 'text-[#1A3A5C]' : 'text-[#6B6B74] hover:text-[#3A3A3F]'
                  }`}
                >
                  <span className={`transition-opacity duration-200 ${active ? 'opacity-100 text-[#1A3A5C]' : 'opacity-[0.55]'}`}>
                    {tab.icon}
                  </span>
                  <span>{tab.label}</span>
                  {active && (
                    <span
                      className="absolute left-0 right-0 bottom-[-1px] h-0.5 bg-[#FFC20E] transition-all pointer-events-none"
                    />
                  )}
                </button>
              )
            })}
          </div>

          <div className="relative min-h-[460px]">
            {/* 1. EPC & GENERAL CONTRACTORS PANEL */}
            {activeTabIdx === 0 && (
              <div className="flex flex-col gap-20 w-full animate-fadein">
                {/* EPC Section */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 items-center">
                  <div className="text-left">
                    <div className="text-[13px] font-bold tracking-wider uppercase text-[#B52B1A] mb-3">The pain</div>
                    <h2 className="text-3xl font-extrabold leading-tight text-[#1A3A5C]">
                      You carry the risk. Let Alfred carry the reading.
                    </h2>
                    <p className="text-lg text-[#3A3A3F] leading-relaxed my-4 mb-7 font-medium">
                      On lump-sum, turnkey work, one onerous clause priced wrong can eat the margin on the entire job.
                    </p>
                    <div className="text-[11px] font-bold tracking-wider uppercase text-[#6B6B74] mb-3.5">What Alfred does for you</div>
                    <ul className="list-none flex flex-col gap-3 mb-6">
                      <li className="flex gap-3 text-sm text-[#3A3A3F] leading-normal items-start">
                        <IconTk /> Reads the tender before you price it — onerous clauses, tender-vs-spec gaps, hidden costs.
                      </li>
                      <li className="flex gap-3 text-sm text-[#3A3A3F] leading-normal items-start">
                        <IconTk /> Turns every contract obligation into an owned, deadline-tracked item.
                      </li>
                      <li className="flex gap-3 text-sm text-[#3A3A3F] leading-normal items-start">
                        <IconTk /> Watches contract and schedule together through construction.
                      </li>
                      <li className="flex gap-3 text-sm text-[#3A3A3F] leading-normal items-start">
                        <IconTk /> Drafts defensible claims — grounded, cited, and in time.
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-6 mb-6">
                      <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#145C35] bg-[#E4F3EC] border border-[#cbe6d7] px-3 py-1.5 rounded-lg">
                        <IconAr /> Margin protected
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#145C35] bg-[#E4F3EC] border border-[#cbe6d7] px-3 py-1.5 rounded-lg">
                        <IconAr /> Fewer E&amp;Os
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#145C35] bg-[#E4F3EC] border border-[#cbe6d7] px-3 py-1.5 rounded-lg">
                        <IconAr /> Claims that hold
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-[#1A3A5C]">
                      <span className="w-[26px] h-[26px] rounded-full bg-[#F4F4F7] border border-[#DDDDE6] grid place-items-center shrink-0">
                        <IconHh />
                      </span>
                      For: <span className="text-[#6B6B74] font-medium">Bid, contracts &amp; commercial teams</span>
                    </div>
                  </div>
                  <div className="stage-visual">
                    <GlimpsePanel active={activeTabIdx === 0}>
                      {(play) => (
                        <div className="p-4 relative min-h-[290px] shadow-sm bg-white border border-[#DDDDE6] rounded-2xl hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                          <div className="relative overflow-hidden flex items-center gap-2 px-4 py-3 bg-[#F4F4F7] border-b border-[#DDDDE6] text-[11.5px] font-semibold text-[#3A3A3F] -mx-4 -mt-4 mb-4">
                            <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${play ? 'bg-[#145C35] animate-livedot' : 'bg-[#5B8EC4]'}`} />
                            Bid Risk Snapshot
                            <span className="ml-auto text-[10px] font-semibold text-[#6B6B74]">tender.pdf</span>
                            <span className={`absolute left-0 bottom-0 h-[2px] w-[34%] bg-gradient-to-r from-transparent to-[#2B5F96] via-[#2B5F96] pointer-events-none transition-opacity duration-300 ${play ? 'animate-scanx opacity-100' : 'opacity-0'}`} />
                          </div>
                          <div className={`flex items-center gap-2 text-[12px] font-semibold text-[#1A3A5C] bg-[#EDF4FB] border border-[#D6E6F5] px-2.5 py-2 rounded-lg mb-3 transition-all duration-[500ms] ease-out delay-[100ms] ${play ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'}`}>
                            <span>Classified</span>
                            <span className="ml-auto text-[10px] font-bold text-white bg-[#2B5F96] px-2 py-0.5 rounded">FIDIC Silver Book</span>
                          </div>
                          <div className={`flex gap-3 py-2.5 px-3 border-b border-[#DDDDE6] text-left transition-all duration-[500ms] ease-out delay-[240ms] ${play ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'}`}>
                            <span className="text-[9.5px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded shrink-0 h-fit text-white bg-[#B52B1A]">Critical</span>
                            <div>
                              <div className="text-[12.5px] font-semibold text-[#111113] leading-snug">Uncapped liquidated damages</div>
                              <div className="text-[11px] text-[#6B6B74] mt-0.5">Unbounded exposure on delay</div>
                            </div>
                          </div>
                          <div className={`flex gap-3 py-2.5 px-3 border-b border-[#DDDDE6] text-left transition-all duration-[500ms] ease-out delay-[380ms] ${play ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'}`}>
                            <span className="text-[9.5px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded shrink-0 h-fit text-white bg-[#B88500]">Warning</span>
                            <div>
                              <div className="text-[12.5px] font-semibold text-[#111113] leading-snug">Steel grade: tender vs. tech spec</div>
                              <div className="text-[11px] text-[#6B6B74] mt-0.5">Cost impact outside the standard BOQ</div>
                            </div>
                          </div>
                          <div className={`mt-auto pt-6 text-left transition-all duration-[500ms] ease-out delay-[480ms] ${play ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'}`}>
                            <span className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-[#145C35] bg-[#E4F3EC] border border-[#cbe6d7] px-3 py-1.5 rounded-lg">
                              <IconAr /> <CountUp to={7} startTrigger={play} /> risks priced, not discovered later
                            </span>
                          </div>
                        </div>
                      )}
                    </GlimpsePanel>
                  </div>
                </div>

                {/* GC Section */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 items-center border-t border-[#DDDDE6] pt-20">
                  <div className="text-left">
                    <div className="text-[13px] font-bold tracking-wider uppercase text-[#B52B1A] mb-3">The pain</div>
                    <h2 className="text-3xl font-extrabold leading-tight text-[#1A3A5C]">
                      A thousand pages, a hundred subcontracts, one source of truth.
                    </h2>
                    <p className="text-lg text-[#3A3A3F] leading-relaxed my-4 mb-7 font-medium">
                      Site reality never quite matches the plan — and it's reconciled by hand, in spreadsheets, too late to act.
                    </p>
                    <div className="text-[11px] font-bold tracking-wider uppercase text-[#6B6B74] mb-3.5">What Alfred does for you</div>
                    <ul className="list-none flex flex-col gap-3 mb-6">
                      <li className="flex gap-3 text-sm text-[#3A3A3F] leading-normal items-start">
                        <IconTk /> Auto-computes progress, SPI, variance and invoice-readiness from daily site data.
                      </li>
                      <li className="flex gap-3 text-sm text-[#3A3A3F] leading-normal items-start">
                        <IconTk /> Flags any activity threatening a milestone — routed to the right owner.
                      </li>
                      <li className="flex gap-3 text-sm text-[#3A3A3F] leading-normal items-start">
                        <IconTk /> Reconciles what was built against what was contracted and scheduled.
                      </li>
                      <li className="flex gap-3 text-sm text-[#3A3A3F] leading-normal items-start">
                        <IconTk /> Promotes findings into claims, evidence attached.
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-6 mb-6">
                      <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#145C35] bg-[#E4F3EC] border border-[#cbe6d7] px-3 py-1.5 rounded-lg">
                        <IconAr /> Live single source of truth
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#145C35] bg-[#E4F3EC] border border-[#cbe6d7] px-3 py-1.5 rounded-lg">
                        <IconAr /> Risk before it's a claim
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#145C35] bg-[#E4F3EC] border border-[#cbe6d7] px-3 py-1.5 rounded-lg">
                        <IconAr /> Analyst hours saved
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-[#1A3A5C]">
                      <span className="w-[26px] h-[26px] rounded-full bg-[#F4F4F7] border border-[#DDDDE6] grid place-items-center shrink-0">
                        <IconHh />
                      </span>
                      For: <span className="text-[#6B6B74] font-medium">Planning, PMs &amp; discipline engineers</span>
                    </div>
                  </div>
                  <div className="stage-visual">
                    <GlimpsePanel active={activeTabIdx === 0}>
                      {(play) => (
                        <div className="p-4 relative min-h-[290px] shadow-sm bg-white border border-[#DDDDE6] rounded-2xl hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                          <div className="relative overflow-hidden flex items-center gap-2 px-4 py-3 bg-[#F4F4F7] border-b border-[#DDDDE6] text-[11.5px] font-semibold text-[#3A3A3F] -mx-4 -mt-4 mb-4">
                            <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${play ? 'bg-[#145C35] animate-livedot' : 'bg-[#5B8EC4]'}`} />
                            Live Sites
                            <span className="ml-auto text-[10px] font-semibold text-[#6B6B74]">portfolio view</span>
                            <span className={`absolute left-0 bottom-0 h-[2px] w-[34%] bg-gradient-to-r from-transparent to-[#2B5F96] via-[#2B5F96] pointer-events-none transition-opacity duration-300 ${play ? 'animate-scanx opacity-100' : 'opacity-0'}`} />
                          </div>
                          <div className={`flex items-start gap-2.5 py-2.5 border-b border-[#DDDDE6] text-left transition-all duration-[500ms] ease-out delay-[100ms] ${play ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'}`}>
                            <span className="w-2 h-2 rounded-full bg-[#B52B1A] mt-1 shrink-0" />
                            <div>
                              <div className="text-[12.5px] font-semibold text-[#111113] leading-snug">Zone 3 · Piping</div>
                              <div className="text-[11px] text-[#6B6B74] mt-0.5">Threatens Milestone 7</div>
                            </div>
                            <span className="ml-auto text-[11px] font-bold text-[#B52B1A] shrink-0">-21d</span>
                          </div>
                          <div className={`flex items-start gap-2.5 py-2.5 border-b border-[#DDDDE6] text-left transition-all duration-[500ms] ease-out delay-[240ms] ${play ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'}`}>
                            <span className="w-2 h-2 rounded-full bg-[#B88500] mt-1 shrink-0" />
                            <div>
                              <div className="text-[12.5px] font-semibold text-[#111113] leading-snug">Package 4 · Civil</div>
                              <div className="text-[11px] text-[#6B6B74] mt-0.5">LD window approaching</div>
                            </div>
                            <span className="ml-auto text-[11px] font-bold text-[#B88500] shrink-0">-6d</span>
                          </div>
                          <div className={`flex items-start gap-2.5 py-2.5 border-b border-[#DDDDE6] text-left transition-all duration-[500ms] ease-out delay-[380ms] ${play ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'}`}>
                            <span className="w-2 h-2 rounded-full bg-[#145C35] mt-1 shrink-0" />
                            <div>
                              <div className="text-[12.5px] font-semibold text-[#111113] leading-snug">Package 1 · Structures</div>
                              <div className="text-[11px] text-[#6B6B74] mt-0.5">On track</div>
                            </div>
                            <span className="ml-auto text-[11px] font-bold text-[#145C35] shrink-0">SPI 1.02</span>
                          </div>
                          <div className={`flex items-start gap-2.5 py-2.5 text-left transition-all duration-[500ms] ease-out delay-[500ms] ${play ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'}`}>
                            <span className="w-2 h-2 rounded-full bg-[#2B5F96] mt-1 shrink-0" />
                            <div>
                              <div className="text-[12.5px] font-semibold text-[#111113] leading-snug">Zone 2 · MEP</div>
                              <div className="text-[11px] text-[#6B6B74] mt-0.5">Invoice-ready</div>
                            </div>
                            <span className="ml-auto text-[11px] font-bold text-[#2B5F96] shrink-0">
                              <CountUp to={88} suffix="%" startTrigger={play} />
                            </span>
                          </div>
                        </div>
                      )}
                    </GlimpsePanel>
                  </div>
                </div>
              </div>
            )}

            {/* 2. PMC PANEL */}
            {activeTabIdx === 1 && (
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 items-center animate-fadein">
                <div className="text-left">
                  <div className="text-[13px] font-bold tracking-wider uppercase text-[#B52B1A] mb-3">The pain</div>
                  <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-[#1A3A5C]">
                    Your judgment — across every project at once.
                  </h2>
                  <p className="text-lg text-[#3A3A3F] leading-relaxed my-4 mb-7 font-medium">
                    Your reputation rides on catching what others miss, across more contracts than any team can read in full.
                  </p>
                  <div className="text-[11px] font-bold tracking-wider uppercase text-[#6B6B74] mb-3.5">What Alfred does for you</div>
                  <ul className="list-none flex flex-col gap-3 mb-6">
                    <li className="flex gap-3 text-sm text-[#3A3A3F] leading-normal items-start">
                      <IconTk /> Reviews contracts and specs in a fraction of the time — every finding cited.
                    </li>
                    <li className="flex gap-3 text-sm text-[#3A3A3F] leading-normal items-start">
                      <IconTk /> Applies your firm's playbook — the risks you've seen before — automatically.
                    </li>
                    <li className="flex gap-3 text-sm text-[#3A3A3F] leading-normal items-start">
                      <IconTk /> Hands you evidence-grounded advice to pass to your clients.
                    </li>
                    <li className="flex gap-3 text-sm text-[#3A3A3F] leading-normal items-start">
                      <IconTk /> Scales your best contracts brain across every engagement.
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-6 mb-6">
                    <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#145C35] bg-[#E4F3EC] border border-[#cbe6d7] px-3 py-1.5 rounded-lg">
                      <IconAr /> More projects covered
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#145C35] bg-[#E4F3EC] border border-[#cbe6d7] px-3 py-1.5 rounded-lg">
                      <IconAr /> Faster reviews
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#145C35] bg-[#E4F3EC] border border-[#cbe6d7] px-3 py-1.5 rounded-lg">
                      <IconAr /> Defensible advice
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-[#1A3A5C]">
                    <span className="w-[26px] h-[26px] rounded-full bg-[#F4F4F7] border border-[#DDDDE6] grid place-items-center shrink-0">
                      <IconHh />
                    </span>
                    For: <span className="text-[#6B6B74] font-medium">QS, contract administrators &amp; PMC leads</span>
                  </div>
                </div>
                <div className="stage-visual">
                  <GlimpsePanel active={activeTabIdx === 1}>
                    {(play) => (
                      <div className="p-4 relative min-h-[290px] shadow-sm bg-white border border-[#DDDDE6] rounded-2xl hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                        <div className="relative overflow-hidden flex items-center gap-2 px-4 py-3 bg-[#F4F4F7] border-b border-[#DDDDE6] text-[11.5px] font-semibold text-[#3A3A3F] -mx-4 -mt-4 mb-4">
                          <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${play ? 'bg-[#145C35] animate-livedot' : 'bg-[#5B8EC4]'}`} />
                          This Week
                          <span className="ml-auto text-[10px] font-semibold text-[#6B6B74]">across your clients</span>
                          <span className={`absolute left-0 bottom-0 h-[2px] w-[34%] bg-gradient-to-r from-transparent to-[#2B5F96] via-[#2B5F96] pointer-events-none transition-opacity duration-300 ${play ? 'animate-scanx opacity-100' : 'opacity-0'}`} />
                        </div>
                        <div className={`transition-all duration-[500ms] ease-out delay-[100ms] ${play ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'}`}>
                          <div className="text-[44px] font-extrabold tracking-tight text-[#1A3A5C] leading-none mb-1">
                            <CountUp to={14} startTrigger={play} />
                            <span className="text-xs text-[#6B6B74] font-semibold ml-2 align-middle">contracts reviewed</span>
                          </div>
                          <div className="text-xs text-[#6B6B74] mb-3">Every finding cited to its clause.</div>
                        </div>
                        <div className={`flex items-center gap-2.5 py-2 border-b border-[#DDDDE6] transition-all duration-[500ms] ease-out delay-[240ms] ${play ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'}`}>
                          <div className="text-left">
                            <div className="text-[12.5px] font-semibold text-[#111113]">Metro Depot · EPC</div>
                            <div className="text-[11px] text-[#6B6B74]">3 onerous clauses flagged</div>
                          </div>
                          <span className="ml-auto text-[9.5px] font-semibold text-[#2B5F96] bg-[#EDF4FB] px-2 py-0.5 rounded border border-[#2B5F96]/10">cited</span>
                        </div>
                        <div className={`flex items-center gap-2.5 py-2 border-b border-[#DDDDE6] transition-all duration-[500ms] ease-out delay-[380ms] ${play ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'}`}>
                          <div className="text-left">
                            <div className="text-[12.5px] font-semibold text-[#111113]">Coastal Highway · FIDIC Red</div>
                            <div className="text-[11px] text-[#6B6B74]">Time-bar risk on 2 claims</div>
                          </div>
                          <span className="ml-auto text-[9.5px] font-semibold text-[#2B5F96] bg-[#EDF4FB] px-2 py-0.5 rounded border border-[#2B5F96]/10">cited</span>
                        </div>
                        <div className={`flex items-center gap-2.5 py-2 transition-all duration-[520ms] ease-out delay-[520ms] ${play ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'}`}>
                          <div className="text-left">
                            <div className="text-[12.5px] font-semibold text-[#111113]">Refinery Ph-2 · Bespoke</div>
                            <div className="text-[11px] text-[#6B6B74]">Spec-vs-tender mismatch</div>
                          </div>
                          <span className="ml-auto text-[9.5px] font-semibold text-[#2B5F96] bg-[#EDF4FB] px-2 py-0.5 rounded border border-[#2B5F96]/10">cited</span>
                        </div>

                        {/* Premium Value Card */}
                        <div className={`absolute bottom-3 right-3 bg-white/85 backdrop-blur-md border border-[#FFC20E]/40 rounded-xl p-3 shadow-md max-w-[195px] text-left transition-all duration-[500ms] ease-out delay-[600ms] ${play ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'}`}>
                          <div className="text-[8px] font-mono font-bold tracking-widest text-[#B88500] uppercase mb-0.5">VALUE METRIC</div>
                          <div className="text-[11.5px] font-bold text-[#1A3A5C] leading-snug">Review Efficiency: <span className="text-[#145C35] font-extrabold">8.5x</span> review speed per QS engineer. 0% critical misses.</div>
                        </div>
                      </div>
                    )}
                  </GlimpsePanel>
                </div>
              </div>
            )}

            {/* 3. OWNERS PANEL */}
            {activeTabIdx === 2 && (
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 items-center animate-fadein">
                <div className="text-left">
                  <div className="text-[13px] font-bold tracking-wider uppercase text-[#B52B1A] mb-3">The pain</div>
                  <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-[#1A3A5C]">
                    See both sides of the contract.
                  </h2>
                  <p className="text-lg text-[#3A3A3F] leading-relaxed my-4 mb-7 font-medium">
                    You need to know your own exposure, hold the contractor to the contract, and assess incoming claims — fairly and fast.
                  </p>
                  <div className="text-[11px] font-bold tracking-wider uppercase text-[#6B6B74] mb-3.5">What Alfred does for you</div>
                  <ul className="list-none flex flex-col gap-3 mb-6">
                    <li className="flex gap-3 text-sm text-[#3A3A3F] leading-normal items-start">
                      <IconTk /> Maps obligations on both sides — yours and the contractor's.
                    </li>
                    <li className="flex gap-3 text-sm text-[#3A3A3F] leading-normal items-start">
                      <IconTk /> Tracks contractor performance against the contract and programme.
                    </li>
                    <li className="flex gap-3 text-sm text-[#3A3A3F] leading-normal items-start">
                      <IconTk /> Assesses incoming claims against the record — grounded and cited.
                    </li>
                    <li className="flex gap-3 text-sm text-[#3A3A3F] leading-normal items-start">
                      <IconTk /> Keeps the whole project's contractual position transparent.
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-6 mb-6">
                    <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#145C35] bg-[#E4F3EC] border border-[#cbe6d7] px-3 py-1.5 rounded-lg">
                      <IconAr /> Exposure understood
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#145C35] bg-[#E4F3EC] border border-[#cbe6d7] px-3 py-1.5 rounded-lg">
                      <IconAr /> Compliance tracked
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#145C35] bg-[#E4F3EC] border border-[#cbe6d7] px-3 py-1.5 rounded-lg">
                      <IconAr /> Claims assessed on evidence
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-[#1A3A5C]">
                    <span className="w-[26px] h-[26px] rounded-full bg-[#F4F4F7] border border-[#DDDDE6] grid place-items-center shrink-0">
                      <IconHh />
                    </span>
                    For: <span className="text-[#6B6B74] font-medium">Owner's engineer &amp; project directors</span>
                  </div>
                </div>
                <div className="stage-visual">
                  <GlimpsePanel active={activeTabIdx === 2}>
                    {(play) => (
                      <div className="p-4 relative min-h-[290px] shadow-sm bg-white border border-[#DDDDE6] rounded-2xl hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                        <div className="relative overflow-hidden flex items-center gap-2 px-4 py-3 bg-[#F4F4F7] border-b border-[#DDDDE6] text-[11.5px] font-semibold text-[#3A3A3F] -mx-4 -mt-4 mb-4">
                          <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${play ? 'bg-[#145C35] animate-livedot' : 'bg-[#5B8EC4]'}`} />
                          Contract Position
                          <span className="ml-auto text-[10px] font-semibold text-[#6B6B74]">Employer view</span>
                          <span className={`absolute left-0 bottom-0 h-[2px] w-[34%] bg-gradient-to-r from-transparent to-[#2B5F96] via-[#2B5F96] pointer-events-none transition-opacity duration-300 ${play ? 'animate-scanx opacity-100' : 'opacity-0'}`} />
                        </div>
                        <div className={`grid grid-cols-2 gap-3 mb-3 transition-all duration-[500ms] ease-out delay-[100ms] ${play ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'}`}>
                          <div className="border border-[#DDDDE6] rounded-lg p-2 bg-white text-left">
                            <div className="text-[9.5px] font-semibold uppercase tracking-wider text-[#6B6B74]">Your obligations</div>
                            <div className="text-2xl font-extrabold text-[#1A3A5C] mt-0.5 tabular-nums">
                              <CountUp to={46} startTrigger={play} />
                            </div>
                          </div>
                          <div className="border border-[#DDDDE6] rounded-lg p-2 bg-white text-left">
                            <div className="text-[9.5px] font-semibold uppercase tracking-wider text-[#6B6B74]">Contractor obligations</div>
                            <div className="text-2xl font-extrabold text-[#1A3A5C] mt-0.5 tabular-nums">
                              <CountUp to={168} startTrigger={play} />
                            </div>
                          </div>
                        </div>
                        <div className={`flex items-start gap-2.5 py-2.5 border-b border-[#DDDDE6] transition-all duration-[500ms] ease-out delay-[240ms] ${play ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'}`}>
                          <span className="text-[9.5px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded shrink-0 h-fit text-[#B88500] bg-[#FFF6D6] border border-[#FFC20E]/20">Review</span>
                          <div className="text-left">
                            <div className="text-[12.5px] font-semibold text-[#111113] leading-snug">Incoming claim — EOT, Zone 3</div>
                            <div className="text-[11px] text-[#6B6B74] mt-0.5">Assessed against site record &amp; Clause 20.1</div>
                          </div>
                        </div>
                        <div className={`flex items-center gap-2.5 py-2.5 border-b border-[#DDDDE6] transition-all duration-[500ms] ease-out delay-[380ms] ${play ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'}`}>
                          <span className="w-2 h-2 rounded-full bg-[#145C35] shrink-0" />
                          <div className="text-left">
                            <div className="text-[12.5px] font-semibold text-[#111113]">Contractor insurance certificates</div>
                            <div className="text-[11px] text-[#6B6B74]">Received, compliant</div>
                          </div>
                          <span className="ml-auto text-[#145C35] font-bold">✓</span>
                        </div>
                        <div className={`transition-all duration-[500ms] ease-out delay-[520ms] ${play ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'}`}>
                          <span className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-[#145C35] bg-[#E4F3EC] border border-[#cbe6d7] px-3 py-1.5 rounded-lg mt-6">
                            <IconAr /> Every position grounded in the contract
                          </span>
                        </div>

                        {/* Premium Value Card */}
                        <div className={`absolute bottom-3 right-3 bg-white/85 backdrop-blur-md border border-[#FFC20E]/40 rounded-xl p-3 shadow-md max-w-[195px] text-left transition-all duration-[500ms] ease-out delay-[600ms] ${play ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'}`}>
                          <div className="text-[8px] font-mono font-bold tracking-widest text-[#B88500] uppercase mb-0.5">VALUE METRIC</div>
                          <div className="text-[11.5px] font-bold text-[#1A3A5C] leading-snug">Audit Speed: <span className="text-[#145C35] font-extrabold">40 min</span> claim validation supporting owners.</div>
                        </div>
                      </div>
                    )}
                  </GlimpsePanel>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* PLATFORM STRIP */}
      <section className="bg-[#1A3A5C] text-white py-16">
        <div className="max-w-[1180px] mx-auto px-7 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-4">One engine. Configured to you.</h3>
          <p className="text-base text-[#D6E6F5] leading-relaxed max-w-[760px] mx-auto">
            The intelligence is universal. Your <b className="text-[#FFD55A] font-semibold">contract standards, roles, thresholds and playbooks</b> are configuration — so onboarding is a setup, not a rebuild.
          </p>
        </div>
      </section>

      {/* CLOSING */}
      <section className="text-center py-20 md:py-24" id="demo">
        <div className="max-w-[1180px] mx-auto px-7">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A3A5C] tracking-tight max-w-[18ch] mx-auto mb-4">
            Find your seat in the contract.
          </h2>
          <p className="text-base text-[#6B6B74] max-w-[50ch] mx-auto mb-7">
            Tell us how your team works. We'll show you exactly where Alfred fits — and what it catches on day one.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button
              onClick={handleDemoClick}
              className="bg-[#2B5F96] hover:bg-[#1A3A5C] text-white py-3 px-6 rounded-lg font-semibold text-sm transition-colors cursor-pointer"
            >
              Schedule a Demo
            </button>
            <button
              onClick={() => {
                navigate('/product')
                window.scrollTo(0, 0)
              }}
              className="bg-transparent border border-[#DDDDE6] text-[#1A3A5C] hover:bg-[#EDF4FB] hover:border-[#2B5F96] py-3 px-6 rounded-lg font-semibold text-sm transition-colors cursor-pointer"
            >
              See the product
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Solutions
