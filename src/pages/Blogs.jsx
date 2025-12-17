import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
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
        className="bg-gradient-to-b from-[rgba(22,27,31,0.6)] to-[rgba(11,15,18,0.8)] border border-accent/20 rounded-2xl overflow-hidden h-full flex flex-col cursor-pointer transition-all duration-300 relative backdrop-blur-xl hover:border-accent/50 hover:shadow-[0_20px_40px_rgba(0,191,153,0.15)]"
      >
        {/* Thumbnail */}
        <div className="w-full h-[220px] overflow-hidden relative bg-accent/5 group">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Category Badge */}
          <div className="absolute top-4 left-4 bg-accent/90 text-primary-bg py-1.5 px-3 rounded-md text-[0.7rem] font-semibold font-primary uppercase tracking-wider">
            {post.category}
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
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))]

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div className="bg-primary-bg min-h-screen w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="mt-20 py-24 px-8 pb-16 bg-primary-bg relative overflow-hidden">
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
            <div className="text-sm text-accent font-semibold uppercase tracking-[3px] font-primary mb-6 inline-block py-2 px-4 bg-accent/10 rounded-full border border-accent/20">
              Insights & Updates
            </div>

            <h1 className="text-[3.5rem] font-normal leading-tight text-secondary-light font-accent mb-6">
              From the{' '}
              <span className="text-accent bg-gradient-to-br from-accent to-accent-hover bg-clip-text text-transparent">
                Pathsetter AI
              </span>{' '}
              Blog
            </h1>

            <p className="text-lg text-secondary-mid max-w-[700px] mx-auto mb-12 leading-relaxed font-primary">
              Insights on AI, infrastructure project management, and the future of construction technology
            </p>

            {/* Category Filter */}
            <div className="flex gap-4 flex-wrap justify-center mt-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`py-3 px-6 rounded-full font-primary text-[0.85rem] font-medium cursor-pointer transition-all duration-300 backdrop-blur-lg outline-none ${
                    selectedCategory === category
                      ? 'bg-accent/15 border border-accent text-accent'
                      : 'bg-white/[0.03] border border-white/[0.08] text-secondary-light hover:border-accent hover:bg-accent/[0.08]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-8 pb-32 bg-primary-bg relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16 px-8 text-secondary-mid font-primary">
              <p className="text-lg">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer - Simplified version */}
      <footer className="p-8 bg-black border-t border-white/[0.08] text-center">
        <div className="text-[0.85rem] text-secondary-mid font-primary">
          © 2025, Pathsetter.ai, Inc. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Blogs
