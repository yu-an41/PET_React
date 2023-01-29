import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

import {
  addCart,
  updateQty,
  deleteItem,
  minusQty,
  plusQty,
} from '../../stores/cartSlice'

import { imgNodeUrl } from '../../my-config'

function CartItem({ cartDetails }) {
  const dispatch = useDispatch()

  const {
    prodSid,
    category,
    name,
    img,
    price,
    member_price,
    inventory,
    prodQty,
    specials,
  } = cartDetails

  // const [newQty, setNewQty] = useState(prodQty)

  return (
    <div className="border-t-2 pt-12 py-5 px-24 bg-white">
      <Link to="/#">
        <div className="w-full mb-5 lg:w-1/2 border border-orange-400 aspect-video md:aspect-square">
          <img
            className="object-cover"
            src={`${imgNodeUrl}/images/products/${img}`}
            alt=""
          />
        </div>
      </Link>
      <div className="details flex jusitfy-between w-full mb-3">
        <div className="details-left w-1/2">
          <p>
            商品編號： {category}00{prodSid.toString().padStart(2, '0')}
          </p>
          <Link to="/#">
            <div className="text-2xl font-medium text-orange-800 my-2">
              {name}
            </div>
          </Link>
          {/* <div className="my-2">Height: 10 inches</div> */}
          <Link to="/#">
            <div className="bg:gray-400 rounded">
              優惠活動 {!!specials ? '' : specials}
            </div>
          </Link>
        </div>
        <div className="details-right relative w-1/2 flex flex-col">
          <div
            className="absolute right-3"
            onClick={() => {
              dispatch(deleteItem({ prodSid }))
              // console.log(`item removed, sid: ${prodSid}`)
            }}
          >
            <i className="text-2xl fa-solid fa-xmark text-gray-600 hover:text-blue-500"></i>
          </div>
          <div className="w-1/2 flex justify-center mt-12 ml-auto mr-5">
            <div
              className="rounded-full hover:text-white hover:bg-gray-600"
              onClick={() => {
                dispatch(minusQty({ prodSid }))
              }}
            >
              <i className="fa-solid fa-minus p-2"></i>
            </div>
            <div className="mx-auto w-1/4 p-1">
              <input
                className="bg-transparent focus:border-none focus:outline-none pl-1"
                type="text"
                value={prodQty}
                max={inventory}
                onChange={(e) => {
                  let newQty = +e.target.value
                  if (newQty === 0) {
                    newQty = ''
                  }
                  dispatch(updateQty({ prodSid, newQty }))
                  console.log(e.target.value)
                }}
                onBlur={(e) => {
                  let newQty = +e.target.value
                  if (!newQty) {
                    newQty = 1
                    alert('本商品最低購買數量為1！')
                  }
                  dispatch(updateQty({ prodSid, newQty }))
                }}
              />
              {/* <input
                className="bg-transparent focus:border-none focus:outline-none pl-1"
                type="text"
                value={newQty}
                max={inventory}
                onChange={(e) => {
                  setNewQty(+e.target.value)
                }}
                onBlur={(e) => {
                  dispatch(updateQty({ prodSid, newQty }))
                }}
              /> */}
            </div>
            <div
              className="rounded-full hover:text-white hover:bg-gray-600"
              onClick={() => {
                dispatch(plusQty({ prodSid }))
              }}
            >
              <i className="fa-solid fa-plus p-2"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end items-center px-5">
        <div className="text-gray-600 text-xl line-through">
          $ {price * prodQty}
        </div>
        <div className="text-red-600 text-2xl font-medium ml-5">
          $ {member_price * prodQty}
        </div>
      </div>
    </div>
  )
}

export default CartItem
