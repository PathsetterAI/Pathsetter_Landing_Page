import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { blogPosts } from '../data/blogPosts'
import { caseStudies } from '../data/caseStudies'

function BlogCard({ post, index }) {
  return (
    <motion.a
      href={post.linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="no-underline block h-full"
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-b from-[rgba(22,27,31,0.6)] to-[rgba(11,15,18,0.8)] border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col cursor-pointer transition-all duration-300 relative backdrop-blur-xl hover:border-white/30 hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)]"
      >
        {/* Thumbnail */}
        <div className="w-full h-[180px] sm:h-[200px] lg:h-[220px] overflow-hidden relative bg-white/5 group">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Post Number */}
          <div className="absolute top-4 left-4 bg-white text-black py-1.5 px-3 rounded-md text-[0.7rem] font-semibold font-primary uppercase tracking-wider">
            #{index + 1}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-4 flex-1">
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-xs text-secondary-mid font-primary">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-accent" />
            <span>{post.readTime}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-secondary-light font-accent leading-snug m-0 transition-colors duration-300">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-[0.9rem] text-secondary-mid leading-relaxed font-primary m-0 flex-1">
            {post.excerpt}
          </p>

          {/* Read More Link */}
          <div className="flex items-center gap-2 text-accent text-[0.85rem] font-semibold font-primary mt-auto">
            <span>Read on LinkedIn</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </div>
        </div>
      </motion.div>
    </motion.a>
  )
}

function Blogs() {
  const [activeTab, setActiveTab] = useState('blogs')
  const [activeStudyId, setActiveStudyId] = useState(caseStudies[0].id)

  const activeStudy = caseStudies.find(s => s.id === activeStudyId) || caseStudies[0]

  return (
    <div className="bg-primary-bg min-h-screen w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="mt-16 sm:mt-20 py-12 sm:py-20 lg:py-24 px-4 sm:px-8 pb-12 sm:pb-16 bg-primary-bg relative overflow-hidden">
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
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-4/5 h-[400px] pointer-events-none z-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 191, 153, 0.08), transparent 70%)'
          }}
        />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs sm:text-sm text-accent font-semibold uppercase tracking-[3px] font-primary mb-4 sm:mb-6 inline-block py-2 px-4 bg-white/5 rounded-full border border-white/10">
              Featured Posts
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-normal leading-tight text-secondary-light font-accent mb-4 sm:mb-6 px-4">
              From the{' '}
              <span className="text-accent bg-gradient-to-br from-accent to-accent-hover bg-clip-text text-transparent">
                Pathsetter AI
              </span>{' '}
              Blog
            </h1>

            <p className="text-base sm:text-lg text-secondary-mid max-w-[700px] mx-auto mb-8 sm:mb-12 leading-relaxed font-primary px-4">
              Insights on AI, infrastructure project management, and the future of construction technology
            </p>

            {/* Tab Buttons */}
            <div className="flex gap-4 justify-center items-center">
              <button
                onClick={() => setActiveTab('blogs')}
                className={`py-3 px-8 rounded-full font-primary text-sm sm:text-base font-semibold cursor-pointer transition-all duration-300 outline-none ${
                  activeTab === 'blogs'
                    ? 'bg-accent text-primary-bg shadow-[0_4px_20px_rgba(0,191,153,0.3)]'
                    : 'bg-white/[0.05] border border-white/[0.1] text-secondary-light hover:border-white hover:bg-white/10'
                }`}
              >
                Blogs
              </button>
              <button
                onClick={() => setActiveTab('case-studies')}
                className={`py-3 px-8 rounded-full font-primary text-sm sm:text-base font-semibold cursor-pointer transition-all duration-300 outline-none ${
                  activeTab === 'case-studies'
                    ? 'bg-accent text-primary-bg shadow-[0_4px_20px_rgba(0,191,153,0.3)]'
                    : 'bg-white/[0.05] border border-white/[0.1] text-secondary-light hover:border-white hover:bg-white/10'
                }`}
              >
                Impact Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 pb-16 sm:pb-32 bg-primary-bg relative z-10">
        <div className="max-w-6xl mx-auto">
          {activeTab === 'blogs' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 sm:gap-8">
              {blogPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          )}

          {activeTab === 'case-studies' && (
            <div className="flex flex-col gap-20">
              
              {/* Case Study Navigation */}
              <div className="flex flex-wrap gap-4 border-b border-white/10 pb-8 mb-8 sticky top-24 bg-primary-bg/95 backdrop-blur-xl z-30 pt-4">
                 {caseStudies.map((study) => (
                    <button 
                       key={study.id}
                       onClick={() => setActiveStudyId(study.id)}
                       className={`px-6 py-3 rounded-lg border text-sm md:text-base font-semibold transition-all duration-300 ${
                          activeStudyId === study.id 
                            ? 'bg-accent/10 border-accent text-accent shadow-[0_0_15px_rgba(0,191,153,0.15)]' 
                            : 'bg-white/[0.02] border-white/10 text-secondary-mid hover:text-white hover:bg-white/5'
                       }`}
                    >
                       {study.title}
                    </button>
                 ))}
              </div>

              {/* Single Active Study Content */}
              <motion.div 
                 key={activeStudyId}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5 }}
                 className="relative"
              >

                   {/* Giant Number Background */}
                   <div className="absolute -left-4 -top-10 text-[8rem] md:text-[12rem] font-bold text-white/[0.02] font-accent leading-none select-none pointer-events-none z-0">
                      0{activeStudy.id}
                   </div>

                   <div className="relative z-10 px-4 md:px-0">
                      {/* Header Section */}
                      <div className="mb-12 md:mb-20">
                          <div className="flex items-center gap-3 mb-4">
                             <div className="w-12 h-px bg-accent"></div>
                             <span className="text-accent font-mono text-xs tracking-[0.2em] uppercase">Impact Study</span>
                          </div>
                          <h2 className="text-2xl md:text-4xl lg:text-5xl font-accent text-secondary-light mb-4 leading-tight">
                            {activeStudy.title}
                          </h2>
                          <p className="text-lg md:text-xl text-secondary-mid font-primary font-light">
                            for <span className="text-white border-b border-accent/30 pb-1">{activeStudy.clientType}</span>
                          </p>
                      </div>

                      {/* Narrative Flow */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-16">
                          {/* Challenge */}
                          <div>
                              <div className="flex items-baseline gap-4 mb-4 md:mb-6">
                                <span className="text-xs font-bold text-red-400 uppercase tracking-widest">01 Challenge</span>
                                <div className="h-px flex-1 bg-gradient-to-r from-red-400/50 to-transparent"></div>
                              </div>
                              <h3 className="text-xl font-accent text-white mb-4 leading-snug">{activeStudy.challenge.title}</h3>
                              <div className="space-y-3">
                                {activeStudy.challenge.content.map((p, i) => (
                                    <p key={i} className="text-secondary-mid text-base leading-relaxed font-primary">{p}</p>
                                ))}
                              </div>
                          </div>

                          {/* Solution */}
                          <div className="md:mt-16"> 
                              <div className="flex items-baseline gap-4 mb-4 md:mb-6">
                                <span className="text-xs font-bold text-accent uppercase tracking-widest">02 Solution</span>
                                <div className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent"></div>
                              </div>
                              <h3 className="text-xl font-accent text-white mb-4 leading-snug">{activeStudy.solution.title}</h3>
                              <div className="space-y-3">
                                {activeStudy.solution.content.map((p, i) => (
                                    <p key={i} className="text-secondary-mid text-base leading-relaxed font-primary">{p}</p>
                                ))}
                              </div>
                          </div>
                      </div>

                      {/* Impact Results */}
                      <div className="mb-16">
                         <div className="flex items-baseline gap-4 mb-8">
                            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">03 Impact</span>
                            <div className="h-px flex-1 bg-gradient-to-r from-blue-400/50 to-transparent"></div>
                         </div>
                         
                         <h3 className="text-2xl md:text-3xl font-accent text-white mb-10 max-w-4xl">{activeStudy.impact.title}</h3>
                         
                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                            {activeStudy.impact.stats.map((stat, i) => (
                                <div key={i} className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}>
                                   <div className="text-4xl md:text-5xl font-accent text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 mb-2">{stat.value}</div>
                                   <div className="flex flex-col gap-1 border-l-2 border-accent/30 pl-4 py-1">
                                      <span className="text-accent font-bold text-xs tracking-wider uppercase">{stat.label}</span>
                                      <span className="text-secondary-mid text-xs leading-relaxed">{stat.desc}</span>
                                   </div>
                                </div>
                            ))}
                         </div>
                      </div>

                      {/* Testimonial Quote */}
                      <div className="relative max-w-4xl ml-auto">
                          <svg className="absolute -top-6 -left-8 w-16 h-16 text-accent/10 transform -scale-x-100" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.2936 14.9255 13H14V11C14 7.13401 17.5815 4 22 4V7C19.7909 7 18 8.79086 18 11V13H21.2323C21.6565 13 22 13.3431 22 13.7677V20.2323C22 20.6567 21.6565 21 21.2323 21H14.017ZM8.017 21L8.017 18C8.017 16.896 8.321 15.2936 8.9255 13H8V11C8 7.13401 11.5815 4 16 4V7C13.7909 7 12 8.79086 12 11V13H15.2323C15.6565 13 16 13.3431 16 13.7677V20.2323C16 20.6567 15.6565 21 15.2323 21H8.017Z" />
                          </svg>
                          <blockquote className="text-xl md:text-2xl text-secondary-light font-primary font-light italic leading-relaxed mb-4 pl-8">
                             "{activeStudy.impact.testimonial.quote}"
                          </blockquote>
                          <div className="pl-8 flex items-center gap-4">
                              <div className="h-px w-8 bg-white/20"></div>
                              <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-widest opacity-70">{activeStudy.impact.testimonial.author}</span>
                          </div>
                      </div>
                   </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Blogs
