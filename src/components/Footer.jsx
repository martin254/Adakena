import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '../assets/data'

const Footer = () => {
  return (
    <footer className="relative bg-[#FFFAEB] text-black w-full overflow-hidden rounded-b-2xl ">
      {/* Wave Divider at the Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 z-10 ">
        <svg viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="#FFFAEB" d="M0,60 C360,180 1080,0 1440,120 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* Sparkles */}
      <div className="absolute top-10 left-10 w-2.5 h-2.5 bg-pink-200 rounded-full animate-sparkle z-0" />
      <div className="absolute top-[70%] right-10 w-3 h-3 bg-purple-200 rounded-full animate-sparkle z-0" />

      {/* Footer Content */}
      <div className="relative z-20 w-full px-6 pt-28 pb-10 mx-auto max-w-screen-2xl  ">
        {/* Heading */}
        <div className="mb-10">
          <h3 className="text-3xl font-bold mb-2 text-gray-900 font-fun">
            Discover books that ignite your imagination
          </h3>
          <p className="text-gray-600 font-fun">Aspiring Little Heroes</p>
        </div>

        <hr className="my-6 border-gray-300" />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + Tagline */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src={logo} alt="logo" className="w-9 h-9 mr-2" />
              <h4 className="text-xl font-bold">Adakena</h4>
            </Link>
            <p className="text-gray-600 mb-5 leading-relaxed font-fun">Aspiring Little Heroes</p>
          </div>

          {/* Dynamic Links */}
          {FOOTER_LINKS.map((col) => (
            <FooterColumn key={col.title} title={col.title}>
              <ul className="flex flex-col gap-2 text-sm text-gray-600 font-fun">
                {col.links.map((link) => (
                  <Link to="/" key={link} className="hover:text-secondary transition">
                    {link}
                  </Link>
                ))}
              </ul>
            </FooterColumn>
          ))}

          {/* Contact + Social */}
          <div className="flex flex-col gap-6">
            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              <ul className="flex flex-col gap-1 text-sm text-gray-600 font-fun">
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <li key={link.label} className="flex gap-1">
                    <span>{link.label}:</span>
                    <span className="font-semibold">{link.value}</span>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title={SOCIALS.title}>
              <div className="flex gap-4 text-xl">
                {SOCIALS.links.map((link) => (
                  <Link to="/" key={link.id} className="hover:text-secondary transition">
                    {link.icon}
                  </Link>
                ))}
              </div>
            </FooterColumn>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-[#98f489fb]  text-black py-3 px-6 flex flex-col sm:flex-row justify-between items-center text-sm rounded-b-2xl">
        <span>2025 Adakena</span>
        <span>All rights reserved</span>
      </div>

      {/* Back to Top Button with Upward Arrow */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-50 bg-yellow-300 hover:bg-yellow-400 text-white p-3 rounded-full shadow-lg transition-transform animate-bounce hover:scale-110"
        aria-label="Back to Top"
      >
        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 12.707a1 1 0 01-1.414 0L10 7.414l-5.293 5.293a1 1 0 01-1.414-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </footer>
  )
}

export default Footer

const FooterColumn = ({ title, children }) => (
  <div className="flex flex-col gap-4">
    <h4 className="text-lg font-semibold text-ink font-fun">{title}</h4>
    {children}
  </div>
)
