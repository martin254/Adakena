import React from 'react'

const CloudFrame = ({ children }) => {
  return (
    <div className="relative p-4 bg-white rounded-[40%_60%_60%_40%/50%_30%_70%_50%] shadow-lg border-2 border-white">
      <div className="overflow-hidden rounded-[30%_50%_40%_60%/60%_40%_60%_30%]">
        {children}
      </div>
    </div>
  )
}

export default CloudFrame
