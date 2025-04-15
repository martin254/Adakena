import React from 'react'
import Lottie from 'lottie-react'
import flyingBird from '../assets/flyinganimation.json'
import kidPlanet from '../assets/kidplanet.json' // astronaut sitting on planet

const FloatingDecorations = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* 🐦 Lottie Bird 1 */}
      <Lottie
        animationData={flyingBird}
        loop
        className="absolute top-[10%] left-[5%] w-20 sm:w-28 animate-fly-1 hover:scale-110 transition-transform"
      />

       {/* 👨‍🚀 Kid floating on planet */}
       <Lottie
        animationData={kidPlanet}
        loop
        className="absolute top-[50%] right-[25%] w-24 sm:w-28 md:w-32 animate-hover-updown"
      />
    </div>
    
  )
}

export default FloatingDecorations
