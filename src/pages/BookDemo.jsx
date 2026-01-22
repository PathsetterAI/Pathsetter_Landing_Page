import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cal, { getCalApi } from "@calcom/embed-react";

function BookDemo() {
  const [activeTeam, setActiveTeam] = useState('india') // 'india' or 'us'

  useEffect(() => {
    window.scrollTo(0, 0)
    
    // Initialize Cal.com API styling
    ;(async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {
        theme: "dark",
        styles: {
          branding: {
            brandColor: "#00bf99",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [])

  return (
    <div className="bg-primary-bg min-h-screen text-secondary-light font-primary">
      <Navbar />

      <main className="pt-32 pb-20 px-4 sm:px-8 min-h-screen flex flex-col items-center justify-center relative">
        {/* Ambient Background matching site theme */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

        <div className="w-full max-w-6xl relative z-10">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-accent text-white mb-4">Book a Demo</h1>
            <p className="text-secondary-mid text-lg mb-8">See how Alfred can transform your project delivery.</p>

            {/* Region Selector */}
            <div className="flex justify-center gap-4 flex-wrap">
               <button 
                 onClick={() => setActiveTeam('india')}
                 className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                   activeTeam === 'india' 
                   ? 'bg-accent/10 border-accent text-accent' 
                   : 'bg-white/5 border-white/10 text-secondary-mid hover:bg-white/10 hover:text-white'
                 }`}
               >
                 Asia / EMEA Team
               </button>
               <button 
                 onClick={() => setActiveTeam('us')}
                 className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                   activeTeam === 'us' 
                   ? 'bg-accent/10 border-accent text-accent' 
                   : 'bg-white/5 border-white/10 text-secondary-mid hover:bg-white/10 hover:text-white'
                 }`}
               >
                 Americas (US) Team
               </button>
            </div>
          </div>

          {/* Cal.com Embed Container - Glassmorphism Style */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] min-h-[700px]">
            <Cal 
              namespace="30min"
              key={activeTeam}
              calLink={activeTeam === 'india' ? "srikarcv+bharani-srinivas-n-f3ho7e/30min" : "abhisheks/30min"}
              style={{ width: "100%", height: "100%", minHeight: "700px" }}
              config={{
                layout: 'month_view',
                theme: 'dark'
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
