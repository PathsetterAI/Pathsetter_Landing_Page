import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import PathsetterLogo from '../assets/Pathsetter Logo.png'

function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null)
  const [clickedLink, setClickedLink] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  const navLinks = [
    { name: 'HOME', path: '/', hash: 'home' },
    { name: 'FEATURES', path: '/', hash: 'features' },
    { name: 'ABOUT US', path: '/', hash: 'aboutus' },
    { name: 'BLOGS', path: '/blogs', hash: '' },
    { name: 'CONTACT US', path: '/', hash: 'contactus' }
  ]

  const handleLinkClick = (link) => {
    setClickedLink(link.name)
    setTimeout(() => setClickedLink(null), 200)

    // If navigating to a hash on the home page
    if (link.path === '/' && link.hash) {
      // If already on home page, just scroll
      if (location.pathname === '/') {
        const element = document.getElementById(link.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else {
        // Navigate to home page first, then scroll
        navigate('/')
        setTimeout(() => {
          const element = document.getElementById(link.hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      }
    } else if (link.path === '/blogs') {
      // Navigate to blogs page
      navigate('/blogs')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      background: 'rgba(255, 255, 255, 0.01)',
      backdropFilter: 'blur(16px) saturate(180%)',
      WebkitBackdropFilter: 'blur(16px) saturate(180%)',
      padding: '1rem 0',
      zIndex: 1000,
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        maxWidth: '100%',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 1fr',
        alignItems: 'center',
        padding: '0 3rem',
        gap: '2rem'
      }}>
        {/* Logo - Left */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="nav-logo">
            <img src={PathsetterLogo} alt="Pathsetter Logo" className="logo-img" />
          </div>
        </Link>
        
        {/* Nav Links - Center */}
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '2.5rem',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
          padding: 0
        }}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(link)
                }}
                style={{
                  color: hoveredLink === link.name ? '#00bf99' : clickedLink === link.name ? '#00d9a8' : '#B9C8C9',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  display: 'inline-block',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0',
                  outline: 'none'
                }}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                onFocus={(e) => e.currentTarget.style.outline = 'none'}
              >
                {link.name}
                {(hoveredLink === link.name || clickedLink === link.name || (link.path === '/blogs' && location.pathname === '/blogs')) && (
                  <span style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    height: '2px',
                    width: hoveredLink === link.name ? '100%' : '70%',
                    background: 'linear-gradient(90deg, #00bf99, #00d9a8)',
                    borderRadius: '1px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }} />
                )}
              </button>
            </li>
          ))}
        </ul>
        
        {/* CTA Button - Right */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <button 
            className="cta-btn" 
            style={{
              background: '#00bf99',
              color: '#0B0F12',
              border: 'none',
              padding: '0.65rem 1.5rem',
              borderRadius: '8px',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.9rem',
              boxShadow: '0 4px 16px rgba(0, 191, 153, 0.2)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(0, 191, 153, 0.35)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 191, 153, 0.2)'
            }}
          >
            GET DEMO
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
