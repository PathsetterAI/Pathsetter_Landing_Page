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
    <section style={{
      padding: '8rem 2rem',
      background: '#0B0F12',
      position: 'relative',
      zIndex: '10',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      <div style={{
        maxWidth: '1300px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h3 style={{
          fontSize: '1.3rem',
          color: '#00bf99',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          fontFamily: 'Inter, sans-serif',
          marginBottom: '4rem',
          opacity: 0.8
        }}>
          ALFRED POWER PARTNERS
        </h3>

        <div style={{
          width: '100%',
          overflow: 'hidden',
          padding: '1.5rem 0'
        }}>
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
              <SwiperSlide key={index} style={{ width: 'auto' }}>
                <div
                  style={{
                    width: '160px',
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img 
                    src={sponsor} 
                    alt={`Partner ${index + 1}`} 
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      borderRadius: '8px'
                    }} 
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
