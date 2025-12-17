import React from 'react'
import { motion } from 'framer-motion'
// import SolarFarmVideo from '../assets/usp/Indian_Solar_Farm_Construction_Project.mp4'
import SolarFarmVideo from '../assets/usp/solar2.mp4'

function HeroSection() {
  return (
    <section id="home" className="hero relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-30 md:opacity-40"
        style={{
          minWidth: '100%',
          minHeight: '100%',
          transform: 'translateX(-50%) translateY(-50%)',
          top: '50%',
          left: '50%'
        }}
      >
        <source src={SolarFarmVideo} type="video/mp4" />
      </video>

      <motion.div 
        className="relative z-10 w-full max-w-[900px] flex flex-col gap-4 sm:gap-6 items-center px-4 sm:px-8 py-20 sm:py-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[7rem] font-normal leading-[1.15] text-secondary-light font-quantico tracking-[-1.5px] m-0 w-full">
          {['The', 'Future', 'of'].map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-[0.3em] will-change-transform"
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
          {['Infrastructure'].map((word, index) => (
            <motion.span
              key={index}
              className="inline-block will-change-transform"
              initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3,
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
              className="inline-block will-change-transform bg-gradient-to-br from-accent to-accent-hover bg-clip-text text-transparent"
              style={{
                marginRight: index === 0 ? '0.3em' : '0',
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
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-secondary-mid leading-[1.7] font-primary font-normal max-w-full sm:max-w-[700px] m-0">
          {['Harness', 'AI', 'to', 'reimagine', 'how'].map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-[0.3em] will-change-transform"
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
              className="inline-block will-change-transform"
              style={{
                marginRight: index < 3 ? '0.3em' : '0',
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
