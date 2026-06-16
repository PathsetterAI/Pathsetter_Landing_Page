import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import FounderImage from '../assets/sponsors/Founder.png'

// --- Team Data Definition ---

const teamTiers = {
  tier1: [
    {
      name: "Sridhar Gadhi",
      role: "Founder & CEO",
      image: FounderImage,
      quote: "We don't just build software. We build the future of how infrastructure is delivered.",
      bio: "Serial entrepreneur with 20+ years of experience leading technology and infrastructure ventures on a global scale."
    },
    {
      name: "Dr. Vikram Sethi",
      role: "CTO & Co-Founder",
      image: null,
      quote: "Building agentic reasoning systems that parse complex plans and drawings.",
      bio: "Former AI researcher; specialized in large action models and secure multi-party joint venture architectures."
    },
    {
      name: "Sarah Jenkins",
      role: "CPO & Head of Product",
      image: null,
      quote: "Alfred translates site-level uncertainty into clear, structured, and audit-grade progress.",
      bio: "Veteran capital projects specialist with 15+ years overseeing solar COD execution and commercial works."
    }
  ],
  tier2: [
    {
      name: "Ananya Roy",
      role: "Head of AI Engineering",
      bio: "Leads model training pipelines for drawing qualification and automated bill-of-quantities takeoff."
    },
    {
      name: "Marcus Vance",
      role: "VP of Sovereign Infrastructure",
      bio: "Oversees air-gapped security, GovCloud setups, and secure enterprise REST APIs for JV project boards."
    },
    {
      name: "Sanjay Mehta",
      role: "Director of Customer Success",
      bio: "Aligns contractors, authority engineers, and developers during workspace onboarding."
    }
  ],
  tier3: [
    {
      name: "General Vijay Kumar",
      role: "National Highways Advisory",
      affiliation: "Ex-Chairman, Regional Roads & Infrastructure Authority"
    },
    {
      name: "Robert Chen",
      role: "Project Controls Specialist",
      affiliation: "Former Senior Project Manager at Bechtel Corporation"
    },
    {
      name: "Prof. Elena Rostova",
      role: "AI & Reasoning Consultant",
      affiliation: "Director of Large Action Models Group, Tech Munich"
    }
  ]
}

// Custom Placeholder Photo Component matching Sridhar's image size
const MemberPhoto = ({ src, name }) => {
  if (src) {
    return (
      <img 
        src={src} 
        alt={name} 
        className="w-full h-full object-cover"
      />
    )
  }
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2)
  return (
    <div className="w-full h-full bg-accent-light flex items-center justify-center text-accent select-none font-accent font-semibold text-3xl tracking-widest uppercase">
      {initials}
    </div>
  )
}

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
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.015) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />

          {/* Radial Gradient */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 pointer-events-none z-0"
            style={{
              background: 'radial-gradient(circle at center, rgba(0, 107, 84, 0.04), transparent 60%)'
            }}
          />

          <div className="max-w-[1000px] mx-auto relative z-10">
            {/* Story & Mission Section */}
            <div className="max-w-3xl mx-auto text-center mb-20">
              <div className="text-xs text-accent font-semibold uppercase tracking-[2.5px] font-primary mb-4 inline-block py-1.5 px-3 bg-accent-light rounded-full border border-accent/20">
                About Us
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-secondary-light font-accent mb-6">
                Solving Infrastructure's Toughest Problems with AI. <span className="text-accent underline decoration-accent/30 underline-offset-8">Together.</span>
              </h2>

              <div className="flex flex-col gap-6 text-base text-secondary-mid leading-relaxed font-primary text-left">
                <p className="m-0">
                  At <span className="text-accent font-semibold">Pathsetter AI</span>, we're re-inventing infrastructure project delivery — powered by intelligence, simplicity, and deep industry empathy.
                </p>

                <p className="m-0">
                  Our founding team has lived the pain of infrastructure execution first-hand. We've seen how projects falter under complexity, communication gaps, and fragmented tools. That's why we set out to build <span className="text-accent font-semibold">Alfred</span>—an AI-native projects decision engine designed for the real world of infrastructure.
                </p>

                <p className="m-0">
                  But we're not building in isolation. We're co-creating Alfred with project managers, site engineers, contractors, and clients across the industry. Every feature, workflow, and insight is shaped by real users solving real challenges on the ground.
                </p>
              </div>

              <div className="bg-primary-light border border-border rounded-2xl p-6 mt-10 text-left shadow-sm">
                <div className="text-[0.65rem] text-accent font-semibold uppercase tracking-[2px] mb-2">
                  Our Mission is Bold:
                </div>
                <p className="m-0 text-lg text-secondary-light leading-snug font-accent font-medium">
                  Make infrastructure project delivery smarter, faster, and stress-free for everyone — from the field to the boardroom.
                </p>
              </div>
            </div>

            {/* Divider Line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-16" />

            {/* Team Grid Section */}
            <div className="w-full">
              <div className="text-center mb-16 max-w-2xl mx-auto flex flex-col gap-3">
                <div className="text-xs font-mono text-accent uppercase tracking-[2px] py-1 px-3 bg-accent-light rounded-full border border-accent/20 w-fit mx-auto">
                  The Pathsetter Team
                </div>
                <h2 className="text-3xl sm:text-4xl font-light font-accent text-secondary-light tracking-tight m-0">
                  People Behind the Intelligence
                </h2>
                <p className="text-sm text-secondary-mid font-primary">
                  A unique blend of AI research engineers, cloud security leaders, and veteran megaproject directors.
                </p>
              </div>

              {/* TIER 1: Core Leadership */}
              <div className="mb-20">
                <div className="text-xs font-mono text-secondary-dark uppercase tracking-wider mb-6 border-b border-border pb-2">
                  01 / Core Leadership
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {teamTiers.tier1.map((member, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="bg-white border border-border rounded-2xl p-6 shadow-[0_10px_25px_rgba(37,28,20,0.02)] flex flex-col items-center text-center gap-4 group hover:border-accent transition-all duration-300"
                    >
                      {/* Photo Container */}
                      <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] overflow-hidden bg-accent-light rounded-lg border border-border group-hover:border-accent/30 transition-all duration-300 flex-shrink-0">
                        <MemberPhoto src={member.image} name={member.name} />
                      </div>
                      
                      {/* Info */}
                      <div className="flex flex-col items-center gap-2">
                        <h3 className="text-lg font-bold text-secondary-light font-accent m-0 leading-tight">
                          {member.name}
                        </h3>
                        <span className="text-[10px] font-bold font-primary text-accent uppercase tracking-wider py-0.5 px-2.5 bg-accent-light rounded border border-accent/20">
                          {member.role}
                        </span>
                      </div>
                      
                      <p className="text-xs text-secondary-mid font-primary leading-relaxed m-0 px-2 min-h-[3.5rem]">
                        {member.bio}
                      </p>

                      {/* Divider */}
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-1" />
                      
                      <p className="text-xs text-secondary-dark italic leading-relaxed m-0 font-primary">
                        "{member.quote}"
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* TIER 2: Functional Leaders */}
              <div className="mb-20">
                <div className="text-xs font-mono text-secondary-dark uppercase tracking-wider mb-6 border-b border-border pb-2">
                  02 / Functional & Technology Leaders
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {teamTiers.tier2.map((member, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="bg-primary-light border border-border rounded-2xl p-6 shadow-sm flex flex-col items-center text-center gap-4 group hover:border-accent transition-all duration-300"
                    >
                      {/* Photo Container */}
                      <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] overflow-hidden bg-accent-light rounded-lg border border-border group-hover:border-accent/30 transition-all duration-300 flex-shrink-0">
                        <MemberPhoto src={null} name={member.name} />
                      </div>
                      
                      {/* Info */}
                      <div className="flex flex-col items-center gap-2">
                        <h3 className="text-base font-bold text-secondary-light font-accent m-0 leading-tight">
                          {member.name}
                        </h3>
                        <span className="text-[9px] font-bold font-primary text-secondary-dark uppercase tracking-wider py-0.5 px-2 bg-primary-bg rounded border border-border">
                          {member.role}
                        </span>
                      </div>
                      
                      <p className="text-xs text-secondary-mid font-primary leading-relaxed m-0 px-2 min-h-[3rem]">
                        {member.bio}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* TIER 3: Advisory Board */}
              <div className="mb-12">
                <div className="text-xs font-mono text-secondary-dark uppercase tracking-wider mb-6 border-b border-border pb-2">
                  03 / Industry & Technical Advisors
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {teamTiers.tier3.map((member, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="bg-white border border-border rounded-xl p-5 shadow-sm text-left flex flex-col gap-2 group hover:border-accent transition-all duration-300"
                    >
                      <span className="text-[9px] font-mono text-accent uppercase tracking-wider">Advisor</span>
                      <h3 className="text-base font-bold text-secondary-light font-accent m-0 leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-xs text-secondary-mid font-primary font-medium m-0">
                        {member.role}
                      </p>
                      <p className="text-xs text-secondary-dark font-primary m-0 italic">
                        {member.affiliation}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
