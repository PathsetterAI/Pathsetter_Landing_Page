import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AlfredImage from '../assets/usp/ALFRED.png'
import newcommand from '../assets/usp/newSO.mp4'
import commsvideo from '../assets/usp/commsvideo.mp4'

function FeaturesSection() {
  const [currentVideo, setCurrentVideo] = useState(0)
  const videos = [newcommand, commsvideo]

  return (
    <section id="features" className="py-12 sm:py-20 lg:py-28 px-4 sm:px-8 bg-primary-bg relative z-10 flex items-center justify-center">
      <div className="features-grid max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16 items-center w-full lg:pr-16">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 sm:gap-6 lg:gap-8 text-center lg:text-left items-center lg:items-start"
        >
          <div className="text-xs sm:text-sm text-accent font-normal uppercase tracking-[2px] font-primary flex items-center gap-0">
            Introducing 
            <img src={AlfredImage} alt="Alfred" className="h-6 sm:h-8 object-contain" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-secondary-light font-accent m-0">
            The AI-Native Operating System for<br />
            <span className="text-[#94A3B8]">Infrastructure Capital Projects</span>
          </h2>

          <p className="text-sm sm:text-base text-secondary-mid leading-relaxed font-primary m-0 max-w-[600px]">
          The first platform built on a foundational ontology of the physical world, 
          Alfred unifies the entire infrastructure lifecycle to deliver speed, clarity, and capital certainty.
          </p>
        </motion.div>

        {/* Right Side - Demo Video */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Video Container - Seamless Frame */}
          <div className="bg-black border border-white/10 rounded-2xl overflow-hidden aspect-video relative group">
            
             <AnimatePresence mode='wait'>
                <motion.video
                  key={currentVideo}
                  src={videos[currentVideo]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  autoPlay
                  muted
                  playsInline
                  onEnded={() => setCurrentVideo((prev) => (prev + 1) % videos.length)}
                  className="absolute inset-0 w-full h-full object-fill"
                />
             </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
