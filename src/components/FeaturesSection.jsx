import React from 'react'
import { motion } from 'framer-motion'
import AlfredImage from '../assets/usp/ALFRED.png'
import DemoVideo from '../assets/usp/DemoVideo.mp4'

function FeaturesSection() {
  return (
    <section id="features" className="py-28 px-8 bg-primary-bg relative z-10 flex items-center justify-center">
      <div className="features-grid max-w-[1600px] mx-auto grid grid-cols-[1fr_2fr] gap-12 items-center w-full pr-16">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <div className="text-sm text-accent font-normal uppercase tracking-[2px] font-primary flex items-center gap-0">
            Introducing 
            <img src={AlfredImage} alt="Alfred" className="h-8 object-contain" />
          </div>

          <h2 className="text-5xl font-normal leading-tight text-secondary-light font-accent m-0">
            The AI Project<br />
            <span className="text-accent">Decisions Engine</span>
          </h2>

          <p className="text-lg text-secondary-mid leading-relaxed font-primary m-0">
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
          className="relative"
        >
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/20 rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,191,153,0.15)]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-xl block"
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
