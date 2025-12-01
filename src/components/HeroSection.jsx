import React from 'react'
import { motion } from 'framer-motion'
import SolarFarmVideo from '../assets/usp/Indian_Solar_Farm_Construction_Project.mp4'

function HeroSection() {
  return (
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
  )
}

export default HeroSection
