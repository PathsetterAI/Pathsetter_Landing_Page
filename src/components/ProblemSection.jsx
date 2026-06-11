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

      <div className="max-w-[1100px] mx-auto flex flex-col gap-8 items-center relative z-10">
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

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12 border-t border-white/10 pt-12 text-left">
          {[
            {
              metric: "₹5.71 Lakh Cr",
              label: "MoSPI Cost Escalation",
              desc: "Cost overrun across 458 monitored Indian infrastructure projects with an average 36-month slippage.",
              source: "INDIA MoSPI REPORT"
            },
            {
              metric: "80% / 20 mo",
              label: "Average Overrun & Delay",
              desc: "The average cost overrun and schedule slippage across $1T+ of analyzed global capital projects.",
              source: "MCKINSEY MEGAPROJECTS"
            },
            {
              metric: "$43M / 14 mo",
              label: "Dispute Value & Resolution",
              desc: "Average dispute size and time to resolve. Primary causes cited are contract administration failures.",
              source: "ARCADIS DISPUTES REPORT"
            }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-[#080a0f] border border-white/5 rounded-xl p-6 flex flex-col justify-between min-h-[160px] hover:bg-[#0c0e15] hover:border-white/10 transition-colors duration-300"
            >
              <div>
                <span className="text-[0.6rem] text-slate-500 font-mono tracking-widest uppercase block mb-2">{stat.source}</span>
                <div className="text-2xl sm:text-3xl font-accent font-bold text-accent tracking-tight mb-2">{stat.metric}</div>
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">{stat.label}</div>
              </div>
              <p className="text-[0.8rem] text-secondary-mid leading-relaxed font-primary opacity-80 mt-auto">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default ProblemSection
