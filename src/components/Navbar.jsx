import React from 'react'
import { TbHomeFilled } from 'react-icons/tb'
import { IoLibrary, IoMailOpen } from 'react-icons/io5'
import { FaRegWindowClose } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({ containerStyles, toggleMenu, menuOpened }) => {
  const navItems = [
    { to: '/', label: 'Home', icon: <TbHomeFilled /> },
    { to: '/shop', label: 'BookShop', icon: <IoLibrary /> },
    { to: 'mailto:info@adakena.com', label: 'Contact', icon: <IoMailOpen /> },
  ]

  return (
    <nav className={`${containerStyles} font-fun`}>
      {/* close button inside mobile menu */}
      {menuOpened && (
        <>
          <FaRegWindowClose
            onClick={toggleMenu}
            className="text-xl self-end cursor-pointer relative left-8"
          />
          {/* logo */}
          <Link to="/" className="text-2xl mb-10 text-amber-900 font-fun font-bold">
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
              className="flexCenter gap-x-2 text-lg font-fun text-gray-700 hover:text-amber-700 transition"
            >
              <span className="text-xl">{icon}</span>
              <span>{label}</span>
            </a>
          ) : (
            <NavLink
              to={to}
              onClick={menuOpened ? toggleMenu : undefined}
              className={({ isActive }) =>
                `${isActive ? 'text-amber-700 font-bold' : 'text-gray-700'} flexCenter gap-x-2 text-lg font-fun transition hover:text-amber-700`
              }
            >
              <span className="text-xl">{icon}</span>
              <span>{label}</span>
            </NavLink>
          )}
        </div>
      ))}
    </nav>
  )
}

export default Navbar
