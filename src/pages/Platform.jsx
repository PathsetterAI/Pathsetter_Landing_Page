import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

// Premium Inline SVGs / Icons mapped from product.html
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
function CountUp({ to, duration = 1200, suffix = '', decimals = 0, startTrigger = false }) {
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

// Helper: CountDown counts down numeric values on view triggers
function CountDown({ from, to, duration = 1400, startTrigger = false }) {
  const [value, setValue] = useState(from)
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
      const ease = 1 - Math.pow(1 - progress, 3)
      setValue(from + (to - from) * ease)
      if (progress < 1) {
        requestAnimationFrame(frame)
      } else {
        setValue(to)
      }
    }
    requestAnimationFrame(frame)
  }, [startTrigger, from, to, duration])

  return <span>{Math.round(value)}</span>
}

// Helper: TypewriterText simulates draft letters being compiled
function TypewriterText({ htmlContent, textContent, delay = 12, startTrigger = false }) {
  const [displayedText, setDisplayedText] = useState('')
  const [isFinished, setIsFinished] = useState(false)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!startTrigger || hasAnimated.current) return
    hasAnimated.current = true

    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setIsFinished(true)
      return
    }

    let i = 0
    const tick = () => {
      if (i <= textContent.length) {
        setDisplayedText(textContent.slice(0, i))
        i++
        setTimeout(tick, delay)
      } else {
        setIsFinished(true)
      }
    }
    tick()
  }, [startTrigger, textContent, delay])

  if (isFinished) {
    return <span dangerouslySetInnerHTML={{ __html: htmlContent }} />
  }

  return (
    <span>
      {displayedText}
      <span className="inline-block w-[2px] h-[1em] bg-[#2B5F96] ml-0.5 translate-y-[2px] animate-blink" />
    </span>
  )
}

// Helper: Intersection observed wrapper for Glass cards
function GlassPanel({ children }) {
  const [play, setPlay] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const currentRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlay(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 }
    )
    if (currentRef) {
      observer.observe(currentRef)
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className="bg-white border border-[#DDDDE6] rounded-2xl shadow-[0_26px_60px_-26px_rgba(26,58,92,0.28)] overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_32px_70px_-26px_rgba(26,58,92,0.36)]"
    >
      {children(play)}
    </div>
  )
}

// Helper: Staggered checkmarks reveal inside Stage 01 Bid Card
function Stage1Coverage({ play }) {
  const [doneItems, setDoneItems] = useState([false, false, false, false])

  useEffect(() => {
    if (!play) return
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      requestAnimationFrame(() => setDoneItems([true, true, true, true]))
      return
    }

    const items = [0, 1, 2, 3]
    const timers = items.map((i) =>
      setTimeout(() => {
        setDoneItems((prev) => {
          const next = [...prev]
          next[i] = true
          return next
        })
      }, 600 + i * 280)
    )
    return () => timers.forEach(clearTimeout)
  }, [play])

  const itemsText = [
    "Definitions vs. base standard",
    "Obligations · party → deadline mapping",
    "General conditions check",
    "Special conditions · Golden Principles check"
  ]

  return (
    <div className={`flex flex-col gap-2 mb-3.5 transition-all duration-[550ms] ease-out delay-[300ms] ${play ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
      {itemsText.map((text, idx) => (
        <div
          key={idx}
          className={`flex items-center gap-2.5 text-[11.5px] transition-colors duration-300 ${
            doneItems[idx] ? 'text-[#3A3A3F]' : 'text-[#6B6B74]'
          }`}
        >
          <span
            className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
              doneItems[idx] ? 'bg-[#145C35]' : 'bg-[#DDDDE6]'
            }`}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 20 20"
              fill="none"
              className={`inline-block align-middle transition-opacity duration-300 ${
                doneItems[idx] ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <path d="M5 10.5l3 3L15 6" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          {text}
        </div>
      ))}
    </div>
  )
}

// Helper: Replay-ready IntersectionObserver timeline beats component
function UsecaseScenario({ role, sectionName, beats }) {
  const [run, setRun] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const currentRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun(false)
          // Simple delay triggers CSS reflow and runs animations
          const timer = setTimeout(() => setRun(true), 50)
          return () => clearTimeout(timer)
        } else {
          setRun(false)
        }
      },
      { threshold: 0.45 }
    )
    if (currentRef) {
      observer.observe(currentRef)
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <div ref={ref} className="mt-10 bg-[#F4F4F7] border border-[#DDDDE6] rounded-2xl p-6 md:px-7">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-[34px] h-[34px] rounded-full bg-[#1A3A5C] grid place-items-center shrink-0">
          <svg viewBox="0 0 24 24" fill="none" className="w-[18px] h-[18px]">
            <path d="M4 17h16v2H4z" fill="#FFC20E"/>
            <path d="M6 17c0-3.5 2.4-6 6-6s6 2.5 6 6" stroke="#fff" strokeWidth="2" fill="none"/>
            <rect x="11" y="6" width="2" height="4" rx="1" fill="#FFC20E"/>
          </svg>
        </span>
        <span className="text-sm font-bold text-[#1A3A5C]">
          {role} <span className="text-[#6B6B74] font-normal">· {sectionName}</span>
        </span>
        <span className="ml-auto text-[10px] font-semibold tracking-wider uppercase text-[#145C35] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#145C35] animate-pulse" />
          Live use case
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
        {beats.map((beat, idx) => (
          <div
            key={idx}
            className={`relative pr-5 pl-0 transition-all duration-500 ease-out ${
              idx > 0 ? 'md:pl-5 md:border-l border-[#DDDDE6] border-t md:border-t-0 pt-4 md:pt-0' : ''
            } ${
              run ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[10px]'
            }`}
            style={{ transitionDelay: `${idx * 700}ms` }}
          >
            <span
              className={`inline-block text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded mb-2 ${
                idx === 0
                  ? 'bg-white border border-[#DDDDE6] text-[#6B6B74]'
                  : idx === 1
                  ? 'bg-[#FFC20E] text-[#111113]'
                  : 'bg-[#E4F3EC] text-[#145C35]'
              }`}
            >
              {beat.label}
            </span>
            <div className="text-xs md:text-[13px] leading-relaxed text-[#3A3A3F]" dangerouslySetInnerHTML={{ __html: beat.content }} />
          </div>
        ))}
      </div>
    </div>
  )
}

// Staged Bid visual: upload → Alfred reading → risk dashboard reveal
function BidVisual({ play }) {
  const [phase, setPhase] = useState('idle')
  const run = useRef(false)

  useEffect(() => {
    if (!play || run.current) return
    run.current = true

    const reduce =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setPhase('done')
      return
    }

    setPhase('upload')
    const t1 = setTimeout(() => setPhase('reading'), 2000)
    const t2 = setTimeout(() => setPhase('done'), 5000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [play])

  const headerStatus = {
    idle: { dot: 'bg-[#5B8EC4]', title: 'Risk Analysis Engine', sub: 'Shirawta-EPC · tender.pdf', scanning: false },
    upload: { dot: 'bg-[#5B8EC4]', title: 'Ingesting document', sub: 'Shirawta-EPC · tender.pdf', scanning: false },
    reading: { dot: 'bg-[#FFC20E] animate-livedot', title: 'Alfred is reading', sub: 'Shirawta-EPC · tender.pdf', scanning: true },
    done: { dot: 'bg-[#145C35] animate-livedot', title: 'Risk Analysis Engine', sub: 'Shirawta-EPC · tender.pdf', scanning: true }
  }[phase]

  return (
    <div className="p-4">
      {/* Shared header */}
      <div className="relative overflow-hidden flex items-center gap-2 px-4 py-3 bg-[#F4F4F7] border-b border-[#DDDDE6] text-[11.5px] font-semibold text-[#3A3A3F] -mx-4 -mt-4 mb-4">
        <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${headerStatus.dot}`} />
        {headerStatus.title}
        <span className="ml-auto text-[10px] font-semibold text-[#6B6B74]">{headerStatus.sub}</span>
        <span
          className={`absolute left-0 bottom-0 h-[2px] w-[34%] bg-gradient-to-r from-transparent to-[#2B5F96] via-[#2B5F96] pointer-events-none transition-opacity duration-300 ${
            headerStatus.scanning ? 'animate-scanx opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* PHASE 1 — Upload */}
      {phase === 'upload' && (
        <div className="animate-biddocin flex flex-col items-center justify-center min-h-[278px]">
          <div className="w-full max-w-[280px] border-2 border-dashed border-[#C9D6E5] rounded-xl bg-[#F8FBFE] px-4 py-6 flex flex-col items-center text-center">
            <span className="w-11 h-11 rounded-full bg-[#EDF4FB] grid place-items-center mb-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 15V5m0 0l-4 4m4-4l4 4" stroke="#2B5F96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 19h14" stroke="#2B5F96" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <div className="text-[12.5px] font-semibold text-[#3A3A3F]">Drop tender document</div>
            <div className="text-[11px] text-[#6B6B74] mt-0.5">PDF · up to 200 pages</div>

            <div className="w-full mt-4 flex items-center gap-2.5 p-2.5 bg-white border border-[#DDDDE6] rounded-lg text-left">
              <span className="w-7 h-8 rounded bg-[#FCECEA] border border-[#f3cfca] grid place-items-center shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M7 3h7l4 4v14H7z" stroke="#B52B1A" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M14 3v4h4" stroke="#B52B1A" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-[11.5px] font-semibold text-[#1A3A5C] truncate">Shirawta-EPC_tender.pdf</div>
                <div className="text-[10px] text-[#6B6B74]">38.4 MB</div>
              </div>
              <span className="text-[10px] font-bold text-[#2B5F96] shrink-0">100%</span>
            </div>
            <div className="w-full mt-2 h-1.5 rounded-full bg-[#E2E8F0] overflow-hidden">
              <div className="h-full bg-[#2B5F96] rounded-full animate-bidfill" />
            </div>
            <div className="text-[10.5px] text-[#6B6B74] mt-2">Uploading securely…</div>
          </div>
        </div>
      )}

      {/* PHASE 2 — Alfred is reading */}
      {phase === 'reading' && (
        <div className="animate-biddocin flex flex-col items-center justify-center min-h-[278px]">
          <div className="relative w-full max-w-[280px] h-[148px] border border-[#DDDDE6] rounded-xl bg-white overflow-hidden">
            <div className="absolute inset-0 px-4 py-3 flex flex-col gap-2">
              {[14, 11, 13, 9, 12].map((w, i) => (
                <div key={i} className="h-2 rounded bg-[#EAEAF0]" style={{ width: `${(w / 14) * 100}%` }} />
              ))}
            </div>
            <div className="absolute left-0 right-0 top-0 h-[26px] bg-gradient-to-b from-[#2B5F96]/25 to-transparent pointer-events-none animate-bidscan" />
          </div>

          <div className="mt-5 flex items-center gap-2 text-[13px] font-semibold text-[#1A3A5C]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="animate-bidspin">
              <circle cx="12" cy="12" r="9" stroke="#D6E6F5" strokeWidth="3" />
              <path d="M12 3a9 9 0 019 9" stroke="#2B5F96" strokeWidth="3" strokeLinecap="round" />
            </svg>
            Alfred is reading
            <span className="think-dot-1">.</span>
            <span className="think-dot-2">.</span>
            <span className="think-dot-3">.</span>
          </div>

          <div className="mt-3 w-full max-w-[280px] flex flex-col gap-1.5">
            {[
              'Parsing 380 pages',
              'Classifying against FIDIC',
              'Extracting obligations & clauses'
            ].map((txt, i) => (
              <div
                key={i}
                className="animate-bidfloat flex items-center gap-2 text-[11.5px] text-[#3A3A3F]"
                style={{ animationDelay: `${i * 0.45 + 0.2}s` }}
              >
                <span className="w-3.5 h-3.5 rounded-full bg-[#E4F3EC] grid place-items-center shrink-0">
                  <svg width="9" height="9" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10.5l3 3L15 6" stroke="#145C35" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {txt}
              </div>
            ))}
          </div>

          <div className="mt-3 w-full max-w-[280px] h-1.5 rounded-full bg-[#E2E8F0] overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#2B5F96] to-[#145C35] rounded-full animate-bidfill" />
          </div>
        </div>
      )}

      {/* PHASE 3 — Risk dashboard reveal */}
      {phase === 'done' && (
        <div className="animate-bidfloat">
          <div
            className={`flex items-center gap-2 text-[12.5px] font-semibold text-[#1A3A5C] bg-[#EDF4FB] border border-[#D6E6F5] px-3 py-2 rounded-lg mb-3.5 transition-all duration-[550ms] ease-out delay-[120ms] ${
              play ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <span>Classified</span>
            <span className="text-[#6B6B74] font-normal">, base standard detected</span>
            <span className="ml-auto text-[10px] font-bold text-white bg-[#2B5F96] px-2 py-0.5 rounded">FIDIC Silver Book</span>
          </div>
          <Stage1Coverage play={play} />
          <div className={`flex gap-3 p-3 border border-[#DDDDE6] border-l-[3px] border-l-[#B52B1A] rounded-lg mb-2 transition-all duration-[550ms] ease-out delay-[480ms] ${play ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <span className="text-[9.5px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded shrink-0 h-fit text-white bg-[#B52B1A]">Critical</span>
            <div>
              <div className="text-[12.5px] font-semibold text-[#111113] leading-snug">Uncapped liquidated damages</div>
              <div className="text-[11px] text-[#6B6B74] mt-0.5 leading-snug"><b>Remediation:</b> pre-bid query, request LD cap at 10% of contract value</div>
            </div>
          </div>
          <div className={`flex gap-3 p-3 border border-[#DDDDE6] border-l-[3px] border-l-[#B88500] rounded-lg mb-2 transition-all duration-[550ms] ease-out delay-[660ms] ${play ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <span className="text-[9.5px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded shrink-0 h-fit text-white bg-[#B88500]">Warning</span>
            <div>
              <div className="text-[12.5px] font-semibold text-[#111113] leading-snug">Steel grade differs: tender vs. tech spec</div>
              <div className="text-[11px] text-[#6B6B74] mt-0.5 leading-snug"><b>Remediation:</b> flag for clarification before pricing the BOQ</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Copilot-style Construction visual: user asks → Alfred streams a ghost
// suggestion that resolves into the live performance card
function ExecVisual({ play }) {
  const [phase, setPhase] = useState('ask')
  const [ghost, setGhost] = useState('')
  const run = useRef(false)

  const GHOST = "Pulling today's live performance for Zone 3 · piping…"

  useEffect(() => {
    if (!play || run.current) return
    run.current = true

    const reduce =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setPhase('card')
      setGhost(GHOST)
      return
    }

    setPhase('ask')
    const t1 = setTimeout(() => setPhase('stream'), 1500)
    return () => clearTimeout(t1)
  }, [play])

  useEffect(() => {
    if (phase !== 'stream') return
    const reduce =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setGhost(GHOST)
      setPhase('card')
      return
    }
    let i = 0
    let timer
    const tick = () => {
      if (i <= GHOST.length) {
        setGhost(GHOST.slice(0, i))
        i++
        timer = setTimeout(tick, 20)
      } else {
        timer = setTimeout(() => setPhase('card'), 420)
      }
    }
    tick()
    return () => clearTimeout(timer)
  }, [phase])

  return (
    <div className="p-4">
      {/* Shared chat header */}
      <div className="relative overflow-hidden flex items-center gap-2 px-4 py-3 bg-[#F4F4F7] border-b border-[#DDDDE6] text-[11.5px] font-semibold text-[#1A3A5C] -mx-4 -mt-4 mb-4">
        <span className="w-[26px] h-[26px] rounded-full bg-[#1A3A5C] grid place-items-center shrink-0">
          <IconHh />
        </span>
        Alfred
        <span className="text-[#6B6B74] font-normal">· Copilot</span>
        <span className="ml-auto text-[10px] font-semibold text-[#145C35] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#145C35] animate-livedot" /> Online
        </span>
      </div>

      {/* Chat stream */}
      <div className="flex flex-col gap-3 min-h-[278px]">
        {/* User message */}
        <div className="animate-bidfloat flex items-end gap-2 justify-end">
          <div className="max-w-[78%] bg-[#2B5F96] text-white text-[12.5px] leading-snug rounded-2xl rounded-br-sm px-3.5 py-2.5">
            How's the site performing today?
          </div>
          <span className="w-7 h-7 rounded-full bg-[#E7ECF2] border border-[#DDDDE6] grid place-items-center shrink-0 text-[#6B6B74] text-[11px] font-bold">You</span>
        </div>

        {/* Alfred typing indicator (ask phase) */}
        {phase === 'ask' && (
          <div className="animate-bidfloat flex items-end gap-2">
            <span className="w-7 h-7 rounded-full bg-[#1A3A5C] grid place-items-center shrink-0">
              <IconHh />
            </span>
            <div className="flex items-center gap-1 bg-white border border-[#DDDDE6] rounded-2xl rounded-bl-sm px-3.5 py-3">
              <span className="think-dot-1 text-[#6B6B74] text-lg leading-none">•</span>
              <span className="think-dot-2 text-[#6B6B74] text-lg leading-none">•</span>
              <span className="think-dot-3 text-[#6B6B74] text-lg leading-none">•</span>
            </div>
          </div>
        )}

        {/* Alfred streaming ghost suggestion (copilot) */}
        {phase === 'stream' && (
          <div className="animate-bidfloat flex items-start gap-2">
            <span className="copilot-badge w-7 h-7 rounded-full bg-[#EDF4FB] border border-[#D6E6F5] grid place-items-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" fill="#2B5F96" />
                <path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8z" fill="#FFC20E" />
              </svg>
            </span>
            <div className="flex-1 bg-[#F7FAFD] border border-[#DCE8F3] rounded-2xl rounded-bl-sm px-3.5 py-3">
              <div className="copilot-ghost text-[12.5px] font-medium leading-relaxed">
                {ghost}
                <span className="copilot-caret" />
              </div>
              <div className="mt-2 flex items-center gap-2 text-[10px] font-semibold text-[#6B6B74]">
                <span className="text-[#2B5F96]">Alfred suggestion</span>
                <span className="text-[#ADADB8]">· press Tab to accept</span>
              </div>
            </div>
          </div>
        )}

        {/* Alfred resolved performance card */}
        {phase === 'card' && (
          <div className="animate-bidfloat flex items-end gap-2">
            <span className="w-7 h-7 rounded-full bg-[#1A3A5C] grid place-items-center shrink-0">
              <IconHh />
            </span>
            <div className="flex-1 bg-white border border-[#DDDDE6] rounded-2xl rounded-bl-sm p-3.5">
              <div className="flex items-center gap-2 text-[11px] font-semibold text-[#1A3A5C]">
                <span>Today's performance</span>
                <span className="ml-auto text-[10px] font-semibold text-[#6B6B74]">Zone 3 · piping</span>
              </div>
              <div className="flex gap-2.5 mt-2.5">
                <div className="flex-1 border border-[#DDDDE6] rounded-lg p-2.5 bg-white">
                  <div className="text-[9px] font-semibold tracking-wider uppercase text-[#6B6B74]">SPI</div>
                  <div className="text-xl font-extrabold tracking-tight mt-0.5 tabular-nums text-[#B52B1A]">
                    <CountUp to={0.72} decimals={2} startTrigger={play} />
                  </div>
                </div>
                <div className="flex-1 border border-[#DDDDE6] rounded-lg p-2.5 bg-white">
                  <div className="text-[9px] font-semibold tracking-wider uppercase text-[#6B6B74]">Variance</div>
                  <div className="text-xl font-extrabold tracking-tight mt-0.5 tabular-nums text-[#B52B1A]">
                    -&nbsp;<CountUp to={21} startTrigger={play} />d
                  </div>
                </div>
                <div className="flex-1 border border-[#DDDDE6] rounded-lg p-2.5 bg-white">
                  <div className="text-[9px] font-semibold tracking-wider uppercase text-[#6B6B74]">Invoice-ready</div>
                  <div className="text-xl font-extrabold tracking-tight mt-0.5 tabular-nums text-[#1A3A5C]">
                    <CountUp to={64} suffix="%" startTrigger={play} />
                  </div>
                </div>
              </div>
              <svg className="w-full h-[68px] border border-[#DDDDE6] rounded-lg bg-white mt-2.5" viewBox="0 0 280 96" preserveAspectRatio="none">
                <path className="stroke-[#ADADB8] stroke-[2px] fill-none" strokeDasharray="4 4" d="M4,88 C70,70 120,40 200,20 L276,8" />
                <path
                  className="stroke-[#2B5F96] stroke-[2.5px] fill-none transition-all duration-[1600ms] ease-out"
                  strokeDasharray="260"
                  strokeDashoffset={play ? 0 : 260}
                  d="M4,88 C70,78 120,64 200,52 L276,44"
                />
              </svg>
              <div className="flex items-center gap-2.5 p-2.5 mt-2.5 bg-[#FFF6D6] border border-[#f0dfa3] rounded-lg">
                <div className="text-[11px] text-[#6b5000] leading-snug"><b>Zone 3 is 21 days behind</b>, threatens Milestone 7.</div>
                <span className={`ml-auto text-[10.5px] font-semibold text-white bg-[#2B5F96] px-2.5 py-1.5 rounded-md whitespace-nowrap cursor-pointer hover:bg-[#1A3A5C] ${play ? 'animate-nudge' : ''}`}>Promote to claim →</span>
              </div>
            </div>
          </div>
        )}

        {/* Input bar */}
        <div className="mt-auto flex items-center gap-2 border border-[#DDDDE6] rounded-full bg-white px-3.5 py-2.5">
          <span className="text-[11.5px] text-[#9AA1AC] flex-1 truncate">Ask Alfred about the project…</span>
          <span className="w-6 h-6 rounded-full bg-[#2B5F96] grid place-items-center shrink-0">
            <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
              <path d="M3 10l13-6-6 13-2-5z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

const stageList = [
  { id: 'bid', label: 'Bid', num: '01' },
  { id: 'construction', label: 'Construction', num: '02' },
  { id: 'closeout', label: 'Closeout', num: '03' }
]

function Platform() {
  const navigate = useNavigate()
  const [activeStageIdx, setActiveStageIdx] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Sticky subnavigation scroll-spy
  useEffect(() => {
    const stages = document.querySelectorAll('.stage')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = stageList.findIndex((s) => s.id === entry.target.id)
            if (idx !== -1) setActiveStageIdx(idx)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    stages.forEach((stage) => observer.observe(stage))
    return () => {
      stages.forEach((stage) => observer.unobserve(stage))
    }
  }, [])

  const handleSubnavClick = (id, idx) => {
    setActiveStageIdx(idx)
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-white text-[#3A3A3F] font-sans antialiased">
      <SEO
        title="Product · Bid to closeout"
        description="One platform. Bid to closeout. Alfred reads your contracts, specs, schedule and site data together, and flags what can hurt the project while there's still time to act."
      />
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-24 pb-12 sm:pt-28 md:pt-32 md:pb-16">
        <div className="absolute -top-40 -right-32 w-[520px] h-[520px] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(255,194,14,0.1), transparent 62%)' }} />
        <div className="max-w-[1180px] mx-auto px-4 sm:px-7 relative z-10">
          <div className="max-w-[820px]">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#B88500] uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#FFC20E]" />
              Product
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold leading-[1.1] tracking-tight text-[#1A3A5C] mb-4">
              One platform. Bid to closeout.
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-[#6B6B74] mt-5">
              Alfred reads your contracts, specs, schedule and site data <strong className="text-[#3A3A3F] font-semibold">together</strong>, and flags what can hurt the project while there's still time to act. Four stages of the contract. One intelligence layer.
            </p>
          </div>
        </div>
      </section>

      {/* STAGE NAV */}
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="flex gap-1 border-b border-[#DDDDE6] overflow-x-auto relative [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="tablist">
          {stageList.map((stage, idx) => {
            const active = activeStageIdx === idx
            return (
              <button
                key={stage.id}
                role="tab"
                onClick={() => handleSubnavClick(stage.id, idx)}
                className={`relative bg-transparent border-none cursor-pointer px-[18px] py-4 text-sm font-semibold whitespace-nowrap transition-colors duration-200 outline-none ${
                  active ? 'text-[#1A3A5C]' : 'text-[#6B6B74] hover:text-[#3A3A3F]'
                }`}
              >
                <span className="relative inline-flex items-center gap-1.5">
                  <span className="text-xs font-bold tabular-nums text-inherit">{stage.num}</span>
                  <span>{stage.label}</span>
                  {active && (
                    <span className="absolute left-0 right-0 bottom-[-17px] h-0.5 bg-[#FFC20E] transition-all pointer-events-none" />
                  )}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* STAGE 01 — BID */}
      <section className="stage py-16 md:py-20 border-b border-[#DDDDE6] scroll-mt-[80px]" id="bid">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
          <div className="max-w-[720px] mb-10">
            <span className="inline-flex items-center gap-2 text-[11.5px] font-bold tracking-wider uppercase text-[#2B5F96] bg-[#EDF4FB] border border-[#D6E6F5] px-3 py-1.5 rounded-full mb-4">
              <span className="w-2 h-2 rounded-sm bg-[#FFC20E]" />
              Stage 01 · Bid
            </span>
            <h2 className="text-3xl md:text-[34px] font-extrabold leading-tight text-[#1A3A5C]">
              Seamless Bid Management
            </h2>
            <p className="text-lg md:text-xl font-medium text-[#3A3A3F] mt-3 leading-snug">
              Catch the onerous clause before you price the bid.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.08fr] gap-12 lg:gap-14 items-center">
            <div className="flex flex-col">
              <div className="text-[11px] font-bold tracking-wider uppercase text-[#6B6B74] mb-3.5">
                What it does
              </div>
              <ul className="list-none flex flex-col gap-3 mb-8">
                <li className="flex gap-3 text-[14.5px] text-[#3A3A3F] leading-normal items-start">
                  <IconTk /> Classifies the tender against FIDIC, CPWD, or your own standard.
                </li>
                <li className="flex gap-3 text-[14.5px] text-[#3A3A3F] leading-normal items-start">
                  <IconTk /> Runs a fixed risk sequence: definitions, obligations, general &amp; special conditions.
                </li>
                <li className="flex gap-3 text-[14.5px] text-[#3A3A3F] leading-normal items-start">
                  <IconTk /> Surfaces every risky clause with a remediation course attached.
                </li>
                <li className="flex gap-3 text-[14.5px] text-[#3A3A3F] leading-normal items-start">
                  <IconTk /> Generates pre-bid queries and a go/no-go briefing report.
                </li>
              </ul>
              <div className="text-[11px] font-bold tracking-wider uppercase text-[#6B6B74] mb-3.5">
                Outcomes
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#145C35] bg-[#E4F3EC] border border-[#cbe6d7] px-3 py-1.5 rounded-lg">
                  <IconAr /> Fewer missed E&amp;Os
                </span>
                <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#145C35] bg-[#E4F3EC] border border-[#cbe6d7] px-3 py-1.5 rounded-lg">
                  <IconAr /> Faster tender → go/no-go
                </span>
                <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#145C35] bg-[#E4F3EC] border border-[#cbe6d7] px-3 py-1.5 rounded-lg">
                  <IconAr /> Defensible risk position
                </span>
              </div>
              <div className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-[#1A3A5C]">
                <span className="w-[26px] h-[26px] rounded-full bg-[#F4F4F7] border border-[#DDDDE6] grid place-items-center shrink-0">
                  <IconHh />
                </span>
                For: <span className="text-[#6B6B74] font-medium">Bid &amp; contracts teams</span>
              </div>
            </div>
            <div className="stage-visual">
              <GlassPanel panelType="bid">
                {(play) => <BidVisual play={play} />}
              </GlassPanel>
            </div>
          </div>

          <UsecaseScenario
            role="Contracts Lead"
            sectionName="EPC bid team"
            beats={[
              { label: "Trigger", content: "A <b>380-page EPC tender</b> lands. Five days to submit." },
              { label: "Alfred", content: "Classifies it <b>Silver Book</b>, flags an uncapped-LD clause and a steel-grade mismatch, drafts <b>6 pre-bid queries</b>." },
              { label: "Outcome", content: "Two days of manual reading → <b>40 minutes</b>. The bid goes in with the risk priced, not discovered later." }
            ]}
          />
        </div>
      </section>

      {/* STAGE 02 — CONSTRUCTION */}
      <section className="stage py-16 md:py-20 border-b border-[#DDDDE6] scroll-mt-[80px]" id="construction">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
          <div className="max-w-[720px] mb-10">
            <span className="inline-flex items-center gap-2 text-[11.5px] font-bold tracking-wider uppercase text-[#2B5F96] bg-[#EDF4FB] border border-[#D6E6F5] px-3 py-1.5 rounded-full mb-4">
              <span className="w-2 h-2 rounded-sm bg-[#FFC20E]" />
              Stage 02 · Construction
            </span>
            <h2 className="text-3xl md:text-[34px] font-extrabold leading-tight text-[#1A3A5C]">
              Contract &amp; Schedule Management
            </h2>
            <p className="text-lg md:text-xl font-medium text-[#3A3A3F] mt-3 leading-snug">
              Every obligation owned. Every slip caught, against the contract and the schedule.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.08fr] gap-12 lg:gap-14 items-center">
            <div className="stage-visual lg:order-first">
              <GlassPanel panelType="exec">
                {(play) => <ExecVisual play={play} />}
              </GlassPanel>
            </div>
            <div className="flex flex-col">
              <div className="text-[11px] font-bold tracking-wider uppercase text-[#6B6B74] mb-3.5">
                What it does
              </div>
              <ul className="list-none flex flex-col gap-3 mb-8">
                <li className="flex gap-3 text-[14.5px] text-[#3A3A3F] leading-normal items-start">
                  <IconTk /> Pulls every contract obligation into an owned, deadline-tracked register.
                </li>
                <li className="flex gap-3 text-[14.5px] text-[#3A3A3F] leading-normal items-start">
                  <IconTk /> Cross-checks specifications against the contract for anomalies.
                </li>
                <li className="flex gap-3 text-[14.5px] text-[#3A3A3F] leading-normal items-start">
                  <IconTk /> Auto-computes progress, SPI, variance and invoice-readiness from daily site data.
                </li>
                <li className="flex gap-3 text-[14.5px] text-[#3A3A3F] leading-normal items-start">
                  <IconTk /> Alerts the right owner the moment an activity threatens a milestone.
                </li>
                <li className="flex gap-3 text-[14.5px] text-[#3A3A3F] leading-normal items-start">
                  <IconTk /> Promotes any finding into a claim, evidence carried with it.
                </li>
              </ul>
              <div className="text-[11px] font-bold tracking-wider uppercase text-[#6B6B74] mb-3.5">
                Outcomes
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#145C35] bg-[#E4F3EC] border border-[#cbe6d7] px-3 py-1.5 rounded-lg">
                  <IconAr /> Nothing slips at handover
                </span>
                <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#145C35] bg-[#E4F3EC] border border-[#cbe6d7] px-3 py-1.5 rounded-lg">
                  <IconAr /> Risk caught before it's a claim
                </span>
                <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#145C35] bg-[#E4F3EC] border border-[#cbe6d7] px-3 py-1.5 rounded-lg">
                  <IconAr /> Every number cited
                </span>
              </div>
              <div className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-[#1A3A5C]">
                <span className="w-[26px] h-[26px] rounded-full bg-[#F4F4F7] border border-[#DDDDE6] grid place-items-center shrink-0">
                  <IconHh />
                </span>
                For: <span className="text-[#6B6B74] font-medium">Planning, PMs &amp; discipline engineers</span>
              </div>
            </div>
          </div>

          <UsecaseScenario
            role="Lead Planner"
            sectionName="weekly review"
            beats={[
              { label: "Trigger", content: "Zone 3 piping slips <b>three weeks</b> behind plan. It's logged inside the daily reports." },
              { label: "Alfred", content: "Flags it against <b>Milestone 7</b>, links the schedule variance, and promotes it to a claim with the evidence attached." },
              { label: "Outcome", content: "The commercial team gets a <b>grounded claim</b>, not a hunch, while the notice window is still open." }
            ]}
          />
        </div>
      </section>

      {/* STAGE 03 — CLOSEOUT */}
      <section className="stage py-16 md:py-20 border-b border-[#DDDDE6] scroll-mt-[80px]" id="closeout">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
          <div className="max-w-[720px] mb-10">
            <span className="inline-flex items-center gap-2 text-[11.5px] font-bold tracking-wider uppercase text-[#2B5F96] bg-[#EDF4FB] border border-[#D6E6F5] px-3 py-1.5 rounded-full mb-4">
              <span className="w-2 h-2 rounded-sm bg-[#FFC20E]" />
              Stage 03 · Closeout
            </span>
            <h2 className="text-3xl md:text-[34px] font-extrabold leading-tight text-[#1A3A5C]">
              Claims Management
            </h2>
            <p className="text-lg md:text-xl font-medium text-[#3A3A3F] mt-3 leading-snug">
              Win the claim on the record, not on memory.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.08fr] gap-12 lg:gap-14 items-center">
            <div className="flex flex-col">
              <div className="text-[11px] font-bold tracking-wider uppercase text-[#6B6B74] mb-3.5">
                What it does
              </div>
              <ul className="list-none flex flex-col gap-3 mb-8">
                <li className="flex gap-3 text-[14.5px] text-[#3A3A3F] leading-normal items-start">
                  <IconTk /> Tracks obligations, notice periods and time-bar deadlines.
                </li>
                <li className="flex gap-3 text-[14.5px] text-[#3A3A3F] leading-normal items-start">
                  <IconTk /> Drafts EOT, RFI and claim letters grounded in DPR + contract clauses.
                </li>
                <li className="flex gap-3 text-[14.5px] text-[#3A3A3F] leading-normal items-start">
                  <IconTk /> Logs every promoted finding and draft to the claims register.
                </li>
                <li className="flex gap-3 text-[14.5px] text-[#3A3A3F] leading-normal items-start">
                  <IconTk /> Keeps the send button human, nothing goes out unreviewed.
                </li>
              </ul>
              <div className="text-[11px] font-bold tracking-wider uppercase text-[#6B6B74] mb-3.5">
                Outcomes
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#145C35] bg-[#E4F3EC] border border-[#cbe6d7] px-3 py-1.5 rounded-lg">
                  <IconAr /> No claim lost to a missed notice
                </span>
                <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#145C35] bg-[#E4F3EC] border border-[#cbe6d7] px-3 py-1.5 rounded-lg">
                  <IconAr /> Drafting days → minutes
                </span>
                <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#145C35] bg-[#E4F3EC] border border-[#cbe6d7] px-3 py-1.5 rounded-lg">
                  <IconAr /> A full audit trail
                </span>
              </div>
              <div className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-[#1A3A5C]">
                <span className="w-[26px] h-[26px] rounded-full bg-[#F4F4F7] border border-[#DDDDE6] grid place-items-center shrink-0">
                  <IconHh />
                </span>
                For: <span className="text-[#6B6B74] font-medium">Commercial &amp; contracts leads</span>
              </div>
            </div>
            <div className="stage-visual">
              <GlassPanel panelType="closeout">
                {(play) => (
                  <div className="p-4">
                    <div className="relative overflow-hidden flex items-center gap-2 px-4 py-3 bg-[#F4F4F7] border-b border-[#DDDDE6] text-[11.5px] font-semibold text-[#3A3A3F] -mx-4 -mt-4 mb-4">
                      <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${play ? 'bg-[#145C35] animate-livedot' : 'bg-[#5B8EC4]'}`} />
                      Claims Register · EOT-014
                      <span className="ml-auto text-[10px] font-semibold text-[#6B6B74]">v1 · auto-saved</span>
                      <span className={`absolute left-0 bottom-0 h-[2px] w-[34%] bg-gradient-to-r from-transparent to-[#2B5F96] via-[#2B5F96] pointer-events-none transition-opacity duration-300 ${play ? 'animate-scanx opacity-100' : 'opacity-0'}`} />
                    </div>
                    <div className={`flex items-center gap-2 text-xs font-semibold text-[#B52B1A] bg-[#FCECEA] border border-[#f3cfca] px-3 py-2 rounded-lg mb-3 transition-all duration-[550ms] ease-out delay-[120ms] ${play ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                      <span>Notice window closing:</span>
                      <span className="text-base font-extrabold tabular-nums">
                        <CountDown from={15} to={12} startTrigger={play} />
                      </span>
                      <span>days left</span>
                    </div>
                    <div className={`border border-[#DDDDE6] rounded-xl p-3.5 transition-all duration-[550ms] ease-out delay-[300ms] ${play ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                      <div className="text-[12.5px] font-bold text-[#1A3A5C] mb-1.5">Notice of Delay &amp; Extension of Time</div>
                      <p className="text-[11.5px] leading-relaxed text-[#3A3A3F] min-h-[64px] mb-0">
                        <TypewriterText
                          startTrigger={play}
                          textContent="We hereby give notice, within the 28-day period required under Clause 20.1, of a delay event arising from Change Order #14 (Zone 3 piping)."
                          htmlContent='We hereby give notice, <span class="bg-[#FFF6D6] px-1 py-0.5 rounded text-[#111113]">within the 28-day period required under Clause 20.1</span>, of a delay event arising from Change Order #14 (Zone 3 piping).'
                        />
                      </p>
                      <div className="flex items-center gap-2.5 mt-3 pt-3 border-t border-[#DDDDE6]">
                        <span className="text-[10px] font-semibold text-[#B88500] bg-[#FFF6D6] px-2 py-1 rounded">Review-tier</span>
                        <span className="text-[11px] font-semibold text-white bg-[#2B5F96] px-3 py-1.5 rounded-md cursor-pointer hover:bg-[#1A3A5C]">Approve &amp; send</span>
                        <span className="text-[10px] text-[#ADADB8] ml-auto">Alfred never auto-sends</span>
                      </div>
                    </div>
                  </div>
                )}
              </GlassPanel>
            </div>
          </div>

          <UsecaseScenario
            role="Commercial Lead"
            sectionName="active dispute"
            beats={[
              { label: "Trigger", content: "A variation triggers an <b>EOT entitlement</b>. The 28-day notice clock is running." },
              { label: "Alfred", content: "Drafts the letter grounded in the change order, <b>Clause 20.1</b> and the site record, and logs it to the register." },
              { label: "Outcome", content: "The notice goes out <b>in time</b>. When it's contested, the claim stands on evidence, not recollection." }
            ]}
          />
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

      {/* CLOSING CTA */}
      <section className="text-center py-20 md:py-24" id="demo">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A3A5C] tracking-tight max-w-[18ch] mx-auto mb-4">
            See Alfred work your next contract.
          </h2>
          <p className="text-base text-[#6B6B74] max-w-[50ch] mx-auto mb-7">
            Bring a live tender or an ongoing project. We'll show you every risk Alfred surfaces, at every stage.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button
              onClick={() => navigate('/demo')}
              className="bg-[#2B5F96] hover:bg-[#1A3A5C] text-white py-3 px-6 rounded-lg font-semibold text-sm transition-colors cursor-pointer"
            >
              Schedule a Demo
            </button>
            <button
              onClick={() => navigate('/solutions')}
              className="bg-transparent border border-[#DDDDE6] text-[#1A3A5C] hover:bg-[#EDF4FB] hover:border-[#2B5F96] py-3 px-6 rounded-lg font-semibold text-sm transition-colors cursor-pointer"
            >
              Explore solutions
            </button>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}

export default Platform
