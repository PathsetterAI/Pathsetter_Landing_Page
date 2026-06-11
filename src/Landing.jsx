import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import FeaturesSection from './components/FeaturesSection'
import EnterpriseSection from './components/EnterpriseSection'
import PartnersSection from './components/PartnersSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import PathsetterLogo from './assets/Pathsetter Logo.png'
import SEO from './components/SEO'
import ShaderBackground from './components/ui/ShaderBackground'

// Restore Swiper CSS globally to fix the sliders in Enterprise, Partners, and Testimonials
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

function SingleSourceOfTruthWidget() {
  return (
    <div className="w-full max-w-[340px] bg-white/[0.01] border border-white/10 rounded-xl p-4 flex flex-col gap-3.5 shadow-2xl backdrop-blur-md relative overflow-hidden select-none">
      <div className="absolute -right-12 -top-12 w-28 h-28 bg-[#00bf99]/10 rounded-full blur-2xl pointer-events-none" />
      <div className="flex items-center justify-between border-b border-white/5 pb-2">
        <span className="text-[0.65rem] text-slate-400 font-mono tracking-wider uppercase">Project Data Hub</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#00bf99] animate-pulse" />
      </div>
      <div className="grid grid-cols-[1.2fr_auto_1fr] items-center gap-2">
        <div className="flex flex-col gap-2 z-10">
          {[
            { name: "BOQ_Schedule_A.xlsx", type: "sheet" },
            { name: "Metro_Alignment_L2.dwg", type: "cad" },
            { name: "FIDIC_Conditions_Vol1.pdf", type: "pdf" }
          ].map((file, i) => (
            <div key={i} className="bg-white/5 border border-white/5 rounded-md p-1.5 px-2 flex items-center gap-1.5 hover:bg-white/10 transition-colors">
              {file.type === "sheet" ? (
                <svg className="w-3.5 h-3.5 text-[#00bf99] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              ) : file.type === "cad" ? (
                <svg className="w-3.5 h-3.5 text-[#3b82f6] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              ) : (
                <svg className="w-3.5 h-3.5 text-[#ef4444] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              )}
              <span className="text-[0.6rem] text-slate-300 font-mono truncate">{file.name}</span>
            </div>
          ))}
        </div>
        <div className="w-10 h-14 relative shrink-0">
          <svg className="w-full h-full" viewBox="0 0 40 56" fill="none">
            <path d="M0 12h18M0 28h18M0 44h18" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M18 12c8 0 8 16 22 16M18 28h22M18 44c8 0 8-16 22-16" stroke="#00bf99" strokeWidth="1.5" className="animate-dash" style={{ strokeDashoffset: 100 }} />
          </svg>
        </div>
        <div className="bg-[#00bf99]/5 border border-[#00bf99]/20 rounded-xl p-2.5 flex flex-col items-center justify-center gap-1 shadow-[0_0_15px_rgba(0,191,153,0.08)] z-10 shrink-0">
          <div className="w-8 h-8 rounded-full bg-[#00bf99]/10 border border-[#00bf99]/20 flex items-center justify-center text-[#00bf99] animate-pulse">
            <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
          </div>
          <span className="text-[0.55rem] text-[#00bf99] font-primary font-bold tracking-wider uppercase font-sans">ALFRED OS</span>
          <span className="text-[0.5rem] text-slate-400 font-mono">Synced</span>
        </div>
      </div>
    </div>
  );
}

function TraceabilityWidget() {
  return (
    <div className="w-full max-w-[340px] bg-white/[0.01] border border-white/10 rounded-xl p-4 flex flex-col gap-3 shadow-2xl backdrop-blur-md relative overflow-hidden select-none">
      <div className="absolute -left-12 -bottom-12 w-28 h-28 bg-[#00bf99]/10 rounded-full blur-2xl pointer-events-none" />
      <div className="flex items-center justify-between border-b border-white/5 pb-2">
        <span className="text-[0.65rem] text-slate-400 font-mono tracking-wider uppercase">Audit Ledger Log</span>
        <span className="text-[0.6rem] text-accent font-bold">100% Verified</span>
      </div>
      <div className="flex flex-col gap-2 relative pl-3.5 border-l border-white/10 text-left">
        {[
          { title: "FIDIC Cl. 8.4 Delay Event", diff: "Notice of EOT Generated", status: "Drafted", time: "5m" },
          { title: "BOQ Billing Audit", diff: "- ₹42.3L Quantity Slip", status: "Flagged", time: "32m" },
          { title: "DPR Geo-Tag Sync", diff: "Piling Phase 2 Verified", status: "Linked", time: "2h" }
        ].map((item, i) => (
          <div key={i} className="relative bg-white/[0.02] border border-white/5 rounded-lg p-2 flex flex-col gap-0.5 hover:border-white/10 transition-colors">
            <span className="absolute -left-[18px] top-3.5 w-1.5 h-1.5 rounded-full bg-accent border border-primary-bg" />
            <div className="flex items-center justify-between">
              <span className="text-[0.7rem] text-slate-200 font-semibold">{item.title}</span>
              <span className="text-[0.5rem] text-slate-500 font-mono">{item.time}</span>
            </div>
            <div className="flex items-center justify-between text-[0.6rem]">
              <span className="text-slate-400 font-mono scale-[0.9] origin-left">{item.diff}</span>
              <span className="px-1 py-0.2 rounded bg-accent/10 border border-accent/20 text-accent font-bold text-[0.5rem] uppercase font-mono">{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CollaborationWidget() {
  return (
    <div className="w-full max-w-[280px] h-[160px] relative flex items-center justify-center select-none">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 160">
        <line x1="140" y1="80" x2="60" y2="30" stroke="rgba(0,191,153,0.2)" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="140" y1="80" x2="220" y2="30" stroke="rgba(0,191,153,0.2)" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="140" y1="80" x2="140" y2="135" stroke="rgba(0,191,153,0.2)" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="60" cy="30" r="2" fill="#00bf99" className="animate-ping" />
        <circle cx="220" cy="30" r="2" fill="#00bf99" className="animate-ping" style={{ animationDelay: '0.5s' }} />
        <circle cx="140" cy="135" r="2" fill="#00bf99" className="animate-ping" style={{ animationDelay: '1s' }} />
      </svg>
      <div className="absolute w-12 h-12 rounded-full bg-accent/5 border border-accent/20 flex items-center justify-center shadow-[0_0_15px_rgba(0,191,153,0.15)] animate-pulse z-10">
        <div className="w-8.5 h-8.5 rounded-full bg-accent/20 flex items-center justify-center text-accent">
          <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
        </div>
      </div>
      <div className="absolute top-[10px] left-[15px] bg-white/[0.01] border border-white/10 rounded-lg p-1 px-2 flex items-center gap-1 shadow-md">
        <svg className="w-3 h-3 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
        <span className="text-[0.55rem] text-slate-300 font-mono">JV Lead Contractor</span>
      </div>
      <div className="absolute top-[10px] right-[10px] bg-white/[0.01] border border-white/10 rounded-lg p-1 px-2 flex items-center gap-1 shadow-md">
        <svg className="w-3 h-3 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
        <span className="text-[0.55rem] text-slate-300 font-mono">Subcontractor</span>
      </div>
      <div className="absolute bottom-[8px] left-[85px] bg-white/[0.01] border border-white/10 rounded-lg p-1 px-2 flex items-center gap-1 shadow-md">
        <svg className="w-3 h-3 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        <span className="text-[0.55rem] text-slate-300 font-mono">Authority Engineer</span>
      </div>
    </div>
  );
}

function ChangeOrdersWidget() {
  return (
    <div className="w-full max-w-[280px] bg-white/[0.01] border border-white/10 rounded-xl p-3 flex flex-col gap-2.5 shadow-2xl backdrop-blur-md relative overflow-hidden select-none">
      <div className="flex items-center justify-between">
        <span className="text-[0.55rem] text-slate-400 font-mono uppercase tracking-wider">Schedule Float Sync</span>
        <span className="text-[0.5rem] text-red-400 flex items-center gap-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400" /> WBS Delay Slip
        </span>
      </div>
      <div className="flex flex-col gap-2 text-left">
        {[
          { name: "Viaduct Foundations", w: "45%", color: "bg-accent/80", col: 1 },
          { name: "Pier 14-22 Piling", w: "30%", color: "bg-red-500/50 border border-red-500/40", col: 2, conflict: true },
          { name: "Station Trenching", w: "35%", color: "bg-accent/20 border border-accent/15", col: 3 }
        ].map((item, i) => (
          <div key={i} className="flex flex-col gap-0.5">
            <span className="text-[0.55rem] text-slate-300 font-mono">{item.name}</span>
            <div className="grid grid-cols-5 h-2.5 bg-white/[0.02] border border-white/5 rounded overflow-hidden relative">
              <div 
                className={`h-full rounded-r ${item.color}`}
                style={{ 
                  gridColumnStart: item.col, 
                  gridColumnEnd: item.col + 2,
                  width: '100%'
                }} 
              />
              {item.conflict && (
                <div className="absolute inset-0 flex items-center justify-end pr-1.5 text-red-400 text-[0.45rem] font-bold uppercase tracking-wider font-mono">
                  -24d Slip (LD Risk)
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OrchestrationWidget() {
  return (
    <div className="w-full max-w-[280px] h-[160px] relative flex items-center justify-center select-none overflow-hidden">
      <div className="absolute w-[140px] h-[140px] rounded-full border border-white/5 flex items-center justify-center">
        <div className="w-[95px] h-[95px] rounded-full border border-white/5 flex items-center justify-center">
          <div className="w-[50px] h-[50px] rounded-full border border-white/5 flex items-center justify-center" />
        </div>
      </div>
      <div className="absolute w-full h-[1px] bg-white/5 left-0" />
      <div className="absolute h-full w-[1px] bg-white/5 top-0" />
      <div 
        className="absolute w-[140px] h-[140px] rounded-full overflow-hidden pointer-events-none"
        style={{
          background: 'conic-gradient(from 0deg, rgba(0, 191, 153, 0.15) 0deg, rgba(0, 191, 153, 0.0) 100deg, transparent 360deg)',
          animation: 'spin 4s linear infinite'
        }}
      />
      <div className="absolute top-[32px] left-[55px] flex items-center gap-1 z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-red-400 border border-primary-bg animate-ping absolute" />
        <span className="w-1.5 h-1.5 rounded-full bg-red-400 border border-primary-bg" />
        <span className="bg-red-500/10 border border-red-500/30 text-red-400 text-[0.45rem] font-bold py-0.2 px-0.8 rounded font-mono uppercase tracking-wider shadow-sm">Invoice Audit</span>
      </div>
      <div className="absolute bottom-[40px] right-[30px] flex items-center gap-1 z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-accent border border-primary-bg animate-ping absolute" />
        <span className="w-1.5 h-1.5 rounded-full bg-accent border border-primary-bg" />
        <span className="bg-accent/10 border border-[#00bf99]/30 text-accent text-[0.45rem] font-bold py-0.2 px-0.8 rounded font-mono uppercase tracking-wider shadow-sm">BOQ Overrun Flagged</span>
      </div>
    </div>
  );
}

function BentoCard({ feature, index, className = "" }) {
  const widgets = [
    <SingleSourceOfTruthWidget />,
    <TraceabilityWidget />,
    <CollaborationWidget />,
    <ChangeOrdersWidget />,
    <OrchestrationWidget />
  ];

  const isWide = index < 2;

  return (
    <div
      className={`bg-[#080a0f] border border-white/5 rounded-2xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between transition-colors duration-300 hover:bg-[#0c0e15] hover:border-white/10 ${
        isWide ? "min-h-[260px] md:min-h-[280px]" : "min-h-[340px] md:min-h-[360px]"
      } ${className}`}
    >
      <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-accent/5 rounded-full blur-[60px] pointer-events-none" />

      {isWide ? (
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 items-center h-full relative z-[2] text-left">
          <div className="flex flex-col gap-3">
            <span className="text-[0.75rem] font-primary font-semibold text-accent uppercase tracking-widest">{feature.subtitle}</span>
            <h3 className="font-accent text-xl sm:text-2xl text-secondary-light font-bold leading-tight">{feature.title}</h3>
            <p className="font-primary text-[0.88rem] text-secondary-mid leading-relaxed opacity-80 mt-2">{feature.description}</p>
          </div>
          <div className="w-full flex justify-center items-center overflow-hidden">
            {widgets[index]}
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-start h-full relative z-[2] gap-4 text-left">
          <div className="flex flex-col gap-2">
            <span className="text-[0.75rem] font-primary font-semibold text-accent uppercase tracking-widest">{feature.subtitle}</span>
            <h3 className="font-accent text-xl text-secondary-light font-bold leading-tight">{feature.title}</h3>
            <p className="font-primary text-[0.88rem] text-secondary-mid leading-relaxed opacity-80 mt-1">{feature.description}</p>
          </div>
          <div className="w-full flex justify-center items-center overflow-hidden h-[160px] mt-2">
            {widgets[index]}
          </div>
        </div>
      )}
    </div>
  );
}

const features = [
  {
    title: "Contract Ingestion Hub",
    subtitle: "FIDIC & NHAI Contract Parsing",
    description: "Ingests complex multi-thousand-page contracts into digital compliance tracking.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    )
  },
  {
    title: "Auto-Claims & EOT Engine",
    subtitle: "Obligations & Claims Workspace",
    description: "Maps delays directly to force majeure or owner-delay clauses to auto-draft Extension of Time (EOT) notices.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </svg>
    )
  },
  {
    title: "Consortium Alignment",
    subtitle: "Multi-party JV Coordination",
    description: "Aligns developers, JV contractors, and engineers on a single verified audit trail of project truth.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    title: "Critical Path Sync",
    subtitle: "Real-time Float & Delay Analysis",
    description: "Tracks real-time float consumption, delay impact, and S-curve deviations to mitigate Liquidated Damages (LD).",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
        <path d="M16 16h5v5" />
      </svg>
    )
  },
  {
    title: "Automated Billing Audits",
    subtitle: "Site-to-Contract Verification",
    description: "Cross-references subcontractor invoices with daily progress reports (DPRs) and geo-tagged photos to flag over-billing.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    )
  }
];

function Landing() {
  const navigate = useNavigate()

  return (
    <div className="app bg-[#06080c] relative overflow-hidden">
      <ShaderBackground />
      <SEO
        title="Home"
        description="Pathsetter AI unifies the entire infrastructure lifecycle to deliver speed, clarity, and capital certainty. The AI-Native OS for infrastructure."
      />
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />

      <section className="bg-primary-bg pt-24 pb-16 px-4 sm:px-8 relative z-10 flex flex-col items-center">
        <div className="max-w-[1400px] mx-auto w-full mb-12 px-4 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 items-end border-b border-white/10 pb-12 mb-12">
            <div className="text-left flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-semibold tracking-[3px] uppercase w-fit backdrop-blur-sm">
                The Future of Infrastructure Delivery
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-accent text-secondary-light leading-[1.1] m-0 max-w-3xl tracking-tight">
                One Operating System for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E6EEF0] to-[#94A3B8]">Capital Execution.</span>
              </h2>
            </div>
            <div className="text-left">
              <p className="text-base sm:text-lg text-secondary-mid font-primary font-light leading-relaxed m-0 opacity-90">
                Alfred unifies project knowledge, AI agents, and execution intelligence into a single system that actively governs how capital projects are planned, executed, and controlled.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 w-full relative">
            {/* Horizontal progress path connection line on desktop */}
            <div className="hidden lg:block absolute top-[56px] left-[8%] right-[8%] h-[1px] bg-gradient-to-r from-accent/10 via-accent/30 to-accent/10 z-0 pointer-events-none" />
            
            {[
              {
                title: "Contract Compliance Ingestion",
                desc: "Automatically extracts milestones, obligation checklists, and risk playbooks from FIDIC, NHAI, and Metro Rail contracts.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              {
                title: "Claims & Obligations Workspace",
                desc: "Cross-references daily progress updates and site photos with contract obligations to instantly auto-draft Extension of Time (EOT) notices.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )
              },
              {
                title: "Site-to-Contract Cross-Reference",
                desc: "Cross-checks subcontractor invoices and DPRs against original BOQ and contract obligations to find over-billings.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                  </svg>
                )
              },
              {
                title: "Schedule & Cost Control",
                desc: "Computes S-curve metrics, float deviation, and critical path delays on project schedules to prevent liquidated damages.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white/[0.03] border border-white/10 rounded-[20px] p-6 sm:p-8 relative overflow-hidden flex flex-col justify-start min-h-[200px] transition-all duration-300 hover:bg-white/[0.06] hover:border-accent/30 hover:-translate-y-1 group z-10 shadow-[0_20px_50px_-12px_rgba(0,191,153,0.05)]"
              >
                <div className="relative z-[2] flex flex-col gap-4 h-full text-left">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-accent transition-all duration-300 group-hover:scale-110 group-hover:border-accent/30 group-hover:bg-accent/5 relative z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    {pillar.icon}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-accent text-lg text-secondary-light font-semibold group-hover:text-white transition-colors">{pillar.title}</h4>
                    <p className="font-primary text-[0.88rem] text-secondary-mid leading-relaxed opacity-80 group-hover:opacity-100 transition-all duration-300">{pillar.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Alfred Advantage Section */}
      <section className="bg-primary-bg pt-16 pb-16 px-4 sm:px-8 relative z-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-16">
          {/* Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-semibold tracking-[3px] uppercase mb-6 backdrop-blur-sm">
              The New AI Standard
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.15] text-secondary-light font-accent mb-6">
              The Alfred Advantage— <br />
              <span className="font-normal text-secondary-mid">Engineered for Capital Certainty.</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-secondary-mid leading-[1.65] font-primary font-light opacity-85">
              Experience a new standard of project management where every decision is backed by data, and every workflow is optimized for speed.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 w-full relative z-10">
            {features.map((feature, index) => {
              // Custom span sizes: Row 1 = 3 cols + 3 cols = 6; Row 2 = 2 cols + 2 cols + 2 cols = 6
              const spanClass = index < 2 ? "md:col-span-3" : "md:col-span-2";
              return (
                <BentoCard
                  key={index}
                  feature={feature}
                  index={index}
                  className={spanClass}
                />
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-4 relative z-20"
          >
            <button
              onClick={() => {
                window.scrollTo(0, 0);
                navigate('/platform');
              }}
              className="group bg-accent border border-accent text-primary-bg py-2.5 px-6 rounded-lg font-bold cursor-pointer font-primary text-xs tracking-widest uppercase transition-all duration-200 shadow-[0_0_15px_rgba(0,191,153,0.2)] hover:bg-transparent hover:text-accent hover:border-accent hover:shadow-none active:scale-95 disabled:opacity-50 inline-flex items-center gap-2"
            >
              Explore Platform Capabilities
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>

      <EnterpriseSection />
      <PartnersSection />
      <TestimonialsSection />
      <ContactSection />

      <Footer />
    </div>
  )
}

export default Landing
