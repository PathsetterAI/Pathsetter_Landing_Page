import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

// Catch-all for unmatched paths. Before this existed, every mistyped URL and
// stale inbound link rendered the app shell and was indexable.
//
// Note: this stops the page being *indexed*, but the HTTP status is still 200,
// because nginx serves index.html for every path. Returning a real 404 status
// requires a route allow-list in nginx.conf and a deploy test.
export default function NotFound() {
  const links = [
    { to: '/product', label: 'Product', hint: 'What AlfredWorks does, bid to closeout' },
    { to: '/who-its-for', label: 'Who it’s for', hint: 'EPCs, owners, PMCs and independent engineers' },
    { to: '/compare', label: 'Comparisons', hint: 'How it differs from P6, Procore and spreadsheets' },
    { to: '/resources', label: 'Resources', hint: 'Guides on FIDIC, notices and claims' },
  ]

  return (
    <div className="relative w-full min-h-screen bg-[#F4F4F7]">
      <SEO
        title="Page not found"
        description="This page does not exist. Browse the AlfredWorks product, comparisons and contract guides."
        noindex
      />
      <Navbar />

      <main className="w-full bg-white border-b border-[#DDDDE6]">
        <div className="max-w-[760px] mx-auto px-6 sm:px-12 py-[110px]">
          <div className="inline-flex items-center gap-[9px] bg-[#EDF4FB] border border-[#D6E6F5] px-[13px] py-[6px] rounded-[30px] mb-[20px]">
            <span className="w-[9px] h-[9px] rounded-[3px] bg-[#FFC20E] shrink-0" />
            <span className="text-[12.5px] text-[#1A3A5C] uppercase tracking-[0.01em] font-bold">
              Error 404
            </span>
          </div>

          <h1 className="text-[32px] sm:text-[40px] font-extrabold text-[#1A3A5C] leading-[1.1] tracking-[-0.03em] m-0">
            This page doesn&rsquo;t exist.
          </h1>

          <p className="max-w-[52ch] mt-[18px] mb-[38px] text-[#6B6B74] text-[16.5px] leading-[1.6] m-0">
            The link may be out of date, or the address may have a typo. Here is
            where most people are heading.
          </p>

          <div className="flex flex-col border-t border-[#DDDDE6]">
            {links.map(({ to, label, hint }) => (
              <Link
                key={to}
                to={to}
                onClick={() => window.scrollTo(0, 0)}
                className="group flex items-baseline justify-between gap-4 py-[18px] border-b border-[#DDDDE6] no-underline"
              >
                <span className="text-[16px] font-bold text-[#1A3A5C] group-hover:text-[#2B5F96] transition-colors duration-200">
                  {label}
                </span>
                <span className="text-[13.5px] text-[#6B6B74] text-right">{hint}</span>
              </Link>
            ))}
          </div>

          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-block mt-[38px] bg-[#2B5F96] hover:bg-[#1A3A5C] text-white px-[24px] py-[14px] text-[14.5px] rounded-[11px] font-semibold no-underline transition-colors duration-150"
          >
            Back to home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
