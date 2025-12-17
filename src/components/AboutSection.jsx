import React from 'react'
import { motion } from 'framer-motion'
import FounderImage from '../assets/sponsors/Founder.png'

export default function AboutSection() {
  return (
    <section id="aboutus" className="py-16 px-8 bg-primary-bg relative z-10 overflow-hidden">
      {/* Background Grid */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Radial Gradient */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 191, 153, 0.05), transparent 60%)'
        }}
      />

      <div className="max-w-[1000px] mx-auto relative z-10">
        <div className="grid grid-cols-[1fr_260px] gap-10 items-start">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs text-accent font-semibold uppercase tracking-[2.5px] font-primary mb-4 inline-block py-1.5 px-3 bg-accent/10 rounded-full border border-accent/20">
              About Us
            </div>

            <h2 className="text-[1.6rem] font-normal leading-tight text-secondary-light font-accent mb-4">
              Solving Infrastructure's Toughest Problems with AI.{' '}
              <span className="text-accent">Together.</span>
            </h2>

            <div className="flex flex-col gap-3.5 text-[0.88rem] text-secondary-mid leading-relaxed font-primary">
              <p className="m-0">
                At <span className="text-accent font-semibold">Pathsetter AI</span>, we're re-inventing infrastructure project management — powered by intelligence, simplicity, and deep industry empathy.
              </p>

              <p className="m-0">
                Our founding team has lived the pain of infrastructure execution first-hand. We've seen how projects falter under complexity, communication gaps, and fragmented tools. That's why we set out to build <span className="text-accent font-semibold">Alfred</span>—an AI-native projects decision engine designed for the real world of infrastructure.
              </p>

              <p className="m-0">
                But we're not building in isolation. We're co-creating Alfred with project managers, site engineers, contractors, and clients across the industry. Every feature, workflow, and insight is shaped by real users solving real challenges on the ground.
              </p>

              <div className="bg-gradient-to-br from-[rgba(22,27,31,0.6)] to-[rgba(11,15,18,0.8)] border border-accent/20 rounded-[10px] p-3.5 mt-0.5">
                <div className="text-[0.65rem] text-accent font-semibold uppercase tracking-[2px] mb-1.5">
                  Our Mission is Bold:
                </div>
                <p className="m-0 text-[0.88rem] text-secondary-light leading-snug font-primary">
                  Make infrastructure project delivery smarter, faster, and stress-free for everyone — from the field to the boardroom.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Founder Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-28"
          >
            <div className="bg-gradient-to-br from-[rgba(22,27,31,0.7)] to-[rgba(11,15,18,0.9)] border border-accent/30 rounded-2xl p-5 shadow-[0_8px_20px_rgba(0,191,153,0.1)] flex flex-col items-center gap-3">
              {/* Founder Photo */}
              <div className="w-[150px] h-[150px] overflow-hidden bg-accent/5">
                <img 
                  src={FounderImage} 
                  alt="Founder" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Founder Info */}
              <div className="text-center">
                <h3 className="text-base font-semibold text-secondary-light font-accent m-0 mb-0.5">
                  Sridhar Gadhi
                </h3>
                <p className="text-xs text-accent font-primary m-0 font-medium">
                  Founder & CEO
                </p>
              </div>

              {/* Divider */}
              <div 
                className="w-full h-px my-1"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(0, 191, 153, 0.3), transparent)'
                }}
              />

              {/* Connect Button */}
              <div className="w-full">
                <a
                  href="https://in.linkedin.com/in/sridhargadhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 bg-accent/10 border border-accent/30 rounded-lg text-accent text-xs font-semibold font-primary no-underline transition-all duration-300 cursor-pointer hover:bg-accent/20 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,191,153,0.2)]"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
