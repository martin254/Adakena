import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import MagicLayout from './components/MagicLayout'
import BookDetails from './pages/BookDetails'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <main className="relative bg-[#FFFAEB] min-h-screen px-4 md:px-10 lg:px-20 overflow-hidden">

      {/* 🔅 LEFT GRADIENT FADE */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-yellow-200 to-transparent z-0" />

      {/* 🔅 RIGHT GRADIENT FADE */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-yellow-200 to-transparent z-0" />

      {/* MAIN SITE CONTENT */}
      <div className="relative z-10 max-w-screen-2xl mx-auto">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </main>
  )
}

export default App
