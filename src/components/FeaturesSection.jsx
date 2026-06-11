import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'
import ScheduleAssistanceVideo from '../assets/schedule assistance.mp4'

function FeaturesSection() {
  const containerRef = useRef(null)
  const introRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const videoFrameRef = useRef(null)

  useGSAP(() => {
    const introTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })

    introTl
      .fromTo(introRef.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.6 }
      )
      .fromTo(titleRef.current.querySelectorAll('.animate-line'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power4.out' },
        '-=0.4'
      )
      .fromTo(descRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(videoFrameRef.current,
        { opacity: 0, scale: 0.96, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power4.out' },
        '-=0.7'
      )
  }, { scope: containerRef })

  return (
    <section 
      id="features" 
      ref={containerRef}
      className="py-20 sm:py-28 px-4 sm:px-8 bg-primary-light relative z-10 flex items-center justify-center overflow-hidden border-t border-black/5"
    >
      <div className="features-grid max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-center w-full lg:pr-16 relative z-10">
        
        {/* Left Side - Text Content */}
        <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
          <div 
            ref={introRef}
            className="text-xs font-mono text-secondary-dark uppercase tracking-[2px] flex items-center gap-2"
          >
            Introducing <span className="font-accent font-bold text-accent text-xl sm:text-2xl tracking-[1px] normal-case ml-1">Alfred</span>
          </div>

          <h2 
            ref={titleRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.2] text-secondary-light font-accent m-0 tracking-tight"
          >
            <span className="block overflow-hidden py-1">
              <span className="animate-line block">The AI-Native OS for</span>
            </span>
            <span className="block overflow-hidden py-1 text-secondary-mid">
              <span className="animate-line block font-normal">Infrastructure Capital Projects</span>
            </span>
          </h2>

          <p 
            ref={descRef}
            className="text-base text-secondary-mid leading-relaxed font-primary font-light m-0 max-w-[600px]"
          >
            The first platform built on a foundational ontology of the physical world, 
            Alfred unifies the entire infrastructure lifecycle to deliver speed, clarity, and capital certainty.
          </p>

          {/* Stepper / Features list */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-4 mt-6 text-left w-full max-w-[550px]"
          >
            {[
              {
                num: "01",
                title: "Contract Compliance Ingestion",
                desc: "Automatically extracts milestones, obligation checklists, and risk playbooks from FIDIC, NHAI, and Metro Rail contracts."
              },
              {
                num: "02",
                title: "Schedule & Critical Path Reasoning",
                desc: "Computes S-curve metrics, float deviation, and critical path delays on project schedules to prevent liquidated damages."
              },
              {
                num: "03",
                title: "Auto-Drafting Notice of Claims",
                desc: "Cross-references daily progress updates and site photos with contract obligations to instantly auto-draft Extension of Time (EOT) notices."
              }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-4 border-l border-black/10 pl-4 py-1.5 hover:border-accent transition-colors duration-300">
                <span className="text-xs font-mono font-bold text-accent shrink-0">{step.num} //</span>
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-semibold text-secondary-light uppercase tracking-wider font-accent">{step.title}</h4>
                  <p className="text-[0.85rem] text-secondary-mid leading-relaxed font-primary opacity-90">{step.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Side - Demo Video */}
        <div 
          ref={videoFrameRef}
          className="relative w-full"
        >
          {/* Video Container - Seamless Frame with Glow */}
          <div className="bg-primary-bg border border-black/10 rounded-2xl overflow-hidden aspect-video relative group shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none z-10" />
            <video
              src={ScheduleAssistanceVideo}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-fill"
            />
          </div>
          {/* Backlight visual glow */}
          <div className="absolute -bottom-8 -right-8 w-1/2 h-1/2 bg-accent/[0.01] rounded-full blur-[80px] pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
