import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const FunLink = ({ to, className = '', children, ...props }) => {
  const { pathname } = useLocation()
  const isActive = pathname === to

  return (
    <Link
      to={to}
      className={`font-fun ${isActive ? 'text-amber-700 font-bold' : 'text-gray-700 hover:text-amber-700'} ${className}`}
      {...props}
    >
      {children}
    </Link>
  )
}

export default FunLink
