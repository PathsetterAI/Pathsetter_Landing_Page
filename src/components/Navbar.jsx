import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import PathsetterLogo from '../assets/Pathsetter Logo.png'

function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null)
  const [clickedLink, setClickedLink] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const navLinks = [
    { name: 'HOME', path: '/', hash: 'home' },
    { name: 'FEATURES', path: '/', hash: 'features' },
    { name: 'ABOUT US', path: '/', hash: 'aboutus' },
    { name: 'RESOURCES', path: '/blogs', hash: '' },
    { name: 'CONTACT US', path: '/', hash: 'contactus' }
  ]

  const handleLinkClick = (link) => {
    setClickedLink(link.name)
    setMobileMenuOpen(false)
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
    <nav className="fixed top-0 w-full bg-white/[0.01] backdrop-blur-2xl backdrop-saturate-[180%] py-2 z-[1000] border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="max-w-full mx-auto grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_2fr_1fr] items-center px-4 sm:px-8 lg:px-12 gap-4 lg:gap-8">
        {/* Logo - Left */}
        <Link to="/" className="no-underline">
          <div className="nav-logo">
            <img src={PathsetterLogo} alt="Pathsetter Logo" className="logo-img h-10" />
          </div>
        </Link>
        
        {/* Hamburger Menu - Mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-menu-toggle lg:hidden bg-transparent border-none text-accent cursor-pointer p-2 justify-self-end col-start-2 z-[1001]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
        
        {/* Nav Links - Center */}
        <ul className="desktop-nav hidden lg:flex list-none gap-6 items-center justify-center m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(link)
                }}
                className={`relative inline-block bg-transparent border-none cursor-pointer p-0 outline-none text-[0.85rem] font-primary transition-colors duration-300 ${
                  hoveredLink === link.name ? 'text-accent' : 
                  clickedLink === link.name ? 'text-accent-hover' : 
                  'text-secondary-mid'
                }`}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                onFocus={(e) => e.currentTarget.style.outline = 'none'}
              >
                {link.name}
                {(hoveredLink === link.name || clickedLink === link.name || (link.path === '/blogs' && location.pathname === '/blogs')) && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-accent to-accent-hover rounded-[1px] transition-all duration-300"
                    style={{ width: hoveredLink === link.name ? '100%' : '70%' }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
        
        {/* CTA Button - Right Desktop */}
        <div className="desktop-nav hidden lg:flex justify-end">
          <button 
            className="cta-btn bg-accent text-primary-bg border-none py-[0.5rem] px-4 rounded-lg font-semibold cursor-pointer font-primary text-[0.8rem] shadow-[0_4px_16px_rgba(0,191,153,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,191,153,0.35)]"
          >
            GET DEMO
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu lg:hidden fixed top-[56px] left-0 right-0 bg-primary-bg/[0.98] backdrop-blur-[20px] p-6 sm:p-8 border-t border-accent/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] z-[999] animate-[slideDown_0.3s_ease]">
          <ul className="flex flex-col list-none gap-6 m-0 p-0 items-center">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full text-center">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick(link)
                  }}
                  className="w-full text-secondary-light no-underline text-lg font-primary transition-all duration-300 relative inline-block bg-transparent border-none cursor-pointer py-3 px-0 rounded-lg hover:text-accent hover:bg-accent/10"
                >
                  {link.name}
                </button>
              </li>
            ))}
            <li className="w-full mt-4">
              <button className="cta-btn w-full bg-accent text-primary-bg border-none py-[0.85rem] px-6 rounded-lg font-semibold cursor-pointer font-primary text-base shadow-[0_4px_16px_rgba(0,191,153,0.2)]">
                GET DEMO
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
