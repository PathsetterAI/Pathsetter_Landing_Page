import React from 'react'
import { motion } from 'framer-motion'

function ProblemSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-4 sm:py-6 px-4 sm:px-8 bg-primary-bg relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[1000px] mx-auto flex flex-col gap-6 items-center"
      >
        <div className="text-xs sm:text-sm text-accent font-semibold uppercase tracking-[3px] font-primary mb-2 inline-block py-2 px-4 bg-white/5 rounded-full border border-white/10">
          The Challenge
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.2] text-secondary-light font-accent m-0 max-w-[900px]">
          The Era of “Brute Force”<br className="hidden sm:block" /> Project Delivery Is Over.
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-secondary-mid leading-[1.6] font-primary font-normal max-w-[800px] m-0">
          For decades, capital projects were delivered through sheer willpower—fragmented data, siloed teams, and reactive decision-making. As infrastructure grows more complex, that model has reached its breaking point.
        </p>
      </motion.div>
    </section>
  )
}

export default ProblemSection
