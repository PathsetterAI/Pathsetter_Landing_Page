import React from 'react'
import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id="contactus" className="py-24 px-8 bg-primary-bg relative z-10 overflow-hidden">
      {/* Background Grid */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-[1000px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm text-secondary-mid font-normal uppercase tracking-[3px] font-primary mb-12 text-left">
            JOIN THE WAITLIST
          </h2>

          <form className="grid grid-cols-3 gap-6 mb-8">
            {/* Full Name */}
            <div>
              <label className="block text-[0.85rem] text-secondary-mid font-primary mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full py-3.5 px-5 bg-white/[0.03] border border-white/10 rounded-lg text-secondary-light text-sm font-primary outline-none transition-all duration-300 focus:border-accent focus:bg-accent/5"
              />
            </div>

            {/* Email ID */}
            <div>
              <label className="block text-[0.85rem] text-secondary-mid font-primary mb-2">
                Email ID
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full py-3.5 px-5 bg-white/[0.03] border border-white/10 rounded-lg text-secondary-light text-sm font-primary outline-none transition-all duration-300 focus:border-accent focus:bg-accent/5"
              />
            </div>

            {/* Designation */}
            <div>
              <label className="block text-[0.85rem] text-secondary-mid font-primary mb-2">
                Designation
              </label>
              <input
                type="text"
                placeholder="Product Manager"
                className="w-full py-3.5 px-5 bg-white/[0.03] border border-white/10 rounded-lg text-secondary-light text-sm font-primary outline-none transition-all duration-300 focus:border-accent focus:bg-accent/5"
              />
            </div>
          </form>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="py-3.5 px-12 bg-transparent border border-white/20 rounded-full text-secondary-light text-sm font-primary font-medium cursor-pointer transition-all duration-300 outline-none hover:border-accent hover:bg-accent/10 hover:text-accent hover:-translate-y-0.5"
            >
              Submit Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
