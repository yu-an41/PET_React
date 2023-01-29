import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { addCart } from '../../stores/cartSlice'

function CartDetails() {
  const navigate = useNavigate()
  // 付款方式
  const [payWay, setPayWay] = useState(1)

  // 訂購資訊共用樣式
  const liClassName = ''

  return (
    <div className="border mb-20 pt-20">
      <div className="bg-gray-100 px-6 py-3 mb-2 flex justify-between">
        <h2 className="text-2xl font-bold text-blue-500">訂購資訊</h2>
      </div>
      <div className="px-5">
        <div className="my-5">
          <h5 className="">訂購明細</h5>
          <ul className="list-none">
            <li></li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="bg-gray-300 px-20 py-12">
          <div className="text-2xl font-medium">Total</div>
          <div className="">
            <div className="flex justify-between px-12">
              <div>原價</div>
              <div>$ </div>
            </div>
            <div className="flex justify-between px-12 mt-5">
              <div>共計</div>
              <div>項商品</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-12 bg-gray-300 px-20 py-12">
        <button
          className="font-medium text-gray-700 border bg-white p-2 rounded-lg mx-2 hover:bg-orange-700 hover:text-white hover:border-orange-700"
          onClick={() => {
            navigate('/cart/')
          }}
        >
          回購物車
        </button>
        <button
          className="font-medium text-gray-700 border bg-white p-2 rounded-lg mx-2 hover:bg-orange-700 hover:text-white hover:border-orange-700"
          onClick={() => {
            navigate('/cart/confirm')
          }}
        >
          前往結賬
        </button>
      </div>
    </div>
  )
}

export default CartDetails
