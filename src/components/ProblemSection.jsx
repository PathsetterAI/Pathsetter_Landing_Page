import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ChallengeBg from '../assets/challenge background3.png'

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
      className="min-h-[85vh] flex flex-col justify-center py-24 px-4 sm:px-8 lg:px-16 bg-primary-light relative z-10 text-left overflow-hidden border-t border-black/5"
    >
      {/* Background Image Watermark */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.6] pointer-events-none"
        style={{ backgroundImage: `url(${ChallengeBg})` }}
      />

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-12 lg:gap-20 relative z-10 w-full">

        {/* Left Column: Headline */}
        <div className="flex flex-col gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-xs font-mono text-accent uppercase tracking-[2px] py-1.5 px-4 bg-accent/5 rounded-full border border-accent/10"
          >
            The Challenge
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-secondary-light font-accent m-0 tracking-tight">
            The Era of <br />
            <span className="italic font-normal text-accent font-accent">“Brute Force”</span> <br />
            Project Delivery <br />
            Is Over.
          </h2>
        </div>

        {/* Right Column: Paragraph and stats list */}
        <div className="flex flex-col gap-10 items-start justify-center lg:pt-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-secondary-mid leading-[1.65] font-primary font-light m-0 opacity-90"
          >
            For decades, capital projects were delivered through sheer willpower—fragmented data, siloed teams, and reactive decision-making. As infrastructure grows more complex, that model has reached its breaking point.
          </motion.p>

          {/* Vertical stats list with dividers */}
          <div className="flex flex-col w-full border-t border-black/10">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-4 py-8 border-b border-black/10 items-start hover:bg-black/[0.005] px-2 transition-colors duration-300"
              >
                {/* Stat Metric & Source */}
                <div className="flex flex-col gap-1 text-left">
                  <span className="text-[0.55rem] text-secondary-dark font-mono tracking-widest uppercase">{stat.source}</span>
                  <div className="text-3xl sm:text-4xl font-accent font-bold text-accent tracking-tight">{stat.metric}</div>
                  <div className="text-xs font-semibold text-secondary-light uppercase tracking-wider mt-0.5">{stat.label}</div>
                </div>

                {/* Stat Description */}
                <div className="text-sm text-secondary-mid leading-relaxed font-primary opacity-80 md:pt-6">
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  )
}

export default ProblemSection
