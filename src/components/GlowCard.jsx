import React from 'react'

const GlowCard = ({ children }) => {
  return (
    <div className="group relative transition-transform transform hover:scale-[1.03] hover:animate-tilt hover:shadow-[0_0_25px_rgba(255,184,108,0.4)] rounded-xl">
      {/* Sparkle Tooltip */}
      <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-yellow-300 opacity-0 group-hover:opacity-100 animate-sparkle"></div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default GlowCard
