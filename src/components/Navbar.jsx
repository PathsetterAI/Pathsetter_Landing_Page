import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import alfredLogo from '../assets/newlogo alfred.svg'

function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileWhoItsForOpen, setMobileWhoItsForOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (path, hash = '', state = null) => {
    setMobileMenuOpen(false)
    setMobileWhoItsForOpen(false)
    setHoveredLink(null)
    
    if (path === '/' && hash) {
      if (location.pathname === '/') {
        const element = document.getElementById(hash)
        if (element) {
          if (window.lenis) {
            window.lenis.scrollTo(element, { offset: -80 });
          } else {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      } else {
        navigate('/')
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            if (window.lenis) {
              window.lenis.scrollTo(element, { offset: -80 });
            } else {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        }, 150)
      }
    } else {
      if (state) {
        navigate(path, { state })
      } else {
        navigate(path)
      }
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }



  const whoWeServe = [
    { name: 'EPCs & General Contractors', tab: 'epcs' },
    { name: 'Owners & Developers', tab: 'owners' },
    { name: 'PMCs & Consultancies', tab: 'pmcs' }
  ]


  return (
    <nav className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 z-[1000] backdrop-blur-md border-b ${
      isScrolled 
        ? 'py-2 sm:py-2.5 bg-white/95 border-[#DDDDE6] shadow-[0_4px_20px_rgba(0,0,0,0.1)]' 
        : 'py-3 sm:py-4 bg-white/80 border-[#DDDDE6]/70 shadow-[0_2px_12px_rgba(0,0,0,0.06)]'
    }`}>
      <div className="w-full mx-auto grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center px-6 sm:px-12 gap-4 lg:gap-8">
        {/* Logo - Left */}
        <Link to="/" className="logo-link no-underline flex items-center gap-2.5 hover:opacity-90 transition-all duration-200">
          <img 
            src={alfredLogo} 
            alt="Alfred Logo" 
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg transition-all duration-300 origin-left ${
              isScrolled ? 'scale-[0.85]' : 'scale-100'
            }`} 
          />
          <span className={`text-xl sm:text-2xl font-semibold tracking-tight transition-all duration-300 origin-left ${isScrolled ? 'scale-[0.85]' : 'scale-100'} text-[#1A3A5C]`}>Alfred<span style={{ color: '#FFC20E', fontStyle: 'italic', display: 'inline-block', transform: 'skewX(-12deg)', marginLeft: '-2px' }}>Works</span></span>
        </Link>

        {/* Nav Links - Center (Desktop) */}
        <ul className="hidden lg:flex list-none gap-6 items-center justify-center m-0 p-0 z-50">
          {/* Product */}
          <li>
            <button
              onClick={() => handleLinkClick('/product')}
              className="bg-transparent border-none cursor-pointer p-0 text-[15px] font-medium text-[#3A3A3F] hover:text-[#1A3A5C] transition-colors duration-300"
            >
              Product
            </button>
          </li>

          {/* Who It's For Dropdown */}
          <li 
            className="relative py-2"
            onMouseEnter={() => setHoveredLink('who-its-for')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <button
              onClick={() => handleLinkClick('/who-its-for')}
              onMouseEnter={(e) => { e.stopPropagation(); setHoveredLink('who-its-for') }}
              className="flex items-center gap-1 bg-transparent border-none cursor-pointer p-0 text-[15px] font-medium text-[#3A3A3F] hover:text-[#1A3A5C] transition-colors duration-300"
            >
              Who It's For
              <svg className="w-3.5 h-3.5 transition-transform duration-200" style={{ transform: hoveredLink === 'who-its-for' ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {hoveredLink === 'who-its-for' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-60">
                <div className="border border-[#DDDDE6] rounded-xl p-2 shadow-lg bg-white backdrop-blur-xl">
                  {whoWeServe.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleLinkClick('/who-its-for', '', { tab: item.tab })}
                      className="w-full text-left bg-transparent border-none rounded-lg px-4 py-2.5 text-xs font-medium cursor-pointer text-[#3A3A3F] hover:bg-[#F4F4F7] hover:text-[#1A3A5C] transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </li>

          {/* Resources */}
          <li>
            <button
              onClick={() => handleLinkClick('/resources')}
              className="bg-transparent border-none cursor-pointer p-0 text-[15px] font-medium text-[#3A3A3F] hover:text-[#1A3A5C] transition-colors duration-300"
            >
              Resources
            </button>
          </li>

          {/* Contact */}
          <li>
            <button
              onClick={() => handleLinkClick('/contact')}
              className="bg-transparent border-none cursor-pointer p-0 text-[15px] font-medium text-[#3A3A3F] hover:text-[#1A3A5C] transition-colors duration-300"
            >
              Contact
            </button>
          </li>

          {/* About */}
          <li>
            <button
              onClick={() => handleLinkClick('/about')}
              className="bg-transparent border-none cursor-pointer p-0 text-[15px] font-medium text-[#3A3A3F] hover:text-[#1A3A5C] transition-colors duration-300"
            >
              About
            </button>
          </li>
        </ul>

        {/* Schedule a Demo - Right Desktop */}
        <div className="hidden lg:flex justify-end">
          <button
            onClick={() => handleLinkClick('/demo')}
            className="bg-[#1A3A5C] text-white py-1.5 px-4 rounded-lg font-semibold cursor-pointer text-[0.8rem] transition-all duration-200 hover:bg-[#2B5F96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A3A5C] focus-visible:outline-offset-2 active:scale-95 shadow-[0_2px_8px_rgba(26,58,92,0.15)]"
          >
            Schedule a Demo
          </button>
        </div>

        {/* Hamburger Menu - Mobile Toggle */}
        <button
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen)
            setMobileWhoItsForOpen(false)
          }}
          className="lg:hidden bg-transparent border-none cursor-pointer p-2 transition-colors duration-300 text-[#3A3A3F] hover:text-[#1A3A5C] justify-self-end col-start-2"
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
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 p-6 shadow-xl backdrop-blur-lg border-t bg-white/95 border-[#DDDDE6] shadow-[0_8px_32px_rgba(26,58,92,0.05)]">
          <div className="flex flex-col gap-5 items-center">
            {/* Product */}
            <button
              onClick={() => handleLinkClick('/product')}
              className="w-full bg-transparent border-none cursor-pointer py-2 text-base font-medium text-center text-[#3A3A3F] hover:text-[#1A3A5C] transition-colors"
            >
              Product
            </button>

            <hr className="w-full border-t border-dashed opacity-20 my-1" />

            {/* Who It's For Mobile List */}
            <div className="w-full text-center">
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  setMobileWhoItsForOpen(!mobileWhoItsForOpen)
                }} 
                className="flex items-center justify-center gap-1.5 bg-transparent border-none cursor-pointer text-xs font-semibold tracking-wider text-[#6B6B74] uppercase mb-2 w-full text-center"
              >
                <span>Who It's For</span>
                <svg 
                  className="w-3 h-3 transition-transform duration-200 text-[#6B6B74]" 
                  style={{ transform: mobileWhoItsForOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {mobileWhoItsForOpen && (
                <div className="flex flex-col gap-2 px-4 py-2 border border-[#DDDDE6]/50 rounded-lg bg-[#F8F8FA] mt-1 mb-2 animate-fade-in">
                  {whoWeServe.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleLinkClick('/who-its-for', '', { tab: item.tab })}
                      className="bg-transparent border-none cursor-pointer py-1.5 px-0 text-sm font-medium block w-full text-center text-[#3A3A3F] hover:text-[#1A3A5C] transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                  <button
                    onClick={() => handleLinkClick('/who-its-for')}
                    className="bg-transparent border-none cursor-pointer py-1.5 px-0 text-sm font-semibold block w-full text-center text-[#1A3A5C] hover:underline transition-colors mt-0.5"
                  >
                    View All Who It's For →
                  </button>
                </div>
              )}
            </div>

            <hr className="w-full border-t border-dashed opacity-20 my-1" />

            {/* Resources */}
            <button
              onClick={() => handleLinkClick('/resources')}
              className="w-full bg-transparent border-none cursor-pointer py-2 text-base font-medium text-center text-[#3A3A3F] hover:text-[#1A3A5C] transition-colors"
            >
              Resources
            </button>

            <hr className="w-full border-t border-dashed opacity-20 my-1" />

            {/* Contact */}
            <button
              onClick={() => handleLinkClick('/contact')}
              className="w-full bg-transparent border-none cursor-pointer py-2 text-base font-medium text-center text-[#3A3A3F] hover:text-[#1A3A5C] transition-colors"
            >
              Contact
            </button>

            <hr className="w-full border-t border-dashed opacity-20 my-1" />

            {/* About */}
            <button
              onClick={() => handleLinkClick('/about')}
              className="w-full bg-transparent border-none cursor-pointer py-2 text-base font-medium text-center text-[#3A3A3F] hover:text-[#1A3A5C] transition-colors"
            >
              About
            </button>

            {/* CTA Button */}
            <button
              onClick={() => handleLinkClick('/demo')}
              className="w-full bg-[#1A3A5C] text-white py-3 px-6 rounded-lg font-semibold cursor-pointer text-sm transition-all duration-200 hover:bg-[#2B5F96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A3A5C] active:scale-95"
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
