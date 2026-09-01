import React, { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { LayoutList, ArrowRight, Building2, FileSearch, CalendarClock, TableProperties } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import alfredLogo from '../assets/newlogo alfred.svg'
import { comparisons, comparisonHub } from '../data/comparisonContent'

const iconByType = {
  platforms: Building2,
  review: FileSearch,
  schedule: CalendarClock,
  manual: TableProperties,
}




function Blogs() {
  const [email, setEmail] = useState('')
  const [modalEmail, setModalEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscriptionError, setSubscriptionError] = useState('')
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const submitSubscription = async ({ submittedEmail, source, companyWebsite = '', onSuccess }) => {
    setIsSubscribing(true)
    setSubscriptionError('')

    try {
      const response = await fetch('/api/subscriptions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: submittedEmail,
          source,
          companyWebsite,
        }),
      })
      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(result.error || 'We could not complete your subscription. Please try again.')
      }

      onSuccess()
      setIsSubscribed(true)
      setTimeout(() => setIsSubscribed(false), 5000)
    } catch (error) {
      setSubscriptionError(error.message)
    } finally {
      setIsSubscribing(false)
    }
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    submitSubscription({
      submittedEmail: email,
      source: 'resources_monthly_intel',
      companyWebsite: new FormData(e.currentTarget).get('companyWebsite'),
      onSuccess: () => setEmail(''),
    })
  }

  // Close modal when pressing ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsSubscribeModalOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])


  return (
    <div className="bg-[#F4F4F7] min-h-screen text-[#6B6B74] font-primary text-left selection:bg-[#FFC20E]/30 relative overflow-x-hidden">
      <SEO 
        title="Resources & Case Studies" 
        description="Field notes on contracts, claims, and commercial certainty. Practical insights for construction buyers, commercial managers, and bid leaders."
      />
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-24 px-6 sm:px-12 md:px-16 lg:px-20 relative z-10">
        {/* Top ambient radial yellow glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none z-0" 
          style={{
            background: 'radial-gradient(circle at center, rgba(255, 194, 14, 0.05), transparent 70%)'
          }}
        />

        <div className="max-w-[1280px] mx-auto relative z-10">
          
          {/* Header Block */}
          <div className="text-center flex flex-col gap-3 max-w-3xl mx-auto mb-16">
            {/* Outline Tag */}
            <div className="w-fit bg-[#FFF6D6] text-[#B88500] text-[10px] font-mono font-bold tracking-widest px-3.5 py-1 rounded-full uppercase border border-[#FFC20E]/10 mx-auto">
              THE CRITICAL PATH
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-[38px] lg:text-[40px] font-bold text-[#1A3A5C] leading-[1.25] tracking-tight m-0 mt-2 max-w-2xl mx-auto">
              Field notes on contracts, <br />
              claims, and commercial certainty.
            </h1>

            {/* Subtitle */}
            <p className="text-[#5A5A62] text-xs sm:text-[13.5px] leading-relaxed m-0 mt-1 max-w-xl mx-auto font-normal">
              Practical insights for construction buyers, commercial managers, and bid leaders in India and the Middle East.
            </p>
          </div>

          {/* The Critical Path Card */}
          <div className="bg-[#1A3A5C] text-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-lg relative overflow-hidden mb-16 w-full text-left border border-[#2D4D70]/20 max-w-[1280px] mx-auto">
            {/* Concentric radar line curves on the right */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none hidden md:block overflow-hidden">
              <svg className="absolute right-0 top-1/2 -translate-y-1/2 h-[200%] w-[200%] opacity-15" viewBox="0 0 200 400" fill="none">
                <circle cx="200" cy="200" r="140" stroke="#FFFFFF" strokeWidth="1" />
                <circle cx="200" cy="200" r="180" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="200" cy="200" r="220" stroke="#FFFFFF" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="260" stroke="#FFC20E" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="300" stroke="#FFC20E" strokeWidth="2" />
              </svg>
            </div>

            <div className="relative z-10 max-w-2xl flex flex-col gap-5">
              {/* Tag Line with Icon */}
              <div className="flex items-center gap-2.5">
                <img src={alfredLogo} alt="AlfredWorks logo" className="w-6 h-6 rounded-lg shrink-0" />
                <span className="text-[10px] font-mono tracking-widest font-bold text-[#FFC20E] uppercase">
                  THE CRITICAL PATH &middot; PUBLISHED BY ALFREDWORKS
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-white leading-[1.25] tracking-tight m-0">
                The weekly briefing for the people running <span className="text-[#FFC20E]">major projects</span>.
              </h2>

              {/* Description */}
              <p className="text-[#A5B9D0] text-sm md:text-[15px] leading-relaxed m-0 max-w-xl font-normal">
                Every week, The Critical Path distills what Alfred, the contract intelligence copilot in AlfredWorks, sees across thousands of contracts and schedules into one clear read. Schedule risk, procurement, claims, and the early warning signs that decide how a project lands. Written for the teams delivering major infrastructure and EPC work.
              </p>

              {/* Subscribe Button */}
              <div className="mt-2">
                <button
                  onClick={() => window.open('https://getcriticalpath.substack.com/', '_blank')}
                  className="bg-[#FFC20E] hover:bg-[#FFE066] active:scale-95 text-[#1A3A5C] font-bold py-2.5 px-6 rounded-lg text-sm transition-all duration-200 cursor-pointer border-none shadow-sm font-sans"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* The Critical Path Archive Section */}
          <div className="mb-16 w-full max-w-[1280px] mx-auto">
            <div className="flex justify-between items-center pb-3 border-b border-[#DDDDE6] mb-6">
              <div className="flex items-center gap-2">
                {/* Yellow Document Icon */}
                <svg className="w-4 h-4 text-[#FFC20E] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-bold text-[#1A3A5C] text-xs sm:text-[13px] tracking-wider uppercase">
                  THE CRITICAL PATH ARCHIVE
                </span>
              </div>
              <a 
                href="https://getcriticalpath.substack.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#1A3A5C] hover:text-[#2B5F96] hover:underline text-xs font-semibold flex items-center gap-1 transition-colors no-underline"
              >
                <span>Visit Substack</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "The Change Order That Became a Claim",
                  url: "https://getcriticalpath.substack.com/p/change-order-that-became-a-claim?r=7alpkf&utm_campaign=post&utm_medium=web&triedRedirect=true"
                },
                {
                  title: "Construction Project Risk Map",
                  url: "https://getcriticalpath.substack.com/p/construction-project-risk-map?r=7alpkf&utm_campaign=post&utm_medium=web&triedRedirect=true"
                },
                {
                  title: "Email Threads: The Unread Risk Register",
                  url: "https://getcriticalpath.substack.com/p/email-threads-unread-risk-register?r=7alpkf&utm_campaign=post&utm_medium=web&triedRedirect=true"
                },
                {
                  title: "Obligations Outlive the People Who Make Them",
                  url: "https://getcriticalpath.substack.com/p/obligations-outlive-the-people-who?r=7alpkf&utm_campaign=post&utm_medium=web&triedRedirect=true"
                },
                {
                  title: "Decision Latency: Why Acting on a Claim Takes So Long",
                  url: "https://getcriticalpath.substack.com/p/decision-latency-why-acting-on-a?r=7alpkf&utm_campaign=post&utm_medium=web&triedRedirect=true"
                },
                {
                  title: "Construction Cost Overrun: The 5 Causes",
                  url: "https://getcriticalpath.substack.com/p/construction-cost-overrun-the-5-causes?r=7alpkf&utm_campaign=post&utm_medium=web&triedRedirect=true"
                },
                {
                  title: "What Your WIP is Really Telling You",
                  url: "https://getcriticalpath.substack.com/p/what-your-wip-is-really-telling-you?r=7alpkf&utm_campaign=post&utm_medium=web&triedRedirect=true"
                }
              ].map((article, idx) => (
                <a 
                  key={idx}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                  className="bg-white border border-[#DDDDE6] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#1A3A5C]/20 hover:scale-[1.02] cursor-pointer flex flex-col items-start text-left no-underline hover:no-underline group min-h-[95px] justify-start gap-3"
                >
                  <div className="flex justify-between items-center w-full">
                    {/* Document Icon - Turns yellow on hover */}
                    <svg 
                      className="w-4 h-4 text-slate-400 group-hover:text-[#FFC20E] transition-all duration-300 shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {/* External Link Icon - Only visible on hover */}
                    <svg 
                      className="w-3.5 h-3.5 text-[#1A3A5C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={2.2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <h4 
                    style={{ textDecoration: 'none' }}
                    className="font-bold text-[#1A3A5C] group-hover:text-[#2B5F96] text-xs sm:text-[13px] leading-snug m-0 transition-colors no-underline hover:no-underline select-none"
                  >
                    {article.title}
                  </h4>
                </a>
              ))}
            </div>
          </div>

          {/* Comparisons Section */}
          <section aria-labelledby="resources-comparisons-title" className="mt-16 w-full max-w-[1280px] mx-auto flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pb-4 border-b border-[#DDDDE6]">
              <div className="max-w-3xl text-left">
                <div className="flex items-center gap-2">
                  <LayoutList className="w-4 h-4 text-[#B88500]" aria-hidden="true" />
                  <span className="text-[10px] font-mono tracking-widest font-bold text-[#B88500] uppercase">Comparisons</span>
                </div>
                <h2
                  id="resources-comparisons-title"
                  className="mt-2 text-2xl sm:text-3xl font-bold text-[#1A3A5C] leading-tight"
                >
                  {comparisonHub.title}
                </h2>
                <div className="mt-3 flex flex-col gap-2 text-xs sm:text-[13.5px] leading-relaxed text-[#5A5A62]">
                  {comparisonHub.introduction.map((paragraph, idx) => (
                    <p key={idx} className="m-0">{paragraph}</p>
                  ))}
                </div>
              </div>
              <Link
                to="/compare"
                className="inline-flex min-h-11 shrink-0 items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#2B5F96] hover:underline uppercase tracking-wider font-sans"
              >
                <span>View comparison hub</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {comparisons.map((comparison) => {
                const Icon = iconByType[comparison.icon]
                return (
                  <div
                    key={comparison.page}
                    className="bg-white border border-[#DDDDE6] rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#1A3A5C]/20 hover:scale-[1.01] flex flex-col justify-between gap-6 group relative text-left"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between w-full">
                        <span className="flex w-10 h-10 items-center justify-center rounded-lg bg-[#FFF6D6] text-[#B88500] border border-[#FFC20E]/10">
                          <Icon className="w-5 h-5" />
                        </span>
                        <ArrowRight className="w-5 h-5 text-slate-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#2B5F96]" />
                      </div>
                      
                      <h3 className="font-bold text-[#1A3A5C] group-hover:text-[#2B5F96] text-base sm:text-lg leading-snug m-0 transition-colors">
                        {comparison.cardTitle}
                      </h3>
                      
                      <p className="text-[#5A5A62] text-xs sm:text-[13.5px] leading-relaxed m-0 font-normal">
                        {comparison.cardDescription}
                      </p>
                    </div>
                    <Link
                      to={`/${comparison.page}`}
                      className="absolute inset-0 z-10"
                    />
                  </div>
                )
              })}
            </div>
          </section>


          {/* Monthly Intel Briefing Subscription Card */}
          <div className="bg-[#1A3A5C] text-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg relative overflow-hidden mt-16 w-full text-left flex flex-col md:flex-row justify-between items-center gap-8 border border-[#2D4D70]/20 max-w-[1280px] mx-auto">
            {/* Ambient subtle background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
            
            <div className="flex flex-col gap-1 relative z-10 max-w-xl">
              {/* Gold Eyebrow */}
              <span className="text-[10px] font-mono tracking-widest font-bold text-[#FFC20E] uppercase mb-1">
                MONTHLY INTEL BRIEFING
              </span>
              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight m-0 mb-1">
                Join 1,400+ Construction Executives
              </h2>
              {/* Description */}
              <p className="text-[#94A9C0] text-xs sm:text-[13px] leading-relaxed m-0">
                Receive one sharp contract advisory letter per month. We analyze live rulings, FIDIC dispute trends, and CPWD GCC rate-renegotiation playbooks. Strictly zero spam.
              </p>
            </div>

            {/* Newsletter form */}
            <div className="w-full md:w-auto shrink-0 relative z-10">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="email"
                  name="email"
                  inputMode="email"
                  autoComplete="email"
                  aria-label="Work email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#12283E] text-white border border-[#2D4D70] rounded-lg px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#FFC20E] transition-all min-w-[240px] placeholder:text-[#657F9B] font-sans"
                  required
                  disabled={isSubscribing}
                />
                <input
                  type="text"
                  name="companyWebsite"
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="bg-[#FFC20E] text-[#1A3A5C] hover:bg-[#FFE066] disabled:opacity-60 disabled:cursor-not-allowed font-bold px-5 py-2.5 rounded-lg text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border-none shadow-sm active:scale-95"
                >
                  <span>{isSubscribing ? 'Subscribing…' : 'Subscribe'}</span>
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </form>
              <p className="text-[#94A9C0] text-[10px] leading-relaxed mt-2 mb-0 max-w-md">
                By subscribing, you agree to receive marketing emails from AlfredWorks. You can unsubscribe at any time.
              </p>
            </div>

            {/* Success toast notification */}
            <AnimatePresence>
              {isSubscribed && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-3 right-6 bg-[#145C35] text-white text-[11px] font-mono px-4 py-1.5 rounded-lg border border-emerald-500/20 shadow-md flex items-center gap-2 z-20"
                >
                  <svg className="w-3.5 h-3.5 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Subscribed! Check your inbox soon.</span>
                </motion.div>
              )}
              {subscriptionError && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  role="alert"
                  className="absolute bottom-3 right-6 bg-[#7A263A] text-white text-[11px] px-4 py-1.5 rounded-lg border border-red-300/20 shadow-md z-20"
                >
                  {subscriptionError}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </main>



      {/* Subscribe Modal Overlay */}
      <AnimatePresence>
        {isSubscribeModalOpen && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
            {/* Modal backdrop blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSubscribeModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal content box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-[#1A3A5C] text-white border border-[#2D4D70]/40 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative z-10 flex flex-col p-6 sm:p-8"
            >
              {/* Close button */}
              <button 
                onClick={() => setIsSubscribeModalOpen(false)}
                className="absolute top-4 right-4 bg-transparent border-none cursor-pointer p-1 text-[#94A9C0] hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col gap-4 text-left">
                {/* Logo and Tag */}
                <div className="flex items-center gap-2">
                  <img src={alfredLogo} alt="AlfredWorks logo" className="w-5 h-5 rounded-md shrink-0" />
                  <span className="text-[9px] font-mono tracking-widest font-bold text-[#FFC20E] uppercase">
                    THE CRITICAL PATH
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white m-0">
                  Subscribe to The Critical Path
                </h3>
                
                <p className="text-[#94A9C0] text-xs sm:text-sm leading-relaxed m-0">
                  Join 1,400+ construction executives. Receive one sharp contract advisory letter per month. Strictly zero spam.
                </p>

                <form onSubmit={(e) => {
                  e.preventDefault()
                  submitSubscription({
                    submittedEmail: modalEmail,
                    source: 'resources_subscribe_modal',
                    companyWebsite: new FormData(e.currentTarget).get('companyWebsite'),
                    onSuccess: () => {
                      setModalEmail('')
                      setIsSubscribeModalOpen(false)
                    },
                  })
                }} className="flex flex-col gap-3 mt-2 w-full">
                  <input
                    type="email"
                    name="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="Enter your work email"
                    value={modalEmail}
                    onChange={(e) => setModalEmail(e.target.value)}
                    className="bg-[#12283E] text-white border border-[#2D4D70] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FFC20E] transition-all placeholder:text-[#657F9B] font-sans w-full"
                    required
                    autoFocus
                    disabled={isSubscribing}
                  />
                  <input
                    type="text"
                    name="companyWebsite"
                    tabIndex="-1"
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />
                  <button
                    type="submit"
                    disabled={isSubscribing}
                    className="bg-[#FFC20E] text-[#1A3A5C] hover:bg-[#FFE066] disabled:opacity-60 disabled:cursor-not-allowed font-bold py-3 rounded-lg text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border-none shadow-sm active:scale-95"
                  >
                    <span>{isSubscribing ? 'Subscribing…' : 'Subscribe'}</span>
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </button>
                  <p className="text-[#94A9C0] text-[10px] leading-relaxed m-0">
                    By subscribing, you agree to receive marketing emails from AlfredWorks. You can unsubscribe at any time.
                  </p>
                  {subscriptionError && (
                    <p role="alert" className="text-red-200 text-xs m-0">
                      {subscriptionError}
                    </p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}

export default Blogs
