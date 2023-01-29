import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import dayjs from 'dayjs'

import { addCart } from '../../stores/cartSlice'
import AuthContext from './../../contexts/AuthContext'

function CartDetails() {
  const navigate = useNavigate()

  // 會員登入狀態
  const { userAuth } = useContext(AuthContext)
  console.log(userAuth)
  // 抓購物車資料
  const state = useSelector((state) => state.cart)
  const cartItems = state.cartItems

  const [totalPrice, setTotalPrice] = useState(0)
  const [totalMemberPrice, setTotalMemberPrice] = useState(0)

  // 付款方式
  const [payWay, setPayWay] = useState(2)

  // 訂購資訊共用樣式
  const liClassName = ''

  const goPay = async () => {
    if (userAuth.authorised) {
      if (cartItems.length > 0) {
        const order = cartItems.map((item) => {
          return {
            id: item.prodSid,
            quantity: item.prodQty,
          }
        })
        console.log(userAuth.member_sid)
        const { data } = await axios.post(
          `http://localhost:3005/cart/createOrder`,
          {
            order,
            member_sid: userAuth.member_sid,
            payWay,
          }
        )
        if (data.output.success) {
          const url = data.output.url
          window.open(url, '_self')
        } else {
          alert('付款失敗')
        }
      }
    } else {
      alert('請先登入！')
      navigate('/login')
    }
  }

  useEffect(() => {
    setTotalPrice(
      state.cartItems.reduce((acc, cur) => {
        return acc + cur.price * cur.prodQty
      }, 0)
    )
    setTotalMemberPrice(
      state.cartItems.reduce((acc, cur) => {
        return acc + cur.member_price * cur.prodQty
      }, 0)
    )
  }, [])

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
              <div>$ {totalPrice}</div>
            </div>
            <div className="flex justify-between px-12">
              <div>優惠價</div>
              <div>$ {totalMemberPrice}</div>
            </div>
            <div className="flex justify-between px-12 mt-5">
              <div>共計</div>
              <div>{cartItems.length} 項商品</div>
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
          onClick={goPay}
        >
          前往結賬
        </button>
      </div>
    </div>
  )
}

export default CartDetails
