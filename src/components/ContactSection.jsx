import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import NewsletterForm from './NewsletterForm'

export default function ContactSection() {
  const navigate = useNavigate()

  return (
    <section id="contactus" className="py-20 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-b from-white/[0.05] to-transparent p-8 md:p-12 rounded-[2rem] border border-white/10 relative overflow-hidden max-w-6xl mx-auto shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,191,153,0.15),transparent_70%)] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Schedule a Demo */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full h-full justify-center md:border-r border-white/10 md:pr-12 md:py-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 border border-accent/20">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-accent text-secondary-light mb-4 leading-tight">Ready to transform your delivery?</h2>
            <p className="text-secondary-mid font-primary text-sm mb-8 max-w-sm">
              Schedule a personalized demo to see how Pathsetter AI can accelerate your infrastructure projects.
            </p>
            <button
              onClick={() => {
                navigate('/book-demo')
                window.scrollTo(0, 0)
              }}
              className="bg-accent border border-accent text-primary-bg px-6 py-2.5 rounded-lg font-bold uppercase tracking-widest text-xs transition-all duration-200 shadow-[0_0_20px_rgba(0,191,153,0.3)] hover:bg-transparent hover:text-accent hover:border-accent hover:shadow-none active:scale-95 disabled:opacity-50 w-full sm:w-[200px] flex items-center justify-center"
            >
              Schedule a Demo
            </button>
          </div>

          {/* Right Side: Newsletter */}
          <div className="flex flex-col items-center md:items-start md:pl-4 w-full h-full md:py-4">
            <NewsletterForm />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
