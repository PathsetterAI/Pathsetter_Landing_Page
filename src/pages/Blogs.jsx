import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import { blogPosts } from '../data/blogPosts'
import '../Landing.css'
import './Blogs.css'

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
      style={{
        textDecoration: 'none',
        display: 'block',
        height: '100%'
      }}
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'linear-gradient(180deg, rgba(22, 27, 31, 0.6) 0%, rgba(11, 15, 18, 0.8) 100%)',
          border: '1px solid rgba(0, 191, 153, 0.2)',
          borderRadius: '16px',
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
          transition: 'border-color 0.3s ease',
          position: 'relative',
          backdropFilter: 'blur(12px)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(0, 191, 153, 0.5)'
          e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 191, 153, 0.15)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(0, 191, 153, 0.2)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {/* Thumbnail */}
        <div style={{
          width: '100%',
          height: '220px',
          overflow: 'hidden',
          position: 'relative',
          background: 'rgba(0, 191, 153, 0.05)'
        }}>
          <img
            src={post.thumbnail}
            alt={post.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
          />
          {/* Category Badge */}
          <div style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            background: 'rgba(0, 191, 153, 0.9)',
            color: '#0B0F12',
            padding: '0.4rem 0.8rem',
            borderRadius: '6px',
            fontSize: '0.7rem',
            fontWeight: '600',
            fontFamily: 'Inter, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            {post.category}
          </div>
        </div>

        {/* Content */}
        <div style={{
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          flex: 1
        }}>
          {/* Meta Info */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.75rem',
            color: '#B9C8C9',
            fontFamily: 'Inter, sans-serif'
          }}>
            <span>{post.date}</span>
            <span style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: '#00bf99'
            }} />
            <span>{post.readTime}</span>
          </div>

          {/* Title */}
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#E6EEF0',
            fontFamily: 'Space Grotesk, sans-serif',
            lineHeight: '1.3',
            margin: 0,
            transition: 'color 0.3s ease'
          }}>
            {post.title}
          </h3>

          {/* Excerpt */}
          <p style={{
            fontSize: '0.9rem',
            color: '#B9C8C9',
            lineHeight: '1.6',
            fontFamily: 'Inter, sans-serif',
            margin: 0,
            flex: 1
          }}>
            {post.excerpt}
          </p>

          {/* Read More Link */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#00bf99',
            fontSize: '0.85rem',
            fontWeight: '600',
            fontFamily: 'Inter, sans-serif',
            marginTop: 'auto'
          }}>
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
    <div style={{
      background: '#0B0F12',
      minHeight: '100vh',
      width: '100%'
    }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{
        marginTop: '80px',
        padding: '6rem 2rem 4rem',
        background: '#0B0F12',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Grid */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.3,
          pointerEvents: 'none'
        }} />

        {/* Radial Gradient */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: '400px',
          background: 'radial-gradient(circle at center, rgba(0, 191, 153, 0.08), transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              fontSize: '0.9rem',
              color: '#00bf99',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '1.5rem',
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(0, 191, 153, 0.1)',
              borderRadius: '100px',
              border: '1px solid rgba(0, 191, 153, 0.2)'
            }}>
              Insights & Updates
            </div>

            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: '400',
              lineHeight: '1.2',
              color: '#E6EEF0',
              fontFamily: 'Space Grotesk, sans-serif',
              marginBottom: '1.5rem'
            }}>
              From the{' '}
              <span style={{
                color: '#00bf99',
                background: 'linear-gradient(135deg, #00bf99, #00d9a8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Pathsetter AI
              </span>{' '}
              Blog
            </h1>

            <p style={{
              fontSize: '1.1rem',
              color: '#B9C8C9',
              maxWidth: '700px',
              margin: '0 auto 3rem',
              lineHeight: '1.6',
              fontFamily: 'Inter, sans-serif'
            }}>
              Insights on AI, infrastructure project management, and the future of construction technology
            </p>

            {/* Category Filter */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: '2rem'
            }}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    background: selectedCategory === category ? 'rgba(0, 191, 153, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                    border: `1px solid ${selectedCategory === category ? '#00bf99' : 'rgba(255, 255, 255, 0.08)'}`,
                    padding: '0.7rem 1.5rem',
                    borderRadius: '100px',
                    color: selectedCategory === category ? '#00bf99' : '#E6EEF0',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)',
                    outline: 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category) {
                      e.currentTarget.style.borderColor = '#00bf99'
                      e.currentTarget.style.background = 'rgba(0, 191, 153, 0.08)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category) {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section style={{
        padding: '4rem 2rem 8rem',
        background: '#0B0F12',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              color: '#B9C8C9',
              fontFamily: 'Inter, sans-serif'
            }}>
              <p style={{ fontSize: '1.1rem' }}>No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer - Simplified version */}
      <footer style={{
        padding: '2rem',
        background: '#000000',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '0.85rem',
          color: '#B9C8C9',
          fontFamily: 'Inter, sans-serif'
        }}>
          © 2025, Pathsetter.ai, Inc. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Blogs
