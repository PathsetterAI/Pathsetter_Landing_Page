import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules'

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

function EnterpriseFeature({ feature, index }) {
  return (
    <motion.div
      className="bg-gradient-to-b from-[rgba(22,27,31,0.6)] to-[rgba(11,15,18,0.8)] border border-accent/40 rounded-2xl p-7 relative overflow-hidden backdrop-blur-xl flex flex-col min-h-[200px] shadow-[0_20px_40px_-5px_rgba(0,0,0,0.4),inset_0_0_20px_rgba(0,191,153,0.05)] transition-all duration-300 before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] before:bg-[length:40px_40px] before:opacity-30 before:pointer-events-none before:[mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative z-[2] flex flex-col gap-6 h-full">
        <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 rounded-xl flex items-center justify-center text-accent transition-all duration-400 shadow-[0_8px_24px_rgba(0,191,153,0.15)] hover:scale-110">
          {React.cloneElement(feature.icon, { width: 32, height: 32 })}
        </div>

        <div className="flex flex-col gap-2 mt-6">
          <h3 className="font-accent text-xl text-secondary-light font-semibold">{feature.title}</h3>
          <div className="font-primary text-[0.8rem] text-slate-400 uppercase tracking-wider font-medium">{feature.subtitle}</div>
          <p className="font-primary text-[0.9rem] text-secondary-mid leading-relaxed opacity-80 hover:opacity-100 transition-opacity duration-300">{feature.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

function EnterpriseSection() {
  const swiperRef = useRef(null)

  return (
    <section className="py-12 sm:py-20 lg:py-32 px-4 sm:px-8 bg-primary-bg relative z-10 overflow-hidden">
      {/* Background Grid */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Radial Gradient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 191, 153, 0.05), transparent 60%)'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm text-accent font-semibold uppercase tracking-[3px] font-primary mb-4 inline-block py-2 px-4 bg-accent/10 rounded-full border border-accent/20"
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
            onClick={() => swiperRef.current?.slidePrev()}
            className="enterprise-nav-btn enterprise-nav-prev hidden md:block absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 z-10 bg-transparent border-none cursor-pointer p-0 transition-transform duration-300 outline-none hover:scale-110"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00bf99" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="enterprise-nav-btn enterprise-nav-next hidden md:block absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 z-10 bg-transparent border-none cursor-pointer p-0 transition-transform duration-300 outline-none hover:scale-110"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00bf99" strokeWidth="2.5" strokeLinecap="round">
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
