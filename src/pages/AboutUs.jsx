import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import FounderImage from '../assets/sponsors/Founder.png'

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-primary-bg overflow-x-hidden">
      <SEO 
        title="About Us" 
        description="We are building the AI-Native Operating System for Infrastructure. Meet the team behind Pathsetter AI."
      />
      <Navbar />
      
      <main className="flex-grow pt-24 sm:pt-32">
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 bg-primary-bg relative z-10 overflow-hidden">
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
              background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.03), transparent 60%)'
            }}
          />

          <div className="max-w-[1000px] mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-8 md:gap-10 items-start">
              {/* Left Side - Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center md:text-left"
              >
                <div className="text-xs text-accent font-semibold uppercase tracking-[2.5px] font-primary mb-4 inline-block py-1.5 px-3 bg-white/5 rounded-full border border-white/10">
                  About Us
                </div>

                <h2 className="text-xl sm:text-2xl md:text-[1.6rem] font-normal leading-tight text-secondary-light font-accent mb-4">
                  Solving Infrastructure's Toughest Problems with AI.{' '}
                  <span className="text-accent">Together.</span>
                </h2>

                <div className="flex flex-col gap-3.5 text-sm sm:text-[0.88rem] text-secondary-mid leading-relaxed font-primary">
                  <p className="m-0">
                    At <span className="text-accent font-semibold">Pathsetter AI</span>, we're re-inventing infrastructure project delivery — powered by intelligence, simplicity, and deep industry empathy.
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
                className="md:sticky md:top-28 mx-auto"
              >
                <div className="bg-gradient-to-br from-[rgba(22,27,31,0.7)] to-[rgba(11,15,18,0.9)] border border-accent/30 rounded-2xl p-5 shadow-[0_8px_20px_rgba(0,191,153,0.1)] flex flex-col items-center gap-3 max-w-[280px] mx-auto">
                  {/* Founder Photo */}
                  <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] overflow-hidden bg-accent/5">
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
                  
                  {/* Quote */}
                  <p className="text-[0.75rem] text-secondary-mid italic text-center leading-relaxed m-0 font-primary">
                    "We don't just build software. We build the future of how infrastructure is delivered."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
