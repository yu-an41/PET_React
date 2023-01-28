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

  const checkLogin = () => {
    
  }

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
        <h2 className="text-2xl font-bold text-blue-500">My Cart</h2>
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
        <div className="lg:w-1/2 border bg-red-100">
          <div className="border-b-2 bg-gray-200 px-6 py-12">
            {cartDetails?.map((v, i) => (
              <CartItem key={i} cartDetails={v} />
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 border bg-gray-400 px-20 py-12">
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
              <div>共計</div>
              <div>
                {state.cartItems.reduce((acc, cur) => {
                  return acc + cur.prodQty
                }, 0)}
                項商品
              </div>
            </div>
            <li>折價券 </li>
          </div>
        </div>
      </div>
      <div className="">
        <button className="">繼續逛逛</button>
        <button className="">前往結賬</button>
      </div>
    </div>
  )
}

export default CartList
