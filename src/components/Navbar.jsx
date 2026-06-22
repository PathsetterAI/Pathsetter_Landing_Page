import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import PathsetterLogo from '../assets/pathsetter logo black.png'

function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null)
  const [clickedLink, setClickedLink] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
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

  const navLinks = [
    { name: 'PLATFORM', path: '/platform', hash: '' },
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
          if (window.lenis) {
            window.lenis.scrollTo(element, { offset: -80 });
          } else {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      } else {
        // Navigate to home page first, then scroll
        navigate('/')
        setTimeout(() => {
          const element = document.getElementById(link.hash)
          if (element) {
            if (window.lenis) {
              window.lenis.scrollTo(element, { offset: -80 });
            } else {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        }, 150)
      }
    } else if (link.path === '/blogs' || link.path === '/about' || link.path === '/solutions' || link.path === '/platform') {
      // Navigate to blogs, about, solutions, or platform page
      navigate(link.path)
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }

  const isHomePage = location.pathname === '/'
  const showLightNav = !isHomePage || isScrolled

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full backdrop-blur-lg transition-all duration-300 z-[1000] ${
      isScrolled 
        ? 'py-2 sm:py-2.5' 
        : 'py-3 sm:py-4'
    } ${
      showLightNav 
        ? 'bg-[#F4F4F7]/80 border-b border-[#DDDDE6]/80 shadow-[0_4px_30px_rgba(0,0,0,0.03)]' 
        : 'bg-[#111113]/40 border-b border-[#3A3A3F]/30 shadow-[0_4px_30px_rgba(0,0,0,0.15)]'
    }`}>
      <div className="w-full mx-auto grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center px-6 sm:px-12 gap-4 lg:gap-8">
        {/* Logo - Left */}
        <Link to="/" className="no-underline">
          <div className="nav-logo flex items-center">
            <span className={`text-xl sm:text-2xl font-black font-accent tracking-wide transition-all duration-300 origin-left ${
              isScrolled ? 'scale-[0.85]' : 'scale-100'
            } ${showLightNav ? 'text-[#B88500]' : 'text-[#FFC20E]'}`}>
              Alfred
            </span>
          </div>
        </Link>

        {/* Hamburger Menu - Mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`mobile-menu-toggle lg:hidden bg-transparent border-none cursor-pointer p-2 justify-self-end col-start-2 z-[1001] transition-colors duration-300 ${
            showLightNav ? 'text-[#3A3A3F] hover:text-[#2B5F96]' : 'text-[#ADADB8] hover:text-[#5B8EC4]'
          }`}
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
                  hoveredLink === link.name || clickedLink === link.name
                    ? (showLightNav ? 'text-[#B88500] font-semibold' : 'text-[#FFC20E] font-semibold')
                    : (showLightNav ? 'text-[#3A3A3F] font-medium' : 'text-[#ADADB8]')
                }`}
                onFocus={(e) => e.currentTarget.style.outline = 'none'}
              >
                {link.name}
                {(hoveredLink === link.name || clickedLink === link.name || (link.path === '/blogs' && location.pathname === '/blogs') || (link.path === '/about' && location.pathname === '/about')) && (
                  <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-[1px] transition-all duration-300 ${
                    showLightNav ? 'bg-[#B88500]' : 'bg-[#FFC20E]'
                  }`}
                    style={{ width: hoveredLink === link.name ? '100%' : '70%' }}
                  />
                )}
              </button>

              {/* Solutions Dropdown Mega Menu */}
              {link.name === 'SOLUTIONS' && hoveredLink === 'SOLUTIONS' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[800px] cursor-default">
                  <div className={`border rounded-2xl p-8 grid grid-cols-3 gap-8 transition-all duration-300 relative overflow-hidden backdrop-blur-xl ${
                    showLightNav
                      ? 'bg-white/95 border-[#DDDDE6]/80 shadow-[0_20px_40px_rgba(0,0,0,0.06)]'
                      : 'bg-[#111113]/95 border-[#3A3A3F]/50 shadow-[0_20px_40px_rgba(0,0,0,0.3)]'
                  }`}>
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-[#2B5F96]/50 to-transparent" />

                    {Object.entries(solutionsData).map(([category, items]) => (
                      <div key={category} className="flex flex-col gap-4">
                        <h3 className={`font-accent text-sm tracking-widest uppercase border-b pb-2 mb-2 ${
                          showLightNav ? 'border-[#DDDDE6]/80 text-[#1A3A5C]' : 'border-[#3A3A3F]/50 text-[#5B8EC4]'
                        }`}>
                          {category}
                        </h3>
                        <ul className="list-none m-0 p-0 flex flex-col gap-2">
                          {items.map((item) => (
                            <li
                              key={item}
                              onClick={() => {
                                navigate('/solutions', { state: { tab: category, scrollTo: item } })
                                setHoveredLink(null)
                              }}
                              className={`font-primary text-sm transition-colors duration-200 cursor-pointer ${
                                showLightNav ? 'text-[#3A3A3F] hover:text-[#2B5F96]' : 'text-[#ADADB8] hover:text-[#5B8EC4]'
                              }`}
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
            onClick={() => {
              navigate('/book-demo')
              window.scrollTo(0, 0)
            }}
            className={`cta-btn border py-1.5 px-4 rounded-lg font-semibold cursor-pointer font-primary text-[0.8rem] transition-all duration-200 active:scale-95 disabled:opacity-50 ${
              showLightNav 
                ? 'bg-[#2B5F96] border-[#2B5F96] text-white hover:bg-transparent hover:text-[#2B5F96] hover:border-[#2B5F96]' 
                : 'bg-[#2B5F96] border-[#2B5F96] text-white hover:bg-transparent hover:text-[#5B8EC4] hover:border-[#5B8EC4]'
            }`}
          >
            Book a Demo
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`mobile-menu lg:hidden absolute top-full left-0 right-0 p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] z-[999] animate-[slideDown_0.3s_ease] backdrop-blur-lg ${
          showLightNav
            ? 'bg-[#F4F4F7]/95 border-t border-[#DDDDE6]/80 shadow-[0_8px_32px_rgba(0,0,0,0.05)]'
            : 'bg-[#111113]/95 border-t border-[#3A3A3F]/50'
        }`}>
          <ul className="flex flex-col list-none gap-6 m-0 p-0 items-center">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full text-center">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick(link)
                  }}
                  className={`w-full no-underline text-lg font-primary transition-all duration-300 relative inline-block bg-transparent border-none cursor-pointer py-3 px-0 rounded-lg ${
                    showLightNav
                      ? 'text-[#3A3A3F] hover:text-[#2B5F96] hover:bg-black/5'
                      : 'text-[#ADADB8] hover:text-[#5B8EC4] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
            <li className="w-full mt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  navigate('/book-demo')
                  window.scrollTo(0, 0)
                }}
                className={`cta-btn w-full border py-3 px-6 rounded-lg font-semibold cursor-pointer font-primary text-base transition-all duration-200 active:scale-95 disabled:opacity-50 ${
                  showLightNav
                    ? 'bg-[#2B5F96] border-[#2B5F96] text-white hover:bg-transparent hover:text-[#2B5F96] hover:border-[#2B5F96]'
                    : 'bg-[#2B5F96] border-[#2B5F96] text-white hover:bg-transparent hover:text-[#5B8EC4] hover:border-[#5B8EC4]'
                }`}
              >
                Book a Demo
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
