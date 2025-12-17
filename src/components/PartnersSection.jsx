import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Sponsor1 from '../assets/sponsors/1.png'
import Sponsor2 from '../assets/sponsors/2.png'
import Sponsor3 from '../assets/sponsors/3.png'
import Sponsor4 from '../assets/sponsors/4.png'
import Sponsor5 from '../assets/sponsors/5.png'
import Sponsor6 from '../assets/sponsors/6.png'
import Sponsor7 from '../assets/sponsors/7.png'

function PartnersSection() {
  const sponsors = [Sponsor1, Sponsor2, Sponsor3, Sponsor4, Sponsor5, Sponsor6, Sponsor7, Sponsor1, Sponsor2, Sponsor3, Sponsor4, Sponsor5, Sponsor6, Sponsor7]
  return (
    <section className="py-12 sm:py-20 lg:py-32 px-4 sm:px-8 bg-primary-bg relative z-10 border-t border-white/5">
      <div className="max-w-[1300px] mx-auto text-center">
        <h3 className="text-base sm:text-lg lg:text-xl text-accent font-semibold uppercase tracking-[3px] font-primary mb-8 sm:mb-12 lg:mb-16 opacity-80">
          ALFRED POWER PARTNERS
        </h3>

        <div className="w-full overflow-hidden py-6">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={60}
            slidesPerView={'auto'}
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
            className="marquee-swiper"
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 60,
              },
            }}
          >
            {sponsors.map((sponsor, index) => (
              <SwiperSlide key={index} className="w-auto">
                <div className="w-44 h-22 sm:w-48 sm:h-24 flex items-center justify-center">
                  <img 
                    src={sponsor} 
                    alt={`Partner ${index + 1}`} 
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
