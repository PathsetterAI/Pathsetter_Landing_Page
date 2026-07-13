import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CalendarClock,
  ChevronDown,
  ChevronRight,
  FileSearch,
  LayoutList,
  TableProperties,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import { comparisons, comparisonHub } from '../data/comparisonContent'

// Icon mapping based on article icon property
const iconByType = {
  platforms: Building2,
  review: FileSearch,
  schedule: CalendarClock,
  manual: TableProperties,
}

// Custom Breadcrumbs Component
function Breadcrumbs({ current }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-[#6B6B74]">
      <ol className="flex flex-wrap items-center gap-1.5 p-0 m-0 list-none">
        <li>
          <Link to="/" className="hover:text-[#2B5F96] hover:underline transition-colors">
            Home
          </Link>
        </li>
        <li aria-hidden="true" className="text-[#ADADB8]">
          <ChevronRight className="w-3.5 h-3.5" />
        </li>
        <li>
          <Link to="/resources" className="hover:text-[#2B5F96] hover:underline transition-colors">
            Resources
          </Link>
        </li>
        <li aria-hidden="true" className="text-[#ADADB8]">
          <ChevronRight className="w-3.5 h-3.5" />
        </li>
        {current ? (
          <>
            <li>
              <Link to="/compare" className="hover:text-[#2B5F96] hover:underline transition-colors">
                Comparisons
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#ADADB8]">
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li className="font-semibold text-[#1A3A5C]" aria-current="page">
              {current}
            </li>
          </>
        ) : (
          <li className="font-semibold text-[#1A3A5C]" aria-current="page">
            Comparisons
          </li>
        )}
      </ol>
    </nav>
  )
}

// Custom FAQ Accordion Component
function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `faq-panel-${index}`
        return (
          <div key={item.question} className="overflow-hidden bg-white border border-[#DDDDE6] rounded-xl shadow-sm">
            <div
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between p-6 sm:p-8 cursor-pointer select-none hover:bg-[#F4F4F7] transition-colors duration-200"
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setOpenIndex(isOpen ? null : index)
                }
              }}
            >
              <h3 className="pr-4 text-sm sm:text-base font-bold text-[#1A3A5C] m-0 pointer-events-none">{item.question}</h3>
              <ChevronDown
                className={`w-5 h-5 shrink-0 text-[#1A3A5C] transition-transform duration-200 pointer-events-none ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </div>
            {isOpen && (
              <div id={panelId}>
                <div className="border-t border-[#DDDDE6] px-6 pb-6 pt-4 text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#3A3A3F] sm:px-8 sm:pb-8">
                  {item.answer}
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default function Compare() {
  const { slug } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    
    // Forcefully remove any parent overflow restrictions that block sticky positioning
    const rootEl = document.getElementById('root')
    if (rootEl) {
      rootEl.style.overflow = 'visible'
      rootEl.style.overflowX = 'visible'
    }
    document.body.style.overflowX = 'visible'
  }, [slug])

  // If there's a slug, try to find the specific comparison article
  const activeArticle = slug ? comparisons.find((c) => c.page === `compare/${slug}`) : null

  // If slug was passed but article doesn't exist, show 404 or redirect to /compare
  useEffect(() => {
    if (slug && !activeArticle) {
      navigate('/compare', { replace: true })
    }
  }, [slug, activeArticle, navigate])

  if (slug && !activeArticle) {
    return null
  }

  return (
    <div className="bg-[#F4F4F7] min-h-screen text-[#6B6B74] font-primary text-left selection:bg-[#FFC20E]/30 relative">
      <Navbar />

      {activeArticle ? (
        // Detailed Article Page View
        <>
          <SEO
            title={activeArticle.titleTag}
            description={activeArticle.metaDescription}
          />

          {/* Header Block */}
          <header className="bg-white border-b border-[#DDDDE6] pt-28 sm:pt-32 pb-16 px-6 sm:px-12 md:px-16 lg:px-20 relative z-10">
            <div className="max-w-[1280px] mx-auto">
              <Breadcrumbs current={activeArticle.breadcrumbLabel} />
              
              <div className="mt-8 max-w-4xl">
                <div className="w-fit bg-[#FFF6D6] text-[#B88500] text-[10px] font-mono font-bold tracking-widest px-3.5 py-1 rounded-full uppercase border border-[#FFC20E]/10 mb-4">
                  COMPARISON
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-[38px] lg:text-[42px] font-bold text-[#1A3A5C] leading-[1.2] tracking-tight m-0">
                  {activeArticle.title}
                </h1>
                <p className="text-[#3A3A3F] text-base sm:text-lg leading-relaxed m-0 mt-4 max-w-3xl font-normal">
                  {activeArticle.introduction}
                </p>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="py-16 px-6 sm:px-12 md:px-16 lg:px-20 relative z-10">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,780px)_320px] gap-12 lg:gap-20 justify-between items-start">
              
              {/* Left Column: Sections & FAQ */}
              <article className="w-full flex flex-col gap-12">
                <div className="flex flex-col gap-12 bg-white border border-[#DDDDE6] rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">
                  {activeArticle.sections.map((section) => (
                    <section
                      key={section.id}
                      id={section.id}
                      className="scroll-mt-28 border-b border-[#DDDDE6]/50 pb-10 last:border-0 last:pb-0"
                    >
                      <h2 className="text-xl sm:text-2xl font-bold text-[#1A3A5C] m-0 mb-4">
                        {section.title}
                      </h2>
                      {section.paragraphs && (
                        <div className="flex flex-col gap-4 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#3A3A3F]">
                          {section.paragraphs.map((p, idx) => (
                            <p key={idx} className="m-0">{p}</p>
                          ))}
                        </div>
                      )}
                      {section.bullets && (
                        <ul className="m-0 mt-4 p-0 list-none flex flex-col gap-3.5 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#3A3A3F]">
                          {section.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-[#FFC20E]" />
                              <span>
                                <strong className="font-bold text-[#1A3A5C]">{bullet.lead}</strong>{' '}
                                {bullet.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </section>
                  ))}
                </div>

                {/* FAQ Section */}
                <section id="faq" className="scroll-mt-28 pt-4">
                  <div className="w-fit bg-[#FFF6D6] text-[#B88500] text-[9px] font-mono font-bold tracking-widest px-3 py-0.5 rounded-full uppercase border border-[#FFC20E]/10 mb-2">
                    FAQ
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1A3A5C] m-0 mb-6">
                    Frequently Asked Questions
                  </h2>
                  <FAQAccordion items={activeArticle.faq} />
                </section>
              </article>

              {/* Right Column: Sticky Sidebar */}
              <aside 
                className="w-full lg:sticky flex flex-col gap-6"
                style={{ position: 'sticky', top: '112px', alignSelf: 'start' }}
              >
                {/* On This Page Nav */}
                <div className="bg-white border border-[#DDDDE6] rounded-2xl p-5 shadow-sm">
                  <h3 className="text-xs sm:text-[13px] font-bold tracking-widest text-[#1A3A5C] uppercase pb-2 border-b border-[#DDDDE6]/50 mb-3">
                    On This Page
                  </h3>
                  <nav aria-label="On this page">
                    <ul className="p-0 m-0 list-none flex flex-col gap-1">
                      {activeArticle.sections.map((section) => (
                        <li key={section.id}>
                          <a
                            href={`#${section.id}`}
                            className="block rounded-lg px-2 py-1.5 text-[13px] font-semibold text-[#6B6B74] hover:bg-[#F4F4F7] hover:text-[#2B5F96] transition-all no-underline"
                            onClick={(e) => {
                              e.preventDefault()
                              const target = document.getElementById(section.id)
                              if (target) {
                                target.scrollIntoView({ behavior: 'smooth' })
                              }
                            }}
                          >
                            {section.title}
                          </a>
                        </li>
                      ))}
                      <li>
                        <a
                          href="#faq"
                          className="block rounded-lg px-2 py-1.5 text-[13px] font-semibold text-[#6B6B74] hover:bg-[#F4F4F7] hover:text-[#2B5F96] transition-all no-underline"
                          onClick={(e) => {
                            e.preventDefault()
                            const target = document.getElementById('faq')
                            if (target) {
                              target.scrollIntoView({ behavior: 'smooth' })
                            }
                          }}
                        >
                          FAQ
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                {/* Booking CTA Card */}
                <div className="bg-[#1A3A5C] text-white rounded-2xl p-6 shadow-md relative overflow-hidden border border-[#2D4D70]/20">
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#FFC20E]/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="relative z-10 flex flex-col gap-4">
                    <div className="w-fit bg-white/10 text-[#FFC20E] text-[9px] font-mono font-bold tracking-widest px-2.5 py-0.5 rounded-full uppercase border border-white/5">
                      LIVE BRIEFING
                    </div>
                    <p className="m-0 text-sm md:text-base font-semibold leading-relaxed">
                      {activeArticle.demoCopy}
                    </p>
                    <button
                      onClick={() => navigate('/demo')}
                      className="w-full bg-[#FFC20E] hover:bg-[#FFE066] active:scale-95 text-[#1A3A5C] font-bold py-2.5 px-4 rounded-lg text-sm transition-all duration-200 cursor-pointer border-none shadow-sm font-sans"
                    >
                      Book a Demo
                    </button>
                  </div>
                </div>
              </aside>

            </div>

            {/* Bottom Related Comparisons Section */}
            <section className="max-w-[1280px] mx-auto mt-20 border-t border-[#DDDDE6] pt-12">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A3A5C] m-0">
                  Related Comparisons
                </h2>
                <Link
                  to="/compare"
                  className="text-[#2B5F96] hover:text-[#5B8EC4] font-bold text-xs sm:text-[13px] tracking-wider uppercase flex items-center gap-1.5 transition-colors no-underline hover:underline"
                >
                  <span>View All</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {comparisons
                  .filter((c) => c.page !== activeArticle.page)
                  .slice(0, 3)
                  .map((comparison) => {
                    const Icon = iconByType[comparison.icon]
                    return (
                      <div
                        key={comparison.page}
                        className="bg-white border border-[#DDDDE6] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#1A3A5C]/20 hover:scale-[1.01] flex flex-col justify-between gap-5 group relative"
                      >
                        <div className="flex flex-col gap-4 text-left">
                          <div className="flex items-center justify-between w-full">
                            <span className="flex w-9 h-9 items-center justify-center rounded-lg bg-[#FFF6D6] text-[#B88500] border border-[#FFC20E]/10">
                              <Icon className="w-4.5 h-4.5" />
                            </span>
                            <ArrowRight className="w-4 h-4 text-slate-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#2B5F96]" />
                          </div>
                          <h3 className="font-bold text-[#1A3A5C] group-hover:text-[#2B5F96] text-[13.5px] sm:text-[14.5px] leading-snug m-0 transition-colors">
                            {comparison.cardTitle}
                          </h3>
                        </div>
                        <Link
                          to={`/${comparison.page}`}
                          className="absolute inset-0 z-10"
                        />
                      </div>
                    )
                  })}
              </div>

              <div className="mt-10">
                <Link
                  to="/compare"
                  className="text-xs sm:text-sm font-semibold text-[#6B6B74] hover:text-[#2B5F96] flex items-center gap-1.5 no-underline hover:underline"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Comparisons</span>
                </Link>
              </div>
            </section>
          </main>
        </>
      ) : (
        // Comparison Hub Page View
        <>
          <SEO
            title={comparisonHub.titleTag}
            description={comparisonHub.metaDescription}
          />

          <header className="bg-white border-b border-[#DDDDE6] pt-28 sm:pt-32 pb-16 px-6 sm:px-12 md:px-16 lg:px-20 relative z-10">
            <div className="max-w-[1280px] mx-auto">
              <Breadcrumbs />
              
              <div className="mt-8 max-w-4xl">
                <div className="w-fit bg-[#FFF6D6] text-[#B88500] text-[10px] font-mono font-bold tracking-widest px-3.5 py-1 rounded-full uppercase border border-[#FFC20E]/10 mb-4">
                  THE CRITICAL PATH
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-[38px] lg:text-[42px] font-bold text-[#1A3A5C] leading-[1.2] tracking-tight m-0">
                  {comparisonHub.title}
                </h1>
                <div className="text-[#3A3A3F] text-base leading-relaxed m-0 mt-4 max-w-3xl font-normal flex flex-col gap-3">
                  {comparisonHub.introduction.map((paragraph, idx) => (
                    <p key={idx} className="m-0">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </header>

          <main className="py-16 px-6 sm:px-12 md:px-16 lg:px-20 relative z-10">
            <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
              
              <section aria-labelledby="comparison-grid-title">
                <div className="mb-6 flex items-center gap-2.5">
                  <LayoutList className="w-4.5 h-4.5 text-[#B88500]" aria-hidden="true" />
                  <h2
                    id="comparison-grid-title"
                    className="text-xs sm:text-[13px] font-bold tracking-widest text-[#1A3A5C] uppercase m-0"
                  >
                    {comparisonHub.sectionTitle}
                  </h2>
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
                          
                          <h3 className="font-bold text-[#1A3A5C] group-hover:text-[#2B5F96] text-lg sm:text-xl leading-snug m-0 transition-colors">
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

              {/* Demo Booking CTA Block */}
              <div className="bg-[#1A3A5C] text-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-lg relative overflow-hidden border border-[#2D4D70]/20 flex flex-col md:flex-row justify-between items-center gap-8 text-left">
                <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none hidden md:block overflow-hidden">
                  <svg className="absolute right-0 top-1/2 -translate-y-1/2 h-[200%] w-[200%] opacity-15" viewBox="0 0 200 400" fill="none">
                    <circle cx="200" cy="200" r="140" stroke="#FFFFFF" strokeWidth="1" />
                    <circle cx="200" cy="200" r="180" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="200" cy="200" r="220" stroke="#FFFFFF" strokeWidth="1.5" />
                    <circle cx="200" cy="200" r="260" stroke="#FFC20E" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="relative z-10 max-w-2xl flex flex-col gap-3">
                  <div className="w-fit bg-white/10 text-[#FFC20E] text-[10px] font-mono font-bold tracking-widest px-3 py-0.5 rounded-full uppercase border border-white/5">
                    BOOK A DEMO
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-[28px] font-bold text-white leading-tight m-0">
                    Contract intelligence on top of the systems you already run.
                  </h2>
                  <p className="text-[#A5B9D0] text-xs sm:text-[14.5px] leading-relaxed m-0 font-normal">
                    {comparisonHub.demoCopy}
                  </p>
                </div>
                <div className="relative z-10 shrink-0 w-full md:w-auto">
                  <button
                    onClick={() => navigate('/demo')}
                    className="w-full md:w-auto bg-[#FFC20E] hover:bg-[#FFE066] active:scale-95 text-[#1A3A5C] font-bold py-3 px-8 rounded-lg text-sm sm:text-base transition-all duration-200 cursor-pointer border-none shadow-sm font-sans"
                  >
                    Book a Demo
                  </button>
                </div>
              </div>

            </div>
          </main>
        </>
      )}

      <Footer />
    </div>
  )
}
