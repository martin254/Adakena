import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

import adakena10 from '../assets/Adakena10.jpg'
import adakena2 from '../assets/Adakena2.jpg'
import adakena4 from '../assets/Adakena4.jpg'
import TracingCover from '../assets/TracingCover.png'
import Tiny_Dino from '../assets/Tiny_Dino.png'
import TracingInside from '../assets/TracingInside.png'
import dinoinside from '../assets/dinoinside.png'
import miceGroup from '../assets/mice.png'
import mouseAlone from '../assets/mouse.png'
import owlfun from '../assets/owlfun.png'
import ScietistKid from '../assets/Scientistkid.png'
import ViolinKid from '../assets/Violinkid.png'
import ArtsKid from '../assets/artskid.png'


const images = [adakena10, adakena2, adakena4, TracingCover, TracingInside, Tiny_Dino,dinoinside]

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <section className="relative bg-[#FFFAEB] overflow-hidden py-20 xl:py-36 font-fun">
      {/* Floating elements */}
      <svg className="absolute w-10 top-20 left-6 animate-float-slow opacity-90 z-0" fill="#4ade80" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
     
      <svg
  className="absolute w-12 top-32 right-10 fill-yellow-300 animate-pulse-glow z-0"
  viewBox="0 0 24 24"
>
  <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
</svg>

<svg
  className="absolute w-6 top-[20%] left-[35%] fill-yellow-300 animate-sparkle-twinkle z-0"
  viewBox="0 0 24 24"
>
  <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
</svg>

      {/* 🐭 Floating owl */}


<img 
  src={ArtsKid}
  alt="owl Group"
  className="rounded-xl absolute w-[150px] top-15 left-8 animate-float-slow opacity-60 z-0"
/>

{/* 🐭 Floating Mouse Alone (Right Middle) */}
{/*<img 
  src={ArtsKid}
  alt="Mouse Alone"
  className="rounded-xl absolute w-[90px] top-20 right-5 transform -translate-y-1/2 animate-float-medium opacity-90 z-0"
/> */}

      <div className="px-6 md:px-10 xl:px-20 max-w-screen-2xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12">
        {/* 🌟 Left Side (about text) */}
        <div className="flex-1 animate-slideInLeft">
          <h1 className="text-[2.2rem] sm:text-[2.8rem] xl:text-[3rem] leading-tight text-ink font-bold font-fun mb-3">
            Meet Karen, the Author and Creator of Adakena!
          </h1>

          {/* ✅ Here we apply font-fun to paragraph */}
          <p className="text-gray-700 text-[18px] mb-5 max-w-2xl leading-relaxed font-fun">
            Karen is a passionate Kenyan children’s book author dedicated to empowering African kids through storytelling.
            Born and raised in Nairobi, she grew up surrounded by vibrant tales passed down through generations—stories rich
            in culture, courage, and imagination. Her mission is to help kids see themselves in the stories they read.
          </p>

          <Link to="/shop" className="bg-[#ffbcb1] hover:bg-[#fcaeaa] text-black text-sm font-semibold px-6 py-3 rounded-full transition">
            Discover Books
          </Link>
        </div>

        {/* 📚 Right Side (carousel) */}
        <div className="flex-1 max-w-[550px] w-full">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`Hero Slide ${index + 1}`}
                  className="rounded-xl w-full h-auto max-h-[500px] object-contain mx-auto shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* 🌊 Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFAEB" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,60 C360,180 1080,0 1440,120 L1440,0 L0,0 Z"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
