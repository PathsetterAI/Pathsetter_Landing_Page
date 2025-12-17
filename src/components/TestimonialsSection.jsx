import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'

const testimonials = [
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
]

function TestimonialsSection() {
  return (
    <section className="py-32 px-8 bg-primary-bg relative z-10 overflow-hidden">
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
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-accent font-semibold uppercase tracking-[3px] font-primary mb-4 inline-block py-2 px-4 bg-accent/10 rounded-full border border-accent/20"
          >
            Testimonials
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-normal leading-tight text-secondary-light font-accent mb-6"
          >
            Our Power Users Speak
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-secondary-mid max-w-[600px] mx-auto leading-relaxed font-primary"
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
              <SwiperSlide key={index} className="w-[340px] h-[340px]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full relative"
                >
                  <div className="h-full bg-white rounded-[20px] p-8 relative shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex flex-col gap-6">
                    {/* Icon at Top Left */}
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center -rotate-[5deg]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                      </svg>
                    </div>

                    {/* Testimonial Content */}
                    <div className="flex-1">
                      <p className="text-[0.95rem] leading-relaxed text-[#1a1a1a] font-primary m-0 overflow-hidden line-clamp-6">
                        "{testimonial.testimonial}"
                      </p>
                    </div>

                    {/* Author Info at Bottom */}
                    <div className="flex items-center gap-3 pt-4 border-t border-black/[0.08]">
                      {/* Avatar */}
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center text-base font-semibold text-white font-accent shrink-0">
                        {testimonial.name.charAt(0)}
                      </div>

                      {/* Name & Role */}
                      <div>
                        <div className="text-[0.95rem] font-semibold text-[#1a1a1a] font-primary mb-0.5">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-[#666666] font-primary leading-snug">
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
  )
}

export default TestimonialsSection
