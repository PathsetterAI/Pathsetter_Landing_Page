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
    <div className="bg-primary-bg min-h-screen text-secondary-mid font-primary">
      <SEO 
        title="Schedule a Demo" 
        description="Schedule a personalized demo of Alfred. Contract intelligence for infrastructure and EPC project delivery."
      />
      <Navbar />

      <main className="pt-32 pb-20 px-6 sm:px-12 min-h-screen flex flex-col items-center justify-center relative">
        {/* Ambient Background matching site theme */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1A3A5C]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="w-full max-w-6xl relative z-10">
          <div className="text-center mb-10 flex flex-col gap-3">
            <h1 className="text-3xl md:text-4xl font-semibold text-[#1A3A5C] m-0">Schedule a Demo</h1>
            <p className="text-secondary-mid text-sm max-w-md mx-auto leading-relaxed">
              Find out how Alfred reads your contracts, maps obligations to your P6 schedule, and alerts your team.
            </p>

            {/* Region Selector */}
             <div className="flex justify-center gap-4 flex-wrap mt-4">
                <button 
                  onClick={() => setActiveTeam('india')}
                  className={`px-6 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                    activeTeam === 'india' 
                    ? 'bg-[#1A3A5C]/10 border-[#1A3A5C] text-[#1A3A5C]' 
                    : 'bg-white border-[#DDDDE6] text-secondary-mid hover:bg-[#EDF4FB] hover:text-[#1A3A5C]'
                  }`}
                >
                  India / Middle East Team
                </button>
                <button 
                  onClick={() => setActiveTeam('us')}
                  className={`px-6 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                    activeTeam === 'us' 
                    ? 'bg-[#1A3A5C]/10 border-[#1A3A5C] text-[#1A3A5C]' 
                    : 'bg-white border-[#DDDDE6] text-secondary-mid hover:bg-[#EDF4FB] hover:text-[#1A3A5C]'
                  }`}
                >
                  Americas Team
                </button>
             </div>
          </div>

          {/* Cal.com Embed Container - Editorial Light Card Style */}
          <div className="bg-white border border-[#DDDDE6] rounded-2xl overflow-hidden shadow-sm min-h-[700px]">
            <Cal 
              namespace="30min"
              key={activeTeam}
              calLink={activeTeam === 'india' ? "srikarcv+bharani-srinivas-n-f3ho7e/30min" : "abhisheks/30min"}
              style={{ width: "100%", height: "100%", minHeight: "700px" }}
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
