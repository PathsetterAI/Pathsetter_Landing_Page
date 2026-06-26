import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0)
  }


  return (
    <footer className="bg-[#1A3A5C] text-white py-12 sm:py-16 px-6 sm:px-12 md:px-16 lg:px-20 relative z-10 border-t border-[#2D4D70]/30 select-none">
      {/* Footer grid */}
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 lg:gap-12 pb-12 border-b border-white/10 text-left">

          {/* Col 1: Alfred Info */}
          <div className="flex flex-col gap-4">
            <span className="text-lg font-bold text-white tracking-tight">
              Alfred
            </span>
            <p className="text-xs sm:text-[13px] text-[#94A9C0] leading-[1.6] m-0 max-w-xs">
              Enterprise contract-intelligence for large-scale construction ventures. Protecting project margin from bid to handover.
            </p>
          </div>

          {/* Col 2: Product Solutions */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] sm:text-xs font-bold text-white tracking-wider uppercase m-0">
              PRODUCT SOLUTIONS
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link
                to="/platform"
                onClick={handleLinkClick}
                className="text-xs sm:text-[13px] text-[#94A9C0] hover:text-white no-underline transition-colors duration-200"
              >
                Layers & Capabilities
              </Link>
              <Link
                to="/solutions"
                onClick={handleLinkClick}
                className="text-xs sm:text-[13px] text-[#94A9C0] hover:text-white no-underline transition-colors duration-200"
              >
                Who It's For
              </Link>
              <Link
                to="/about"
                onClick={handleLinkClick}
                className="text-xs sm:text-[13px] text-[#94A9C0] hover:text-white no-underline transition-colors duration-200"
              >
                FDE Deployments
              </Link>
            </div>
          </div>

          {/* Col 3: Legal & Compliance */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] sm:text-xs font-bold text-white tracking-wider uppercase m-0">
              LEGAL & COMPLIANCE
            </h4>
            <div className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-[#94A9C0]">
              <span className="cursor-default">ISO 27001 Certified</span>
              <span className="cursor-default">SOC-2 Type II Compliant</span>
              <span className="cursor-default">Data Residency Gated</span>
            </div>
          </div>

          {/* Col 4: Corporate Desk */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] sm:text-xs font-bold text-white tracking-wider uppercase m-0">
              CORPORATE DESK
            </h4>
            <div className="flex flex-col gap-2.5">
              <span className="text-xs sm:text-[13px] text-[#94A9C0] cursor-default">
                Builds in India & GCC
              </span>
              <Link
                to="/demo"
                onClick={handleLinkClick}
                className="text-xs sm:text-[13px] text-[#FFC20E] font-bold hover:text-[#FFE066] no-underline transition-colors duration-200"
              >
                Book Technical Briefing →
              </Link>
              <a
                href="mailto:hello@alfredworks.ai"
                className="text-xs sm:text-[13px] text-[#94A9C0] hover:text-white no-underline transition-colors duration-200 font-sans"
              >
                hello@alfredworks.ai
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[11px] sm:text-xs text-[#7A93AE] gap-4 text-left w-full font-mono">
          <div>
            © 2026 Alfred Works AI. All rights reserved.
          </div>
          <div className="flex gap-4 sm:gap-6">
            <Link
              to="/about"
              onClick={handleLinkClick}
              className="text-[#7A93AE] hover:text-white no-underline transition-colors duration-200"
            >
              Founding Story
            </Link>
            <span className="text-[#56718E] select-none">•</span>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="text-[#7A93AE] hover:text-white no-underline transition-colors duration-200"
            >
              Channel Partners
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
