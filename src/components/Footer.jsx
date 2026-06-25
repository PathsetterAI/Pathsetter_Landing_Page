import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#111113] text-[#DDDDE6] border-t border-[#3A3A3F]/50 relative z-10 overflow-hidden py-16 px-6 sm:px-12">
      {/* Subtle background glow */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#1A3A5C]/10 rounded-full blur-[100px] pointer-events-none z-0" />
      
      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr] gap-12 md:gap-16 mb-12 pb-12 border-b border-white/10">
          {/* Left - Company Info */}
          <div className="flex flex-col items-start gap-4">
            <span className="text-xl sm:text-2xl font-semibold tracking-tight text-white block">
              Alfred
            </span>
            <p className="text-xs text-[#ADADB8] leading-relaxed max-w-xs text-left">
              Contract intelligence for infrastructure and EPC project delivery. We read FIDIC, NHAI, PWD and Metro Rail contracts, map obligations to schedules, and alert teams.
            </p>

            <div className="mt-2">
              <div className="text-[10px] text-[#6B6B74] font-semibold uppercase tracking-wider mb-1">
                Contact:
              </div>
              <a
                href="mailto:contact@alfredworks.ai"
                className="text-[#DDDDE6] hover:text-[#5B8EC4] transition-colors text-xs font-mono"
              >
                contact@alfredworks.ai
              </a>
            </div>

            <a
              href="https://www.linkedin.com/company/alfredworks"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-[#DDDDE6] hover:text-[#5B8EC4] transition-transform hover:-translate-y-0.5"
              aria-label="LinkedIn Profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          {/* Right - Addresses */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            {/* United States */}
            <div>
              <div className="text-[10px] text-[#6B6B74] font-semibold uppercase tracking-wider mb-2">
                United States:
              </div>
              <p className="margin-0 text-xs text-[#DDDDE6] leading-relaxed">
                Suite 219, 691 S Milpitas Blvd, Milpitas, CA
              </p>
            </div>

            {/* India */}
            <div>
              <div className="text-[10px] text-[#6B6B74] font-semibold uppercase tracking-wider mb-2">
                India:
              </div>
              <p className="margin-0 text-xs text-[#DDDDE6] leading-relaxed">
                Jayabheri Trendset Connect, Kondapur, Hyderabad
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#6B6B74] flex-wrap gap-4 pt-4 text-left w-full">
          <div>© 2026 Alfred. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#privacy" className="text-[#6B6B74] hover:text-[#DDDDE6]">Privacy Policy</a>
            <a href="#terms" className="text-[#6B6B74] hover:text-[#DDDDE6]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
