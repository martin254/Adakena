import React from 'react'
import Title from './Title'
import astronaut from '../assets/astro.png'

const About = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFFAEB] py-20 xl:py-36 font-fun">

      {/* 🌟 Floating Sparkles */}
      <div className="absolute w-3 h-3 bg-yellow-300 rounded-full top-[15%] left-[30%] animate-sparkle z-0"></div>
      <div className="absolute w-2.5 h-2.5 bg-purple-300 rounded-full top-[45%] right-[20%] animate-sparkle z-0"></div>
      <div className="absolute w-2 h-2 bg-white rounded-full bottom-[10%] left-[15%] animate-sparkle opacity-20 z-0"></div>

      {/* 💬 Main Content */}
      <div className="relative z-10 max-w-[95%] xl:max-w-screen-xl mx-auto">
        <div className="flex flex-col-reverse xl:flex-row gap-16 xl:gap-20 items-center justify-between">

          {/* 📘 Text on the Left */}
          <div className="flex-1 text-gray-800 max-w-2xl">
            <Title
              title1={" 🧑🏿‍🚀Meet Jordan ,the Space Explorer in Adakena! "}
              
              paraStyles={'!block'}
              titleStyles={'pb-10 font-fun'}
            />
            <p className='text-[17px] leading-[1.9] tracking-wide text-gray-700 font-fun'>
              Jordan is a brave and curious little explorer from Adakena, with big dreams of flying to space! 🧑🏿‍🚀 <br /><br />
              In his story, Jordan builds his own cardboard rocket ship and teaches his friends about the stars, the moon, and what it's like to be fearless. 🚀 <br /><br />
              With every step, Jordan reminds young readers that their dreams—no matter how big—can take flight when powered by imagination and courage. He shows that <strong>**African kids can be astronauts too**</strong>.
            </p>
          </div>

          {/* 👨🏿‍🚀 Floating Astronaut - Now Alone on the Right */}
<div className="flex-1 flex justify-center items-start relative h-[400px] sm:h-[500px] md:h-[580px] xl:h-[620px]">

{/* 🌟 Star 1 (Top Left of astronaut) */}
<svg
  className="absolute w-6 sm:w-8 top-8 left-6 sm:top-4 sm:left-0 fill-yellow-300 animate-pulse-glow z-0"
  viewBox="0 0 24 24"
>
  <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
</svg>

{/* 🌟 Star 2 (Bottom Right of astronaut) */}
<svg
  className="absolute w-5 sm:w-6 bottom-6 right-4 sm:bottom-4 sm:right-0 fill-yellow-300 animate-sparkle-twinkle z-0"
  viewBox="0 0 24 24"
>
  <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
</svg>

<img
  src={astronaut}
  alt="Floating Jordan"
  className="w-[220px] sm:w-[280px] md:w-[350px] xl:w-[420px] animate-float-slow drop-shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 hover:-rotate-2 relative z-10"
/>
</div>
<div className="absolute text-[2rem] sm:text-[3rem] top-12 right-[15%] animate-float-medium z-0">
  🌕
</div>

        </div>
      </div>

      {/* 🌊 Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="aboutWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFAEB" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          <path fill="url(#aboutWaveGradient)" d="M0,60 C360,180 1080,0 1440,120 L1440,0 L0,0 Z" />
        </svg>
      </div>
    </section>
  )
}

export default About
