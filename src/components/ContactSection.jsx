import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ContactSection() {
  const navigate = useNavigate()

  return (
    <section id="contactus" className="py-20 container mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-white/[0.05] to-transparent p-6 md:p-10 rounded-[2rem] border border-white/10 relative overflow-hidden max-w-5xl mx-auto"
        >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,191,153,0.15),transparent_70%)] pointer-events-none" />
        
        <h2 className="text-3xl md:text-4xl font-accent text-secondary-light mb-6 relative z-10">Ready to transform your delivery?</h2>
        <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
            <button 
                onClick={() => {
                  navigate('/book-demo')
                  window.scrollTo(0, 0)
                }}
                className="bg-accent text-primary-bg px-8 py-3 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-accent-hover transition-all shadow-[0_0_20px_rgba(0,191,153,0.3)] hover:shadow-[0_0_30px_rgba(0,191,153,0.5)] transform hover:-translate-y-1"
            >
                Schedule a Demo
            </button>
        </div>
        </motion.div>
    </section>
  )
}
