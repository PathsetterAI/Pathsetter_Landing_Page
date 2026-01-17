import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// import SolarFarmVideo from '../assets/usp/Indian_Solar_Farm_Construction_Project.mp4'
// import SolarFarmVideo from '../assets/usp/solar2.mp4'
// import WindVideo from '../assets/usp/windvideo.mp4'
import v1 from '../assets/usp/v1.mp4'
import v2 from '../assets/usp/v2.mp4'
import v3 from '../assets/usp/v3.mp4'
import v4 from '../assets/usp/v4.mp4'

function HeroSection() {
  const [currentVideo, setCurrentVideo] = useState(0)
  const videos = [v2, v1, v3, v4]
  return (
    <section id="home" className="hero relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Background Video */}
      <AnimatePresence mode='wait'>
        <motion.video
          key={currentVideo}
          src={videos[currentVideo]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          autoPlay
          muted
          playsInline
          onEnded={() => setCurrentVideo((prev) => (prev + 1) % videos.length)}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          style={{
            minWidth: '100%',
            minHeight: '100%',
            transform: 'translateX(-50%) translateY(-50%)',
            top: '50%',
            left: '50%'
          }}
        />
      </AnimatePresence>

      <motion.div 
        className="relative z-10 w-full max-w-[1000px] flex flex-col gap-8 items-center px-4 sm:px-8 py-20 sm:py-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center gap-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] font-bold leading-[1.1] text-secondary-light font-accent tracking-tight m-0 w-full text-center">
            {['The', 'Agentic', 'AI'].map((word, index) => (
                <motion.span
                key={index}
                className="inline-block mr-[0.25em] will-change-transform"
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
            {['Operating', 'System', 'for'].map((word, index) => (
                <motion.span
                key={index}
                className="inline-block mr-[0.25em] will-change-transform"
                initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ 
                    duration: 0.5, 
                    delay: 0.3 + (index * 0.1),
                    ease: "easeOut" 
                }}
                >
                {word}
                </motion.span>
            ))}
            <br />
            {['Infrastructure', 'Projects'].map((word, index) => (
                <motion.span
                key={index}
                className="inline-block mr-[0.25em] will-change-transform"
                initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ 
                    duration: 0.5, 
                    delay: 0.6 + (index * 0.1),
                    ease: "easeOut" 
                }}
                >
                {word}
                </motion.span>
            ))}
            </h1>
        </div>
        
        <motion.p 
            className="text-base sm:text-lg md:text-xl text-secondary-mid leading-[1.6] font-primary font-normal max-w-[800px] text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
        >
          Alfred transforms project data into real-time execution intelligence across bidding, planning, site execution, supply chain, and compliance.
        </motion.p>

        <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
        >
            <button className="cta-btn bg-white text-black border-none py-3.5 px-8 rounded-lg font-bold cursor-pointer font-primary text-sm tracking-wide uppercase shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:bg-secondary-light hover:scale-105">
                Explore the Platform
            </button>
            <button className="cta-btn bg-transparent text-secondary-light border border-white/20 py-3.5 px-8 rounded-lg font-bold cursor-pointer font-primary text-sm tracking-wide uppercase transition-all duration-300 hover:border-white hover:bg-white/5">
                View Solutions
            </button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
