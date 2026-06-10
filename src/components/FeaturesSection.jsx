import React, { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { AnimatePresence, motion } from 'framer-motion'
import AlfredImage from '../assets/usp/ALFRED.png'

const newcommand = "https://storage.googleapis.com/pathsetter_general/Pathsetter_website_videos/newSO.mp4"
const commsvideo = "https://storage.googleapis.com/pathsetter_general/Pathsetter_website_videos/ncommsvideo.mp4"

function FeaturesSection() {
  const [currentVideo, setCurrentVideo] = useState(0)
  const containerRef = useRef(null)
  const introRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const videoFrameRef = useRef(null)

  const videos = [newcommand, commsvideo]

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
      className="py-20 sm:py-28 px-4 sm:px-8 bg-primary-bg relative z-10 flex items-center justify-center overflow-hidden"
    >
      <div className="features-grid max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-center w-full lg:pr-16 relative z-10">
        
        {/* Left Side - Text Content */}
        <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
          <div 
            ref={introRef}
            className="text-xs sm:text-sm text-accent font-normal uppercase tracking-[2px] font-primary flex items-center gap-2"
          >
            Introducing 
            <img src={AlfredImage} alt="Alfred" className="h-6 sm:h-8 object-contain" />
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
        </div>

        {/* Right Side - Demo Video */}
        <div 
          ref={videoFrameRef}
          className="relative w-full"
        >
          {/* Video Container - Seamless Frame with Glow */}
          <div className="bg-[#040608] border border-white/10 rounded-2xl overflow-hidden aspect-video relative group shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10" />
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
          {/* Backlight visual glow */}
          <div className="absolute -bottom-8 -right-8 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
