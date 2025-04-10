import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import Item from './Item'
import GlowCard from './GlowCard' // ✅ import the wrapper

const PopularBooks = () => {
  const { books } = useContext(ShopContext)
  const [popularBooks, setPopularBooks] = useState([])

  useEffect(() => {
    const data = books.filter(item => item.popular)
    setPopularBooks(data.slice(0, 5))
  }, [books])

  return (
    <section className="relative overflow-hidden bg-[#FFFAEB] py-20 font-fun">
      {/* ✨ Floating Sparkles */}
      <div className="absolute top-8 right-10 w-2.5 h-2.5 bg-yellow-300 rounded-full animate-sparkle z-0" />
      <div className="absolute top-24 left-1/3 w-3 h-3 bg-pink-300 rounded-full animate-sparkle z-0" />

      {/* 🎈 Balloon */}
      <svg
        className="absolute w-12 bottom-12 left-6 animate-float-slow opacity-30 z-0"
        viewBox="0 0 24 24"
        fill="#93c5fd"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M12 14v6" stroke="#000" strokeWidth="1" />
      </svg>

      {/* 📚 Main Content */}
      <div className="relative z-10 max-padd-container">
        <Title
          title1={'Popular'}
          title2={'Books'}
          titleStyles="pb-10 font-fun"
          paraStyles="!block"
        />

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
          {popularBooks.map((book) => (
            <GlowCard key={book.id}>
              <Item book={book} />
            </GlowCard>
          ))}
        </div>
      </div>

      {/* 🌊 Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="popularWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFAEB" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          <path
            fill="url(#popularWaveGradient)"
            d="M0,60 C360,180 1080,0 1440,120 L1440,0 L0,0 Z"
          />
        </svg>
      </div>
    </section>
  )
}

export default PopularBooks
