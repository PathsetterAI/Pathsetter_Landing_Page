import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0)
  }

  const promptText = "As an infrastructure developer or EPC project leader, I want to understand Alfred, the contract intelligence copilot in AlfredWorks (alfredworks.ai). Summarize its key capabilities, value proposition, and how it supports project contracts, schedules, and tender outcomes."

  const handleLlmClick = (url) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(promptText).catch((err) => {
        console.error('Failed to copy prompt: ', err)
      })
    } else {
      const textArea = document.createElement("textarea")
      textArea.value = promptText
      textArea.style.position = "fixed"
      textArea.style.opacity = "0"
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      try {
        document.execCommand('copy')
      } catch (err) {
        console.error('Fallback copy failed: ', err)
      }
      document.body.removeChild(textArea)
    }

    // Open target LLM in a new tab
    window.open(url, '_blank')
  }

  return (
    <footer className="bg-[#1A3A5C] text-white py-10 sm:py-12 px-6 sm:px-12 md:px-16 lg:px-20 relative z-10 border-t border-[#2D4D70]/30 select-none">
      {/* Footer grid */}
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 lg:gap-8 pb-8 border-b border-white/10 text-left">

          {/* Col 1: Alfred Info */}
          <div className="flex flex-col gap-3">
            <span className="text-lg font-bold text-white tracking-tight">
              AlfredWorks
            </span>
            <p className="text-xs sm:text-[13px] text-[#94A9C0] leading-[1.6] m-0 max-w-xs">
              Enterprise contract-intelligence for large-scale construction ventures. Protecting project margin from bid to handover.
            </p>

            {/* Ask AI Row */}
            <div className="flex flex-col gap-1 mt-1">
              <span className="text-[10px] font-bold text-[#7A93AE] tracking-wider uppercase">
                Ask about the AlfredWorks copilot on:
              </span>
              <div className="flex items-center gap-3 mt-2">
                {/* ChatGPT */}
                <button
                  onClick={() => handleLlmClick(`https://chatgpt.com/?q=${encodeURIComponent(promptText)}`)}
                  className="transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer block p-1"
                  title="Ask ChatGPT"
                >
                  <img
                    src="/chatgpt.svg"
                    alt="ChatGPT"
                    className="w-6 h-6 block object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </button>

                {/* Claude */}
                <button
                  onClick={() => handleLlmClick('https://claude.ai/new')}
                  className="transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer block p-1"
                  title="Ask Claude"
                >
                  <img
                    src="/claude.svg"
                    alt="Claude"
                    className="w-6 h-6 block object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </button>

                {/* Gemini (Google Search AI Mode) */}
                <button
                  onClick={() => handleLlmClick(`https://www.google.com/search?q=${encodeURIComponent(promptText)}&udm=50`)}
                  className="transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer block p-1"
                  title="Ask Gemini (Google Search AI Mode)"
                >
                  <img
                    src="/gemini.svg"
                    alt="Gemini"
                    className="w-6 h-6 block object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </button>

                {/* Perplexity */}
                <button
                  onClick={() => handleLlmClick(`https://www.perplexity.ai/?q=${encodeURIComponent(promptText)}`)}
                  className="transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer block p-1"
                  title="Ask Perplexity"
                >
                  <img
                    src="/perplexity.svg"
                    alt="Perplexity"
                    className="w-6 h-6 block object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Col 2: Product Solutions */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[11px] sm:text-xs font-bold text-white tracking-wider uppercase m-0">
              PRODUCT SOLUTIONS
            </h4>
            <div className="flex flex-col gap-1.5">
              <Link
                to="/product"
                onClick={handleLinkClick}
                className="text-xs sm:text-[13px] text-[#94A9C0] hover:text-white no-underline transition-colors duration-200"
              >
                Layers & Capabilities
              </Link>
              <Link
                to="/who-its-for"
                onClick={handleLinkClick}
                className="text-xs sm:text-[13px] text-[#94A9C0] hover:text-white no-underline transition-colors duration-200"
              >
                Who It's For
              </Link>
              <Link
                to="/resources"
                onClick={handleLinkClick}
                className="text-xs sm:text-[13px] text-[#94A9C0] hover:text-white no-underline transition-colors duration-200"
              >
                Resources
              </Link>
            </div>
          </div>

          {/* Col 3: Legal & Compliance */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[11px] sm:text-xs font-bold text-white tracking-wider uppercase m-0">
              LEGAL & COMPLIANCE
            </h4>
            <div className="flex flex-col gap-1.5 text-xs sm:text-[13px] text-[#94A9C0]">
              <span className="cursor-default">Cert Certified</span>
              <span className="cursor-default">ISO 27001 Certified</span>
              <span className="cursor-default">ISO 9001 Certified</span>
            </div>
          </div>

          {/* Col 4: Corporate Desk */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[11px] sm:text-xs font-bold text-white tracking-wider uppercase m-0">
              CORPORATE DESK
            </h4>
            <div className="flex flex-col gap-1.5">
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
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 text-[11px] sm:text-xs text-[#7A93AE] gap-3 text-left w-full font-mono">
          <div>
            © 2026 AlfredWorks. All rights reserved.
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
