import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addCart } from '../../stores/cartSlice'

import CartItem from '../components/CartItem'

function CartList() {
  const [cartList, setCartList] = useState()

  const getCartList = useSelector((state) => {
    setCartList(state.cart.CartItems)
    console.log(state.cart.CartItemss);
  })

  useEffect(() => {
    getCartList()
  }, [])
  return (
    <div className="border">
      <div className="bg-gray-100 px-6 py-5 mb-2 flex justify-between">
        <h2 className="text-2xl font-bold text-blue-500">My Cart</h2>
        <button className="border border-red-700 rounded px-5 py-1">
          清空
        </button>
      </div>
      <div className="md:flex flex-wrap">
        <div className="md:w-1/2 border bg-red-100">
          <div className="border-b-2 bg-gray-200 px-6 py-12">
            {Array(5)
              .fill(1)
              .map((c, i) => {
                return <CartItem />
              })}
          </div>
        </div>
        <div className="md:w-1/2 border bg-green-100"></div>
      </div>
      <div className=""></div>
    </div>
  )
}

export default CartList
