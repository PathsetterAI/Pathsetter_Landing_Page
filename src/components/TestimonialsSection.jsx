import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'

const proofDeployments = [
  {
    client: 'Zetwerk',
    metric: '₹22 Cr',
    metricLabel: 'Claims Filed Under FIDIC',
    angle: 'Milestone Invoicing & EOT notices',
    scale: '20+ infrastructure projects portfolio',
    quote: 'Alfred automated EOT letters and tracked Clause 8.4 notices across our portfolio. Invoicing triggers that used to take weeks of coordination now fire automatically when milestones clear.'
  },
  {
    client: 'MEIL',
    metric: '92%',
    metricLabel: 'Schedule Adherence',
    angle: 'First ERP-enabled EPC integration',
    scale: '2 site deployment, ₹1,200 Cr project scale',
    quote: 'Syncing physical site progress with P6 schedules and contract obligations was a manual loop. Alfred tracks thousands of commitments in real time, directly linked to ERP progress invoicing.'
  },
  {
    client: 'Bondada',
    metric: '47+',
    metricLabel: 'High-Risk Clauses Caught',
    angle: 'Tender & RFP risk reviews',
    scale: 'Risk review before signing',
    quote: 'Catches compliance risks before we sign. Alfred flags harsh Liquidated Damages conditions and obligation periods, ensuring we adjust margins or negotiate terms.'
  },
  {
    client: 'APEPDCL',
    metric: '100%',
    metricLabel: 'PM KUSUM Audit Readiness',
    angle: 'Compliance workspace & doc control',
    scale: 'State-wide document audit trial',
    quote: 'Managing regulatory compliance is a major overhead. Alfred extracted and tracked every obligation in our project files, providing a structured, bulletproof audit trial.'
  },
  {
    client: 'Purelight',
    metric: '32 hrs',
    metricLabel: 'Saved Per Week',
    angle: 'Notice letter generation',
    scale: 'Regional contract administration',
    quote: 'Notice drafting and evidence mapping are now instant. Alfred cross-references daily progress alerts and drafts the notice letter with correct clause citations automatically.'
  }
]

export default function TestimonialsSection() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-12 py-12 lg:py-16 text-left">
      {/* Header */}
      <div className="flex flex-col gap-2 mb-10 max-w-3xl">
        <span className="text-[10px] font-mono text-[#B88500] uppercase tracking-widest font-bold">
          Proven Deployments
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A3A5C] m-0 leading-tight">
          Trusted by Teams Managing Major Infrastructure
        </h2>
        <p className="text-secondary-mid text-xs leading-relaxed m-0 mt-1">
          From bid risk assessment to Extension of Time defense, Alfred is deployed on projects totaling ₹10,000 Cr+.
        </p>
      </div>

      {/* Swiper Slider Wrapper */}
      <div className="w-full relative z-10 py-4">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          initialSlide={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 80,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="enterprise-swiper"
          style={{ paddingBottom: '3.5rem' }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 'auto',
              spaceBetween: 30
            }
          }}
        >
          {proofDeployments.map((item, index) => (
            <SwiperSlide 
              key={index} 
              className="w-full max-w-[350px] h-auto min-h-[380px]"
            >
              <div className="h-full bg-white border border-[#DDDDE6] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#1A3A5C] transition-all duration-300 shadow-sm relative overflow-hidden">
                
                {/* Stat block */}
                <div className="flex flex-col gap-1 border-b border-[#DDDDE6] pb-4 text-left">
                  <span className="text-[9px] text-[#6B6B74] font-mono uppercase tracking-wider">{item.client}</span>
                  <div className="text-3xl font-bold text-[#1A3A5C] leading-none tracking-tight">{item.metric}</div>
                  <span className="text-[10px] font-semibold text-[#3A3A3F]">{item.metricLabel}</span>
                  <span className="text-[9px] text-[#6B6B74] font-mono mt-0.5">{item.scale}</span>
                </div>

                {/* Quote block */}
                <div className="flex-1 py-4 text-left">
                  <p className="text-xs text-[#3A3A3F] leading-relaxed m-0 italic font-primary line-clamp-5">
                    "{item.quote}"
                  </p>
                </div>

                {/* Bottom branding detail */}
                <div className="border-t border-[#DDDDE6] pt-3 flex items-center justify-between text-[10px] text-[#6B6B74] font-mono">
                  <span>Use Case</span>
                  <span className="font-bold text-[#2B5F96]">{item.angle}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
