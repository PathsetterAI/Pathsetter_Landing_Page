import React, { useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cards'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import EnterpriseSection from './components/EnterpriseSection'
import PartnersSection from './components/PartnersSection'
import TestimonialsSection from './components/TestimonialsSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import PathsetterLogo from './assets/Pathsetter Logo.png'
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
      <Navbar />
      <HeroSection />
      <FeaturesSection />

      {/* The Alfred Advantage Section */}
      <section style={{
        padding: '6rem 2rem',
        background: '#0B0F12',
        position: 'relative',
        zIndex: '20',
        overflow: 'hidden'
      }}>
        {/* Background Elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(0, 191, 153, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16 items-center">
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
                fontSize: '0.9rem',
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
                ALFRED USP
              </div>
              <h2 style={{
                fontSize: '3rem',
                fontWeight: '400',
                lineHeight: '1.1',
                color: '#E6EEF0',
                fontFamily: 'Space Grotesk, sans-serif',
                marginTop: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                The Alfred Advantage— <br />
                <span style={{ color: '#94A3B8' }}>Unlock the power of Gen AI.</span>
              </h2>
              <p style={{
                fontSize: '1.1rem',
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
            perspective: '1000px'
          }}>
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              className="w-[360px] h-[480px]"
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
            >
              {features.map((feature, index) => (
                <SwiperSlide key={index} className="rounded-3xl bg-primary-bg">
                  <div className="w-full h-full bg-gradient-to-br from-[rgba(22,27,31,0.95)] to-[rgba(11,15,18,0.98)] border border-accent/20 rounded-3xl p-10 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5),inset_0_0_30px_rgba(0,191,153,0.05)]">
                    {/* Decorative background glow */}
                    <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(0,191,153,0.08),transparent_60%)] pointer-events-none" />
                    
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-8 border border-accent/20 shadow-[0_0_20px_rgba(0,191,153,0.2)] relative z-[2]">
                      {React.cloneElement(feature.icon, { width: 40, height: 40 })}
                    </div>
                    
                    <div className="relative z-[2] flex flex-col gap-4">
                      <h3 className="font-accent text-[1.75rem] text-secondary-light font-semibold leading-tight">{feature.title}</h3>
                      <div className="font-primary text-[0.85rem] text-accent uppercase tracking-[2px] font-semibold">{feature.subtitle}</div>
                      <p className="font-primary text-base text-secondary-mid leading-relaxed opacity-90">{feature.description}</p>
                    </div>

                    <div className="absolute bottom-6 right-8 font-accent text-[4rem] font-bold text-white/[0.03] z-[1] pointer-events-none">0{index + 1}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section style={{
        padding: '6rem 2rem',
        background: '#0B0F12',
        position: 'relative',
        zIndex: '10',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            fontSize: '0.9rem',
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
            fontSize: '2rem',
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

        <div className="feature-tabs" style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '4rem'
        }}>
          {['Dashboard', 'Smart Staging', 'Comms Hub', 'Reporting & Compliance', 'Docu Hub'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFeature(tab)}
              style={{
                background: activeFeature === tab ? 'rgba(0, 191, 153, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                border: `1px solid ${activeFeature === tab ? '#00bf99' : 'rgba(255, 255, 255, 0.08)'}`,
                padding: '1rem 2rem',
                borderRadius: '12px',
                color: activeFeature === tab ? '#00bf99' : '#E6EEF0',
                fontFamily: 'Inter, sans-serif',
                fontSize: '1rem',
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

        {/* Feature Content Display - Interactive Device Tilt */}
        <div style={{
          width: '100%',
          maxWidth: '1200px',
          marginTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3rem'
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
                fontSize: '2rem',
                color: '#E6EEF0',
                fontFamily: 'Space Grotesk, sans-serif',
                marginBottom: '1rem',
                lineHeight: '1.2'
              }}>
                {featureData[activeFeature].title}
              </h3>
              <p style={{
                fontSize: '1.1rem',
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

          {/* 3D Tilted Device Container */}
          <DeviceShowcase activeFeature={activeFeature} featureData={featureData} />
        </div>
      </section>

      <EnterpriseSection />
      <PartnersSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />

      {/* Footer Section */}
      <footer style={{
        padding: '3rem 2rem',
        background: '#000000',
        position: 'relative',
        zIndex: '10',
        overflow: 'hidden'
      }}>
        {/* Large ALFRED Watermark */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '18rem',
          fontWeight: '900',
          color: 'rgba(255, 255, 255, 0.08)',
          fontFamily: 'Space Grotesk, sans-serif',
          letterSpacing: '0.01em',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          zIndex: 0
        }}>
          ALFRED
        </div>

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 md:gap-16 mb-12 pb-8 border-b border-white/[0.08]">
            {/* Left - Company Info */}
            <div>
              <img 
                src={PathsetterLogo} 
                alt="Pathsetter Logo" 
                style={{
                  height: '40px',
                  objectFit: 'contain',
                  marginBottom: '1.5rem'
                }}
              />
              
              <div style={{
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  fontSize: '0.85rem',
                  color: '#B9C8C9',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Contact Info:
                </div>
                <a 
                  href="mailto:hello@pathsetter.ai"
                  style={{
                    color: '#E6EEF0',
                    textDecoration: 'underline',
                    fontSize: '0.9rem',
                    fontFamily: 'Inter, sans-serif',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#00bf99'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#E6EEF0'}
                >
                  hello@pathsetter.ai
                </a>
              </div>

              <a 
                href="https://www.linkedin.com/company/pathsetterai" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#E6EEF0">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Right - Addresses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* United States */}
              <div>
                <div style={{
                  fontSize: '0.85rem',
                  color: '#B9C8C9',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  United States:
                </div>
                <p style={{
                  margin: 0,
                  fontSize: '0.9rem',
                  color: '#E6EEF0',
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '1.6'
                }}>
                  Suite 219, 691 S Milpitas Blvd, Milpitas, CA
                </p>
              </div>

              {/* India */}
              <div>
                <div style={{
                  fontSize: '0.85rem',
                  color: '#B9C8C9',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  India:
                </div>
                <p style={{
                  margin: 0,
                  fontSize: '0.9rem',
                  color: '#E6EEF0',
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '1.6'
                }}>
                  Jayabheri Trendset Connect, Kondapur, Hyderabad
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section - Copyright */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.85rem',
            color: '#B9C8C9',
            fontFamily: 'Inter, sans-serif'
          }}>
            <div>© 2025, Pathsetter.ai, Inc.</div>
            <div>Alfred by Pathsetter AI © 2025. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing
