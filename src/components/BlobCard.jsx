// components/BlobCard.jsx
import React from 'react'

const BlobCard = ({ image, badge }) => {
  return (
    <div className="relative w-full h-[280px] sm:h-[300px] rounded-[2.5rem] overflow-hidden p-4 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.05)] border-4 border-yellow-100">
      
      {/* 🌀 SVG Blobby Background */}
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full fill-pink-100 opacity-70 z-0"
      >
        <path d="M40.4,-65.4C52.7,-59.7,63.6,-52.6,71.6,-42.1C79.5,-31.6,84.4,-17.7,83.2,-4.3C82,9.2,74.7,18.3,67.1,27.7C59.6,37.1,51.9,46.7,41.3,52.8C30.8,58.9,17.4,61.5,3.6,57.4C-10.3,53.2,-20.6,42.4,-34.5,36.1C-48.5,29.7,-66,27.9,-73.4,18.4C-80.9,8.9,-78.3,-8.3,-71.7,-22.2C-65.1,-36.1,-54.6,-46.6,-42.5,-51.2C-30.3,-55.9,-15.1,-54.7,-0.3,-54.2C14.5,-53.7,29.1,-53.3,40.4,-65.4Z" transform="translate(100 100)" />
      </svg>

      {/* 📕 Book Image */}
      <img
        src={image}
        alt="Book Cover"
        className="relative z-10 w-full h-full object-contain"
      />

      {/* 🎀 Optional Floating Badge */}
      {badge && (
        <span className="absolute top-2 left-2 z-20 bg-yellow-300 text-xs font-bold text-white px-3 py-1 rounded-full shadow">
          {badge}
        </span>
      )}

      {/* ☁️ Cloudy Glow Frame */}
      <div className="absolute inset-0 z-0 ring-2 ring-pink-200 rounded-[2.5rem] animate-pulse pointer-events-none" />
    </div>
  )
}

export default BlobCard
