import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { blogPosts } from '../data/blogPosts'

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
            <div className="text-center py-20 px-8">
              <div className="max-w-[600px] mx-auto">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 border-2 border-white/10 flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-secondary-light font-accent mb-4">
                  Case Studies Coming Soon
                </h3>
                <p className="text-base sm:text-lg text-secondary-mid leading-relaxed font-primary">
                  We're working on bringing you detailed case studies showcasing real-world infrastructure project success stories.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Blogs
