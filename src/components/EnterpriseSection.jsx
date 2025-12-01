import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'

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
  }
]

function EnterpriseFeature({ feature, index }) {
  return (
    <motion.div
      className="bento-card"
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

function EnterpriseSection() {
  return (
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
  )
}

export default EnterpriseSection
