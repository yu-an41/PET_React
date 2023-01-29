import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// contexts and slices
import AuthContext, { userAuth } from './../../contexts/AuthContext'
import { emptyCart } from '../../stores/cartSlice'

// components
import CartItem from '../components/CartItem'

function CartList() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [cartDetails, setCartDetails] = useState()

  const { userAuth } = useContext(AuthContext)

  // 抓 store 裡面的 cartItems
  const state = useSelector((state) => state.cart)
  const cartItems = state.cartItems
  // console.log('1', state.cartItems)

  const [totalPrice, setTotalPrice] = useState(0)
  const [totalMemberPrice, setTotalMemberPrice] = useState(0)

  // 結帳流程狀態
  //  const [nowState, setNowState] = useState(0)

  const checkLogin = () => {}

  useEffect(() => {
    setCartDetails(state.cartItems)
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
  }, [state.cartItems])
  return (
    <div className="border mb-20 pt-20">
      <div className="bg-gray-100 px-6 py-3 mb-2 flex justify-between">
        <h2 className="text-2xl font-bold text-blue-500">我的購物車</h2>
        <button
          className="border border-red-700 rounded px-5 py-1 hover:bg-red-700 hover:text-white"
          onClick={() => {
            dispatch(emptyCart())
            navigate('/')
          }}
        >
          清空
        </button>
      </div>
      <div className="lg:flex flex-wrap">
        <div className="lg:w-1/2 bg-red-100">
          <div className="border-b-2 bg-gray-200 px-6 py-12">
            {cartDetails?.map((v, i) => (
              <CartItem key={i} cartDetails={v} />
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 bg-gray-300 px-20 py-12">
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
            <div className="flex justify-between px-12">
              <div>折價券</div>
              <div>- $ 50</div>
            </div>
            <div className="flex justify-between px-12 mt-5">
              <div>共計</div>
              <div>
                {state.cartItems.reduce((acc, cur) => {
                  return acc + cur.prodQty
                }, 0)}
                項商品
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-12 bg-gray-300 px-20 py-12">
        <button
          className="font-medium text-gray-700 border bg-white p-2 rounded-lg mx-2 hover:bg-orange-700 hover:text-white hover:border-orange-700"
          onClick={() => {
            navigate('/products/')
          }}
        >
          繼續逛逛
        </button>
        <button className="font-medium text-gray-700 border bg-white p-2 rounded-lg mx-2 hover:bg-orange-700 hover:text-white hover:border-orange-700"
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

export default CartList
