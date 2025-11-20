import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
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

function WorkflowTimeline({ features }) {
  const [hoveredStep, setHoveredStep] = useState(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', width: '100%' }}>
      {/* Progress Track */}
      <div style={{ position: 'relative', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', margin: '0 2rem' }}>
        {/* Full Bar (Always Visible) */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, #00bf99, #00d9a8)',
            borderRadius: '4px',
            boxShadow: '0 0 20px rgba(0, 191, 153, 0.3)',
            opacity: 0.5
          }}
        />

        {/* Nodes */}
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: 0, 
          width: '100%', 
          transform: 'translateY(-50%)',
          display: 'flex', 
          justifyContent: 'space-between' 
        }}>
          {features.map((feature, index) => {
            const isActive = index === hoveredStep
            
            return (
              <div 
                key={index}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                style={{ 
                  cursor: 'pointer', 
                  position: 'relative',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: isActive ? 100 : 1
                }}
              >
                {/* Node Circle */}
                <motion.div
                  animate={{
                    scale: isActive ? 1.2 : 1,
                    backgroundColor: '#0B0F12',
                    borderColor: isActive ? '#00bf99' : '#00bf99', // Always green border since bar is full
                    boxShadow: isActive ? '0 0 20px rgba(0, 191, 153, 0.6)' : 'none'
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    border: '2px solid',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                    position: 'relative',
                    background: '#0B0F12'
                  }}
                >
                  <div style={{
                    color: isActive ? '#00bf99' : 'rgba(0, 191, 153, 0.5)', // Always slightly green
                    transition: 'color 0.3s'
                  }}>
                    {React.cloneElement(feature.icon, { width: 18, height: 18 })}
                  </div>
                </motion.div>

                {/* Label (Below Node) - Only visible when NOT active */}
                {!isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{
                      position: 'absolute',
                      top: '50px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      textAlign: 'center',
                      width: '180px',
                      fontSize: '1rem',
                      fontWeight: '500',
                      fontFamily: 'Inter, sans-serif',
                      color: '#E6EEF0',
                      pointerEvents: 'none'
                    }}
                  >
                    {feature.title}
                  </motion.div>
                )}

                {/* Active Content Popover - Anchored to bottom of node */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95, x: '-50%' }}
                      animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
                      exit={{ opacity: 0, y: 10, scale: 0.95, x: '-50%' }}
                      transition={{ duration: 0.2 }}
                      style={{
                        position: 'absolute',
                        top: '55px',
                        left: '50%',
                        width: '320px',
                        background: 'rgba(11, 15, 18, 0.95)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(0, 191, 153, 0.2)',
                        borderRadius: '16px',
                        padding: '1.5rem',
                        zIndex: 100,
                        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)',
                        textAlign: 'center',
                        transformOrigin: 'top center'
                      }}
                    >
                      {/* Arrow */}
                      <div style={{
                        position: 'absolute',
                        top: '-6px',
                        left: '50%',
                        transform: 'translateX(-50%) rotate(45deg)',
                        width: '12px',
                        height: '12px',
                        background: '#0B0F12',
                        borderLeft: '1px solid rgba(0, 191, 153, 0.2)',
                        borderTop: '1px solid rgba(0, 191, 153, 0.2)',
                        zIndex: 101
                      }} />

                      <h3 style={{
                        color: '#E6EEF0',
                        fontSize: '1.1rem',
                        fontFamily: 'Space Grotesk, sans-serif',
                        margin: '0 0 0.5rem 0'
                      }}>
                        {feature.title}
                      </h3>

                      <div style={{
                        fontSize: '0.75rem',
                        color: '#00bf99',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '1rem',
                        fontWeight: '600'
                      }}>
                        {feature.subtitle}
                      </div>
                      
                      <p style={{
                        fontSize: '0.9rem',
                        color: '#B9C8C9',
                        lineHeight: '1.6',
                        margin: 0,
                        fontFamily: 'Inter, sans-serif'
                      }}>
                        {feature.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ...existing code...
function OldTimelineItem({ feature, index, isTop }) {
  return null;
}

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

function EnterpriseFeature({ feature, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered ? 'rgba(0, 191, 153, 0.03)' : 'rgba(255, 255, 255, 0.02)',
        border: `1px solid ${isHovered ? 'rgba(0, 191, 153, 0.3)' : 'rgba(255, 255, 255, 0.05)'}`,
        borderRadius: '12px',
        padding: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        cursor: 'default'
      }}
    >
      {/* Header: Icon + Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{
          color: isHovered ? '#00bf99' : '#B9C8C9',
          transition: 'color 0.3s ease',
          display: 'flex',
          alignItems: 'center'
        }}>
          {React.cloneElement(feature.icon, { width: 24, height: 24 })}
        </div>
        <h3 style={{
          color: '#E6EEF0',
          fontSize: '1.1rem',
          fontFamily: 'Space Grotesk, sans-serif',
          margin: 0,
          fontWeight: '500'
        }}>
          {feature.title}
        </h3>
      </div>

      {/* Subtitle */}
      <div style={{
        fontSize: '0.75rem',
        color: '#00bf99',
        fontFamily: 'Inter, sans-serif',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        opacity: 0.9
      }}>
        {feature.subtitle}
      </div>

      {/* Description */}
      <p style={{
        fontSize: '0.8rem',
        color: '#B9C8C9',
        lineHeight: '1.5',
        fontFamily: 'Inter, sans-serif',
        margin: 0,
        opacity: 0.7
      }}>
        {feature.description}
      </p>
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
            {['HOME', 'FEATURES', 'ABOUT US', 'CONTACT US'].map((link) => (
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
        padding: '2rem 2rem 4rem 2rem',
        background: '#0B0F12',
        position: 'relative',
        zIndex: '20'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '4rem'
        }}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              alignSelf: 'center',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <div style={{
              fontSize: '0.9rem',
              color: '#00bf99',
              fontWeight: '400',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '1rem'
            }}>
              ALFRED USP
            </div>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '400',
              lineHeight: '1.2',
              color: '#E6EEF0',
              fontFamily: 'Space Grotesk, sans-serif',
              maxWidth: '800px'
            }}>
              The Alfred Advantage— Unlock the power of Gen AI & Project Knowledge Graphs
            </h2>
          </motion.div>

          {/* Features Timeline - Interactive Workflow */}
          <div style={{ 
            position: 'relative', 
            padding: '4rem 0', 
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%'
          }}>
            <WorkflowTimeline features={features} />
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
        padding: '4rem 2rem',
        background: '#0B0F12',
        position: 'relative',
        zIndex: '10'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            fontSize: '0.9rem',
            color: '#B9C8C9',
            fontWeight: '400',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontFamily: 'Inter, sans-serif',
            marginBottom: '2rem'
          }}>
            ENTERPRISE READY
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}>
            {enterpriseFeatures.map((feature, index) => (
              <EnterpriseFeature key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing
