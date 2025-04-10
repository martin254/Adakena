import React from 'react'
import { TbHomeFilled } from 'react-icons/tb'
import { IoLibrary, IoMailOpen } from 'react-icons/io5'
import { FaRegWindowClose } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import FunLink from './FunLink'

const Navbar = ({ containerStyles, toggleMenu, menuOpened }) => {
  const navItems = [
    { to: '/', label: 'Home', icon: <TbHomeFilled /> },
    { to: '/shop', label: 'BookShop', icon: <IoLibrary /> },
    { to: 'mailto:info@adakena.com', label: 'Contact', icon: <IoMailOpen /> },
  ]

  const { pathname } = useLocation()

  return (
    <nav className={`${containerStyles} font-fun`}>
      {/* Close button for mobile */}
      {menuOpened && (
        <>
          <FaRegWindowClose
            onClick={toggleMenu}
            className="text-xl self-end cursor-pointer relative left-8"
          />
          {/* Logo */}
          <Link to="/" className="text-2xl mb-10 text-amber-900 font-bold font-fun">
            Adakena
          </Link>
        </>
      )}

      {navItems.map(({ to, label, icon }) => (
        <div key={label} className="inline-flex items-center relative top-1">
          {to.startsWith('mailto') ? (
            <a
              onClick={menuOpened ? toggleMenu : undefined}
              href={to}
              className="flexCenter gap-x-2 text-lg text-gray-700 hover:text-amber-700 transition font-fun"
            >
              <span className="text-xl">{icon}</span>
              <span>{label}</span>
            </a>
          ) : (
            <FunLink
              to={to}
              onClick={menuOpened ? toggleMenu : undefined}
              className={`flexCenter gap-x-2 text-lg transition ${
                pathname === to
                  ? 'text-amber-700 font-bold'
                  : 'text-gray-700 hover:text-amber-700'
              }`}
            >
              <span className="text-xl">{icon}</span>
              <span>{label}</span>
            </FunLink>
          )}
        </div>
      ))}
    </nav>
  )
}

export default Navbar
