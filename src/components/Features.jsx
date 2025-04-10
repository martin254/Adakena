import React from 'react'
import filter from "../assets/features/filter.png"
import rating from "../assets/features/rating.png"
import wishlist from "../assets/features/wishlist.png"
import secure from "../assets/features/secure.png"

const features = [
  {
    icon: filter,
    title: "Advanced Search and Filters",
    desc: "Effortlessly search books by title, genre or price range"
  },
  {
    icon: rating,
    title: "User Reviews and Ratings",
    desc: "Customers can share reviews, rate books, and guide future readers."
  },
  {
    icon: wishlist,
    title: "Wishlist and Favorites",
    desc: "Save books to wishlist for future purchases or easy access."
  },
  {
    icon: secure,
    title: "Secure Online Payments",
    desc: "Enjoy seamless checkout with multiple secure payment options."
  }
]

const Features = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFFAEB] py-20 font-fun">
      {/* ✨ Sparkles + Balloon */}
      <svg
        className="absolute w-12 top-10 left-6 animate-float-slow opacity-30 z-0"
        viewBox="0 0 24 24"
        fill="#fcd34d"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M12 14v6" stroke="#000" strokeWidth="1" />
      </svg>
      <div className="absolute top-24 right-12 w-3 h-3 rounded-full bg-pink-300 animate-sparkle z-0" />
      <div className="absolute bottom-24 left-1/3 w-2.5 h-2.5 rounded-full bg-blue-300 animate-sparkle z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 gap-y-14 px-4 sm:px-8">
        {features.map((feat, index) => (
          <div
            key={index}
            className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-[0_0_25px_rgba(255,184,108,0.3)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            <div className="flexCenter flex-col gap-3 text-center">
              <img src={feat.icon} alt="feature" className="h-11 w-11" />
              <div>
                <h5 className="text-lg font-semibold text-gray-800">{feat.title}</h5>
                <hr className="w-8 h-1 bg-amber-700 mx-auto rounded-full mt-1 mb-2" />
              </div>
              <p className="text-sm text-gray-600">{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 🌊 Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="featuresWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFAEB" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          <path
            fill="url(#featuresWaveGradient)"
            d="M0,60 C360,180 1080,0 1440,120 L1440,0 L0,0 Z"
          />
        </svg>
      </div>
    </section>
  )
}

export default Features
