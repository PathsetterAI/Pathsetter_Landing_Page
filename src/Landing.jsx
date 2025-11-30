import React, { useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay, EffectCards } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/effect-cards'
import 'swiper/css/pagination'

import './Landing.css'
import PathsetterLogo from './assets/Pathsetter Logo.png'
import AlfredImage from './assets/usp/ALFRED.png'
import SolarFarmVideo from './assets/usp/Indian_Solar_Farm_Construction_Project.mp4'
import DemoVideo from './assets/usp/DemoVideo.mp4'
import DashImage from './assets/usp/dash.png'
import CommsImage from './assets/usp/Comms.png'
import DocsImage from './assets/usp/Docs.png'
import ReportingImage from './assets/usp/Reporting.png'
import SmartStagingImage from './assets/usp/smartstaging.png'
import Sponsor1 from './assets/sponsors/1.png'
import Sponsor2 from './assets/sponsors/2.png'
import Sponsor3 from './assets/sponsors/3.png'
import Sponsor4 from './assets/sponsors/4.png'
import Sponsor5 from './assets/sponsors/5.png'
import Sponsor6 from './assets/sponsors/6.png'
import FounderImage from './assets/sponsors/Founder.png'

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

function EnterpriseFeature({ feature, index, className }) {
  return (
    <motion.div
      className={`bento-card ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="bento-card-content">
        <div className="bento-icon-wrapper">
          {React.cloneElement(feature.icon, { width: 32, height: 32 })}
        </div>

        <div className="bento-text-content">
          <h3 className="bento-title">{feature.title}</h3>
          <div className="bento-subtitle">{feature.subtitle}</div>
          <p className="bento-description">{feature.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

function Landing() {
  const [hoveredLink, setHoveredLink] = useState(null)
  const [clickedLink, setClickedLink] = useState(null)
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

  const enterpriseFeatures = [
    {
      title: "Effortless Onboarding",
      subtitle: "Start Fast. Deliver Faster.",
      description: "From your first login, Alfred aligns with your project structure and roles. Our AI-assisted onboarding and templates card systems get your teams productive from Day One—with zero disruption to existing workflows.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M12 12l-8 8" />
          <path d="M12 12l8 8" />
        </svg>
      )
    },
    {
      title: "Enterprise-Grade Security",
      subtitle: "Built for Critical Infrastructure",
      description: "Data encryption, role-based access, and audit trails ensure your project information is secure, compliant, and always under your control—whether hosted on cloud or hybrid.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      )
    },
    {
      title: "Responsible AI",
      subtitle: "Explainable. Transparent. Human-in-the-Loop",
      description: "Every AI insight—from risk predictions to summaries—comes with traceable logic. Alfred empowers your teams, never overrides them—ensuring AI augments judgment, not replaces it.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <text x="12" y="16" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none" fontFamily="sans-serif" fontWeight="bold">AI</text>
        </svg>
      )
    },
    {
      title: "Built for AI/ML Intelligence",
      subtitle: "Learn From Every Project. Improve Every Decision",
      description: "Alfred continuously learns from task progress, delays, and outcomes across projects. Use ML to uncover bottlenecks, benchmark timelines, and refine project strategy with precision.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 18l6-6-6-6" />
          <path d="M8 6l-6 6 6 6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    },
    {
      title: "Role-Based Access & Version Control",
      subtitle: "Govern with Confidence. Work Without Conflict.",
      description: "Fine-grained access rules and card-level versioning ensure the right people see the right data at the right time—enabling distributed teams to work safely and in sync.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
          <path d="M10 9H8" />
          <rect x="14" y="14" width="8" height="8" rx="1" fill="#0B0F12" stroke="currentColor" />
        </svg>
      )
    },
    {
      title: "Ready to Integrate (Coming Soon)",
      subtitle: "No More Tool Fragmentation",
      description: "Alfred is designed for seamless API-based interoperability with tools like MS Project, Primavera, and Autodesk—ensuring your ecosystem stays connected and collaborative.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )
    }
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar" style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: 'rgba(255, 255, 255, 0.01)',
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        padding: '1rem 0',
        zIndex: 1000,
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          maxWidth: '100%',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 2fr 1fr',
          alignItems: 'center',
          padding: '0 3rem',
          gap: '2rem'
        }}>
          {/* Logo - Left */}
          <div className="nav-logo">
            <img src={PathsetterLogo} alt="Pathsetter Logo" className="logo-img" />
          </div>
          
          {/* Nav Links - Center */}
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            gap: '2.5rem',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 0,
            padding: 0
          }}>
            {['HOME', 'FEATURES', 'ABOUT US', 'BLOGS', 'CONTACT US'].map((link) => (
              <li key={link}>
                <a 
                  href={`#${link.toLowerCase().replace(/\s+/g, '')}`}
                  style={{
                    color: hoveredLink === link ? '#00bf99' : clickedLink === link ? '#00d9a8' : '#B9C8C9',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontFamily: 'Inter, sans-serif',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    display: 'inline-block'
                  }}
                  onMouseEnter={() => setHoveredLink(link)}
                  onMouseLeave={() => setHoveredLink(null)}
                  onClick={() => {
                    setClickedLink(link)
                    setTimeout(() => setClickedLink(null), 200)
                  }}
                >
                  {link}
                  {(hoveredLink === link || clickedLink === link) && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      height: '2px',
                      width: hoveredLink === link ? '100%' : '70%',
                      background: 'linear-gradient(90deg, #00bf99, #00d9a8)',
                      borderRadius: '1px',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }} />
                  )}
                </a>
              </li>
            ))}
          </ul>
          
          {/* CTA Button - Right */}
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
            <button 
              className="cta-btn" 
              style={{
                background: '#00bf99',
                color: '#0B0F12',
                border: 'none',
                padding: '0.65rem 1.5rem',
                borderRadius: '8px',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9rem',
                boxShadow: '0 4px 16px rgba(0, 191, 153, 0.2)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(0, 191, 153, 0.35)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 191, 153, 0.2)'
              }}
            >
              GET DEMO
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero" style={{
        marginTop: '0',
        padding: '2rem',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        textAlign: 'left',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            zIndex: '0',
            opacity: '0.4'
          }}
        >
          <source src={SolarFarmVideo} type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(11, 15, 18, 0.3)',
          zIndex: '1'
        }}></div>

        <motion.div 
          style={{
            maxWidth: '900px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            alignItems: 'flex-start',
            position: 'relative',
            zIndex: '2'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '400',
            lineHeight: '1.15',
            color: '#E6EEF0',
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '-1.5px',
            margin: '0'
          }}>
            {['The', 'Future', 'of', 'Infrastructure'].map((word, index) => (
              <motion.span
                key={index}
                style={{
                  display: 'inline-block',
                  marginRight: '0.3em',
                  opacity: 1,
                  filter: 'blur(0px)',
                  transform: 'none',
                  willChange: 'transform'
                }}
                initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
              >
                {word}
              </motion.span>
            ))}
            <br />
            {['is', 'here…'].map((word, index) => (
              <motion.span
                key={index}
                style={{
                  display: 'inline-block',
                  marginRight: index === 0 ? '0.3em' : '0',
                  color: '#00bf99',
                  background: 'linear-gradient(135deg, #00bf99, #00d9a8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  opacity: 1,
                  filter: 'blur(0px)',
                  transform: 'none',
                  willChange: 'transform'
                }}
                initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: (4 + index) * 0.1,
                  ease: "easeOut" 
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <p style={{
            fontSize: '1.1rem',
            color: '#B9C8C9',
            lineHeight: '1.7',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '400',
            maxWidth: '700px',
            margin: '0'
          }}>
            {['From', 'planning', 'to', 'execution,', 'harness', 'AI', 'to', 'reimagine', 'how'].map((word, index) => (
              <motion.span
                key={index}
                style={{
                  display: 'inline-block',
                  marginRight: '0.3em',
                  opacity: 1,
                  filter: 'blur(0px)',
                  transform: 'none',
                  willChange: 'transform'
                }}
                initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6 + (index * 0.08),
                  ease: "easeOut" 
                }}
              >
                {word}
              </motion.span>
            ))}
            <br />
            {['Infrastructure', 'projects', 'get', 'delivered'].map((word, index) => (
              <motion.span
                key={index}
                style={{
                  display: 'inline-block',
                  marginRight: index < 3 ? '0.3em' : '0',
                  opacity: 1,
                  filter: 'blur(0px)',
                  transform: 'none',
                  willChange: 'transform'
                }}
                initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.3 + (index * 0.08),
                  ease: "easeOut" 
                }}
              >
                {word}
              </motion.span>
            ))}
          </p>
        </motion.div>
      </section>

      {/* Features Section - Introducing Alfred */}
      <section id="features" style={{
        padding: '7rem 2rem',
        background: '#0B0F12',
        position: 'relative',
        zIndex: '10',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          maxWidth: '1600px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '3rem',
          alignItems: 'center',
          width: '100%',
          paddingRight: '4rem'
        }}>
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem'
            }}
          >
            <div style={{
              fontSize: '0.9rem',
              color: '#00bf99',
              fontWeight: '400',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontFamily: 'Inter, sans-serif',
              display: 'flex',
              alignItems: 'center',
              gap: '0rem'
            }}>
              Introducing 
              <img src={AlfredImage} alt="Alfred" style={{
                height: '32px',
                objectFit: 'contain'
              }} />
            </div>

            <h2 style={{
              fontSize: '3rem',
              fontWeight: '400',
              lineHeight: '1.2',
              color: '#E6EEF0',
              fontFamily: 'Space Grotesk, sans-serif',
              margin: '0'
            }}>
              The AI Project<br />
              <span style={{
                color: '#00bf99'
              }}>Decisions Engine</span>
            </h2>

            <p style={{
              fontSize: '1.1rem',
              color: '#B9C8C9',
              lineHeight: '1.7',
              fontFamily: 'Inter, sans-serif',
              margin: '0'
            }}>
              An AI-native project management platform built to drive speed, clarity, 
              and certainty across your infrastructure lifecycle.
            </p>
          </motion.div>

          {/* Right Side - Demo Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{
              position: 'relative'
            }}
          >
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 191, 153, 0.1), rgba(0, 191, 153, 0.05))',
              border: '2px solid rgba(0, 191, 153, 0.2)',
              borderRadius: '16px',
              padding: '1rem',
              boxShadow: '0 8px 32px rgba(0, 191, 153, 0.15)'
            }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  display: 'block'
                }}
              >
                <source src={DemoVideo} type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </section>

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

        <div className="usp-section-container">
          {/* Left Side: Header & Context */}
          <motion.div 
            className="usp-content-left"
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
              className="usp-swiper"
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
            >
              {features.map((feature, index) => (
                <SwiperSlide key={index} className="usp-slide">
                  <div className="usp-card">
                    <div className="usp-icon-container">
                      {React.cloneElement(feature.icon, { width: 40, height: 40 })}
                    </div>
                    
                    <div className="usp-content">
                      <h3 className="usp-title">{feature.title}</h3>
                      <div className="usp-subtitle">{feature.subtitle}</div>
                      <p className="usp-description">{feature.description}</p>
                    </div>

                    <div className="usp-number">0{index + 1}</div>
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

        <div style={{
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

      {/* Enterprise Ready Section */}
      <section style={{
        padding: '8rem 2rem',
        background: '#0B0F12',
        position: 'relative',
        zIndex: '10',
        overflow: 'hidden'
      }}>
        {/* Background Grid */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.3,
          pointerEvents: 'none'
        }} />
        
        {/* Radial Gradient Glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '80%',
          background: 'radial-gradient(circle at center, rgba(0, 191, 153, 0.05), transparent 60%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '5rem'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
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
              }}
            >
              Enterprise Ready
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{
                fontSize: '3rem',
                fontWeight: '400',
                lineHeight: '1.2',
                color: '#E6EEF0',
                fontFamily: 'Space Grotesk, sans-serif',
                marginBottom: '1.5rem'
              }}
            >
              Built for Scale & Security
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{
                fontSize: '1.1rem',
                color: '#B9C8C9',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Enterprise-grade infrastructure designed to handle your most critical projects with uncompromising security and control.
            </motion.p>
          </div>

          <div style={{ width: '100%', padding: '2rem 0' }}>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              initialSlide={1}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              pagination={{ clickable: true }}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="enterprise-swiper"
              style={{ paddingBottom: '3rem' }}
            >
              {enterpriseFeatures.map((feature, index) => (
                <SwiperSlide key={index} style={{ width: '300px', height: 'auto' }}>
                  <EnterpriseFeature feature={feature} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section style={{
        padding: '6rem 2rem',
        background: '#0B0F12',
        position: 'relative',
        zIndex: '10',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '1rem',
            color: '#00bf99',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontFamily: 'Inter, sans-serif',
            marginBottom: '3rem',
            opacity: 0.8
          }}>
            ALFRED POWER PARTNERS
          </h3>

          <div style={{
            width: '100%',
            overflow: 'hidden',
            padding: '1rem 0'
          }}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={60}
              slidesPerView={'auto'}
              loop={true}
              speed={4000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              allowTouchMove={false}
              className="marquee-swiper"
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 60,
                },
              }}
            >
              {[Sponsor1, Sponsor2, Sponsor3, Sponsor4, Sponsor5, Sponsor6, Sponsor1, Sponsor2, Sponsor3, Sponsor4, Sponsor5, Sponsor6].map((sponsor, index) => (
                <SwiperSlide key={index} style={{ width: 'auto' }}>
                  <div
                    style={{
                      width: '120px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <img 
                      src={sponsor} 
                      alt={`Partner ${index + 1}`} 
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain'
                      }} 
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{
        padding: '8rem 2rem',
        background: '#0B0F12',
        position: 'relative',
        zIndex: '10',
        overflow: 'hidden'
      }}>
        {/* Background Grid */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.3,
          pointerEvents: 'none'
        }} />
        
        {/* Radial Gradient Glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '80%',
          background: 'radial-gradient(circle at center, rgba(0, 191, 153, 0.05), transparent 60%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '5rem'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
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
              }}
            >
              Testimonials
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{
                fontSize: '3rem',
                fontWeight: '400',
                lineHeight: '1.2',
                color: '#E6EEF0',
                fontFamily: 'Space Grotesk, sans-serif',
                marginBottom: '1.5rem'
              }}
            >
              Our Power Users Speak
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{
                fontSize: '1.1rem',
                color: '#B9C8C9',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Trusted by industry leaders managing billions in infrastructure projects
            </motion.p>
          </div>

          <div style={{ width: '100%', padding: '2rem 0' }}>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              initialSlide={2}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              pagination={{ clickable: true }}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="enterprise-swiper"
              style={{ paddingBottom: '3rem' }}
            >
              {[
                {
                  name: 'Vivian',
                  role: 'Project Head',
                  company: 'Global Infrastructure Company',
                  testimonial: 'Running simultaneous construction projects in four countries was a nightmare before Alfred. Now I have real-time visibility across all sites with intelligent risk alerts that actually matter.'
                },
                {
                  name: 'Srinivasan',
                  role: 'COO',
                  company: 'Premier EPC Services',
                  testimonial: 'Alfred transformed how we operate across our $500M project portfolio. The AI insights help us make better decisions faster, and our project success rate improved by 34% in just 6 months.'
                },
                {
                  name: 'Leena',
                  role: 'Project Sponsor',
                  company: 'Energy Infrastructure Developer',
                  testimonial: 'As someone funding these massive EPC projects, Alfred gives me the transparency I need. I can see exactly where every dollar is going and get early warnings about potential issues.'
                },
                {
                  name: 'Rajesh',
                  role: 'Project Manager',
                  company: 'Renewable Energy Company',
                  testimonial: 'Managing our solar farm project across three states used to mean juggling 15 different tools and endless email chains. Alfred consolidated everything into one intelligent workspace that actually understands project dependencies.'
                },
                {
                  name: 'Manjunath',
                  role: 'Project Manager',
                  company: 'Renewable Energy Company',
                  testimonial: 'I was skeptical about AI in project management until Alfred saved our pilot team. It predicted a critical delay 3 weeks before we would have caught it manually, saving us $2M in penalties.'
                }
              ].map((testimonial, index) => (
                <SwiperSlide key={index} style={{ width: '340px', height: '340px' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      height: '100%',
                      position: 'relative'
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        background: '#FFFFFF',
                        borderRadius: '20px',
                        padding: '2rem',
                        position: 'relative',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem'
                      }}
                    >
                      {/* Icon at Top Left */}
                      <div style={{
                        width: '48px',
                        height: '48px',
                        background: '#000000',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: 'rotate(-5deg)'
                      }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                        </svg>
                      </div>

                      {/* Testimonial Content */}
                      <div style={{ flex: 1 }}>
                        <p style={{ 
                          fontSize: '0.95rem',
                          lineHeight: '1.6',
                          color: '#1a1a1a',
                          fontFamily: 'Inter, sans-serif',
                          margin: 0,
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: 6,
                          WebkitBoxOrient: 'vertical'
                        }}>
                          "{testimonial.testimonial}"
                        </p>
                      </div>

                      {/* Author Info at Bottom */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        paddingTop: '1rem',
                        borderTop: '1px solid rgba(0, 0, 0, 0.08)'
                      }}>
                        {/* Avatar */}
                        <div style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #00bf99, #00d9a8)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1rem',
                          fontWeight: '600',
                          color: '#FFFFFF',
                          fontFamily: 'Space Grotesk, sans-serif',
                          flexShrink: 0
                        }}>
                          {testimonial.name.charAt(0)}
                        </div>

                        {/* Name & Role */}
                        <div>
                          <div style={{
                            fontSize: '0.95rem',
                            fontWeight: '600',
                            color: '#1a1a1a',
                            fontFamily: 'Inter, sans-serif',
                            marginBottom: '0.15rem'
                          }}>
                            {testimonial.name}
                          </div>
                          <div style={{
                            fontSize: '0.75rem',
                            color: '#666666',
                            fontFamily: 'Inter, sans-serif',
                            lineHeight: 1.4
                          }}>
                            {testimonial.role}, {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="aboutus" style={{
        padding: '4rem 2rem',
        background: '#0B0F12',
        position: 'relative',
        zIndex: '10',
        overflow: 'hidden'
      }}>
        {/* Background Grid */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.3,
          pointerEvents: 'none'
        }} />

        {/* Radial Gradient */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '80%',
          background: 'radial-gradient(circle at center, rgba(0, 191, 153, 0.05), transparent 60%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 260px',
            gap: '2.5rem',
            alignItems: 'start'
          }}>
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{
                fontSize: '0.75rem',
                color: '#00bf99',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '2.5px',
                fontFamily: 'Inter, sans-serif',
                marginBottom: '1rem',
                display: 'inline-block',
                padding: '0.35rem 0.8rem',
                background: 'rgba(0, 191, 153, 0.1)',
                borderRadius: '100px',
                border: '1px solid rgba(0, 191, 153, 0.2)'
              }}>
                About Us
              </div>

              <h2 style={{
                fontSize: '1.6rem',
                fontWeight: '400',
                lineHeight: '1.25',
                color: '#E6EEF0',
                fontFamily: 'Space Grotesk, sans-serif',
                marginBottom: '1rem'
              }}>
                Solving Infrastructure's Toughest Problems with AI.{' '}
                <span style={{ color: '#00bf99' }}>Together.</span>
              </h2>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                fontSize: '0.88rem',
                color: '#B9C8C9',
                lineHeight: '1.6',
                fontFamily: 'Inter, sans-serif'
              }}>
                <p style={{ margin: 0 }}>
                  At <span style={{ color: '#00bf99', fontWeight: '600' }}>Pathsetter AI</span>, we're re-inventing infrastructure project management — powered by intelligence, simplicity, and deep industry empathy.
                </p>

                <p style={{ margin: 0 }}>
                  Our founding team has lived the pain of infrastructure execution first-hand. We've seen how projects falter under complexity, communication gaps, and fragmented tools. That's why we set out to build <span style={{ color: '#00bf99', fontWeight: '600' }}>Alfred</span>—an AI-native projects decision engine designed for the real world of infrastructure.
                </p>

                <p style={{ margin: 0 }}>
                  But we're not building in isolation. We're co-creating Alfred with project managers, site engineers, contractors, and clients across the industry. Every feature, workflow, and insight is shaped by real users solving real challenges on the ground.
                </p>

                <div style={{
                  background: 'linear-gradient(145deg, rgba(22, 27, 31, 0.6) 0%, rgba(11, 15, 18, 0.8) 100%)',
                  border: '1px solid rgba(0, 191, 153, 0.2)',
                  borderRadius: '10px',
                  padding: '0.9rem',
                  marginTop: '0.2rem'
                }}>
                  <div style={{
                    fontSize: '0.65rem',
                    color: '#00bf99',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    marginBottom: '0.35rem'
                  }}>
                    Our Mission is Bold:
                  </div>
                  <p style={{
                    margin: 0,
                    fontSize: '0.88rem',
                    color: '#E6EEF0',
                    fontWeight: '500',
                    lineHeight: '1.5'
                  }}>
                    To simplify decision-making, accelerate execution, and bring clarity to every infrastructure project.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Founder Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{
                background: 'linear-gradient(145deg, rgba(22, 27, 31, 0.8) 0%, rgba(11, 15, 18, 0.95) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '14px',
                padding: '1rem',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Decorative Gradient */}
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle, rgba(0, 191, 153, 0.08), transparent 50%)',
                  pointerEvents: 'none'
                }} />

                {/* Founder Image */}
                <div style={{
                  position: 'relative',
                  marginBottom: '0.8rem'
                }}>
                  <img 
                    src={FounderImage} 
                    alt="Sridhar Gadhi" 
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      display: 'block',
                      border: '2px solid rgba(0, 191, 153, 0.2)'
                    }}
                  />
                </div>

                {/* Founder Info */}
                <div style={{
                  position: 'relative',
                  zIndex: 2,
                  textAlign: 'center'
                }}>
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#E6EEF0',
                    fontFamily: 'Space Grotesk, sans-serif',
                    marginBottom: '0.2rem'
                  }}>
                    Sridhar Gadhi
                  </h3>
                  
                  <div style={{
                    fontSize: '0.7rem',
                    color: '#00bf99',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '0.7rem'
                  }}>
                    Founder & CEO
                  </div>

                  {/* LinkedIn Button */}
                  <a 
                    href="https://www.linkedin.com/in/sridhargadhi" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      background: 'rgba(0, 191, 153, 0.1)',
                      border: '1px solid rgba(0, 191, 153, 0.3)',
                      padding: '0.45rem 0.8rem',
                      borderRadius: '7px',
                      color: '#00bf99',
                      textDecoration: 'none',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.7rem',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 191, 153, 0.2)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 191, 153, 0.2)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 191, 153, 0.1)'
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact/Waitlist Section */}
      <section id="contactus" style={{
        padding: '6rem 2rem',
        background: '#0B0F12',
        position: 'relative',
        zIndex: '10',
        overflow: 'hidden'
      }}>
        {/* Background Grid */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.3,
          pointerEvents: 'none'
        }} />

        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{
              fontSize: '0.85rem',
              color: '#B9C8C9',
              fontWeight: '400',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '3rem',
              textAlign: 'left'
            }}>
              JOIN THE WAITLIST
            </h2>

            <form style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {/* Full Name */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  color: '#B9C8C9',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '0.5rem'
                }}>
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.2rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    color: '#E6EEF0',
                    fontSize: '0.9rem',
                    fontFamily: 'Inter, sans-serif',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00bf99'
                    e.target.style.background = 'rgba(0, 191, 153, 0.05)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                    e.target.style.background = 'rgba(255, 255, 255, 0.03)'
                  }}
                />
              </div>

              {/* Email ID */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  color: '#B9C8C9',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '0.5rem'
                }}>
                  Email ID
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.2rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    color: '#E6EEF0',
                    fontSize: '0.9rem',
                    fontFamily: 'Inter, sans-serif',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00bf99'
                    e.target.style.background = 'rgba(0, 191, 153, 0.05)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                    e.target.style.background = 'rgba(255, 255, 255, 0.03)'
                  }}
                />
              </div>

              {/* Designation */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  color: '#B9C8C9',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '0.5rem'
                }}>
                  Designation
                </label>
                <input
                  type="text"
                  placeholder="Product Manager"
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.2rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    color: '#E6EEF0',
                    fontSize: '0.9rem',
                    fontFamily: 'Inter, sans-serif',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00bf99'
                    e.target.style.background = 'rgba(0, 191, 153, 0.05)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                    e.target.style.background = 'rgba(255, 255, 255, 0.03)'
                  }}
                />
              </div>
            </form>

            {/* Submit Button */}
            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                style={{
                  padding: '0.9rem 3rem',
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '50px',
                  color: '#E6EEF0',
                  fontSize: '0.9rem',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#00bf99'
                  e.currentTarget.style.background = 'rgba(0, 191, 153, 0.1)'
                  e.currentTarget.style.color = '#00bf99'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = '#E6EEF0'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Submit Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

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
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '4rem',
            marginBottom: '3rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
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
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem'
            }}>
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
