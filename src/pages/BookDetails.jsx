import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import Footer from '../components/Footer'

const BookDetails = () => {
  const { id } = useParams()
  const { books, addToCart, currency } = useContext(ShopContext)

  const book = books.find((b) => b._id === id)

  if (!book) {
    return <div className="text-center text-red-500 mt-20 font-fun">Book not found</div>
  }

  return (
    <>
      <section className="relative overflow-hidden bg-[#FFFAEB] pt-28 pb-24">
        {/* 🎈 Balloons */}
        <svg className="absolute w-10 top-12 left-12 animate-float-slow opacity-30 z-0" viewBox="0 0 24 24" fill="#a3e635">
          <circle cx="12" cy="8" r="6" />
          <path d="M12 14v6" stroke="#000" strokeWidth="1" />
        </svg>
        <svg className="absolute w-10 top-24 right-20 animate-float-medium opacity-30 z-0" viewBox="0 0 24 24" fill="#86efac">
          <circle cx="12" cy="8" r="6" />
          <path d="M12 14v6" stroke="#000" strokeWidth="1" />
        </svg>

        {/* ✨ Sparkles */}
        <div className="absolute top-24 left-1/3 w-3 h-3 bg-yellow-400 rounded-full animate-sparkle z-0" />
        <div className="absolute top-1/2 right-32 w-2 h-2 bg-purple-300 rounded-full animate-sparkle z-0" />
        <div className="absolute bottom-20 right-12 w-2.5 h-2.5 bg-pink-300 rounded-full animate-sparkle z-0" />

        {/* 📚 Book Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fadeIn">
          {/* 📘 Book Cover */}
          <div className="relative group w-full max-w-sm mx-auto">
            <img
              src={book.image}
              alt={book.name}
              className="rounded-[2rem] w-full shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-300"
            />
            {/* 🪧 Floating Badge on Hover */}
            <div className="absolute -top-5 -left-5 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-500 animate-float-medium z-10">
              ⭐ Buy Me!
            </div>
          </div>

          {/* 📖 Book Info */}
          <div className="text-gray-800 max-w-xl font-story">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-fun text-ink">{book.name}</h2>
            <p className="text-2xl text-amber-700 font-bold mb-4">{currency}{book.price}</p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">{book.description}</p>

            <p className="text-base text-gray-600 mb-8">
              <span className="font-bold text-ink">Category:</span> {book.category}
            </p>

            <button
              onClick={() => addToCart(book._id)}
              className="bg-[#ffbcb1] hover:bg-[#fcaeaa] text-black text-base font-semibold px-6 py-3 rounded-full shadow-lg transition"
            >
              Add to Cart
            </button>

            <div className="mt-8">
              <Link
                to="/shop"
                className="text-base text-amber-700 hover:underline transition"
              >
                ← Back to Bookshop
              </Link>
            </div>
          </div>
        </div>

        {/* 🌊 Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
          <svg viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFAEB" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
            <path fill="url(#waveGradient)" d="M0,60 C360,180 1080,0 1440,120 L1440,0 L0,0 Z" />
          </svg>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default BookDetails
