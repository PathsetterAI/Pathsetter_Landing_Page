import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cards'

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
import DashImage from './assets/usp/dash.png'
import CommsImage from './assets/usp/Comms.png'
import DocsImage from './assets/usp/Docs.png'
import ReportingImage from './assets/usp/Reporting.png'
import SmartStagingImage from './assets/usp/smartstaging.png'

function DeviceShowcase({ activeFeature, featureData }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smoother physics for "proper movement"
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 })

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]) // Reduced angle slightly for realism
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div
      style={{
        perspective: '2000px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '2rem 0'
      }}
    >
      <motion.div
        key={activeFeature}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 50, rotateX: 0, rotateY: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          width: '90%',
          maxWidth: '1000px',
          background: '#000',
          borderRadius: '20px',
          padding: '12px',
          boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.5)',
          position: 'relative',
          cursor: 'grab'
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
          zIndex: 10,
          borderRadius: '16px'
        }} />
        <div style={{
          borderRadius: '8px',
          overflow: 'hidden',
          background: '#0B0F12',
          position: 'relative'
        }}>
          <img 
            src={featureData[activeFeature].image} 
            alt={activeFeature}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block'
            }} 
          />
        </div>
        <div style={{
          position: 'absolute',
          bottom: '-40px',
          left: '10%',
          right: '10%',
          height: '40px',
          background: 'radial-gradient(ellipse at center, rgba(0, 191, 153, 0.3), transparent 70%)',
          filter: 'blur(20px)',
          zIndex: -1,
          opacity: 0.6,
          transform: 'translateZ(-50px)'
        }} />
      </motion.div>
    </div>
  )
}

function Landing() {
  const navigate = useNavigate()
  const [activeFeature, setActiveFeature] = useState('Dashboard')

  const featureData = {
    'Dashboard': {
      title: "Command Center for Infrastructure",
      description: "Visualize your entire project portfolio in one high-fidelity dashboard. Track critical path progress, budget variance, and resource allocation in real-time.",
      points: ["Real-time KPI Tracking", "AI-Driven Risk Alerts", "Multi-Project View"],
      image: DashImage
    },
    'Smart Staging': {
      title: "Safe Sandbox Environment",
      description: "Test changes and simulate scenarios before committing to the live project. Experiment with different schedules and resource allocations risk-free.",
      points: ["Scenario Simulation", "Impact Analysis", "Version Control"],
      image: SmartStagingImage
    },
    'Comms Hub': {
      title: "Centralized Communication",
      description: "Keep all stakeholders aligned with a unified communication platform. Context-aware chat and automated updates ensure nothing gets lost in translation.",
      points: ["Contextual Threads", "Auto-Meeting Minutes", "Stakeholder Alignment"],
      image: CommsImage
    },
    'Reporting & Compliance': {
      title: "Automated Reporting",
      description: "Generate comprehensive reports and compliance documents with a single click. AI ensures all documentation meets regulatory standards.",
      points: ["One-Click Reports", "Regulatory Compliance", "Audit Trails"],
      image: ReportingImage
    },
    'Docu Hub': {
      title: "Intelligent Document Management",
      description: "Store, organize, and retrieve project documents instantly. AI-powered search and summarization make finding information effortless.",
      points: ["AI Search & Summary", "Version History", "Secure Storage"],
      image: DocsImage
    }
  }

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
    <div className="app">
      <SEO 
        title="Home"
        description="Pathsetter AI unifies the entire infrastructure lifecycle to deliver speed, clarity, and capital certainty. The AI-Native OS for infrastructure."
      />
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />

      {/* Detailed Features Section */}
      <section className="bg-primary-bg" style={{
        padding: '3rem 1rem',
        position: 'relative',
        zIndex: '10',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Old Header Content
        <div style={{ textAlign: 'center', marginBottom: '3rem', padding: '0 1rem' }}>
          <div style={{
            fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
            color: '#00bf99',
            fontWeight: '400',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontFamily: 'Inter, sans-serif',
            marginBottom: '1rem'
          }}>
            FEATURES
          </div>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: '400',
            lineHeight: '1.2',
            color: '#E6EEF0',
            fontFamily: 'Space Grotesk, sans-serif',
            maxWidth: '900px'
          }}>
            Alfred is your AI Project Manager: <br />
            <span style={{ color: '#00bf99' }}>10x your project teams output with Alfred</span>
          </h2>
        </div>
        */}

        <div className="max-w-[1400px] mx-auto w-full mb-20 px-4 flex flex-col items-center relative z-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
                 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-[3px] uppercase mb-8 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_10px_#00bf99]" />
                    The Future of Infrastructure Delivery
                 </div>
                 
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-accent text-secondary-light mb-8 max-w-5xl mx-auto leading-[1.1]">
                   One Operating System for <br/>
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
                        className="group relative bg-white/[0.06] border border-white/15 p-8 rounded-2xl hover:bg-white/[0.04] hover:border-accent/30 transition-all duration-300 flex flex-col gap-4 text-left overflow-hidden"
                    >
                       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                       
                       <div className="w-12 h-12 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-300">
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
                <button 
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate('/platform');
                  }}
                  className="group relative bg-accent text-primary-bg border-none py-4 px-10 rounded-lg font-bold cursor-pointer font-primary text-sm tracking-widest uppercase overflow-hidden shadow-[0_4px_20px_rgba(0,191,153,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,191,153,0.4)]"
                >
                   <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                   <span className="relative z-10 flex items-center gap-2">
                     Explore Platform Capabilities
                     <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                     </svg>
                   </span>
                </button>
            </motion.div>
        </div>

        {/* Feature Tabs and Device Showcase
        <div className="feature-tabs" style={{
          display: 'flex',
          gap: '0.75rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '3rem',
          padding: '0 1rem'
        }}>
          {['Dashboard', 'Smart Staging', 'Comms Hub', 'Reporting & Compliance', 'Docu Hub'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFeature(tab)}
              style={{
                background: activeFeature === tab ? 'rgba(0, 191, 153, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                border: `1px solid ${activeFeature === tab ? '#00bf99' : 'rgba(255, 255, 255, 0.08)'}`,
                padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 2rem)',
                borderRadius: '12px',
                color: activeFeature === tab ? '#00bf99' : '#E6EEF0',
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                transform: activeFeature === tab ? 'translateY(-2px)' : 'none',
                boxShadow: activeFeature === tab ? '0 4px 20px rgba(0, 191, 153, 0.15)' : 'none',
                outline: 'none'
              }}
              onMouseEnter={(e) => {
                if (activeFeature !== tab) {
                  e.currentTarget.style.borderColor = '#00bf99'
                  e.currentTarget.style.background = 'rgba(0, 191, 153, 0.05)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }
              }}
              onMouseLeave={(e) => {
                if (activeFeature !== tab) {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div style={{
          width: '100%',
          maxWidth: '1200px',
          marginTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          padding: '0 1rem'
        }}>
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{
                textAlign: 'center',
                maxWidth: '700px'
              }}
            >
              <h3 style={{
                fontSize: 'clamp(1.25rem, 4vw, 2rem)',
                color: '#E6EEF0',
                fontFamily: 'Space Grotesk, sans-serif',
                marginBottom: '1rem',
                lineHeight: '1.2'
              }}>
                {featureData[activeFeature].title}
              </h3>
              <p style={{
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                color: '#B9C8C9',
                fontFamily: 'Inter, sans-serif',
                lineHeight: '1.6',
                opacity: 0.9,
                marginBottom: '2rem'
              }}>
                {featureData[activeFeature].description}
              </p>
              
              <div style={{ 
                display: 'flex', 
                gap: '2rem', 
                justifyContent: 'center',
                flexWrap: 'wrap' 
              }}>
                {featureData[activeFeature].points.map((point, idx) => (
                  <div key={idx} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '0.5rem 1rem',
                    borderRadius: '100px',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#00bf99',
                      boxShadow: '0 0 10px #00bf99'
                    }} />
                    <span style={{
                      color: '#E6EEF0',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <DeviceShowcase activeFeature={activeFeature} featureData={featureData} />
        </div>
        */}
      </section>

      {/* The Alfred Advantage Section */}
      <section className="bg-primary-bg" style={{
        padding: '3rem 1rem',
        position: 'relative',
        zIndex: '20',
        overflow: 'hidden'
      }}>
        {/* Background Elements */}

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center px-4">
          {/* Left Side: Header & Context */}
          <motion.div 
            className="flex flex-col gap-8 items-start lg:items-start text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <div style={{
                fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
                color: '#00bf99',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                fontFamily: 'Inter, sans-serif',
                marginBottom: '1rem',
                display: 'inline-block',
                padding: '0.5rem 1rem',
                background: 'rgba(0, 191, 153, 0.1)',
                borderRadius: '100px',
                border: '1px solid rgba(0, 191, 153, 0.2)'
              }}>
                The New AI Standard
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                fontWeight: '400',
                lineHeight: '1.1',
                color: '#E6EEF0',
                fontFamily: 'Space Grotesk, sans-serif',
                marginTop: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                The Alfred Advantage— <br />
                <span style={{ color: '#94A3B8' }}>Engineered for Capital Certainty.</span>
              </h2>
              <p style={{
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                color: '#B9C8C9',
                lineHeight: '1.7',
                fontFamily: 'Inter, sans-serif',
                maxWidth: '500px'
              }}>
                Experience a new standard of project management where every decision is backed by data, and every workflow is optimized for speed.
              </p>
            </div>

            {/* Feature List Indicators Removed */}
          </motion.div>

          {/* Right Side: Swiper */}
          <div style={{ 
            position: 'relative', 
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            perspective: '1000px',
            marginTop: '2rem'
          }}>
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              className="w-[280px] sm:w-[320px] md:w-[360px] h-[400px] sm:h-[440px] md:h-[480px]"
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
            >
              {features.map((feature, index) => (
                <SwiperSlide key={index} className="rounded-3xl bg-primary-bg">
                  <div className="w-full h-full bg-gradient-to-br from-[rgba(22,27,31,0.95)] to-[rgba(11,15,18,0.98)] border border-accent/20 rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5),inset_0_0_30px_rgba(0,191,153,0.05)]">
                    {/* Decorative background glow */}
                    <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(0,191,153,0.08),transparent_60%)] pointer-events-none" />
                    
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6 sm:mb-8 border border-accent/20 shadow-[0_0_20px_rgba(0,191,153,0.2)] relative z-[2]">
                      {React.cloneElement(feature.icon, { width: 32, height: 32 })}
                    </div>
                    
                    <div className="relative z-[2] flex flex-col gap-3 sm:gap-4">
                      <h3 className="font-accent text-xl sm:text-2xl md:text-[1.75rem] text-secondary-light font-semibold leading-tight">{feature.title}</h3>
                      <div className="font-primary text-xs sm:text-[0.85rem] text-accent uppercase tracking-[2px] font-semibold">{feature.subtitle}</div>
                      <p className="font-primary text-sm sm:text-base text-secondary-mid leading-relaxed opacity-90">{feature.description}</p>
                    </div>

                    <div className="absolute bottom-6 right-8 font-accent text-[4rem] font-bold text-white/[0.03] z-[1] pointer-events-none">0{index + 1}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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
