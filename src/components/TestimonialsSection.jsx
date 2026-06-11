import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'

const testimonials = [
  {
    name: 'Vivian',
    role: 'Director of Contracts',
    company: 'Consolidated Metro JV',
    testimonial: 'Running simultaneous packages on our metro corridor was a claims nightmare. Alfred automated our Extension of Time (EOT) documentation under FIDIC Clause 8.4, saving us from massive liquidated damages.'
  },
  {
    name: 'Srinivasan',
    role: 'VP of Projects',
    company: 'Premier Infrastructure EPC',
    testimonial: 'Alfred transformed how we audit subcontractor progress billing. By cross-referencing site DPRs with BOQ schedules, the AI caught 18% over-billing deviations, protecting our project margins.'
  },
  {
    name: 'Leena',
    role: 'Independent Engineer',
    company: 'National Highway Authority Project',
    testimonial: 'As the authority representative, verifying contractor claims used to take months of manual auditing. Alfred maps delay events directly to geo-tagged site evidence, reducing review timelines by 80%.'
  },
  {
    name: 'Rajesh',
    role: 'Head of Planning',
    company: 'High-Speed Rail JV',
    testimonial: 'With multiple joint venture partners, keeping schedule logic and float consumption aligned is critical. Alfred unifies schedule syncs and S-curves into a single verifiable truth, eliminating alignment disputes.'
  },
  {
    name: 'Manjunath',
    role: 'Project Director',
    company: 'Mega Bridge & Civil Works',
    testimonial: 'I was skeptical about AI in civil construction until Alfred automatically flagged a critical-path slip in piling work three weeks ahead of time, allowing us to deploy extra rigs and prevent penalties.'
  }
]

function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-20 lg:py-32 px-4 sm:px-8 bg-primary-bg relative z-10 overflow-hidden border-t border-black/5">
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
            Testimonials
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-secondary-light font-accent mb-4 sm:mb-6 px-4"
          >
            Our Power Users Speak
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-secondary-mid max-w-[600px] mx-auto leading-relaxed font-primary px-4"
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
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="enterprise-swiper"
            style={{ paddingBottom: '3rem' }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="w-[280px] sm:w-[320px] md:w-[340px] h-auto min-h-[300px] sm:min-h-[340px]">
                <div className="h-full relative">
                  <div className="h-full bg-primary-light border border-black/10 rounded-[20px] p-6 sm:p-8 relative shadow-sm hover:border-black/20 transition-all duration-300 flex flex-col gap-4 sm:gap-6">
                    {/* Icon at Top Left */}
                    <div className="w-10 h-10 bg-accent/5 border border-accent/10 rounded-lg flex items-center justify-center -rotate-[5deg]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008f70" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                      </svg>
                    </div>

                    {/* Testimonial Content */}
                    <div className="flex-1">
                      <p className="text-[0.95rem] leading-relaxed text-secondary-light font-primary m-0 overflow-hidden line-clamp-6">
                        "{testimonial.testimonial}"
                      </p>
                    </div>

                    {/* Author Info at Bottom */}
                    <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                      {/* Avatar */}
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center text-base font-semibold text-white font-accent shrink-0">
                        {testimonial.name.charAt(0)}
                      </div>

                      {/* Name & Role */}
                      <div>
                        <div className="text-[0.95rem] font-semibold text-secondary-light font-primary mb-0.5">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-secondary-mid font-primary leading-snug">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
