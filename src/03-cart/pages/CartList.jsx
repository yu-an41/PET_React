import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

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

  const [payWay, setPayWay] = useState(2)

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
            {cartDetails?.length ? (
              cartDetails.map((v, i) => <CartItem key={i} cartDetails={v} />)
            ) : (
              <div className="text-xl font-medium">購物車無任何商品！</div>
            )}
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
            <div className="hidden flex justify-between px-12">
              <div>折價券</div>
              <div>- $ 0</div>
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
        <button
          className="font-medium text-gray-700 border bg-white p-2 rounded-lg mx-2 hover:bg-orange-700 hover:text-white hover:border-orange-700"
          onClick={() => {
            if (cartItems.length) {
              navigate('/cart/confirm')
            } else {
              alert('購物車內無任何商品！')
              navigate('/products/')
            }
          }}
          // onClick={goPay}
        >
          前往結帳
        </button>
      </div>
    </div>
  )
}

export default CartList
