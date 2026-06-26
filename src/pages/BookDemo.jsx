import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import Cal, { getCalApi } from "@calcom/embed-react";

function BookDemo() {
  const [activeTeam, setActiveTeam] = useState('india') // 'india' or 'us'

  useEffect(() => {
    window.scrollTo(0, 0)
    
    // Initialize Cal.com API styling
    ;(async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {
        theme: "light",
        styles: {
          branding: {
            brandColor: "#1A3A5C", // Navy
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [])

  return (
    <div className="bg-[#F4F4F7] min-h-screen text-[#6B6B74] font-primary text-left selection:bg-[#FFC20E]/30">
      <SEO 
        title="Schedule a Demo" 
        description="Schedule a personalized demo and technical briefing of Alfred. Find out how Alfred reads your contracts and maps obligations."
      />
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-20 px-6 sm:px-12 md:px-16 lg:px-20 min-h-screen flex flex-col items-center justify-center relative z-10">
        {/* Ambient radial yellow glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none z-0" 
          style={{
            background: 'radial-gradient(circle at center, rgba(255, 194, 14, 0.05), transparent 70%)'
          }}
        />

        <div className="w-full max-w-5xl relative z-10">
          <div className="text-center mb-10 flex flex-col gap-3 max-w-xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1A3A5C] m-0">Schedule a Demo</h1>
            <p className="text-[#5A5A62] text-xs sm:text-sm leading-relaxed m-0 mt-1">
              Find out how Alfred reads your contracts, maps obligations to your P6 schedule, and alerts your team.
            </p>

            {/* Region Selector */}
            <div className="flex justify-center gap-4 flex-wrap mt-4">
              <button 
                onClick={() => setActiveTeam('india')}
                className={`px-5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                  activeTeam === 'india' 
                  ? 'bg-[#1A3A5C] border-[#1A3A5C] text-white shadow-sm' 
                  : 'bg-white border-[#DDDDE6] text-[#3A3A3F] hover:bg-[#F4F4F7] hover:text-[#1A3A5C]'
                }`}
              >
                India / Middle East Team
              </button>
              <button 
                onClick={() => setActiveTeam('us')}
                className={`px-5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                  activeTeam === 'us' 
                  ? 'bg-[#1A3A5C] border-[#1A3A5C] text-white shadow-sm' 
                  : 'bg-white border-[#DDDDE6] text-[#3A3A3F] hover:bg-[#F4F4F7] hover:text-[#1A3A5C]'
                }`}
              >
                Americas Team
              </button>
            </div>
          </div>

          {/* Cal.com Embed Container - Editorial Light Card Style */}
          <div className="bg-white border border-[#DDDDE6] rounded-2xl overflow-hidden shadow-md min-h-[700px] p-2">
            <Cal 
              namespace="30min"
              key={activeTeam}
              calLink={activeTeam === 'india' ? "srikarcv+bharani-srinivas-n-f3ho7e/30min" : "abhisheks/30min"}
              style={{ width: "100%", height: "100%", minHeight: "680px" }}
              config={{
                layout: 'month_view',
                theme: 'light'
              }}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default BookDemo
