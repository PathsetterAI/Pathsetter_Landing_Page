import React from 'react'
import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
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
  )
}
