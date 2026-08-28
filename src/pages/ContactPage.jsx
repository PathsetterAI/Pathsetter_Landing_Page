import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

function ContactPage() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white min-h-screen text-[#6B6B74] font-primary text-left selection:bg-[#FFC20E]/30">
      <SEO
        title="Contact Us"
        description="Contact the AlfredWorks team. Bring a tender or contract, and see how our contract intelligence identifies risk before deadlines close."
      />
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-20 px-6 sm:px-12 md:px-16 lg:px-20 min-h-screen flex flex-col items-center justify-center relative">
        {/* Yellow radial glow accent top */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none z-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(255, 194, 14, 0.05), transparent 70%)'
          }}
        />

        <div className="w-full max-w-[1100px] relative z-10 flex flex-col gap-12 sm:gap-16 items-center">

          {/* Header block */}
          <div className="text-center flex flex-col gap-3 max-w-3xl mx-auto">
            {/* Eyebrow */}
            <div className="w-fit bg-[#FFF6D6] text-[#B88500] text-[10px] font-mono font-bold tracking-widest px-3.5 py-1 rounded-full uppercase border border-[#FFC20E]/10 mx-auto">
              CONNECT WITH US
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-[38px] lg:text-[40px] font-bold text-[#1A3A5C] leading-[1.25] tracking-tight m-0 mt-2">
              Bring a tender or a contract. <br />
              We'll show you what AlfredWorks sees.
            </h1>

            {/* Subtitle */}
            <p className="text-[#5A5A62] text-xs sm:text-[13.5px] leading-relaxed m-0 mt-1 max-w-xl mx-auto">
              AlfredWorks offers interactive technical briefings, not standard sales pitches. Book a live run today.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full items-stretch mt-2">

            {/* Card 1: Schedule Run */}
            <div className="bg-white border border-[#DDDDE6] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-[#1A3A5C]/30 hover:shadow-md transition-all duration-300 min-h-[460px]">
              <div className="flex flex-col gap-4">
                {/* Yellow Calendar Icon */}
                <div className="w-9 h-9 rounded-lg bg-[#FFF6D6] flex items-center justify-center text-[#B88500] shrink-0 border border-[#FFC20E]/10 self-start">
                  <svg className="w-5 h-5 text-[#B88500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#1A3A5C] m-0">
                  Schedule Your Technical Run
                </h3>

                {/* Description */}
                <p className="text-[#5A5A62] text-xs sm:text-[13px] leading-relaxed m-0 mt-0.5">
                  Choose a time and select a standard. We'll examine your real document, identify potential notice-window or obligation traps, and hand over the structured findings file. Live.
                </p>

                {/* Bullets List */}
                <div className="flex flex-col gap-3 mt-4">
                  {[
                    "30 Minutes technical briefing",
                    "Interactive tender uploading & risk run",
                    "Receive complete risk audit reports"
                  ].map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#5A5A62]">
                      <svg className="w-4 h-4 text-[#145C35] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action button: routes to the /demo booking page */}
              <button
                onClick={() => {
                  navigate('/demo')
                  window.scrollTo(0, 0)
                }}
                className="bg-[#1A3A5C] text-white py-3 px-6 rounded-lg font-semibold cursor-pointer text-xs sm:text-[13px] transition-all duration-200 hover:bg-[#2B5F96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A3A5C] focus-visible:outline-offset-2 active:scale-95 shadow-[0_4px_16px_rgba(26,58,92,0.15)] text-center w-full mt-6"
              >
                Schedule a Demo: Choose a Time →
              </button>
            </div>

            {/* Card 2: Channels Info */}
            <div className="bg-white border border-[#DDDDE6] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-[#1A3A5C]/30 hover:shadow-md transition-all duration-300 min-h-[460px]">
              <div className="flex flex-col gap-6">

                {/* Channel 1: Direct Questions */}
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-lg bg-[#EDF4FB] flex items-center justify-center text-[#2B5F96] shrink-0 border border-[#2B5F96]/10 mt-0.5">
                    <svg className="w-4.5 h-4.5 text-[#2B5F96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1 text-left">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-[#1A3A5C] uppercase">
                      DIRECT QUESTIONS
                    </span>
                    <p className="text-[#5A5A62] text-xs sm:text-[13px] leading-relaxed m-0 mt-0.5">
                      Have a question first? Email our projects advisory desk directly:
                    </p>
                    <a href="mailto:hello@alfredworks.ai" className="font-bold text-[#1A3A5C] hover:text-[#2B5F96] text-xs sm:text-[13px] transition-colors mt-0.5 inline-block font-sans">
                      hello@alfredworks.ai
                    </a>
                  </div>
                </div>

                {/* Channel 2: Partner Desk */}
                <div className="flex gap-4 items-start border-t border-[#DDDDE6]/50 pt-5">
                  <div className="w-9 h-9 rounded-lg bg-[#EDF4FB] flex items-center justify-center text-[#2B5F96] shrink-0 border border-[#2B5F96]/10 mt-0.5">
                    <svg className="w-4.5 h-4.5 text-[#2B5F96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11.5M12 11c0-3.517 1.009-6.799 2.753-9.571m-3.44 2.04l-.054.09A13.916 13.916 0 0015 11.5m-6 5.5a3 3 0 11-6 0 3 3 0 016 0zm6-8a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1 text-left">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-[#1A3A5C] uppercase">
                      PARTNER DESK
                    </span>
                    <p className="text-[#5A5A62] text-xs sm:text-[13px] leading-relaxed m-0 mt-0.5">
                      For consultants, PMCs, legal advisors, and enterprise ERP providers seeking channel distribution:
                    </p>
                    <a href="mailto:partners@alfredworks.ai" className="font-bold text-[#1A3A5C] hover:text-[#2B5F96] text-xs sm:text-[13px] transition-colors mt-0.5 inline-block font-sans">
                      hello@alfredworks.ai
                    </a>
                  </div>
                </div>

                {/* Channel 3: Presence */}
                <div className="flex gap-4 items-start border-t border-[#DDDDE6]/50 pt-5">
                  <div className="w-9 h-9 rounded-lg bg-[#EDF4FB] flex items-center justify-center text-[#2B5F96] shrink-0 border border-[#2B5F96]/10 mt-0.5">
                    <svg className="w-4.5 h-4.5 text-[#2B5F96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1 text-left">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-[#1A3A5C] uppercase">
                      PRESENCE
                    </span>
                    <p className="text-[#5A5A62] text-xs sm:text-[13px] leading-relaxed m-0 mt-0.5">
                      <strong className="text-[#1A3A5C] font-semibold">Built in India.</strong> Made for World.
                    </p>
                  </div>
                </div>

              </div>

              {/* NDA Footer inside Card 2 */}
              <div className="border-t border-[#DDDDE6] pt-4 mt-6 flex items-center gap-2 text-[10px] sm:text-[11px] text-[#6B6B74] font-mono mt-auto">
                <svg className="w-3.5 h-3.5 text-[#145C35] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>We handle enterprise NDA and sensitive bid documentation parameters.</span>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ContactPage
