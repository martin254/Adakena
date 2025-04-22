// src/pages/BookDetails.jsx
import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import Footer from '../components/Footer'

// 1) Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const BookDetails = () => {
  const { id } = useParams()
  const { books, addToCart, currency } = useContext(ShopContext)

  // find by id or slug
  const book = books.find((b) => b._id === id || b.slug === id)

  if (!book) {
    return (
      <div className="text-center text-red-500 mt-20 font-fun">
        Book not found
      </div>
    )
  }

  return (
    <>
      <section className="relative overflow-hidden bg-[#FFFAEB] pt-28 pb-24 font-fun">
        {/* Floating decorations (optional) */}
        <svg
          className="absolute w-10 top-12 left-12 animate-float-slow opacity-30 z-0"
          viewBox="0 0 24 24"
          fill="#a3e635"
        >
          <circle cx="12" cy="8" r="6" />
          <path d="M12 14v6" stroke="#000" strokeWidth="1" />
        </svg>

        {/* Main grid: cover + info */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start animate-fadeIn">
          {/* Cover */}
          <div className="group mx-auto max-w-sm">
            <img
              src={book.image}
              alt={book.name}
              className="rounded-2xl w-full shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -top-5 -left-5 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              ⭐ Buy Me!
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-fun font-bold text-ink">
              {book.name}
            </h2>
            <p className="text-2xl text-amber-700 font-bold">
              {currency}
              {book.price}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {book.description}
            </p>
            <p className="text-base text-gray-600">
              <span className="font-bold text-ink">Category:</span>{' '}
              {book.category}
            </p>

            <button
              onClick={() => addToCart(book._id)}
              className="bg-secondaryOne hover:bg-pink-400 text-black px-6 py-3 rounded-full shadow-lg transition animate-pulse-glow"
            >
              Add to Cart
            </button>
            <div className="mt-8">
            <Link
              to="/shop"
              className="inline-block text-amber-700 hover:underline mt-4"
            >
              ← Back to Bookshop
            </Link>
            </div>
          </div>
        </div>

        {/* 2) Sneak Peek Carousel */}
        {book.previewPages?.length > 0 && (
          <div className="mt-16 px-4 max-w-5xl mx-auto">
            <h3 className="text-2xl font-fun text-center mb-6">
              Sneak Peek Inside
            </h3>
            <Swiper
              modules={[Pagination, Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              spaceBetween={16}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {book.previewPages.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={src}
                    alt={`${book.name} preview ${idx + 1}`}
                    className="w-full h-auto rounded-xl shadow-md"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 150"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="waveGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
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

      <Footer />
    </>
  )
}

export default BookDetails
