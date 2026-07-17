import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import founderImg from '../assets/Founder.png'
import saloniImg from '../assets/saloni.jpg'
import srikarImg from '../assets/srikar.jpg'
import bharaniImg from '../assets/bharani.jpg'
import jvsImg from '../assets/jvs.png'
import rajeshImg from '../assets/rajesh.jpg'

export default function AboutUs() {
  const team = [
    { name: 'Sridhar Gadhi', role: 'Co-founder', image: founderImg, linkedin: 'https://www.linkedin.com/in/sridhargadhi/' },
    { name: 'Saloni Jaju', role: 'Co-founder', image: saloniImg, linkedin: 'https://www.linkedin.com/in/saloni-jaju/' },
    { name: 'Srikar Venkata Chintalagiri', role: 'CEO & Co-founder', image: srikarImg, linkedin: 'https://www.linkedin.com/in/srikarcv/' },
    { name: 'Srinivas Bharani N', role: 'AI Engineering Lead', image: bharaniImg, linkedin: 'https://www.linkedin.com/in/bharani-srinivas-n' },
    { name: 'JVS Ramakrishna', role: 'Advisor', image: jvsImg, linkedin: 'https://www.linkedin.com/in/jvsramakrishna' },
    { name: 'K Rajesh', role: 'Advisor', image: rajeshImg, linkedin: 'https://www.linkedin.com/in/karri-rajesh-a051a0182' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-left overflow-x-hidden selection:bg-[#FFC20E] selection:text-[#111113]">
      <SEO
        title="About Us"
        description="Projects don't fail on site. They fail in the gap between what was contracted, what was scheduled, and what actually happened. We built Alfred to close it."
      />
      <Navbar />

      <main className="flex-grow pt-24 sm:pt-28">

        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-16 sm:pt-20 pb-0">
          {/* Ambient yellow radial glow accent */}
          <div
            className="absolute -top-40 right-[-120px] w-[520px] h-[520px] pointer-events-none z-0"
            style={{
              background: 'radial-gradient(circle, rgba(255, 194, 14, 0.1) 0%, transparent 62%)'
            }}
          />

          <div className="max-w-[780px] mx-auto px-6 sm:px-8 relative z-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1A3A5C] leading-[1.06] tracking-[-0.035em] m-0">
              Projects don't fail on site. They fail in the{' '}
              <span className="relative inline-block">
                gap
                <span className="absolute left-0 right-0 bottom-[-8px] h-[5px] bg-[#FFC20E] rounded-full" />
              </span>
              .
            </h1>

            <p className="text-lg leading-relaxed text-[#6B6B74] mt-5 max-w-[60ch] font-normal">
              The gap between what was contracted, what was scheduled, and what actually happened on the ground. We built Alfred to close it.
            </p>
          </div>
        </section>

        {/* ORIGIN SECTION */}
        <section className="pt-6 pb-14 sm:pb-16 bg-white">
          <div className="max-w-[720px] mx-auto px-6 sm:px-8">
            <div className="text-[11px] font-bold tracking-widest uppercase text-[#B88500] mb-[18px]">
              Our origin
            </div>

            <p className="text-[17px] leading-[1.72] text-[#3A3A3F] mb-5 font-normal">
              Alfred started with a pattern we kept seeing on India's largest projects: the money wasn't lost on site — it was lost in the gap between the <strong>contract</strong>, the <strong>schedule</strong>, and what <strong>actually happened</strong>. A risky clause priced wrong. A claim lost because a deadline slipped by. A drawing that never matched the tender.
            </p>

            <div className="border-l-[3px] border-[#FFC20E] pl-5 my-6 sm:my-7">
              <p className="text-xl leading-normal text-[#1A3A5C] font-semibold m-0">
                There's simply too much to read. Thousands of pages per project, and no way to cross-check them all under deadline — while the know-how that catches these problems are siloed, and is never written down.
              </p>
            </div>

            <p className="text-[17px] leading-[1.72] text-[#3A3A3F] mb-5 font-normal">
              So we built Alfred to do the reading — contract, schedule and site data <strong>together</strong> — and flag what can hurt the project while there's still time to act. Built for the contracts the rest of the world's tools don't read: <strong>FIDIC, CPWD, EPC</strong>.
            </p>

            <p className="text-[17px] leading-[1.72] text-[#3A3A3F] mb-0 font-normal">
              Most of all, we want to make the working life of construction teams <strong>easier</strong>. They already carry enough — long hours, hard sites, thin margins. Alfred takes the document grind off their plate, so they can get back to what they do best: building.</p>
          </div>
        </section>

        {/* PRINCIPLES SECTION */}
        <section className="bg-[#1A3A5C] text-white py-16 sm:py-20">
          <div className="max-w-[1080px] mx-auto px-6 sm:px-8">
            <div className="max-w-[640px] mx-auto mb-12 text-center flex flex-col gap-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight m-0">What we believe</h2>
              <p className="text-[#D6E6F5] text-sm leading-relaxed max-w-md mx-auto m-0">Three commitments that shape every part of the product.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Principle 1 */}
              <div className="bg-white/5 border border-white/10 rounded-[14px] p-6 text-left flex flex-col items-start">
                <div className="w-[34px] h-[34px] rounded-[9px] bg-[#FFC20E] text-[#111113] grid place-items-center mb-4">
                  <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
                    <path d="M3.5 15h13" stroke="#111113" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M5.5 15c0-3 2-5 4.5-5s4.5 2 4.5 5" stroke="#111113" strokeWidth="1.6" />
                    <path d="M9 6.8V5.2a1 1 0 012 0v1.6" stroke="#111113" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white mb-2 m-0">Make the work simpler</h3>
                <p className="text-[13.5px] leading-relaxed text-[#D6E6F5] m-0">The people who build our infrastructure deserve tools that lighten the load, not add to it. Alfred does the reading, so your team can build.</p>
              </div>

              {/* Principle 2 */}
              <div className="bg-white/5 border border-white/10 rounded-[14px] p-6 text-left flex flex-col items-start">
                <div className="w-[34px] h-[34px] rounded-[9px] bg-[#FFC20E] text-[#111113] grid place-items-center mb-4">
                  <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
                    <path d="M4 16c0-7 5-12 12-12 0 7-5 12-12 12z" stroke="#111113" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M7 13c2-3 5-5 8-6" stroke="#111113" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white mb-2 m-0">AI for public good</h3>
                <p className="text-[13.5px] leading-relaxed text-[#D6E6F5] m-0">Better-run projects mean safer sites, less waste and infrastructure delivered on time. We build with ESG and sustainability in mind.</p>
              </div>

              {/* Principle 3 */}
              <div className="bg-white/5 border border-white/10 rounded-[14px] p-6 text-left flex flex-col items-start">
                <div className="w-[34px] h-[34px] rounded-[9px] bg-[#FFC20E] text-[#111113] grid place-items-center mb-4">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                    <path d="M8 11V5a1.5 1.5 0 013 0v5m0-6a1.5 1.5 0 013 0v6m0-4a1.5 1.5 0 013 0v7a5 5 0 01-5 5h-1a5 5 0 01-3.5-1.5L5 15a1.5 1.5 0 012.1-2.1L8 13" stroke="#111113" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white mb-2 m-0">Human decides, always</h3>
                <p className="text-[13.5px] leading-relaxed text-[#D6E6F5] m-0">Alfred drafts, analyzes and flags — but the judgment, and the send button, always stay human. On legally binding work, that's non-negotiable.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-[1080px] mx-auto px-6 sm:px-8">
            <div className="max-w-[640px] mb-12 text-left">
              <div className="text-[12px] font-semibold tracking-wider uppercase text-[#B88500] mb-3">The team</div>
              <h2 className="text-3xl sm:text-[34px] font-extrabold text-[#1A3A5C] leading-tight tracking-[-0.025em] m-0">Team Alfred.</h2>
              <p className="text-base text-[#6B6B74] mt-3.5 leading-relaxed m-0 font-normal">
                Our founders and advisors came together to take on some of the toughest problems in the built environment. Sitting with the largest general contractors across India and the Middle East, we kept hearing the same themes — contract and schedule risk, compounding unseen. Alfred is our answer.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#DDDDE6] rounded-[16px] p-6 flex flex-col text-left transition-all duration-300 hover:shadow-[0_18px_44px_-22px_rgba(26,58,92,0.28)] hover:-translate-y-1"
                >
                  <div className="w-28 h-28 mb-4 relative flex-none">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-2xl object-cover"
                      />
                    ) : (
                      <div className="w-full h-full rounded-2xl bg-[#EDF4FB] text-[#5B8EC4]/70 flex items-center justify-center border border-[#2B5F96]/10">
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[15.5px] font-bold text-[#1A3A5C] tracking-tight">{member.name}</span>
                    {member.linkedin && (
                      <a
                        className="w-5 h-5 rounded-[5px] bg-[#EDF4FB] hover:bg-[#D6E6F5] grid place-items-center flex-none transition-colors duration-200"
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#2B5F96">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <div className="text-xs font-semibold text-[#2B5F96] mt-1">{member.role}</div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 sm:py-24 bg-white border-t border-[#DDDDE6] text-center relative overflow-hidden" id="demo">
          <div className="max-w-[1080px] mx-auto px-6 sm:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3A5C] tracking-tight max-w-[20ch] mx-auto mb-4 m-0">Come close the gap with us.</h2>
            <p className="text-base text-[#6B6B74] max-w-[50ch] mx-auto mb-8 m-0 font-normal">Whether you run projects or want to help build the platform — we'd like to talk.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 font-semibold text-sm rounded-lg py-3 px-5 border border-transparent bg-[#1A3A5C] text-white hover:bg-[#2B5F96] transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              >
                Schedule a Demo
              </Link>
              <Link
                to="/product"
                className="inline-flex items-center gap-2 font-semibold text-sm rounded-lg py-3 px-5 border border-[#DDDDE6] bg-transparent text-[#1A3A5C] hover:border-[#2B5F96] hover:bg-[#EDF4FB] transition-all duration-200 active:scale-95 cursor-pointer"
              >
                See the product
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
