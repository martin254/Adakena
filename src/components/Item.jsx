import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TbShoppingBagPlus } from 'react-icons/tb'
import { ShopContext } from '../context/ShopContext'

const Item = ({ book }) => {
  const { currency, addToCart } = useContext(ShopContext)

  return (
    <div className="transition-transform transform hover:scale-105 hover:animate-tilt duration-300">
      {/* Image wrapped in Link */}
      <Link to={`/book/${book._id}`}>
        <div className="flexCenter bg-primary p-6 rounded-3xl overflow-hidden relative group">
          <img
            src={book.image}
            alt="bookImg"
            className="shadow-xl shadow-slate-900/30 rounded-lg"
          />
        </div>
      </Link>

      <div className="p-3">
        <div className="flexBetween">
          {/* Name linked */}
          <Link to={`/book/${book._id}`} className="hover:underline">
            <h4 className="h4 line-clamp-1 !my-0">{book.name}</h4>
          </Link>

          {/* Add to cart */}
          <span
            onClick={() => addToCart(book._id)}
            className="flexCenter h-8 w-8 rounded cursor-pointer hover:bg-primary"
          >
            <TbShoppingBagPlus className="text-lg" />
          </span>
        </div>

        <div className="flexBetween pt-1">
          <p className="font-bold capitalize">{book.category}</p>
          <h5 className="h5 text-amber-900 pr-2">
            {currency}
            {book.price}.00
          </h5>
        </div>

        {/* Description linked */}
        <Link to={`/book/${book._id}`} className="text-sm text-gray-600 hover:text-amber-700">
          <p className="line-clamp-2 py-1">{book.description}</p>
        </Link>
      </div>
    </div>
  )
}

export default Item
