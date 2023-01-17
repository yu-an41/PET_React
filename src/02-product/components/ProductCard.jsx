import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from './../../stores/cartSlice'

import { imgNodeUrl } from '../../my-config'

function ProductCard({ prodData }) {
  const dispatch = useDispatch()

  const {
    sid,
    name,
    category,
    img,
    price,
    member_price,
    info,
    inventory,
    specials,
  } = prodData

  const [prodQty, setProdQty] = useState(1)

  const addToCart = (prodSid, prodQty) => {
    dispatch(
      addCart({ prodSid, name, img, price, member_price, inventory, prodQty })
    )
    // console.log(prodSid, prodQty)
  }

  const maxQty = Math.min(10, inventory)

  //  學長補充數字填滿變陣列去map
  // const getQtyArr = (qty) => {
  //   Array(qty)
  //     .fill(0)
  //     .map((__, i) => i + 1)
  // }

  return (
    <div className="max-w-2xl mx-auto px-1 py-1 w-1/2 md:w-1/3 xl:w-1/4 my-3 md:my-5">
      <div className="bg-white shadow-md rounded-lg max-w-sm">
        <Link to="/#">
          <img
            className="rounded-t-lg p-8"
            src={`${imgNodeUrl}/images/products/${img}`}
            alt={`product images for ${sid}_${name}`}
          />
        </Link>
        <div className="px-5 pb-5">
          <Link to="/#">
            <h3 className="text-gray-900 font-semibold text-xl tracking-tight">
              {name}
            </h3>
          </Link>
        </div>
        <div className="flex items-center mx-5 mt-2.5 mb-5 grow">
          <svg
            className="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            className="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            className="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            className="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            className="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            5.0
          </span>
        </div>
        <div className="flex items-center justify-between px-5 pb-5">
          <span className="text-l md:text-xl font-medium text-gray-600 line-through">{`$ ${price}`}</span>
          <span className="text-2xl md:text-3xl font-bold text-red-700 mr-3">
            {`$ ${member_price}`}
          </span>
          <select
            onChange={(e) => {
              setProdQty(+e.target.value)
              console.log(`qty updated: ${e.target.value}`)
            }}
          >
            {/* {Array(maxQty).map((qty, i) => {
              return (
                <option value={qty} key={i + 1}>
                  {i + 1}
                </option>
              )
            })} */}
            {Array(maxQty)
              .fill(0)
              .map((__, i) => i + 1)
              .map((qty, i) => {
                return (
                  <option
                    value={i + 1}
                    key={i}
                    selection={i + 1 === 1 ? 'selected' : ''}
                  >
                    {i + 1}
                  </option>
                )
              })}
          </select>
          <button
            onClick={(e) => {
              addToCart(sid, prodQty)
            }}
            className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
