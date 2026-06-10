import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

export default function MagneticButton({ children, className = "", ...props }) {
  const buttonRef = useRef(null)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    // High performance animation targets using quickTo
    const xTo = gsap.quickTo(button, "x", { duration: 0.8, ease: "power3.out" })
    const yTo = gsap.quickTo(button, "y", { duration: 0.8, ease: "power3.out" })

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      
      // Calculate cursor position relative to button center
      const x = e.clientX - (rect.left + width / 2)
      const y = e.clientY - (rect.top + height / 2)

      // Pull button towards mouse with a 35% magnetic factor
      xTo(x * 0.35)
      yTo(y * 0.35)
    }

    const handleMouseLeave = () => {
      xTo(0)
      yTo(0)
    }

    button.addEventListener("mousemove", handleMouseMove)
    button.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      button.removeEventListener("mousemove", handleMouseMove)
      button.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <button
      ref={buttonRef}
      className={`relative inline-flex items-center justify-center transition-shadow duration-300 ${className}`}
      {...props}
    >
      <span className="relative pointer-events-none block w-full h-full flex items-center justify-center">{children}</span>
    </button>
  )
}
