import React from 'react'
import { motion } from 'framer-motion'
import FounderImage from '../assets/sponsors/Founder.png'

export default function AboutSection() {
  return (
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
                  lineHeight: '1.55',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Make infrastructure project delivery smarter, faster, and stress-free for everyone — from the field to the boardroom.
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
            style={{
              position: 'sticky',
              top: '7rem'
            }}
          >
            <div style={{
              background: 'linear-gradient(145deg, rgba(22, 27, 31, 0.7) 0%, rgba(11, 15, 18, 0.9) 100%)',
              border: '1px solid rgba(0, 191, 153, 0.3)',
              borderRadius: '16px',
              padding: '1.4rem',
              boxShadow: '0 8px 20px rgba(0, 191, 153, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.8rem'
            }}>
              {/* Founder Photo */}
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid rgba(0, 191, 153, 0.3)',
                background: 'rgba(0, 191, 153, 0.05)'
              }}>
                <img 
                  src={FounderImage} 
                  alt="Founder" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Founder Info */}
              <div style={{ textAlign: 'center' }}>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#E6EEF0',
                  fontFamily: 'Space Grotesk, sans-serif',
                  margin: '0 0 0.15rem 0'
                }}>
                  Sridhar Gadhi
                </h3>
                <p style={{
                  fontSize: '0.75rem',
                  color: '#00bf99',
                  fontFamily: 'Inter, sans-serif',
                  margin: 0,
                  fontWeight: '500'
                }}>
                  Founder & CEO
                </p>
              </div>

              {/* Divider */}
              <div style={{
                width: '100%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(0, 191, 153, 0.3), transparent)',
                margin: '0.3rem 0'
              }} />

              {/* Connect Button */}
              <div style={{ width: '100%' }}>
                <a
                  href="https://in.linkedin.com/in/sridhargadhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.6rem 1rem',
                    background: 'rgba(0, 191, 153, 0.1)',
                    border: '1px solid rgba(0, 191, 153, 0.3)',
                    borderRadius: '8px',
                    color: '#00bf99',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    fontFamily: 'Inter, sans-serif',
                    textDecoration: 'none',
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
  )
}
