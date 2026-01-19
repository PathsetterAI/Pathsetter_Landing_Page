import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import PathsetterLogo from '../assets/new logo pathsetter.png'

function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null)
  const [clickedLink, setClickedLink] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const navLinks = [
    { name: 'PLATFORM', path: '/', hash: 'home' },
    { name: 'SOLUTIONS', path: '/solutions', hash: '' },
    { name: 'ABOUT US', path: '/about', hash: '' },
    { name: 'RESOURCES', path: '/blogs', hash: '' },
    { name: 'CONTACT US', path: '/', hash: 'contactus' }
  ]

  const solutionsData = {
    "Customer Type": [
      "EPCs",
      "Project Owners/Developers",
      "Lending Institutions",
      "Government Bodies"
    ],
    "Department": [
      "Business Development",
      "Project Planning",
      "Project Controls",
      "Project Execution",
      "Finance",
      "Supply Chain"
    ],
    "Industry": [
      "Utility-Scale Solar",
      "Wind Energy",
      "Campus & Commercial Construction"
    ]
  }

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
    } else if (link.path === '/blogs' || link.path === '/about' || link.path === '/solutions') {
      // Navigate to blogs, about, or solutions page
      navigate(link.path)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[94%] max-w-[1280px] bg-white/[0.02] backdrop-blur-xl backdrop-saturate-[180%] py-2.5 sm:py-3 z-[1000] border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-2xl sm:rounded-full">
      <div className="w-full mx-auto grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_2fr_1fr] items-center px-4 sm:px-8 gap-4 lg:gap-8">
        {/* Logo - Left */}
        <Link to="/" className="no-underline">
          <div className="nav-logo">
            <img src={PathsetterLogo} alt="Pathsetter Logo" className="logo-img h-9" />
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
            <li 
              key={link.name}
              className="relative h-full flex items-center"
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
            >
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
                onFocus={(e) => e.currentTarget.style.outline = 'none'}
              >
                {link.name}
                {(hoveredLink === link.name || clickedLink === link.name || (link.path === '/blogs' && location.pathname === '/blogs') || (link.path === '/about' && location.pathname === '/about')) && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-accent to-accent-hover rounded-[1px] transition-all duration-300"
                    style={{ width: hoveredLink === link.name ? '100%' : '70%' }}
                  />
                )}
              </button>

              {/* Solutions Dropdown Mega Menu */}
              {link.name === 'SOLUTIONS' && hoveredLink === 'SOLUTIONS' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[800px] cursor-default">
                  <div className="bg-[#000000]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 grid grid-cols-3 gap-8 shadow-[0_20px_40px_rgba(0,0,0,0.8)] relative overflow-hidden">
                    {/* Glow Effect */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-50" />
                    
                    {Object.entries(solutionsData).map(([category, items]) => (
                      <div key={category} className="flex flex-col gap-4">
                        <h3 className="text-secondary-light font-accent text-sm tracking-widest uppercase border-b border-white/10 pb-2 mb-2">
                          {category}
                        </h3>
                        <ul className="list-none m-0 p-0 flex flex-col gap-2">
                          {items.map((item) => (
                            <li 
                              key={item} 
                              onClick={() => {
                                navigate('/solutions', { state: { tab: category } })
                                setHoveredLink(null)
                              }}
                              className="text-secondary-mid hover:text-accent font-primary text-sm transition-colors duration-200 cursor-pointer"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
        <div className="mobile-menu lg:hidden fixed top-[56px] left-0 right-0 bg-primary-bg/[0.98] backdrop-blur-[20px] p-6 sm:p-8 border-t border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] z-[999] animate-[slideDown_0.3s_ease]">
          <ul className="flex flex-col list-none gap-6 m-0 p-0 items-center">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full text-center">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick(link)
                  }}
                  className="w-full text-secondary-light no-underline text-lg font-primary transition-all duration-300 relative inline-block bg-transparent border-none cursor-pointer py-3 px-0 rounded-lg hover:text-accent hover:bg-white/5"
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
