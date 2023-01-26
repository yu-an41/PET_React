import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// contexts and slices
import AuthContext, { userAuth } from './../../contexts/AuthContext'
import { emptyCart } from '../../stores/cartSlice'

// components
import CartItem from '../components/CartItem'

function CartList() {
  const [cartList, setCartList] = useState()

  const { userAuth } = useContext(AuthContext)

  // 抓 store 裡面的 cartItems
  const state = useSelector((state) => state.cart)
  const cartItems = state.cartItems
  // console.log('1', state.cartItems)

  const [totalPrice, setTotalPrice] = useState(0)
  const [totalMemberPrice, setTotalMemberPrice] = useState(0)

  // 結帳流程狀態
  //  const [nowState, setNowState] = useState(0)

  // 付款方式狀態（待移到確認頁面）
  // const [payWay, setPayWay] = useState(1)

  useEffect(() => {
    // getCartList()
    let totalPrice = state.cartItems.reduce((acc, cur) => {
      return acc + cur.price * cur.amount
    }, 0)
    let totalMemberPrice = state.cartItems.reduce((acc, cur) => {
      return acc + cur.member_price * cur.amount
    }, 0)
    console.log(
      'totalPrice: ',
      totalPrice,
      ' totalMemberPrice: ',
      totalMemberPrice
    )
  }, [])
  return (
    <div className="border mb-20 pt-20">
      <div className="bg-gray-100 px-6 py-3 mb-2 flex justify-between">
        <h2 className="text-2xl font-bold text-blue-500">My Cart</h2>
        <button className="border border-red-700 rounded px-5 py-1 hover:bg-red-700 hover:text-white">
          清空
        </button>
      </div>
      <div className="lg:flex flex-wrap">
        <div className="lg:w-1/2 border bg-red-100">
          <div className="border-b-2 bg-gray-200 px-6 py-12">
            {cartItems?.map((v, i) => (
              <CartItem key={i} cartDetails={v} />
            ))}
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 border bg-gray-400"></div>
      </div>
      <div className=""></div>
    </div>
  )
}

export default CartList
