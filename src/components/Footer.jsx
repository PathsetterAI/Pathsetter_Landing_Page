import React from 'react'
import PathsetterLogo from '../assets/Pathsetter Logo.png'

function Footer() {
  return (
    <footer style={{
      padding: '2rem 1rem',
      background: '#000000',
      position: 'relative',
      zIndex: '10',
      overflow: 'hidden'
    }}>
      {/* Large ALFRED Watermark */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: 'clamp(4rem, 15vw, 18rem)',
        fontWeight: '900',
        color: 'rgba(255, 255, 255, 0.08)',
        fontFamily: 'Space Grotesk, sans-serif',
        letterSpacing: '0.01em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        zIndex: 0
      }}>
        ALFRED
      </div>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 md:gap-16 mb-12 pb-8 border-b border-white/[0.08]">
          {/* Left - Company Info */}
          <div>
            <img 
              src={PathsetterLogo} 
              alt="Pathsetter Logo" 
              style={{
                height: '40px',
                objectFit: 'contain',
                marginBottom: '1.5rem'
              }}
            />
            
            <div style={{
              marginBottom: '1.5rem'
            }}>
              <div style={{
                fontSize: '0.85rem',
                color: '#B9C8C9',
                fontFamily: 'Inter, sans-serif',
                marginBottom: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Contact Info:
              </div>
              <a 
                href="mailto:hello@pathsetter.ai"
                style={{
                  color: '#E6EEF0',
                  textDecoration: 'underline',
                  fontSize: '0.9rem',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#00bf99'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#E6EEF0'}
              >
                hello@pathsetter.ai
              </a>
            </div>

            <a 
              href="https://www.linkedin.com/company/pathsetterai" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#E6EEF0">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Right - Addresses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* United States */}
            <div>
              <div style={{
                fontSize: '0.85rem',
                color: '#B9C8C9',
                fontFamily: 'Inter, sans-serif',
                marginBottom: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                United States:
              </div>
              <p style={{
                margin: 0,
                fontSize: '0.9rem',
                color: '#E6EEF0',
                fontFamily: 'Inter, sans-serif',
                lineHeight: '1.6'
              }}>
                Suite 219, 691 S Milpitas Blvd, Milpitas, CA
              </p>
            </div>

            {/* India */}
            <div>
              <div style={{
                fontSize: '0.85rem',
                color: '#B9C8C9',
                fontFamily: 'Inter, sans-serif',
                marginBottom: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                India:
              </div>
              <p style={{
                margin: 0,
                fontSize: '0.9rem',
                color: '#E6EEF0',
                fontFamily: 'Inter, sans-serif',
                lineHeight: '1.6'
              }}>
                Jayabheri Trendset Connect, Kondapur, Hyderabad
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.85rem',
          color: '#B9C8C9',
          fontFamily: 'Inter, sans-serif',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>© 2025, Pathsetter.ai, Inc.</div>
          <div>Alfred by Pathsetter AI © 2025. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
