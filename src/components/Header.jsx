import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { CgMenuLeft } from 'react-icons/cg'
import { TbUserCircle } from 'react-icons/tb'
import { RiUserLine, RiShoppingBag4Line } from 'react-icons/ri'
import { ShopContext } from '../context/ShopContext'

const Header = () => {
  const { navigate, token, setToken, getCartCount } = useContext(ShopContext)
  const [menuOpened, setMenuOpened] = useState(false)

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && menuOpened) {
        setMenuOpened(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [menuOpened])

  return (
    <header className="fixed top-0 w-full left-0 right-0 z-50">
      <div className="bg-[#FFFAEB] py-3 max-padd-container flexBetween border-b border-slate-900/10 transition-all duration-300 font-fun">
        {/* logo */}
        <Link to="/" className="flex-1 flex items-center justify-start">
          <h4 className="text-2xl font-bold text-amber-900 font-fun">Adakena</h4>
        </Link>

        {/* Navbar */}
        <div className="flex-1">
          <Navbar
            menuOpened={menuOpened}
            toggleMenu={toggleMenu}
            containerStyles={`${
              menuOpened
                ? 'flex flex-col gap-y-16 h-screen w-[222px] absolute left-0 top-0 bg-[#FFFAEB] z-50 px-10 py-4 shadow-xl font-fun'
                : 'hidden lg:flex justify-center gap-x-8 xl:gap-x-14 text-lg px-2 py-1 font-fun'
            }`}
          />
        </div>

        {/* Right side */}
        <div className="flex-1 flex items-center justify-end gap-x-3 sm:gap-x-10">
          <CgMenuLeft onClick={toggleMenu} className="text-2xl xl:hidden cursor-pointer" />

          <Link to="/cart" className="flex relative">
            <RiShoppingBag4Line className="text-[33px] bg-amber-900 text-primary p-1.5 rounded-full" />
            <span className="bg-primary ring-1 ring-slate-900/5 text-sm absolute left-5 -top-2.5 flexCenter w-5 h-5 rounded-full shadow-md">
              {getCartCount()}
            </span>
          </Link>

          {/* Login / Profile */}
          <div className="relative group">
            {token ? (
              <TbUserCircle className="text-[29px] cursor-pointer" />
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="btn-outline flexCenter gap-x-2 font-fun"
              >
                Login <RiUserLine />
              </button>
            )}

            {token && (
              <ul className="bg-white p-1 w-32 ring-1 ring-slate-900/5 rounded absolute right-0 top-7 hidden group-hover:flex flex-col text-sm shadow-md">
                <li className="p-2 text-tertiary rounded-md hover:bg-primary cursor-pointer">
                  Orders
                </li>
                <li className="p-2 text-tertiary rounded-md hover:bg-primary cursor-pointer">
                  Logout
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
