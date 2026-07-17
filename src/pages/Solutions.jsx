import React, { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import alfredLogo from '../assets/newlogo alfred.svg'

const AlfredLogo = ({ className = 'w-[20px] h-[20px]' }) => (
  <img src={alfredLogo} alt="Alfred" className={`rounded-full shrink-0 ${className} object-contain`} />
)

// Premium Inline SVGs / Icons mapped from solutions.html
const IconTk = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="shrink-0 inline-block align-middle">
    <circle cx="10" cy="10" r="10" fill="#EDF4FB" />
    <path d="M6 10.4l2.5 2.5L14 7" stroke="#2B5F96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconAr = () => (
  <svg width="12" height="12" viewBox="0 0 20 20" fill="none" className="shrink-0 inline-block align-middle">
    <path d="M4 10h10M10 5l5 5-5 5" stroke="#145C35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconHh = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-[18px] h-[18px] shrink-0 inline-block align-middle">
    <path d="M4 17h16v2H4z" fill="#1A3A5C" />
    <path d="M6 17c0-3.5 2.4-6 6-6s6 2.5 6 6" stroke="#1A3A5C" strokeWidth="2" fill="none" />
    <rect x="11" y="6" width="2" height="4" rx="1" fill="#FFC20E" />
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
      requestAnimationFrame(() => setValue(to))
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
      const timer = setTimeout(() => setPlay(true), 50)
      return () => {
        clearTimeout(timer)
        setPlay(false)
      }
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

const SparkleIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 inline-block align-middle">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
  </svg>
)

function EpcChatVisual({ play }) {
  const [step, setStep] = useState(0)
  const [typedInput, setTypedInput] = useState('')
  const userText = "Compare tender.pdf Clause 14 & 17 against FIDIC Silver Book."
  const containerRef = useRef(null)

  useEffect(() => {
    if (!play) {
      setStep(0)
      setTypedInput('')
      return
    }
    let timeout

    if (step === 0) {
      timeout = setTimeout(() => setStep(1), 500)
    } else if (step === 1) {
      if (typedInput.length < userText.length) {
        timeout = setTimeout(() => {
          setTypedInput(userText.slice(0, typedInput.length + 1))
        }, 16)
      } else {
        timeout = setTimeout(() => {
          setStep(2)
        }, 400)
      }
    } else if (step === 2) {
      // User message sent - brief pause before the document opens
      timeout = setTimeout(() => setStep(3), 1000)
    } else if (step === 3) {
      // Alfred answers Clause 14 mismatch
      timeout = setTimeout(() => setStep(4), 1000)
    } else if (step === 4) {
      // Highlight Clause 17, Alfred answers Clause 17 mismatch
      timeout = setTimeout(() => setStep(5), 1400)
    } else if (step === 5) {
      // Show queries draft button
      timeout = setTimeout(() => setStep(6), 1000)
    }

    return () => clearTimeout(timeout)
  }, [play, step, typedInput.length])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }, [step])
  return (
    <div className="p-4 relative h-[365px] flex flex-col shadow-sm bg-white border border-[#DDDDE6] rounded-2xl hover:-translate-y-1 hover:shadow-md transition-all duration-300 text-left overflow-hidden">
      {/* Header */}
      <div className="relative overflow-hidden flex items-center gap-2 px-4 py-3 bg-[#F4F4F7] border-b border-[#DDDDE6] text-[11.5px] font-semibold text-[#3A3A3F] -mx-4 -mt-4 mb-3">
        <AlfredLogo className="w-[18px] h-[18px]" />
        Alfred Co-Pilot
        <span className="ml-auto text-[10px] font-semibold text-[#6B6B74]">tender.pdf</span>
      </div>

      {/* Main Content Pane Split */}
      <div className={`flex-1 flex min-h-[220px] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 3 ? 'gap-3' : 'gap-0'}`}>

        {/* LEFT PANEL: Document text with selection highlight (mimics Canvas in CoPilotSection) */}
        <div className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border-r border-gray-200 bg-gray-50/50 flex flex-col overflow-hidden shrink-0 rounded-xl ${step >= 3 ? 'w-[150px] sm:w-[170px] md:w-[190px] opacity-100' : 'w-0 opacity-0'
          }`}>
          {/* Static-width wrapper to prevent text re-flow and guarantee smooth animation */}
          <div className="w-[150px] sm:w-[170px] md:w-[190px] flex flex-col h-full overflow-hidden shrink-0">
            <div className="h-[34px] border-b border-gray-200 flex items-center px-3 bg-white shrink-0 justify-between">
              <span className="text-[11px] font-bold text-gray-700 truncate">tender.pdf</span>
              <span className="text-[9.5px] font-semibold text-gray-400">Page 48</span>
            </div>

            <div className="flex-1 p-3 flex flex-col gap-3 bg-white text-[10px] text-gray-600 leading-relaxed overflow-hidden">
              {/* Clause 14.15 */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-[#1A3A5C] text-[11px]">14.15 Payment</span>
                  {step >= 3 && (
                    <span className="text-[8px] font-bold text-amber-800 bg-[#FFF6D6] px-1 py-[1px] rounded border border-amber-200 animate-fadein">Deviation</span>
                  )}
                </div>
                <p className="m-0 text-[10px] text-gray-500">
                  Payment shall be made within{' '}
                  <span
                    className="font-medium rounded-[2px] px-[1px]"
                    style={{
                      backgroundImage: 'linear-gradient(to right, rgba(255,194,14,0.45), rgba(255,194,14,0.45))',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'left center',
                      backgroundSize: step >= 3 ? '100% 100%' : '0% 100%',
                      transition: 'background-size 0.7s ease'
                    }}
                  >
                    60 days
                  </span>{' '}
                  of the Engineer&apos;s certificate.
                </p>
              </div>

              <div className="h-px bg-gray-100" />

              {/* Clause 17.3 */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-[#1A3A5C] text-[11px]">17.3 FEED Liability</span>
                  {step >= 5 && (
                    <span className="text-[8px] font-bold text-white bg-[#B52B1A] px-1 py-[1px] rounded animate-fadein">Critical</span>
                  )}
                </div>
                <p className="m-0 text-[10px] text-gray-500">
                  The Contractor shall{' '}
                  <span
                    className="font-medium rounded-[2px] px-[1px]"
                    style={{
                      backgroundImage: 'linear-gradient(to right, rgba(181,43,26,0.28), rgba(181,43,26,0.28))',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'left center',
                      backgroundSize: step >= 5 ? '100% 100%' : '0% 100%',
                      transition: 'background-size 0.7s ease'
                    }}
                  >
                    indemnify the Employer for FEED errors
                  </span>{' '}
                  in design.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Chat Interface */}
        <div ref={containerRef} className="flex-1 flex flex-col gap-2 overflow-y-auto no-scrollbar py-1">
          {/* Empty / typing-phase placeholder so the box stays balanced */}
          {step < 2 && (
            <div className="flex-1 flex items-center justify-center text-center px-5">
              <span className="text-[11px] text-gray-300 leading-relaxed">
                Comparing tender clauses against FIDIC Silver Book...
              </span>
            </div>
          )}

          {/* User Message */}
          {step >= 2 && (
            <div className="flex gap-2 justify-end items-start animate-fadein">
              <div className="bg-gray-50 border border-gray-200 text-gray-800 text-[11px] leading-snug rounded-xl rounded-tr-sm px-3 py-2 max-w-[85%] shadow-sm">
                {userText}
              </div>
              <div className="w-[24px] h-[24px] rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 text-gray-400 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
              </div>
            </div>
          )}

          {/* Alfred Analyzing Indicator */}
          {step === 3 && (
            <div className="flex gap-2 items-start animate-fadein">
              <div className="w-[24px] h-[24px] rounded-full bg-[#EDF4FB] border border-[#D6E6F5] flex items-center justify-center shrink-0 text-[#2B5F96]">
                <SparkleIcon />
              </div>
              <div className="bg-[#EDF4FB]/50 border border-[#D6E6F5]/50 text-gray-500 text-[10.5px] rounded-xl rounded-tl-sm px-3 py-2 flex items-center gap-1.5">
                <svg className="w-3 h-3 animate-spin text-[#2B5F96]" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Comparing Clause 14 & 17 deviations...
              </div>
            </div>
          )}

          {/* Alfred Output 1: Clause 14.15 */}
          {step >= 4 && (
            <div className="flex gap-2 items-start animate-fadein">
              <div className="w-[24px] h-[24px] rounded-full bg-[#EDF4FB] border border-[#D6E6F5] flex items-center justify-center shrink-0 text-[#2B5F96] mt-1">
                <SparkleIcon />
              </div>
              <div className="flex-1 bg-white text-gray-800 text-[10px] leading-relaxed flex flex-col gap-2">
                <div className="p-2 border border-[#DDDDE6] rounded-xl bg-gray-50/50 flex flex-col gap-1 text-left">
                  <div className="font-bold text-[#1A3A5C] text-[10.5px] flex items-center gap-1.5">
                    <span>Clause 14.15 Deviation</span>
                    <span className="text-[7px] font-bold text-amber-800 bg-[#FFF6D6] px-1 py-0.5 rounded border border-amber-200">Deviation</span>
                  </div>
                  <p className="m-0 text-[9.5px] text-gray-500 leading-normal">
                    Payment period extended from standard 56 days to 60 days from certification. Risk: Cash flow lag.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Alfred Output 2: Clause 17.3 */}
          {step >= 5 && (
            <div className="flex gap-2 items-start animate-fadein">
              <div className="w-[24px] h-[24px] shrink-0" />
              <div className="flex-1 bg-white text-gray-800 text-[10px] leading-relaxed flex flex-col gap-2">
                <div className="p-2 border border-[#DDDDE6] rounded-xl bg-gray-50/50 flex flex-col gap-1 text-left">
                  <div className="font-bold text-[#1A3A5C] text-[10.5px] flex items-center gap-1.5">
                    <span>Clause 17.3 FEED Liability</span>
                    <span className="text-[7px] font-bold text-white bg-[#B52B1A] px-1.5 py-0.5 rounded">Critical Risk</span>
                  </div>
                  <p className="m-0 text-[9.5px] text-gray-500 leading-normal">
                    Contractor carries design validation liability for Employer's FEED errors. Risk: Design exposure.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Staged Action queries button */}
          {step >= 6 && (
            <div className="flex items-center justify-between gap-2 pt-1.5 border-t border-gray-100 mt-auto animate-fadein shrink-0">
              <span className="inline-flex items-center gap-0.5 text-[9px] font-semibold text-[#145C35] bg-[#E4F3EC] px-2 py-0.5 rounded border border-[#145C35]/15">
                ✓ 2 deviations found
              </span>
              <button className="text-[9.5px] font-bold text-[#2B5F96] hover:underline bg-transparent border-0 p-0 cursor-pointer">
                Draft Queries →
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Input Placeholder */}
      <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center bg-gray-50/80 rounded px-2.5 py-1.5">
        <div className="text-[11px] flex-1 truncate flex items-center min-h-[16px]">
          {step === 1 ? (
            <>
              <span className="text-gray-855">{typedInput}</span>
              <span className="inline-block w-[1.5px] h-[11px] bg-gray-600 ml-0.5 animate-pulse" />
            </>
          ) : (
            <span className="text-gray-400">Ask Alfred about this contract...</span>
          )}
        </div>
        <div className="w-[20px] h-[20px] rounded bg-gray-200 flex items-center justify-center text-gray-400">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19V5m-7 7l7-7 7 7"></path></svg>
        </div>
      </div>
    </div>
  )
}

function PmcChatVisual({ play }) {
  const [step, setStep] = useState(0)
  const [typedInput, setTypedInput] = useState('')
  const userText = "Show my contract review status for this week."
  const containerRef = useRef(null)

  useEffect(() => {
    if (!play) {
      setStep(0)
      setTypedInput('')
      return
    }
    let timeout

    if (step === 0) {
      timeout = setTimeout(() => setStep(1), 500)
    } else if (step === 1) {
      if (typedInput.length < userText.length) {
        timeout = setTimeout(() => {
          setTypedInput(userText.slice(0, typedInput.length + 1))
        }, 16)
      } else {
        timeout = setTimeout(() => {
          setTypedInput('')
          setStep(2)
        }, 400)
      }
    } else if (step === 2) {
      timeout = setTimeout(() => setStep(3), 400)
    } else if (step === 3) {
      timeout = setTimeout(() => setStep(4), 1600)
    } else if (step === 4) {
      timeout = setTimeout(() => setStep(5), 700)
    } else if (step === 5) {
      timeout = setTimeout(() => setStep(6), 700)
    }

    return () => clearTimeout(timeout)
  }, [play, step, typedInput.length])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }, [step])

  return (
    <div className="p-4 relative min-h-[350px] flex flex-col justify-between shadow-sm bg-white border border-[#DDDDE6] rounded-2xl hover:-translate-y-1 hover:shadow-md transition-all duration-300 text-left overflow-hidden">
      {/* Header */}
      <div className="relative overflow-hidden flex items-center gap-2 px-4 py-3 bg-[#F4F4F7] border-b border-[#DDDDE6] text-[11.5px] font-semibold text-[#3A3A3F] -mx-4 -mt-4 mb-3">
        <AlfredLogo className="w-[18px] h-[18px]" />
        Alfred for PMC
        <span className="ml-auto text-[10px] font-semibold text-[#6B6B74]">weekly_summary</span>
      </div>

      <div ref={containerRef} className="flex-1 flex flex-col gap-3 overflow-y-auto no-scrollbar py-1">
        {/* User Message */}
        {step >= 2 && (
          <div className="flex gap-2 justify-end items-start animate-fadein">
            <div className="bg-gray-50 border border-gray-200 text-gray-800 text-[12px] leading-snug rounded-xl rounded-tr-sm px-3 py-2 max-w-[85%] shadow-sm">
              {userText}
            </div>
            <div className="w-[24px] h-[24px] rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-gray-400 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </div>
          </div>
        )}

        {/* Alfred thinking */}
        {step === 3 && (
          <div className="flex gap-2 items-start animate-fadein">
            <div className="w-[24px] h-[24px] rounded-full bg-[#EDF4FB] border border-[#D6E6F5] flex items-center justify-center shrink-0 text-[#2B5F96]">
              <SparkleIcon />
            </div>
            <div className="bg-[#EDF4FB]/50 border border-[#D6E6F5]/50 text-gray-500 text-[11px] rounded-xl rounded-tl-sm px-3 py-2 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 animate-spin text-[#2B5F96]" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Auditing active client engagements...
            </div>
          </div>
        )}

        {/* Alfred Response / PMC Dashboard */}
        {step >= 4 && (
          <div className="flex gap-2 items-start animate-fadein">
            <div className="w-[24px] h-[24px] rounded-full bg-[#EDF4FB] border border-[#D6E6F5] flex items-center justify-center shrink-0 text-[#2B5F96] mt-1">
              <SparkleIcon />
            </div>
            <div className="flex-1 bg-white text-gray-800 text-[12px] leading-relaxed flex flex-col gap-2">
              <p className="text-gray-550">
                You have reviewed <span className="font-semibold text-[#1A3A5C]"><CountUp to={14} startTrigger={step >= 5} /> contracts</span> this week. Here is the active list:
              </p>

              {/* Original PMC "This Week" UI */}
              {step >= 5 && (
                <div className="p-3 border border-[#DDDDE6] rounded-xl bg-gray-50/50 flex flex-col gap-2 animate-fadein">
                  <div className="flex items-center gap-2 pb-1.5 border-b border-[#DDDDE6]">
                    <div className="text-left">
                      <div className="text-[11.5px] font-semibold text-[#111113]">Metro Depot · EPC</div>
                      <div className="text-[10px] text-[#6B6B74]">3 onerous clauses flagged</div>
                    </div>
                    <span className="ml-auto text-[8.5px] font-semibold text-[#2B5F96] bg-[#EDF4FB] px-1.5 py-0.5 rounded border border-[#2B5F96]/10">cited</span>
                  </div>

                  <div className="flex items-center gap-2 pb-1.5 border-b border-[#DDDDE6]">
                    <div className="text-left">
                      <div className="text-[11.5px] font-semibold text-[#111113]">Coastal Highway · FIDIC Red</div>
                      <div className="text-[10px] text-[#6B6B74]">Time-bar risk on 2 claims</div>
                    </div>
                    <span className="ml-auto text-[8.5px] font-semibold text-[#2B5F96] bg-[#EDF4FB] px-1.5 py-0.5 rounded border border-[#2B5F96]/10">cited</span>
                  </div>

                  <div className="flex items-center gap-2 pb-1">
                    <div className="text-left">
                      <div className="text-[11.5px] font-semibold text-[#111113]">Refinery Ph-2 · Bespoke</div>
                      <div className="text-[10px] text-[#6B6B74]">Spec-vs-tender mismatch</div>
                    </div>
                    <span className="ml-auto text-[8.5px] font-semibold text-[#2B5F96] bg-[#EDF4FB] px-1.5 py-0.5 rounded border border-[#2B5F96]/10">cited</span>
                  </div>

                  {/* Premium Value Card */}
                  {step >= 6 && (
                    <div className="mt-1 p-2 bg-[#EDF4FB] border border-[#D6E6F5] rounded-lg text-left animate-fadein">
                      <div className="text-[7.5px] font-mono font-bold tracking-widest text-[#B88500] uppercase mb-0.5">VALUE METRIC</div>
                      <div className="text-[10.5px] font-bold text-[#1A3A5C] leading-snug font-sans">
                        Review Efficiency: <span className="text-[#145C35] font-extrabold">8.5x</span> review speed per QS engineer. 0% critical misses.
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Input Placeholder */}
      <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center bg-gray-50/80 rounded px-2.5 py-1.5">
        <div className="text-[11px] flex-1 truncate flex items-center min-h-[16px]">
          {step === 1 ? (
            <>
              <span className="text-gray-855">{typedInput}</span>
              <span className="inline-block w-[1.5px] h-[11px] bg-gray-600 ml-0.5 animate-pulse" />
            </>
          ) : (
            <span className="text-gray-400">Validate another claim...</span>
          )}
        </div>
        <div className="w-[20px] h-[20px] rounded bg-gray-200 flex items-center justify-center text-gray-400">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19V5m-7 7l7-7 7 7"></path></svg>
        </div>
      </div>
    </div>
  )
}

function OwnerChatVisual({ play }) {
  const [step, setStep] = useState(0)
  const [typedInput, setTypedInput] = useState('')
  const userText = "Show our current Employer contract position."
  const containerRef = useRef(null)

  useEffect(() => {
    if (!play) {
      setStep(0)
      setTypedInput('')
      return
    }
    let timeout

    if (step === 0) {
      timeout = setTimeout(() => setStep(1), 500)
    } else if (step === 1) {
      if (typedInput.length < userText.length) {
        timeout = setTimeout(() => {
          setTypedInput(userText.slice(0, typedInput.length + 1))
        }, 16)
      } else {
        timeout = setTimeout(() => {
          setTypedInput('')
          setStep(2)
        }, 400)
      }
    } else if (step === 2) {
      timeout = setTimeout(() => setStep(3), 400)
    } else if (step === 3) {
      timeout = setTimeout(() => setStep(4), 1600)
    } else if (step === 4) {
      timeout = setTimeout(() => setStep(5), 700)
    } else if (step === 5) {
      timeout = setTimeout(() => setStep(6), 700)
    }

    return () => clearTimeout(timeout)
  }, [play, step, typedInput.length])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }, [step])

  return (
    <div className="p-4 relative min-h-[350px] flex flex-col justify-between shadow-sm bg-white border border-[#DDDDE6] rounded-2xl hover:-translate-y-1 hover:shadow-md transition-all duration-300 text-left overflow-hidden">
      {/* Header */}
      <div className="relative overflow-hidden flex items-center gap-2 px-4 py-3 bg-[#F4F4F7] border-b border-[#DDDDE6] text-[11.5px] font-semibold text-[#3A3A3F] -mx-4 -mt-4 mb-3">
        <AlfredLogo className="w-[18px] h-[18px]" />
        Alfred for Owners
        <span className="ml-auto text-[10px] font-semibold text-[#6B6B74]">employer_view</span>
      </div>

      <div ref={containerRef} className="flex-1 flex flex-col gap-3 overflow-y-auto no-scrollbar py-1">
        {/* User Message */}
        {step >= 2 && (
          <div className="flex gap-2 justify-end items-start animate-fadein">
            <div className="bg-gray-50 border border-gray-200 text-gray-800 text-[12px] leading-snug rounded-xl rounded-tr-sm px-3 py-2 max-w-[85%] shadow-sm">
              {userText}
            </div>
            <div className="w-[24px] h-[24px] rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-gray-400 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </div>
          </div>
        )}

        {/* Alfred thinking */}
        {step === 3 && (
          <div className="flex gap-2 items-start animate-fadein">
            <div className="w-[24px] h-[24px] rounded-full bg-[#EDF4FB] border border-[#D6E6F5] flex items-center justify-center shrink-0 text-[#2B5F96]">
              <SparkleIcon />
            </div>
            <div className="bg-[#EDF4FB]/50 border border-[#D6E6F5]/50 text-gray-500 text-[11px] rounded-xl rounded-tl-sm px-3 py-2 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 animate-spin text-[#2B5F96]" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Aggregating obligations and active claims...
            </div>
          </div>
        )}

        {/* Alfred Response / Owner Dashboard */}
        {step >= 4 && (
          <div className="flex gap-2 items-start animate-fadein">
            <div className="w-[24px] h-[24px] rounded-full bg-[#EDF4FB] border border-[#D6E6F5] flex items-center justify-center shrink-0 text-[#2B5F96] mt-1">
              <SparkleIcon />
            </div>
            <div className="flex-1 bg-white text-gray-800 text-[12px] leading-relaxed flex flex-col gap-2">
              <p className="text-gray-550">
                Employer position aggregated. Here is the live status:
              </p>

              {/* Original Owner Dashboard UI */}
              {step >= 5 && (
                <div className="p-3 border border-[#DDDDE6] rounded-xl bg-gray-50/50 flex flex-col gap-2 animate-fadein">
                  <div className="grid grid-cols-2 gap-2 mb-1.5">
                    <div className="border border-[#DDDDE6] rounded-lg p-1.5 bg-white text-left font-sans">
                      <div className="text-[8px] font-semibold uppercase tracking-wider text-[#6B6B74]">Your obligations</div>
                      <div className="text-lg font-extrabold text-[#1A3A5C] mt-0.5 tabular-nums">
                        <CountUp to={46} startTrigger={step >= 5} />
                      </div>
                    </div>
                    <div className="border border-[#DDDDE6] rounded-lg p-1.5 bg-white text-left font-sans">
                      <div className="text-[8px] font-semibold uppercase tracking-wider text-[#6B6B74]">Contractor obligations</div>
                      <div className="text-lg font-extrabold text-[#1A3A5C] mt-0.5 tabular-nums">
                        <CountUp to={168} startTrigger={step >= 5} />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 py-1.5 border-b border-[#DDDDE6] text-left">
                    <span className="text-[8px] font-bold uppercase tracking-wider px-1 py-0.5 rounded shrink-0 h-fit text-[#B88500] bg-[#FFF6D6] border border-[#FFC20E]/20">Review</span>
                    <div>
                      <div className="text-[11.5px] font-semibold text-[#111113] leading-snug">Incoming claim, EOT, Zone 3</div>
                      <div className="text-[10px] text-[#6B6B74] mt-0.5 font-sans">Assessed against site record & Clause 20.1</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 py-1 border-b border-[#DDDDE6] text-left">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#145C35] shrink-0" />
                    <div>
                      <div className="text-[11.5px] font-semibold text-[#111113]">Contractor insurance certificates</div>
                      <div className="text-[10px] text-[#6B6B74] font-sans">Received, compliant</div>
                    </div>
                    <span className="ml-auto text-[#145C35] font-bold">✓</span>
                  </div>

                  {/* Premium Value Card */}
                  {step >= 6 && (
                    <div className="mt-1 p-2 bg-[#EDF4FB] border border-[#D6E6F5] rounded-lg text-left animate-fadein">
                      <div className="text-[7.5px] font-mono font-bold tracking-widest text-[#B88500] uppercase mb-0.5">VALUE METRIC</div>
                      <div className="text-[10.5px] font-bold text-[#1A3A5C] leading-snug font-sans">
                        Audit Speed: <span className="text-[#145C35] font-extrabold">40 min</span> claim validation supporting owners.
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Input Placeholder */}
      <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center bg-gray-50/80 rounded px-2.5 py-1.5">
        <div className="text-[11px] flex-1 truncate flex items-center min-h-[16px]">
          {step === 1 ? (
            <>
              <span className="text-gray-855">{typedInput}</span>
              <span className="inline-block w-[1.5px] h-[11px] bg-gray-600 ml-0.5 animate-pulse" />
            </>
          ) : (
            <span className="text-gray-400">View another dispute...</span>
          )}
        </div>
        <div className="w-[20px] h-[20px] rounded bg-gray-200 flex items-center justify-center text-gray-400">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19V5m-7 7l7-7 7 7"></path></svg>
        </div>
      </div>
    </div>
  )
}

function Solutions() {
  const location = useLocation()
  const navigate = useNavigate()

  const [activeTabIdx, setActiveTabIdx] = useState(0)
  const [, setProgress] = useState(0)
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
        requestAnimationFrame(() => {
          setActiveTabIdx(mappedIdx)
          setIsAuto(false) // Disable auto-cycle on manual redirection
        })
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
      requestAnimationFrame(() => setProgress(0))
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
          <path d="M3 21h18M6 21V7l6-3 6 3v14" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M10 21v-4h4v4" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      )
    },
    {
      id: 'pmc',
      label: 'PMC / QS Consultants',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0 transition-colors">
          <path d="M4 5h16v11H4zM9 20h6M12 16v4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 'owner',
      label: 'Owners',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0 transition-colors">
          <path d="M3 11l9-7 9 7M5 10v10h14V10" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      )
    }
  ]

  return (
    <div className="bg-white text-[#3A3A3F] font-sans antialiased">
      <SEO
        title="Solutions · Built for everyone who lives in the contract"
        description="Whether you carry the risk, run the site, advise the client, or own the project, Alfred reads the same contract from your seat. One intelligence layer configured to how you work."
      />
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-24 pb-12 sm:pt-28 md:pt-32 md:pb-16">
        <div className="absolute -top-40 -right-32 w-[520px] h-[520px] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(255,194,14,0.1), transparent 62%)' }} />
        <div className="max-w-[1180px] mx-auto px-4 sm:px-7 relative z-10">
          <div className="max-w-[820px]">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#B88500] uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#FFC20E]" />
              Solutions
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold leading-[1.1] tracking-tight text-[#1A3A5C] mb-4">
              Built for everyone who lives in the contract.
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-[#6B6B74] mt-5">
              Whether you carry the risk, run the site, advise the client, or own the project, Alfred reads the same contract from <b>your</b> seat. One intelligence layer, configured to how you work.
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
        <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
          {/* Tab bar list (Hiding scrollbar via arbitrary class) */}
          <div className="flex gap-1 border-b border-[#DDDDE6] overflow-x-auto relative mb-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="tablist" aria-label="Solutions by company type">
            {tabList.map((tab, idx) => {
              const active = activeTabIdx === idx
              return (
                <button
                  key={tab.id}
                  role="tab"
                  onClick={() => handleTabClick(idx)}
                  className={`relative bg-transparent border-none cursor-pointer px-[18px] py-4 text-sm font-semibold whitespace-nowrap flex items-center gap-2 transition-colors duration-200 outline-none ${active ? 'text-[#1A3A5C]' : 'text-[#6B6B74] hover:text-[#3A3A3F]'
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
                        <IconTk /> Reads the tender before you price it: onerous clauses, tender-vs-spec gaps, and hidden costs.
                      </li>
                      <li className="flex gap-3 text-sm text-[#3A3A3F] leading-normal items-start">
                        <IconTk /> Turns every contract obligation into an owned, deadline-tracked item.
                      </li>
                      <li className="flex gap-3 text-sm text-[#3A3A3F] leading-normal items-start">
                        <IconTk /> Watches contract and schedule together through construction.
                      </li>
                      <li className="flex gap-3 text-sm text-[#3A3A3F] leading-normal items-start">
                        <IconTk /> Drafts defensible claims, grounded, cited, and in time.
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
                      {(play) => <EpcChatVisual play={play} />}
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
                      Site reality never quite matches the plan, and it's reconciled by hand, in spreadsheets, too late to act.
                    </p>
                    <div className="text-[11px] font-bold tracking-wider uppercase text-[#6B6B74] mb-3.5">What Alfred does for you</div>
                    <ul className="list-none flex flex-col gap-3 mb-6">
                      <li className="flex gap-3 text-sm text-[#3A3A3F] leading-normal items-start">
                        <IconTk /> Auto-computes progress, SPI, variance and invoice-readiness from daily site data.
                      </li>
                      <li className="flex gap-3 text-sm text-[#3A3A3F] leading-normal items-start">
                        <IconTk /> Flags any activity threatening a milestone: routed to the right owner.
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
                            <AlfredLogo className="w-[18px] h-[18px]" />
                            Live Sites
                            <span className="ml-auto text-[10px] font-semibold text-[#6B6B74]">portfolio view</span>
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
                              <div className="text-[12.5px] font-semibold text-[#111113]">Package 1 · Structures</div>
                              <div className="text-[11px] text-[#6B6B74] mt-0.5">On track</div>
                            </div>
                            <span className="ml-auto text-[11px] font-bold text-[#145C35] shrink-0">SPI 1.02</span>
                          </div>
                          <div className={`flex items-start gap-2.5 py-2.5 text-left transition-all duration-[500ms] ease-out delay-[500ms] ${play ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'}`}>
                            <span className="w-2 h-2 rounded-full bg-[#2B5F96] mt-1 shrink-0" />
                            <div>
                              <div className="text-[12.5px] font-semibold text-[#111113]">Zone 2 · MEP</div>
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
                    Your judgment, across every project at once.
                  </h2>
                  <p className="text-lg text-[#3A3A3F] leading-relaxed my-4 mb-7 font-medium">
                    Your reputation rides on catching what others miss, across more contracts than any team can read in full.
                  </p>
                  <div className="text-[11px] font-bold tracking-wider uppercase text-[#6B6B74] mb-3.5">What Alfred does for you</div>
                  <ul className="list-none flex flex-col gap-3 mb-6">
                    <li className="flex gap-3 text-sm text-[#3A3A3F] leading-normal items-start">
                      <IconTk /> Reviews contracts and specs in a fraction of the time: every finding cited.
                    </li>
                    <li className="flex gap-3 text-sm text-[#3A3A3F] leading-normal items-start">
                      <IconTk /> Applies your firm's playbook (the risks you've seen before) automatically.
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
                    {(play) => <PmcChatVisual play={play} />}
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
                    You need to know your own exposure, hold the contractor to the contract, and assess incoming claims, fairly and fast.
                  </p>
                  <div className="text-[11px] font-bold tracking-wider uppercase text-[#6B6B74] mb-3.5">What Alfred does for you</div>
                  <ul className="list-none flex flex-col gap-3 mb-6">
                    <li className="flex gap-3 text-sm text-[#3A3A3F] leading-normal items-start">
                      <IconTk /> Maps obligations on both sides: yours and the contractor's.
                    </li>
                    <li className="flex gap-3 text-sm text-[#3A3A3F] leading-normal items-start">
                      <IconTk /> Tracks contractor performance against the contract and programme.
                    </li>
                    <li className="flex gap-3 text-sm text-[#3A3A3F] leading-normal items-start">
                      <IconTk /> Assesses incoming claims against the record: grounded and cited.
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
                    {(play) => <OwnerChatVisual play={play} />}
                  </GlimpsePanel>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* PLATFORM STRIP */}
      <section className="bg-[#1A3A5C] text-white py-16">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-7 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-4">One engine. Configured to you.</h3>
          <p className="text-base text-[#D6E6F5] leading-relaxed max-w-[760px] mx-auto">
            The intelligence is universal. Your <b className="text-[#FFD55A] font-semibold">contract standards, roles, thresholds and playbooks</b> are configuration, so onboarding is a setup, not a rebuild.
          </p>
        </div>
      </section>

      {/* CLOSING */}
      <section className="text-center py-20 md:py-24" id="demo">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A3A5C] tracking-tight max-w-[18ch] mx-auto mb-4">
            Find your seat in the contract.
          </h2>
          <p className="text-base text-[#6B6B74] max-w-[50ch] mx-auto mb-7">
            Tell us how your team works. We'll show you exactly where Alfred fits, and what it catches on day one.
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
