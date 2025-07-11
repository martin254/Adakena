import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { books } from '../assets/data.jsx'

// 🖼️ Images
import adakena10 from '../assets/Adakena10.jpg'
import TracingCover from '../assets/TracingCover.png'
import Tiny_Dino from '../assets/Tiny_Dino.png'

// 🌟 Floating elements
import ScietistKid from '../assets/Scientistkid.png'
import ViolinKid from '../assets/Violinkid.png'
import ArtsKid from '../assets/artskid.png'

const images = [
  { src: adakena10, id: '3' },
  { src: TracingCover, id: '1' },
  { src: Tiny_Dino, id: '2' },
]

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
      {/* Floating SVG Stars */}
      <svg className="absolute w-10 top-20 left-6 animate-float-slow opacity-90 z-0" fill="#4ade80" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>

      <svg className="absolute w-12 top-32 right-10 fill-yellow-300 animate-pulse-glow z-0" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>

      <svg className="absolute w-6 top-[20%] left-[35%] fill-yellow-300 animate-sparkle-twinkle z-0" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>

      {/* Main Content */}
      <div className="px-6 md:px-10 xl:px-20 max-w-screen-2xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12">
        {/* 📚 Left Text */}
        <div className="flex-1 animate-slideInLeft">
          <h1 className="text-[2.2rem] sm:text-[2.8rem] xl:text-[3rem] leading-tight text-ink font-bold font-fun mb-3">
            Meet Adakena.G , the Author and Creator at Adakena!
          </h1>

          <p className="text-gray-700 text-[18px] mb-5 max-w-2xl leading-relaxed font-fun">
          AdaKena.G is a vibrant children’s author originally from Nairobi, Kenya, now based in West Sussex, UK. Her work spans empowering stories, fun learning tools, and creative play—reflecting her belief that childhood should be filled with possibility, confidence, and joy. She is the author of Power of Dreams: Aspiring Little Heroes, a heartwarming collection of stories celebrating Black children’s dreams, as well as a dinosaur-themed colouring book and a handwriting tracing book that support early learning in playful, engaging ways. AdaKena.G is passionate about representation, creativity, and nurturing children’s imaginations across every page.
          </p>

          <Link to="/shop" className="bg-[#98f489fb] hover:bg-[#fcaeaa] text-black text-sm font-semibold px-6 py-3 rounded-full transition">
            Explore Books
          </Link>
        </div>

        {/* 🎠 Carousel */}
        <div className="flex-1 max-w-[550px] w-full">
          <Slider {...settings}>
            {images.map(({ src, id }, index) => (
              <div key={index}>
                <Link to={`/book/${id}`}>
                  <img
                    src={src}
                    alt={`Hero Slide ${index + 1}`}
                    className="rounded-xl max-w-[550px] w-full h-auto max-h-[500px] object-contain mx-auto shadow-lg transition-transform duration-300 hover:scale-105"
                  />
                </Link>
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
