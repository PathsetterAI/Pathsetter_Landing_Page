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
import MagneticButton from './components/ui/MagneticButton'

// Restore Swiper CSS globally to fix the sliders in Enterprise, Partners, and Testimonials
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

function BentoCard({ feature, index, className = "" }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-b from-[rgba(22,27,31,0.6)] to-[rgba(11,15,18,0.8)] border border-white/10 p-8 transition-all duration-500 backdrop-blur-xl flex flex-col justify-between min-h-[200px] hover:shadow-[0_20px_50px_rgba(0,191,153,0.03)] before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] before:bg-[length:40px_40px] before:opacity-30 before:pointer-events-none before:[mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] ${className}`}
    >
      {/* Ambient glowing hover background */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x, -999px) var(--mouse-y, -999px), rgba(0, 191, 153, 0.06), transparent 85%)',
        }}
      />

      <div className="relative z-10 flex flex-col gap-3">
        <span className="text-xs font-semibold tracking-widest text-accent uppercase font-primary">{feature.subtitle}</span>
        <h3 className="text-xl sm:text-2xl font-light text-secondary-light font-accent leading-tight tracking-tight group-hover:text-white transition-colors duration-300">{feature.title}</h3>
      </div>

      <div className="relative z-10 mt-4">
        <p className="text-sm text-secondary-mid font-primary leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity duration-300 max-w-[450px]">
          {feature.description}
        </p>
      </div>

    </motion.div>
  );
}

function Landing() {
  const navigate = useNavigate()

  const features = [
    {
      title: "Single-Source of Truth",
      subtitle: "Unify Your Project Data",
      description: "Every piece of information lives in one authoritative location.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      title: "Full Traceability",
      subtitle: "Track Every Cost, Every Change",
      description: "Embedded metadata and audit trails track every change and decision.",
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
      title: "Seamless Collaboration",
      subtitle: "Plan, Approve, and Update—Together",
      description: "Shared workspaces keep teams aligned in real-time.",
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
      title: "Instant Change Orders",
      subtitle: "Adapt Without the Bottlenecks",
      description: "Modular structure enables rapid approvals and updates.",
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
      title: "AI-Powered Orchestration",
      subtitle: "Let AI Drive Execution Intelligence",
      description: "Intelligence learns from patterns to predict risks and surface insights.",
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
  ]

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

      {/* Detailed Features Section */}
      <section className="bg-primary-bg py-24 px-4 sm:px-8 relative z-10 flex flex-col items-center">
        <div className="max-w-[1400px] mx-auto w-full mb-20 px-4 flex flex-col items-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-semibold tracking-[3px] uppercase mb-8 backdrop-blur-sm">
              The Future of Infrastructure Delivery
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-accent text-secondary-light mb-8 max-w-5xl mx-auto leading-[1.1]">
              One Operating System for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E6EEF0] to-[#94A3B8]">Capital Execution.</span>
            </h2>

            <h3 className="text-xl md:text-2xl font-primary text-secondary-mid font-light max-w-4xl mx-auto mb-8 leading-relaxed">
              Alfred unifies project knowledge, AI agents, and execution intelligence into a single system that actively governs how capital projects are planned, executed, and controlled.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 w-full">
            {[
              {
                title: "Intelligent Knowledge Engine",
                desc: "The project brain—documents, drawings, and data structured into living intelligence.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              {
                title: "Smart Staging",
                desc: "AI-driven workflows that turn scope into executable plans—faster and with fewer errors.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )
              },
              {
                title: "Unified Command Center",
                desc: "Live execution intelligence across sites, schedules, supply chains, and risk.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                  </svg>
                )
              },
              {
                title: "Compliance Workspace",
                desc: "Autonomous obligation tracking, validation, and audit-ready assurance.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-[#080a0f] p-8 rounded-2xl hover:bg-[#0c0e15] transition-all duration-300 flex flex-col gap-4 text-left overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="w-12 h-12 rounded-lg bg-accent/5 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-300">
                  {pillar.icon}
                </div>

                <div>
                  <h4 className="text-xl font-accent text-white mb-3 transition-colors duration-300">{pillar.title}</h4>
                  <p className="text-sm font-primary text-secondary-mid leading-relaxed opacity-80 group-hover:opacity-100">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <MagneticButton
              onClick={() => {
                window.scrollTo(0, 0);
                navigate('/platform');
              }}
              className="group relative bg-accent text-primary-bg border-none py-4 px-10 rounded-lg font-bold cursor-pointer font-primary text-sm tracking-widest uppercase overflow-hidden shadow-[0_4px_20px_rgba(0,191,153,0.3)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,191,153,0.4)]"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Explore Platform Capabilities
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* The Alfred Advantage Section */}
      <section className="bg-primary-bg py-24 px-4 sm:px-8 relative z-20 overflow-hidden">
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
