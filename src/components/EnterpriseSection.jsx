import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules'

const enterpriseFeatures = [
  {
    title: "JV Consortium Sandbox",
    subtitle: "Isolated Multi-Party Workspace",
    description: "Spin up shared yet isolated data workspaces for joint ventures. Ensure different contractors, consultants, and developers collaborate under strict data walls with zero leak risk.",
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
    title: "Sovereign & On-Premise Cloud",
    subtitle: "Government & Agency Compliant",
    description: "Deploys directly on-premise or within national government cloud architectures (NIC, AWS GovCloud) to meet strict capital project hosting regulations.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </svg>
    )
  },
  {
    title: "Audit-Grade Accountability",
    subtitle: "Traceable Claims Logic",
    description: "Every contract obligation matched or claim auto-drafted includes exact page, clause, and sub-clause reference citations, ensuring AI-generated items withstand legal audits.",
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
    title: "Historical Intelligence",
    subtitle: "Benchmark Across Past Packages",
    description: "Leverage machine learning to analyze delay patterns, material price escalation, and dispute outcomes across historical packages to optimize future bids.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    )
  },
  {
    title: "Granular Access Governance",
    subtitle: "Contractor vs Owner Privileges",
    description: "Define distinct permission boundaries for JV partners, independent engineers, authority auditors, and subcontractors, controlling document visibility at a granular scale.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    )
  },
  {
    title: "Connected Infrastructure APIs",
    subtitle: "Interoperable with Design & GIS",
    description: "Connects with custom ERPs, GIS databases, and engineering design engines (Autodesk) via secure enterprise APIs for complete data alignment.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    )
  }
]

function EnterpriseFeature({ feature, index }) {
  return (
    <div
      className="bg-primary-bg border border-black/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden flex flex-col min-h-[200px] transition-all duration-300 hover:border-black/20"
    >
      <div className="relative z-[2] flex flex-col gap-6 h-full">
        <div className="w-12 h-12 bg-accent/5 border border-accent/10 rounded-xl flex items-center justify-center text-accent transition-all duration-400 hover:scale-110">
          {React.cloneElement(feature.icon, { width: 32, height: 32, stroke: "currentColor" })}
        </div>

        <div className="flex flex-col gap-2 mt-6">
          <h3 className="font-accent text-xl text-secondary-light font-semibold">{feature.title}</h3>
          <div className="font-primary text-[0.8rem] text-secondary-dark uppercase tracking-wider font-medium">{feature.subtitle}</div>
          <p className="font-primary text-[0.9rem] text-secondary-mid leading-relaxed opacity-90 transition-opacity duration-300">{feature.description}</p>
        </div>
      </div>
    </div>
  )
}

function EnterpriseSection() {
  const swiperRef = useRef(null)

  return (
    <section className="pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-20 lg:pb-32 px-4 sm:px-8 bg-primary-light relative z-10 overflow-hidden border-t border-black/5">
      {/* Background Grid */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Radial Gradient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 143, 112, 0.01), transparent 60%)'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-accent uppercase tracking-[2px] mb-4 inline-block py-1.5 px-4 bg-accent/5 rounded-full border border-accent/10"
          >
            Enterprise Ready
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-secondary-light font-accent mb-4 sm:mb-6 px-4"
          >
            Built for Scale & Security
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-secondary-mid max-w-[600px] mx-auto leading-relaxed font-primary px-4"
          >
            Enterprise-grade infrastructure designed to handle your most critical projects with uncompromising security and control.
          </motion.p>
        </div>

        <div className="w-full py-8 relative">
          {/* Navigation Buttons */}
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => swiperRef.current?.slidePrev()}
            className="enterprise-nav-btn enterprise-nav-prev hidden md:block absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 z-10 bg-transparent cursor-pointer p-2 rounded-full transition-transform duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#008f70" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next slide"
            onClick={() => swiperRef.current?.slideNext()}
            className="enterprise-nav-btn enterprise-nav-next hidden md:block absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 z-10 bg-transparent cursor-pointer p-2 rounded-full transition-transform duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#008f70" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          <Swiper
            onSwiper={(swiper) => { swiperRef.current = swiper }}
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
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
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
