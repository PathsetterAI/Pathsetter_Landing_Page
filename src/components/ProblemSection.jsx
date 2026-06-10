import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function ProblemSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  // Parallax shift from y: 50 to y: -50
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <motion.section 
      ref={containerRef} 
      style={{ y }}
      className="min-h-[90vh] flex flex-col items-center justify-center py-20 px-4 sm:px-8 bg-primary-bg relative z-10 text-center overflow-hidden"
    >
      {/* Premium ambient backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto flex flex-col gap-8 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-10%" }}
          className="text-xs sm:text-sm text-accent font-semibold uppercase tracking-[3px] font-primary mb-2 inline-block py-2 px-4 bg-white/5 rounded-full border border-white/10 backdrop-blur-md"
        >
          The Challenge
        </motion.div>

        <h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] text-secondary-light font-accent m-0 max-w-[950px] tracking-tight"
        >
          <span className="block overflow-hidden py-1">
            <motion.span 
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-10%" }}
              className="block"
            >The Era of “Brute Force”</motion.span>
          </span>
          <span className="block overflow-hidden py-1 text-secondary-mid">
            <motion.span 
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
              viewport={{ once: true, margin: "-10%" }}
              className="block font-normal"
            >Project Delivery Is Over.</motion.span>
          </span>
        </h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, margin: "-10%" }}
          className="text-base sm:text-lg md:text-xl text-secondary-mid leading-[1.65] font-primary font-light max-w-[800px] m-0 opacity-90"
        >
          For decades, capital projects were delivered through sheer willpower—fragmented data, siloed teams, and reactive decision-making. As infrastructure grows more complex, that model has reached its breaking point.
        </motion.p>
      </div>
    </motion.section>
  )
}

export default ProblemSection
