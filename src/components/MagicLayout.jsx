import React from 'react'

const MagicLayout = ({ children }) => {
  return (
    <div className="relative bg-primary overflow-hidden font-fun">
      {/* ✨ Sparkles */}
      <div className="absolute top-10 left-10 w-2.5 h-2.5 bg-yellow-300 rounded-full animate-sparkle z-0" />
      <div className="absolute bottom-10 right-12 w-3 h-3 bg-pink-300 rounded-full animate-sparkle z-0" />
      <div className="absolute top-[30%] left-[80%] w-2 h-2 bg-blue-300 rounded-full animate-sparkle z-0" />

      {/* 🎈 Floating Balloons */}
      <svg
        className="absolute w-10 top-14 left-6 animate-float-slow opacity-30 z-0"
        viewBox="0 0 24 24"
        fill="#fca5a5"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M12 14v6" stroke="#000" strokeWidth="1" />
      </svg>
      <svg
        className="absolute w-12 top-28 right-16 animate-float-medium opacity-30 z-0"
        viewBox="0 0 24 24"
        fill="#a5f3fc"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M12 14v6" stroke="#000" strokeWidth="1" />
      </svg>

      {/* 💫 Main Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default MagicLayout
