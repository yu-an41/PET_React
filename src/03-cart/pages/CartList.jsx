import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import AuthContext, { userAuth } from './../../contexts/AuthContext'
import { addCart } from '../../stores/cartSlice'

import CartItem from '../components/CartItem'

function CartList() {
  const [cartList, setCartList] = useState()

  const { userAuth } = useContext(AuthContext)

  // 抓 store 裡面的 cartItems
  const state = useSelector((state) => state.cart)
  // console.log('1', state.cartItems)

  const [totalPrice, setTotalPrice] = useState(0)
  const [totalMemberPrice, setTotalMemberPrice] = useState(0)

  // 結帳流程狀態
  //  const [nowState, setNowState] = useStae(0)

  // 付款方式狀態（待移到確認頁面）
  // const [payWay, setPayWay] = useState(1)

  // const getCartList = useSelector((state) => {
  //   setCartList(state.cartItems)
  //   console.log(state.cartItems)
  // })

  useEffect(() => {
    // getCartList()
    let totalPrice = state.cartItems.reduce((acc, cur) => {
      return acc + cur.price * cur.amount
    }, 0)
    let totalMemberPrice = state.cartItems.reduce((acc, cur) => {
      return acc + cur.member_price * cur.amount
    }, 0)
    // console.log('2', state.cartItems)
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
                return <CartItem key={i} />
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
