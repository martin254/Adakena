import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TbShoppingBagPlus } from 'react-icons/tb'
import { ShopContext } from '../context/ShopContext'

const Item = ({ book }) => {
  const { currency, addToCart } = useContext(ShopContext)

  return (
    <div className="flex flex-col justify-between h-[420px] max-w-[250px] mx-auto transition-transform transform hover:scale-105 hover:animate-tilt duration-300">
      {/* Image wrapped in Link */}
      <Link to={`/book/${book._id}`}>
        <div className="flexCenter bg-primary p-4 rounded-3xl overflow-hidden relative group h-[260px]">
          <img
            src={book.image}
            alt={book.name}
            className="h-full w-auto max-h-[200px] object-contain mx-auto"
          />
        </div>
      </Link>

      {/* Book Info */}
      <div className="p-3 flex flex-col justify-between h-full">
        <div className="flexBetween">
          <Link to={`/book/${book._id}`} className="hover:underline">
            <h4 className="h4 line-clamp-1 !my-0">{book.name}</h4>
          </Link>
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

        <Link to={`/book/${book._id}`} className="text-sm text-gray-600 hover:text-amber-700">
          <p className="line-clamp-2 py-1">{book.description}</p>
        </Link>
      </div>
    </div>
  )
}

export default Item
