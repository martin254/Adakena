import React, { useContext, useState, useEffect } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { categories } from '../assets/data'
import { LuSettings2 } from 'react-icons/lu'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/Item'
import Footer from '../components/Footer'

const Shop = () => {
  const { books } = useContext(ShopContext)
  const [category, setCategory] = useState([])
  const [sortType, setSortType] = useState('relevant')
  const [filteredBooks, setFilteredBooks] = useState([])
  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const toggleFilter = (value, setState) => {
    setState((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    )
  }

  const applyFilters = () => {
    let filtered = [...books]
    if (search) {
      filtered = filtered.filter((book) =>
        book.name.toLowerCase().includes(search.toLowerCase())
      )
    }
    if (category.length) {
      filtered = filtered.filter((book) => category.includes(book.category))
    }
    return filtered
  }

  const applySorting = (booksList) => {
    switch (sortType) {
      case "low":
        return booksList.sort((a, b) => a.price - b.price)
      case "high":
        return booksList.sort((a, b) => b.price - a.price)
      default:
        return booksList
    }
  }

  useEffect(() => {
    let filtered = applyFilters()
    let sorted = applySorting(filtered)
    setFilteredBooks(sorted)
    setCurrentPage(1)
  }, [category, sortType, books, search])

  const getPaginatedBooks = () => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return filteredBooks.slice(startIndex, endIndex)
  }

  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage)

  return (
    <section className="max-padd-container bg-[#FFFAEB] relative font-fun overflow-hidden">
      {/* ☁️ Enhanced Floating Clouds */}
      <div className="absolute w-36 h-36 bg-white opacity-80 rounded-full top-[90px] left-6 blur-2xl animate-float-slow z-0" />
      <div className="absolute w-28 h-28 bg-white opacity-70 rounded-full top-[60%] right-6 blur-xl animate-float-medium z-0" />

      {/* ✨ Sparkles */}
      <div className="absolute top-[65%] left-1/4 w-3 h-3 bg-yellow-300 rounded-full animate-sparkle z-0" />
      <div className="absolute top-[30%] right-1/4 w-2.5 h-2.5 bg-pink-300 rounded-full animate-sparkle z-0" />

      <div className="relative z-10 pt-28">
        {/* 🔍 Search */}
        <div className="w-full max-w-2xl flexCenter mx-auto mb-12">
          <div className="inline-flex items-center bg-white rounded-full shadow-md px-6 py-3 w-full">
            <RiSearch2Line className="text-xl text-gray-500" />
            <input
              type="text"
              placeholder="Search here..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-1 bg-transparent outline-none text-md font-fun"
            />
            <LuSettings2 className="text-xl text-gray-400" />
          </div>
        </div>

        {/* 🏷️ Categories - Floating & Peach */}
        <div className="mb-16">
          <h4 className="text-xl font-story mb-4 hidden sm:block"> Filters :</h4>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6">
            {categories.map((cat) => (
              <label key={cat.name}>
                <input
                  value={cat.name}
                  onChange={(e) => toggleFilter(e.target.value, setCategory)}
                  type="checkbox"
                  className="hidden peer"
                />
                <div className="flexCenter flex-col gap-2 p-4 rounded-xl cursor-pointer bg-[#fff8e7] shadow-md transition-transform transform hover:scale-105 hover:-translate-y-1 peer-checked:ring-2 ring-secondaryOne animate-float-medium">

                  <div className="bg-white h-20 w-20 flexCenter rounded-full shadow-sm">
                    <img src={cat.image} alt={cat.name} className="h-10 w-10 object-contain" />
                  </div>
                  <span className="text-sm text-gray-700 font-fun">{cat.name}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* 📚 Book List */}
        <div className="mb-10">
          <div className="flexBetween flex-wrap gap-6 pb-10">
            <Title
              title1={'Our'}
              title2={'Book List'}
              titleStyles={'text-start'}
              paraStyles={'!block'}
            />
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-sm font-story">Sort by:</span>
              <select
                onChange={(e) => setSortType(e.target.value)}
                className="text-sm p-2.5 bg-white rounded-md border border-gray-200 shadow-sm font-fun"
              >
                <option value="relevant">Relevant</option>
                <option value="low">Price: Low</option>
                <option value="high">Price: High</option>
              </select>
            </div>
          </div>

          {/* 🎨 Books */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {getPaginatedBooks().length > 0 ? (
              getPaginatedBooks().map((book) => (
                <Item key={book._id} book={book} />
              ))
            ) : (
              <p className="text-center text-gray-500 font-story">No books found for selected filters</p>
            )}
          </div>
        </div>

        {/* 🔢 Pagination */}
        <div className="flexCenter gap-3 mb-16">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className={`btn-secondary !py-1 !px-4 rounded-full font-fun ${
              currentPage === 1 && 'opacity-50 cursor-not-allowed'
            }`}
          >
            ← Prev
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`btn-light !py-1 !px-3 rounded-full font-fun ${
                currentPage === index + 1 && '!bg-secondaryOne text-white'
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className={`btn-secondary !py-1 !px-4 rounded-full font-fun ${
              currentPage === totalPages && 'opacity-50 cursor-not-allowed'
            }`}
          >
            Next →
          </button>
        </div>
      </div>

      <Footer />
    </section>
  )
}

export default Shop
