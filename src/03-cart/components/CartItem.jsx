import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'

// import { addCart } from '../../stores/cartSlice'

import { imgNodeUrl } from '../../my-config'

function CartItem() {
  const [newQty, setNewQty] = useState(1)

  return (
    <div className="border-t-2 pt-12 border-orange-400 py-5 px-24 bg-white">
      <div className="w-full mb-5 md:w-1/2 lg:w-1/3 border border-gray-400 aspect-video md:aspect-square">
        <img
          className="object-cover"
          src={`${imgNodeUrl}/images/products/dog2-toy2.png`}
          alt=""
        />
      </div>
      <div className="details flex jusitfy-between w-full mb-3">
        <div className="details-left w-1/2">
          <p>RF293</p>
          <div className="text-2xl font-medium text-orange-800 my-2">
            North wolf bag
          </div>
          <div className="my-2">Height: 10 inches</div>
          <div className="">優惠資訊</div>
        </div>
        <div className="details-right relative w-1/2 flex flex-col">
          <div className="absolute right-3">
            <i className="text-2xl fa-solid fa-xmark text-gray-600 hover:text-blue-500"></i>
          </div>
          <div className="w-1/2 flex justify-center mt-12 ml-auto mr-5">
            <div className="w-1/4 rounded-full bg-gray-300 text-gray-700 hover:text-white hover:bg-gray-600">
              <i className="fa-solid fa-minus p-2"></i>
            </div>
            <div className="mx-auto w-1/4 p-1">
              <input
                className="focus:border-none"
                type="text"
                value={1}
                max={10}
                onChange={(e) => setNewQty(+e.target.value)}
              />
            </div>
            <div className="w-1/4 rounded-full  bg-gray-300 text-gray-700 hover:text-white hover:bg-gray-600">
              <i className="fa-solid fa-plus p-2"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end items-center px-5">
        <div className="text-gray-600 text-xl line-through">$ 1200</div>
        <div className="text-red-600 text-2xl font-medium ml-5">$ 900</div>
      </div>
    </div>
  )
}

export default CartItem
