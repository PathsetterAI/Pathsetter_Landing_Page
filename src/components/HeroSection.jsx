import React from 'react'
import { motion } from 'framer-motion'
// import SolarFarmVideo from '../assets/usp/Indian_Solar_Farm_Construction_Project.mp4'
import SolarFarmVideo from '../assets/usp/solar2.mp4'

function HeroSection() {
  return (
    <section id="home" className="hero mt-0 p-8 min-h-screen flex flex-col items-center justify-start pt-[37vh] text-center relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-screen h-screen object-cover z-0 opacity-40"
      >
        <source src={SolarFarmVideo} type="video/mp4" />
      </video>

      <motion.div 
        className="max-w-[900px] flex flex-col gap-6 items-center relative z-[2]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-[7rem] font-normal leading-[1.15] text-secondary-light font-quantico tracking-[-1.5px] m-0">
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
        
        <p className="text-2xl text-secondary-mid leading-[1.7] font-primary font-normal max-w-[700px] m-0">
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
