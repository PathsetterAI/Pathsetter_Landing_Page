import React, { useState, useEffect, useRef } from 'react'
import alfredLogo from '../assets/newlogo alfred.svg'

// Static text constants moved outside component to avoid dependency lint warnings
const user1Text = "Are there any critical blockers on site today?";
const user2Text = "Yes, draft the claim.";

const draftTextPart1 = "We hereby give notice, ";
const draftTextPart2 = "within the 28-day period required under Clause 20.1";
const draftTextPart3 = ", of a delay event arising from the Employer's late issuance of the revised (Rev C) piping routing drawing for Zone 3, without which the Contractor is unable to proceed with piping erection.";
const draftTextTotal = draftTextPart1 + draftTextPart2 + draftTextPart3;

// SparkleIcon moved outside render to follow best practices and fix render lint errors
const SparkleIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
  </svg>
);

export default function CoPilotSection() {
  const [hasIntersected, setHasIntersected] = useState(false)
  const sectionRef = useRef(null)

  const [step, setStep] = useState(0)
  const [typedInput, setTypedInput] = useState('')
  const [typedDraftLength, setTypedDraftLength] = useState(0)

  const chatContainerRef = useRef(null)

  const phases = [
    {
      pl: "Bidding",
      pt: "Drafts pre-bid queries and RFIs, summarizes bid documents, drafts query responses, and shows exactly how the project's risk shifted between versions."
    },
    {
      pl: "Construction",
      pt: "Drafts claim letters, contract amendment letters, and BOQs, ready for review, not from a blank page."
    },
    {
      pl: "Execution",
      pt: "Turns daily site capture into instant progress analysis (SPI, variance, invoice-readiness) the moment it's logged."
    }
  ]

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setHasIntersected(true)
        }
      },
      { threshold: 0.25 }
    )

    if (currentRef) observer.observe(currentRef)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  useEffect(() => {
    if (!hasIntersected) return;
    let timeout;

    if (step === 0) {
      timeout = setTimeout(() => setStep(1), 600);
    }
    else if (step === 1) {
      if (typedInput.length < user1Text.length) {
        timeout = setTimeout(() => {
          setTypedInput(user1Text.slice(0, typedInput.length + 1));
        }, 15);
      } else {
        timeout = setTimeout(() => {
          setTypedInput('');
          setStep(2);
        }, 400);
      }
    }
    else if (step === 2) {
      timeout = setTimeout(() => setStep(3), 500);
    }
    else if (step === 3) {
      timeout = setTimeout(() => setStep(4), 2000);
    }
    else if (step === 4) {
      timeout = setTimeout(() => setStep(5), 1800);
    }
    else if (step === 5) {
      timeout = setTimeout(() => setStep(6), 1800);
    }
    else if (step === 6) {
      if (typedInput.length < user2Text.length) {
        timeout = setTimeout(() => {
          setTypedInput(user2Text.slice(0, typedInput.length + 1));
        }, 20);
      } else {
        timeout = setTimeout(() => {
          setTypedInput('');
          setStep(7);
        }, 400);
      }
    }
    else if (step === 7) {
      timeout = setTimeout(() => setStep(8), 500);
    }
    else if (step === 8) {
      timeout = setTimeout(() => setStep(9), 800);
    }
    else if (step === 9) {
      timeout = setTimeout(() => setStep(10), 600);
    }
    else if (step === 10) {
      if (typedDraftLength < draftTextTotal.length) {
        timeout = setTimeout(() => {
          setTypedDraftLength(prev => prev + 1);
        }, 12);
      } else {
        timeout = setTimeout(() => setStep(11), 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [step, typedInput.length, typedDraftLength, hasIntersected]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [step, typedInput]);

  const handleReplay = () => {
    setStep(0);
    setTypedInput('');
    setTypedDraftLength(0);
  }

  const renderTypedDraft = () => {
    let renderedPart1 = ""
    let renderedPart2 = ""
    let renderedPart3 = ""

    if (typedDraftLength <= draftTextPart1.length) {
      renderedPart1 = draftTextPart1.slice(0, typedDraftLength)
    } else if (typedDraftLength <= draftTextPart1.length + draftTextPart2.length) {
      renderedPart1 = draftTextPart1
      renderedPart2 = draftTextPart2.slice(0, typedDraftLength - draftTextPart1.length)
    } else {
      renderedPart1 = draftTextPart1
      renderedPart2 = draftTextPart2
      renderedPart3 = draftTextPart3.slice(0, typedDraftLength - draftTextPart1.length - draftTextPart2.length)
    }

    return (
      <span className="text-[13px] leading-[1.7] text-gray-700">
        {renderedPart1}
        {renderedPart2 && (
          <span className="bg-yellow-100/50 text-yellow-900 border-b border-yellow-300 font-medium transition-all duration-300">
            {renderedPart2}
          </span>
        )}
        {renderedPart3}
        {step === 10 && typedDraftLength < draftTextTotal.length && (
          <span className="inline-block w-[1.5px] h-[14px] bg-gray-900 ml-0.5 align-middle animate-pulse" />
        )}
      </span>
    )
  }



  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#FAFAFA] py-[100px] px-6 sm:px-12 md:px-16 lg:px-20 border-b border-gray-200 overflow-hidden font-sans"
    >
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Background purely white/gray minimalism */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col gap-12 sm:gap-20 text-left">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16 w-full">

          {/* Text Section */}
          <div className="flex flex-col items-start text-left w-full lg:w-[40%] max-w-xl mx-auto lg:mx-0 shrink-0">
            <div className="inline-flex items-center gap-[9px] bg-[#EDF4FB] border border-[#D6E6F5] px-[13px] py-[6px] rounded-[30px] self-start mb-[20px] select-none">
              <span className="w-[9px] h-[9px] rounded-[3px] bg-[#FFC20E] shrink-0" />
              <span className="text-[12.5px] font-sans text-[#1A3A5C] uppercase tracking-[0.01em] font-bold">
                Alfred Co-Pilot
              </span>
            </div>
            <h2 className="text-[26px] md:text-[36px] font-extrabold text-[#1A3A5C] leading-[1.12] tracking-[-0.025em] m-0 max-w-xl mb-[12px]">
              Does the writing, so your team can do the thinking.
            </h2>
            <p className="text-[#6B6B74] text-[17px] leading-[1.55] max-w-lg m-0 mb-[28px] font-normal">
              Every draft comes grounded in your own documents and cited to its source, ready for review, never from a blank page.
            </p>

            {/* Phases List */}
            <div className="flex flex-col w-full mb-8">
              {phases.map((phase, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-2 sm:gap-[18px] py-[14px] border-t border-gray-200 items-start ${idx === phases.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                >
                  <span className="text-[11px] font-bold tracking-[0.05em] uppercase text-[#1A3A5C] pt-[2px] font-sans">
                    {phase.pl}
                  </span>
                  <p className="text-[13.5px] text-gray-600 leading-[1.55] m-0 font-normal font-sans">
                    {phase.pt}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={handleReplay}
              className="flex items-center gap-2 text-[13px] font-semibold text-gray-600 hover:text-gray-900 transition-colors bg-white px-5 py-2.5 rounded-full border border-gray-200 shadow-sm hover:shadow"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8.89M9 11l3 3L22 4" />
              </svg>
              Replay simulation
            </button>
          </div>

          {/* Premium Visual Mockup */}
          <div className="lg:w-[60%] w-full bg-white border border-[#DDDDE6] rounded-[24px] shadow-[0_30px_70px_-20px_rgba(26,58,92,0.22),_0_2px_15px_rgba(17,17,19,0.05)] overflow-hidden flex h-[420px] sm:h-[480px] lg:h-[520px] shrink-0">

            {/* Sidebar (Collapses when Canvas opens) */}
            <div className={`hidden md:flex flex-col shrink-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${step >= 9 ? 'w-0 opacity-0 border-r-0' : 'w-[200px] lg:w-[240px] opacity-100 border-r border-gray-200/80 bg-[#FCFCFD]'
              }`}>
              {/* Sidebar Header with Alfred Logo */}
              <div className="h-[52px] border-b border-gray-200/80 flex items-center px-4 shrink-0 gap-3">
                <div className="w-[26px] h-[26px] rounded-lg bg-[#FFD55A] flex items-center justify-center shrink-0 overflow-hidden border border-gray-200 shadow-sm">
                  <img src={alfredLogo} alt="Alfred" className="w-full h-full object-cover" />
                </div>
                <span className="font-bold text-[14px] text-gray-900 tracking-wide">Alfred AI</span>
              </div>

              <div className="p-4 flex-1 flex flex-col gap-6 overflow-y-auto no-scrollbar">
                <button className="w-full flex items-center justify-between px-3 py-2 text-[13px] font-medium text-gray-700 bg-white border border-gray-200 shadow-sm rounded-lg hover:bg-gray-50 transition-colors">
                  New thread
                  <span className="text-gray-400 text-[15px] leading-none">+</span>
                </button>

                <div>
                  <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2 px-2">Recent Threads</div>
                  <div className="flex flex-col gap-1">
                    <div className="px-3 py-2 bg-gray-100 text-gray-900 text-[13px] font-medium rounded-lg">
                      Zone 3 piping delay
                    </div>
                    <div className="px-3 py-2 text-gray-500 text-[13px] hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                      Weekly performance review
                    </div>
                    <div className="px-3 py-2 text-gray-500 text-[13px] hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                      Concrete pour variance
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2 px-2">Project Data</div>
                  <div className="flex flex-col gap-1">
                    <div className="px-3 py-2 text-gray-500 text-[13px] hover:bg-gray-50 rounded-lg cursor-pointer transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                      Obligations register
                    </div>
                    <div className="px-3 py-2 text-gray-500 text-[13px] hover:bg-gray-50 rounded-lg cursor-pointer transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                      Claims register
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main App Area */}
            <div className={`flex-1 flex flex-col min-w-0 bg-white h-full overflow-hidden ${step >= 9 ? 'hidden md:flex' : 'flex'}`}>

              {/* Header */}
              <div className="h-[52px] border-b border-gray-200/80 flex items-center justify-between px-5 bg-white shrink-0">
                <div>
                  <div className="text-[13px] font-semibold text-gray-900 leading-tight flex items-center gap-1.5">
                    <span>Site Alpha</span>
                  </div>
                  <div className="text-[11px] text-gray-500 mt-[1px]">Zone 3 · Piping erection</div>
                </div>
              </div>

              {/* Chat Body */}
              <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 lg:p-8 flex flex-col gap-5 lg:gap-7 bg-white no-scrollbar scroll-smooth">

                {/* User Message 1 (Right aligned) */}
                {step >= 2 && (
                  <div className="flex gap-4 justify-end">
                    <div className="flex-1 pt-1.5 flex justify-end">
                      <div className="text-[13.5px] text-gray-800 leading-[1.6] bg-gray-50 border border-gray-200 px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm">
                        {user1Text}
                      </div>
                    </div>
                    <div className="w-[32px] h-[32px] rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                      <svg className="w-5 h-5 text-gray-400 mt-1.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                    </div>
                  </div>
                )}

                {/* Alfred Scanning Phase (Left aligned) */}
                {step === 3 && (
                  <div className="flex gap-4 animate-fade-in-up">
                    <div className="w-[32px] h-[32px] flex items-center justify-center shrink-0 relative text-[#1A3A5C] animate-pulse">
                      <SparkleIcon />
                    </div>
                    <div className="flex-1 pt-1.5">
                      <div className="flex items-center gap-2 text-[13px] text-gray-500 font-medium">
                        <svg className="w-4 h-4 animate-spin text-gray-400" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Cross-referencing daily logs &amp; baseline schedule...
                      </div>
                    </div>
                  </div>
                )}

                {/* Alfred Message 1 (Left aligned) */}
                {step >= 4 && (
                  <div className="flex gap-4 animate-fade-in-up">
                    <div className="w-[32px] h-[32px] flex items-center justify-center shrink-0 text-[#1A3A5C]">
                      <SparkleIcon />
                    </div>
                    <div className="flex-1 pt-1.5">
                      <div className="text-[13.5px] text-gray-800 leading-[1.6]">
                        Yes. Zone 3 piping erection is currently flagged as blocked. According to today's site logs, the team is still waiting for the <span className="font-semibold text-gray-900">Rev C drawings</span> from the client.
                      </div>
                    </div>
                  </div>
                )}

                {/* Alfred Message 2 (Left aligned) */}
                {step >= 5 && (
                  <div className="flex gap-4 animate-fade-in-up">
                    <div className="w-[32px] h-[32px] shrink-0"></div>
                    <div className="flex-1">
                      <div className="text-[13.5px] text-gray-800 leading-[1.6]">
                        I've cross-referenced this against the contract. This is a <span className="font-semibold bg-red-50 text-red-700 px-1 py-0.5 rounded border border-red-100">client-caused delay</span>. Under <span className="font-semibold text-gray-900">Clause 20.1</span>, you are entitled to an Extension of Time. Would you like me to draft the official EOT claim notice?

                        {/* Premium Sources Badges */}
                        <div className="mt-3.5 mb-4 flex flex-wrap gap-2.5">
                          <div className="flex items-center gap-2 px-2 bg-white border border-gray-200/80 rounded-full cursor-pointer">
                            <div className="w-5 h-5 rounded bg-blue-50 flex items-center justify-center">
                              <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            </div>
                            <span className="text-xs font-semibold text-gray-700">Main Contract</span>
                          </div>
                          <div className="flex items-center text-xs gap-2 px-2 bg-white border border-gray-200/80 rounded-full cursor-pointer">
                            <div className="w-5 h-5 rounded bg-amber-50 flex items-center justify-center">
                              <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            </div>
                            <span className="text-xs font-semibold text-gray-700">DPR Log</span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <button
                            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${step >= 6
                              ? 'bg-gray-100 text-gray-400 border border-transparent'
                              : 'bg-gray-900 text-white shadow-sm hover:bg-gray-800'
                              }`}
                          >
                            Draft EOT Claim
                          </button>
                          <button className="px-4 py-2 rounded-lg text-[13px] font-medium text-gray-600 bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors">
                            Dismiss
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* User Message 2 (Right aligned) */}
                {step >= 7 && (
                  <div className="flex gap-4 justify-end animate-fade-in-up">
                    <div className="flex-1 pt-1.5 flex justify-end">
                      <div className="text-[13.5px] text-gray-800 leading-[1.6] bg-gray-50 border border-gray-200 px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm">
                        {user2Text}
                      </div>
                    </div>
                    <div className="w-[32px] h-[32px] rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                      <svg className="w-5 h-5 text-gray-400 mt-1.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                    </div>
                  </div>
                )}

                {/* Alfred Message 3 (Left aligned) */}
                {step >= 8 && (
                  <div className="flex gap-4 animate-fade-in-up">
                    <div className="w-[32px] h-[32px] flex items-center justify-center shrink-0 text-[#1A3A5C]">
                      <SparkleIcon />
                    </div>
                    <div className="flex-1 pt-1.5">
                      <div className="text-[13.5px] text-gray-800 leading-[1.6]">
                        Drafting the notice on the canvas...
                        <div className="mt-3 flex items-center gap-1.5 text-[13px] font-medium text-emerald-600">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                          Draft ready for review
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="h-4 shrink-0" />
              </div>

              {/* Input Box Area */}
              <div className="p-4 bg-white border-t border-gray-100 shrink-0">
                <div className="relative flex items-center bg-gray-50/80 border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
                  <div className="flex-1 text-[13.5px] text-gray-800 flex items-center h-5">
                    {typedInput ? (
                      <>
                        {typedInput}
                        <span className="inline-block w-[1.5px] h-[14px] bg-gray-500 ml-[2px] animate-pulse" />
                      </>
                    ) : (
                      <span className="text-gray-400 select-none">
                        {(step === 1 || step === 6) ? <span className="inline-block w-[1.5px] h-[14px] bg-gray-500 animate-pulse" /> : "Ask Alfred anything..."}
                      </span>
                    )}
                  </div>
                  <div className={`w-[28px] h-[28px] rounded-lg flex items-center justify-center transition-colors ${typedInput.length > 0 ? 'bg-gray-900 text-white shadow-sm' : 'bg-gray-200 text-gray-400'}`}>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19V5m-7 7l7-7 7 7"></path></svg>
                  </div>
                </div>
              </div>

            </div>

            {/* Canvas Panel */}
            <div className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border-l border-gray-200/80 bg-[#FAFAFA] flex flex-col overflow-hidden shadow-[-10px_0_20px_-10px_rgba(0,0,0,0.05)] ${step >= 9 ? 'w-full md:w-[380px] lg:w-[420px] opacity-100' : 'w-0 opacity-0'
              }`}>

              {/* Canvas Header */}
              <div className="h-[52px] border-b border-gray-200/80 flex items-center justify-between px-4 sm:px-5 bg-white shrink-0 min-w-0">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded bg-gray-100 flex items-center justify-center border border-gray-200">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-gray-900 leading-tight">Notice of Delay.docx</div>
                    <div className="text-[11px] text-gray-500 mt-[1px]">Auto-saved just now</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors rounded-md hover:bg-gray-100">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                  </button>
                </div>
              </div>

              {/* Document Toolbar Placeholder */}
              <div className="h-[40px] border-b border-gray-200/80 bg-white flex items-center px-4 gap-4 shrink-0 min-w-0 overflow-x-auto no-scrollbar">
                <div className="text-[12px] font-medium text-gray-600">Normal text</div>
                <div className="w-[1px] h-4 bg-gray-200"></div>
                <div className="flex gap-2">
                  <div className="font-bold text-[13px] text-gray-700 w-5 text-center cursor-pointer">B</div>
                  <div className="italic text-[13px] text-gray-700 w-5 text-center cursor-pointer">I</div>
                  <div className="underline text-[13px] text-gray-700 w-5 text-center cursor-pointer">U</div>
                </div>
              </div>

              {/* Canvas Body */}
              <div className="flex-1 overflow-y-auto p-4 min-w-0 no-scrollbar">

                {/* Document Container */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-3 min-h-[140px]">
                  <h3 className="text-[16px] font-semibold text-gray-900 mb-1.5 font-serif tracking-tight">Notice of Delay & Extension of Time</h3>
                  <p className="text-[11px] text-gray-500 mb-3 pb-3 border-b border-gray-100">Re: Zone 3 piping erection - awaiting Rev C drawing</p>

                  <div className="min-h-[70px]">
                    {renderTypedDraft()}
                  </div>
                </div>

                {/* Grounded In & Action Bar */}
                {step >= 11 && (
                  <div className="animate-fade-in-up bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-[22px] h-[22px] flex items-center justify-center shrink-0 mt-0.5 text-[#1A3A5C]">
                        <SparkleIcon />
                      </div>
                      <div>
                        <div className="text-[12px] font-semibold text-gray-900 mb-1">Grounded in verified project data</div>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="text-[11px] text-gray-600 bg-gray-100 px-2 py-0.5 rounded border border-gray-200">Drawing transmittal log</span>
                          <span className="text-[11px] text-gray-600 bg-gray-100 px-2 py-0.5 rounded border border-gray-200">Clause 20.1</span>
                          <span className="text-[11px] text-gray-600 bg-gray-100 px-2 py-0.5 rounded border border-gray-200">Zone 3 schedule</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <div className="text-[11px] text-gray-500 font-medium">
                        Requires human review before sending.
                      </div>
                      <button className="text-[13px] font-medium text-white bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-lg shadow-sm transition-colors">
                        Review & send
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>




      </div>
    </section>
  )
}
