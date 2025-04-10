import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import Item from './Item'
import { ShopContext } from '../context/ShopContext'
import frogs from '../assets/frogs.png'
import KidEngineer from '../assets/KidEngineer.png'
import ScietistKid from '../assets/Scientistkid.png'
import ViolinKid from '../assets/Violinkid.png'
import ArtsKid from '../assets/artsKid.png'

const NewArrivals = () => {
  const { books } = useContext(ShopContext)
  const [newArrivals, setNewArrivals] = useState([])

  useEffect(() => {
    const data = books.slice(0, 7)
    setNewArrivals(data.reverse())
  }, [books])

  return (
    <section className="relative overflow-hidden bg-[#FFFAEB] py-16 font-fun">
      {/* 🎈 Floating Balloons */}
      <svg
        className="absolute w-10 top-8 left-8 animate-float-slow opacity-30 z-0"
        viewBox="0 0 24 24"
        fill="#ff90b3"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M12 14v6" stroke="#000" strokeWidth="1" />
      </svg>
      <svg
        className="absolute w-12 top-24 right-10 animate-float-medium opacity-30 z-0"
        viewBox="0 0 24 24"
        fill="#a5f3fc"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M12 14v6" stroke="#000" strokeWidth="1" />
      </svg>

     {/* 👷🏽‍♀️ Kid Engineer on top */}
<img
  src={KidEngineer}
  alt="Kid Engineer"
  className="hidden sm:block absolute w-[140px] md:w-[180px] xl:w-[220px] top-6 right-8 animate-float-slow z-0"
/>

{/* 🐸 Frogs below the girl */}
<img
  src={ViolinKid}
  alt="Frogs"
  className="hidden sm:block absolute w-[180px] md:w-[250px] xl:w-[320px] top-[180px] right-4 animate-float-medium z-0"
/>

      {/* ✨ Sparkles */}
      <div className="absolute top-12 left-1/2 w-3 h-3 bg-yellow-300 rounded-full animate-sparkle z-0" />
      <div className="absolute bottom-8 right-24 w-2 h-2 bg-pink-300 rounded-full animate-sparkle z-0" />
      <div className="absolute top-1/3 right-1/4 w-2.5 h-2.5 bg-purple-300 rounded-full animate-sparkle z-0" />

      {/* 📚 Main Content */}
      <div className="relative z-10 max-padd-container">
        <Title
          title1={'Latest'}
          title2={'Releases'}
          titleStyles="pb-10 font-fun"
          paraStyles="!block text-lg text-gray-600 max-w-xl"
        />

        <Swiper
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            400: { slidesPerView: 2, spaceBetween: 30 },
            700: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
            1200: { slidesPerView: 5, spaceBetween: 30 },
          }}
          modules={[Pagination, Autoplay]}
          className="h-[455px] sm:h-[488px] xl:h-[499px] mt-5"
        >
          {newArrivals.map((book) => (
            <SwiperSlide key={book._id}>
              <div className="transition-transform transform hover:scale-105 hover:animate-tilt">
                <Item book={book} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 🌊 Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFAEB" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient2)"
            d="M0,60 C360,180 1080,0 1440,120 L1440,0 L0,0 Z"
          />
        </svg>
      </div>
    </section>
  )
}

export default NewArrivals
