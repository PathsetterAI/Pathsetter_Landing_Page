import React from 'react'
import { motion } from 'framer-motion'
import AlfredImage from '../assets/usp/ALFRED.png'
import DemoVideo from '../assets/usp/DemoVideo.mp4'

function FeaturesSection() {
  return (
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
  )
}

export default FeaturesSection
