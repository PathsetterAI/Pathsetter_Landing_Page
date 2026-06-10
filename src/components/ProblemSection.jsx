import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function ProblemSection() {
  const containerRef = useRef(null)
  const tagRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)

  useGSAP(() => {
    // Subtle parallax shift on scroll
    gsap.fromTo(containerRef.current,
      { y: 50 },
      {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    )

    // Tag reveal
    gsap.fromTo(tagRef.current,
      { opacity: 0, y: 15, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: tagRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    )

    // Title lines reveal
    const lines = titleRef.current.querySelectorAll('.animate-line')
    gsap.fromTo(lines,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )

    // Description reveal with letter-spacing transition
    gsap.fromTo(descRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: descRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    )
  }, { scope: containerRef })

  return (
    <section 
      ref={containerRef} 
      className="min-h-[90vh] flex flex-col items-center justify-center py-20 px-4 sm:px-8 bg-primary-bg relative z-10 text-center overflow-hidden"
    >
      {/* Premium ambient backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto flex flex-col gap-8 items-center relative z-10">
        <div 
          ref={tagRef} 
          className="text-xs sm:text-sm text-accent font-semibold uppercase tracking-[3px] font-primary mb-2 inline-block py-2 px-4 bg-white/5 rounded-full border border-white/10 backdrop-blur-md"
        >
          The Challenge
        </div>

        <h2 
          ref={titleRef} 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] text-secondary-light font-accent m-0 max-w-[950px] tracking-tight"
        >
          <span className="block overflow-hidden py-1">
            <span className="animate-line block">The Era of “Brute Force”</span>
          </span>
          <span className="block overflow-hidden py-1 text-secondary-mid">
            <span className="animate-line block font-normal">Project Delivery Is Over.</span>
          </span>
        </h2>

        <p 
          ref={descRef} 
          className="text-base sm:text-lg md:text-xl text-secondary-mid leading-[1.65] font-primary font-light max-w-[800px] m-0 opacity-90"
        >
          For decades, capital projects were delivered through sheer willpower—fragmented data, siloed teams, and reactive decision-making. As infrastructure grows more complex, that model has reached its breaking point.
        </p>
      </div>
    </section>
  )
}

export default ProblemSection
