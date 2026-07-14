import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import heroBg from '../assets/bg.png'
import alfredLogo from '../assets/newlogo alfred.svg'

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

gsap.registerPlugin(ScrollTrigger, SplitText)

// ─── SVG Icon Components ───────────────────────────────────────────────────────
const HardHatIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
    <path d="M10 10V5a2 2 0 1 1 4 0v5" />
    <path d="M6 14v-3a6 6 0 0 1 12 0v3" />
  </svg>
)

const FileSearchIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <circle cx="11" cy="15" r="2" />
    <path d="m13.5 17.5 1.5 1.5" />
  </svg>
)

const CalendarIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="m9 16 2 2 4-4" />
  </svg>
)

const AlertTriangleIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
)

const FileTextIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
)

const InfoIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
)

// ─── Alfred Q&A Data ───────────────────────────────────────────────────────────
const PERSONAS = [
  { id: 'site', label: 'Site Engineer', Icon: HardHatIcon, color: '#145C35', bg: '#E4F3EC' },
  { id: 'bid', label: 'Bid Team', Icon: FileSearchIcon, color: '#B52B1A', bg: '#FCECEA' },
  { id: 'plan', label: 'Planning Team', Icon: CalendarIcon, color: '#2B5F96', bg: '#EDF4FB' },
]

const QA_DATA = {
  site: {
    question: "What's the curing period for M40 raft concrete, and are we compliant at Zone 4?",
    thinking: "Reading spec §03300 and Zone 4 DPR entries…",
    typedText: "Spec Section 03300 requires a minimum 7-day moist curing period for M40-grade concrete after casting, before formwork strike or loading.",
    blocks: [
      {
        type: 'list',
        title: 'Zone 4 status',
        items: ['Raft cast on 2 Jul, 14:20 - DPR entry #482', 'Today is 6 Jul → 4 days elapsed', '3 days remaining before curing is complete'],
      },
      {
        type: 'citations',
        items: ['Spec §03300 - Concrete Curing', 'DPR #482 - Casting Record', 'Zone 4 Raft - QA Checklist'],
      },
      {
        type: 'verdict',
        variant: 'warn',
        Icon: AlertTriangleIcon,
        label: 'Action needed',
        text: 'Do not strike formwork or apply load at Zone 4 until curing completes on 9 Jul.',
      },
    ],
  },
  bid: {
    question: "Any conflicts between the tender BOQ and technical specs for structural steel grade?",
    thinking: "Comparing tender BOQ against technical specification…",
    typedText: "The Tender BOQ (Item 4.12) specifies reinforcement as Fe500. The Technical Spec (Rev C, §5.2) requires Fe550D for all structural elements above grade.",
    blocks: [
      {
        type: 'table',
        title: 'Document comparison',
        rows: [
          { doc: 'Tender BOQ - Item 4.12', grade: 'Fe500', highlight: false },
          { doc: 'Tech Spec Rev C - §5.2', grade: 'Fe550D', highlight: true },
        ],
      },
      {
        type: 'list',
        title: 'Why it matters',
        items: ['Fe550D typically costs 8-12% more than Fe500', 'Pricing at Fe500 but supplying Fe550D shifts margin gap to contractor', 'A classic tender-vs-spec anomaly bid teams miss under deadline'],
      },
      {
        type: 'verdict',
        variant: 'crit',
        Icon: AlertTriangleIcon,
        label: 'Recommend before submission',
        text: 'Raise a pre-bid query to the owner; do not price the bid on the tender BOQ grade alone.',
      },
    ],
  },
  plan: {
    question: "If Zone 3 piping slips another 10 days, what's our LD exposure under Clause 12?",
    thinking: "Reading Clause 12, Zone 3 schedule variance, and the open claim…",
    typedText: "Clause 12.2 sets liquidated damages at 0.05% of contract value per day of delay, capped at 10% of contract value.",
    blocks: [
      {
        type: 'calc',
        title: 'Exposure if uncapped',
        rows: [
          { label: 'Current delay 21 days + new slip 10 days', value: '31 days' },
          { label: '31 days × 0.05%/day', value: '1.55%' },
          { label: '1.55% × $42,000,000 contract value', value: null },
        ],
        result: { label: 'Exposure', value: '≈ $651,000' },
      },
      {
        type: 'citations',
        items: ['Clause 12.2 - Liquidated Damages', 'Zone 3 Schedule - baseline vs. actual', 'EOT-014 - draft in review'],
      },
      {
        type: 'verdict',
        variant: 'info',
        Icon: InfoIcon,
        label: 'Contingent exposure',
        text: 'LD exposure depends on the EOT outcome; recommend expediting notice under Clause 20.1 (in progress).',
      },
    ],
  },
}

const VERDICT_STYLES = {
  warn: { bg: '#FFF6D6', border: '#f0dfa3', labelColor: '#B88500', textColor: '#6b5000', iconBg: '#B88500' },
  crit: { bg: '#FCECEA', border: '#f0d2cd', labelColor: '#B52B1A', textColor: '#7a2015', iconBg: '#B52B1A' },
  info: { bg: '#EDF4FB', border: '#D6E6F5', labelColor: '#2B5F96', textColor: '#1A3A5C', iconBg: '#2B5F96' },
}

// ─── Alfred Panel Component (Expanded Size and Zero Scrollbar) ────────────────
function AlfredPanel({ startTrigger }) {
  const [activeTab, setActiveTab] = useState('site')
  const [typedQuestion, setTypedQuestion] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [visibleBlocks, setVisibleBlocks] = useState(0)
  const [fadeState, setFadeState] = useState('active') // 'active' | 'exit' | 'enter-prep'

  const typewriterRef = useRef(null)
  const blockTimers = useRef([])
  const scrollRef = useRef(null)

  const clearAll = useCallback(() => {
    clearInterval(typewriterRef.current)
    blockTimers.current.forEach(clearTimeout)
    blockTimers.current = []
  }, [])

  const changeTabWithTransition = useCallback((nextTabId) => {
    setFadeState('exit')

    const exitTimer = setTimeout(() => {
      setActiveTab(nextTabId)
    }, 450)

    blockTimers.current.push(exitTimer)
  }, [])

  const playQA = useCallback((tabId) => {
    clearAll()
    setTypedQuestion('')
    setTypedText('')
    setIsThinking(false)
    setVisibleBlocks(0)

    // Start with a brief hidden state at bottom, then transition in
    setFadeState('enter-prep')
    const enterTimer = setTimeout(() => {
      setFadeState('active')
    }, 40)
    blockTimers.current.push(enterTimer)

    // Instantly scroll back to top so new question is visible
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0
    }

    const qa = QA_DATA[tabId]
    const questionText = qa.question
    const fullText = qa.typedText

    // Step 1: Type the user question
    let qIndex = 0
    const qInterval = setInterval(() => {
      qIndex++
      setTypedQuestion(questionText.slice(0, qIndex))
      if (qIndex >= questionText.length) {
        clearInterval(qInterval)

        // Step 2: Show Thinking state
        setIsThinking(true)
        const thinkTimer = setTimeout(() => {
          setIsThinking(false)

          // Step 3: Type Alfred's response
          let aIndex = 0
          typewriterRef.current = setInterval(() => {
            aIndex++
            setTypedText(fullText.slice(0, aIndex))
            if (aIndex >= fullText.length) {
              clearInterval(typewriterRef.current)

              // Step 4: Reveal blocks staggered slower
              qa.blocks.forEach((_, idx) => {
                const t = setTimeout(() => setVisibleBlocks(v => v + 1), idx * 700)
                blockTimers.current.push(t)
              })
            }
          }, 24)
        }, 1200)
        blockTimers.current.push(thinkTimer)
      }
    }, 18)
    typewriterRef.current = qInterval
  }, [clearAll])

  // Coordinate the typing animation with active Tab cycling
  useEffect(() => {
    if (startTrigger) {
      playQA(activeTab)
    }
    return clearAll
  }, [startTrigger, activeTab, playQA, clearAll])

  const qa = QA_DATA[activeTab]
  const persona = PERSONAS.find(p => p.id === activeTab)

  // Auto-cycle personas once all blocks are revealed
  useEffect(() => {
    if (!startTrigger || visibleBlocks !== qa.blocks.length) return

    const cycleTimer = setTimeout(() => {
      const currentIndex = PERSONAS.findIndex(p => p.id === activeTab)
      const nextIndex = (currentIndex + 1) % PERSONAS.length
      const nextTabId = PERSONAS[nextIndex].id
      changeTabWithTransition(nextTabId)
    }, 4000) // Give enough time to read before cycling (reduced from 8s)

    return () => clearTimeout(cycleTimer)
  }, [startTrigger, visibleBlocks, activeTab, qa.blocks.length, changeTabWithTransition])

  // Auto-scroll down ONLY when new blocks appear — not during typing
  useEffect(() => {
    if (!visibleBlocks) return
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }, [visibleBlocks])

  // Transition styling based on fadeState
  let transitionStyle = {}
  if (fadeState === 'active') {
    transitionStyle = {
      opacity: 1,
      transform: 'translateY(0)',
      transition: 'opacity 750ms cubic-bezier(0.16, 1, 0.3, 1), transform 750ms cubic-bezier(0.16, 1, 0.3, 1)',
    }
  } else if (fadeState === 'exit') {
    transitionStyle = {
      opacity: 0,
      transform: 'translateY(-16px)',
      transition: 'opacity 400ms cubic-bezier(0.7, 0, 0.84, 0), transform 400ms cubic-bezier(0.7, 0, 0.84, 0)',
    }
  } else if (fadeState === 'enter-prep') {
    transitionStyle = {
      opacity: 0,
      transform: 'translateY(16px)',
      transition: 'none',
    }
  }

  return (
    <div className="w-full max-w-[590px] bg-white border border-[#DDDDE6] rounded-[24px] flex flex-col shadow-[0_30px_70px_-20px_rgba(26,58,92,0.22),_0_2px_15px_rgba(17,17,19,0.05)] overflow-hidden select-none">

      {/* Panel Header with colored dots */}
      <div className="bg-[#F4F4F7] border-b border-[#DDDDE6] px-5 py-3.5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-[10px] h-[10px] rounded-full bg-[#FF5F56] shadow-sm flex-shrink-0" />
          <span className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E] shadow-sm flex-shrink-0" />
          <span className="w-[10px] h-[10px] rounded-full bg-[#27C93F] shadow-sm flex-shrink-0" />
          <span className="text-[12px] text-[#3A3A3F] font-semibold ml-2 font-mono">Alfred · Northgate EPC - Package 2</span>
        </div>
        {/* <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#145C35] uppercase tracking-[0.05em]">
          <span className="w-[6px] h-[6px] rounded-full bg-[#145C35] animate-pulse" />
          Live
        </span> */}
      </div>

      {/* Q&A Thread with Expanded Height and Auto-Scroll */}
      <div ref={scrollRef} className="p-5 flex flex-col gap-3.5 h-[320px] sm:h-[400px] lg:h-[460px] overflow-y-auto bg-white text-left" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div style={transitionStyle} className="flex flex-col gap-3.5">

          {/* User question */}
          <div className="flex gap-3.5 items-start">
            <span
              className="w-[32px] h-[32px] rounded-[9px] flex-shrink-0 flex items-center justify-center"
              style={{ background: PERSONAS.find(p => p.id === activeTab)?.bg }}
            >
              {persona && <persona.Icon className="w-[16px] h-[16px]" style={{ color: persona.color }} />}
            </span>
            <div className="flex-1">
              <div className="text-[10px] font-bold tracking-[0.05em] uppercase mb-[4px]" style={{ color: '#6B6B74' }}>
                {persona?.label}
              </div>
              <div className="text-[13.5px] leading-[1.45] text-[#3A3A3F] font-semibold">
                {typedQuestion}
                {typedQuestion.length < qa.question.length && (
                  <span className="inline-block w-[2px] h-[1.05em] bg-[#2B5F96] ml-[2px] translate-y-[2px] animate-blink" />
                )}
              </div>
            </div>
          </div>

          {/* Alfred response */}
          {typedQuestion.length >= qa.question.length && (
            <div className="flex gap-3.5 items-start animate-fade-in">
              <img src={alfredLogo} alt="Alfred Logo" className="w-[32px] h-[32px] rounded-[9px] flex-shrink-0 object-contain" />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-bold tracking-[0.05em] uppercase text-[#1A3A5C] mb-2">Alfred</div>

                {/* Thinking dots */}
                {isThinking && (
                  <div className="flex items-center gap-1.5 text-[12.5px] text-[#ADADB8] mb-2.5">
                    <span className="flex gap-1.5">
                      <span className="w-[4px] h-[4px] rounded-full bg-[#ADADB8] animate-pulse" />
                      <span className="w-[4px] h-[4px] rounded-full bg-[#ADADB8] animate-pulse" style={{ animationDelay: '0.15s' }} />
                      <span className="w-[4px] h-[4px] rounded-full bg-[#ADADB8] animate-pulse" style={{ animationDelay: '0.3s' }} />
                    </span>
                    <span>{qa.thinking}</span>
                  </div>
                )}

                {/* First block: typewritten paragraph */}
                {!isThinking && typedText && (
                  <div className="text-[13.5px] leading-[1.58] text-[#3A3A3F] mb-3">
                    {typedText}
                    {typedText.length < qa.typedText.length && (
                      <span className="inline-block w-[2px] h-[1.05em] bg-[#2B5F96] ml-[2px] translate-y-[2px] animate-blink" />
                    )}
                  </div>
                )}

                {/* Staggered blocks */}
                {qa.blocks.map((block, idx) => {
                  const visible = visibleBlocks > idx
                  return (
                    <div
                      key={idx}
                      className="transition-all duration-800 cubic-bezier(0.16, 1, 0.3, 1) mb-2.5"
                      style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(16px)',
                      }}
                    >
                      {block.type === 'list' && (
                        <div>
                          <div className="text-[11px] font-bold text-[#1A3A5C] mb-2">{block.title}</div>
                          <ul className="flex flex-col gap-1.5 list-none p-0 m-0">
                            {block.items.map((item, i) => (
                              <li key={i} className="text-[12.5px] text-[#3A3A3F] pl-4 relative leading-snug font-medium">
                                <span className="absolute left-0 text-[#5B8EC4] font-bold">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {block.type === 'table' && (
                        <div>
                          <div className="text-[11px] font-bold text-[#1A3A5C] mb-2">{block.title}</div>
                          <table className="w-full border-collapse text-[12px]">
                            <thead>
                              <tr>
                                <th className="text-left text-[10px] font-bold uppercase tracking-wider text-[#6B6B74] pb-2 border-b border-[#DDDDE6]">Document</th>
                                <th className="text-left text-[10px] font-bold uppercase tracking-wider text-[#6B6B74] pb-2 border-b border-[#DDDDE6]">Grade</th>
                              </tr>
                            </thead>
                            <tbody>
                              {block.rows.map((row, i) => (
                                <tr key={i} className={row.highlight ? 'text-[#B52B1A] font-semibold' : 'text-[#3A3A3F] font-medium'}>
                                  <td className="py-2 border-b border-[#DDDDE6] text-[12.5px]">{row.doc}</td>
                                  <td className="py-2 border-b border-[#DDDDE6] text-[12.5px]">{row.grade}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {block.type === 'calc' && (
                        <div>
                          <div className="text-[11px] font-bold text-[#1A3A5C] mb-2">{block.title}</div>
                          <div className="bg-[#F4F4F7] border border-[#DDDDE6] rounded-[11px] p-3">
                            {block.rows.map((row, i) => (
                              <div key={i} className="flex justify-between items-baseline text-[12.5px] text-[#6B6B74] py-1 font-medium">
                                <span>{row.label}</span>
                                {row.value && <span className="font-bold text-[#111113]">{row.value}</span>}
                              </div>
                            ))}
                            <div className="flex justify-between items-baseline border-t border-[#DDDDE6] mt-2 pt-2.5">
                              <span className="text-[13px] font-bold text-[#1A3A5C]">{block.result.label}</span>
                              <span className="text-[18px] font-extrabold text-[#1A3A5C]">{block.result.value}</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {block.type === 'citations' && (
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {block.items.map((cite, i) => (
                            <span key={i} className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#2B5F96] bg-[#EDF4FB] border border-[#D6E6F5] px-3 py-1 rounded-full shadow-sm">
                              <FileTextIcon className="w-[10.5px] h-[10.5px]" />
                              {cite}
                            </span>
                          ))}
                        </div>
                      )}

                      {block.type === 'verdict' && (() => {
                        const s = VERDICT_STYLES[block.variant]
                        return (
                          <div
                            className="flex items-start gap-3 rounded-[11px] p-3.5 border shadow-sm"
                            style={{ background: s.bg, borderColor: s.border }}
                          >
                            <span
                              className="w-[26px] h-[26px] rounded-[7px] flex-shrink-0 flex items-center justify-center"
                              style={{ background: s.iconBg }}
                            >
                              <block.Icon className="w-[13px] h-[13px] text-white" />
                            </span>
                            <div>
                              <div className="text-[9.5px] font-bold uppercase tracking-wider mb-0.5" style={{ color: s.labelColor }}>{block.label}</div>
                              <div className="text-[12.5px] leading-snug font-medium" style={{ color: s.textColor }}>{block.text}</div>
                            </div>
                          </div>
                        )
                      })()}
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Composer bar (decorative) */}
      <div className="px-5 pb-5">
        <div className="flex items-center gap-2.5 border border-[#DDDDE6] rounded-[11px] px-3.5 py-3 bg-[#FAFAFA]">
          <span className="text-[12.5px] text-[#ADADB8] flex-1">Ask Alfred about your project…</span>
          <span className="w-[28px] h-[28px] rounded-[8px] bg-[#2B5F96] flex items-center justify-center flex-shrink-0">
            <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
              <path d="M3 10h13M11 5l5 5-5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

// ─── Main Hero Section ─────────────────────────────────────────────────────────
export default function HeroSection() {
  const navigate = useNavigate()
  const containerRef = useRef(null)
  const layerGridRef = useRef(null)
  const layerBgRef = useRef(null)
  const leftColRef = useRef(null)
  const eyebrowRef = useRef(null)
  const h1Ref = useRef(null)
  const crunchRef = useRef(null)
  const pRef = useRef(null)
  const ctaRef = useRef(null)
  const rightColRef = useRef(null)
  const proofRef = useRef(null)

  const [showContent, setShowContent] = useState(false)

  const sponsors = [
    { src: Sponsor2, isSmall: true }, { src: Sponsor3, isSmall: true },
    { src: Sponsor4, isSmall: true }, { src: Sponsor5, isSmall: true },
    { src: Sponsor6, isSmall: true }, { src: Sponsor7, isSmall: true },
    { src: Sponsor8, isSmall: false }, { src: Sponsor9, isSmall: false },
    { src: Sponsor10, isSmall: false }, { src: Sponsor11, isSmall: false },
  ]

  // Parallax on scroll
  useEffect(() => {
    let rafId
    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        const y = window.scrollY
        if (layerGridRef.current) layerGridRef.current.style.transform = `translateY(${y * 0.10}px)`
        if (layerBgRef.current) layerBgRef.current.style.transform = `translateY(${y * 0.25}px)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(rafId) }
  }, [])

  // Cinematic intro → layout settle (Premium Scale & Translate Morph)
  useGSAP(() => {
    const col = leftColRef.current
    const right = rightColRef.current
    const eyebrow = eyebrowRef.current
    const h1 = h1Ref.current
    const crunch = crunchRef.current
    const p = pRef.current
    const cta = ctaRef.current
    const proof = containerRef.current?.querySelector('.marquee-fade')?.parentElement

    if (!col || !right || !eyebrow || !h1 || !crunch || !p || !cta) return

    const isDesktop = window.innerWidth >= 1024

    // ── SplitText: Heading and Paragraph ──
    const split1 = SplitText.create(h1, { type: 'words', wordsClass: 'word' })
    const split2 = SplitText.create(p, { type: 'lines', linesClass: 'line' })

    // ── Initial States (Preserving layout height) ──
    gsap.set(h1, { autoAlpha: 1 })
    gsap.set(p, { autoAlpha: 1 }) // Wrapper visible, lines hidden below
    
    gsap.set(split1.words, { autoAlpha: 0, y: 30, rotateX: -15 })
    gsap.set(split2.lines, { autoAlpha: 0, y: 15, filter: 'blur(4px)' })
    gsap.set(cta, { autoAlpha: 0, y: 20 })
    
    gsap.set(right, { autoAlpha: 0 })
    gsap.set(eyebrow, { autoAlpha: 0 })
    if (proof) gsap.set(proof, { autoAlpha: 0 })

    // ── Center the H1 visually on Desktop using Scale & Translate ──
    if (isDesktop) {
      const rect = h1.getBoundingClientRect()
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      
      // Calculate H1's native center point
      const elCenterX = rect.left + rect.width / 2
      const elCenterY = rect.top + rect.height / 2
      
      const xOffset = centerX - elCenterX
      const yOffset = centerY - elCenterY - 40 // Nudge up slightly for visual balance

      // Apply the massive, centered initial state
      gsap.set(h1, { x: xOffset, y: yOffset, scale: 1.35, transformOrigin: '50% 50%' })
    }

    const intro = gsap.timeline()

    // ── Phase 1: Text animates in place (Massive and Centered) ──
    intro
      .to(split1.words, {
        duration: 1.0,
        autoAlpha: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.12,
        ease: 'power3.out',
      })

    // ── Phase 2: Glide into Native Layout Bounds ──
    if (isDesktop) {
      intro
        .to(h1, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 1.4,
          ease: 'power3.inOut',
        }, "+=0.3")
        .to(right, {
          duration: 1.2,
          autoAlpha: 1,
          ease: 'power3.out',
          onStart: () => setShowContent(true),
        }, "-=0.8")
    } else {
      intro.to(right, {
        duration: 1.0,
        autoAlpha: 1,
        ease: 'power3.out',
        onStart: () => setShowContent(true),
      }, "+=0.2")
    }

    // ── Phase 3: Reveal Secondary Elements ──
    intro
      .to(eyebrow, {
        duration: 1.0,
        autoAlpha: 1,
        ease: 'power3.out',
      }, "-=0.8")
      .to(split2.lines, {
        duration: 1.0,
        autoAlpha: 1,
        y: 0,
        filter: 'blur(0px)',
        stagger: 0.15,
        ease: 'power3.out',
      }, "<")
      .to(cta, {
        duration: 0.8,
        autoAlpha: 1,
        y: 0,
        ease: 'power3.out',
        onComplete: () => {
          split1.revert()
          split2.revert()
          
          // ── Phase 4: Flourish (Draw Wavy Underline) ──
          // We must query the span *after* reverting, because revert() destroys the original React ref node
          const newCrunchSpan = h1.querySelector('.animate-crunch-underline')
          if (newCrunchSpan) {
            gsap.to(newCrunchSpan, {
              '--crunch-w': '100%',
              duration: 0.8,
              ease: 'power3.out',
            })
          }
        }
      }, "-=0.6")

    if (proof) {
      intro.to(proof, {
        duration: 1.0,
        autoAlpha: 1,
        ease: 'power3.out',
      }, "-=1.0")
    }

  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative w-full bg-transparent overflow-hidden pt-[90px] sm:pt-[120px] lg:pt-[100px] xl:pt-[140px] pb-[40px] sm:pb-[60px] lg:pb-[40px] xl:pb-[60px] z-10">
      
      {/* ── CSS for Custom Wavy Underline ── */}
      <style>{`
        .animate-crunch-underline {
          position: relative;
          display: inline-block;
          --crunch-w: 0%;
        }
        .animate-crunch-underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          height: 6px;
          width: var(--crunch-w);
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 6'%3E%3Cpath d='M0 3 Q 4 0, 8 3 T 16 3' fill='none' stroke='%23FFC20E' stroke-width='2.5' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: repeat-x;
          background-size: 16px 6px;
        }
      `}</style>

      {/* ── Blueprint Grid Layer ── */}
      <div ref={layerGridRef} aria-hidden="true" className="absolute inset-0 pointer-events-none will-change-transform" style={{ zIndex: 0 }}>
        <div className="absolute inset-0 bg-engineering-grid" style={{ opacity: 0.35 }} />
      </div>

      {/* ── Background Image Layer ── */}
      <div
        ref={layerBgRef}
        aria-hidden="true"
        className="absolute pointer-events-none will-change-transform"
        style={{
          zIndex: 0,
          inset: '-10% 0 -10% 0',
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'contain',
          backgroundPosition: 'right bottom -80px',
          backgroundRepeat: 'no-repeat',
          opacity: 0.55,
          mixBlendMode: 'multiply',
        }}
      />

      {/* ── Main Split-Column Layout ── */}
      <div
        className="relative z-10 w-full max-w-[1180px] mx-auto px-4 sm:px-[28px] flex flex-col gap-8 sm:gap-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-6 sm:gap-8 lg:gap-[52px] items-start lg:items-center">

          {/* Left: Copy */}
          <div ref={leftColRef} className="flex flex-col gap-0 text-left items-start">
            <div ref={eyebrowRef} className="inline-flex items-center gap-2 mb-[22px] select-none">
              <span className="w-[7px] h-[7px] bg-[#FFC20E] rounded-[2px] shrink-0" />
              <span className="text-[12px] font-mono text-[#B88500] uppercase tracking-[0.04em] font-semibold leading-none">
                Construction contract risk intelligence
              </span>
            </div>

            <h1 ref={h1Ref} className="text-[32px] sm:text-[38px] lg:text-[40px] xl:text-[46px] font-extrabold leading-[1.08] text-[#1A3A5C] tracking-[-0.03em] m-0 max-w-xl text-balance" style={{ perspective: '600px' }}>
              Your project spans 10,000 pages of contracts, specs, DPRs and letters. Your team is expected to{' '}
              <span ref={crunchRef} className="font-bold animate-crunch-underline">crunch</span>{' '}
              all of them.
            </h1>

            <p ref={pRef} className="max-w-[46ch] mt-[20px] mb-[24px] xl:mt-[22px] xl:mb-[30px] text-[#6B6B74] text-[15.5px] xl:text-[16.5px] leading-[1.6] font-normal m-0">
              Manual review doesn't fail because people aren't careful, it fails because{' '}
              <strong className="text-[#3A3A3F] font-semibold">no one can cross-reference thousands of pages under deadline.</strong>{' '}
              <span className="text-[#111113] font-semibold underline decoration-[#FFC20E] decoration-[3px] underline-offset-[3px]">Alfred</span>{' '}
              does, and flags what can hurt the project while there's still time to act.
            </p>

            <div ref={ctaRef} className="flex flex-col w-full sm:w-auto items-start">
              <div className="flex flex-col xs:flex-row sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => { navigate('/demo'); window.scrollTo(0, 0) }}
                  className="bg-[#2B5F96] hover:bg-[#1A3A5C] text-white px-[24px] py-[14px] text-[14.5px] rounded-[11px] font-semibold cursor-pointer transition-all duration-150 active:scale-95 shadow-[0_8px_22px_rgba(26,58,92,0.26)] border-none w-full sm:w-auto text-center"
                >
                  Schedule a Demo
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('capabilities') || document.getElementById('thesis')
                    if (el) {
                      if (window.lenis) window.lenis.scrollTo(el, { offset: -80 })
                      else el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className="bg-transparent text-[#1A3A5C] border border-[#DDDDE6] hover:border-[#5B8EC4] hover:bg-[#EDF4FB] px-[24px] py-[14px] text-[14.5px] rounded-[11px] font-semibold cursor-pointer transition-all duration-150 w-full sm:w-auto text-center"
                >
                  See how Alfred works
                </button>
              </div>

              <p className="text-[12.5px] text-[#ADADB8] mt-[15px] font-normal m-0 select-none">
                Built for FIDIC, CPWD and EPC contracts, across India &amp; the Middle East.
              </p>
            </div>
          </div>

          {/* Right: Alfred Panel */}
          <div ref={rightColRef} className="relative w-full flex justify-center lg:justify-start z-10 px-0">
            <AlfredPanel startTrigger={showContent} />
          </div>
        </div>

        {/* Proof / Sponsor Strip */}
        <div className="w-full border-t border-[#DDDDE6] pt-8 mt-4">
          <p className="text-[10px] text-[#6B6B74] uppercase tracking-wider font-semibold m-0 mb-4 text-center select-none">
            Trusted by teams managing ₹10,000 Cr+ in infrastructure portfolios
          </p>
          <div className="w-full overflow-hidden relative py-1 select-none marquee-fade">
            <div className="flex animate-marquee items-center gap-16">
              {[...sponsors, ...sponsors].map((logo, index) => (
                <img
                  key={`logo-${index}`}
                  src={logo.src}
                  alt={`Partner ${index + 1}`}
                  className={`${logo.isSmall ? 'h-16 sm:h-[80px]' : 'h-12 sm:h-[56px]'} w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
