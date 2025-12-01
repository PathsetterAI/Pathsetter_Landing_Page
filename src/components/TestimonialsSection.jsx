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
            {testimonials.map((testimonial, index) => (
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
  )
}

export default TestimonialsSection
