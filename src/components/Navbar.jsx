import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { addCart } from '../stores/cartSlice'

import AuthContext from '../contexts/AuthContext'

function Navbar() {
  const navigate = useNavigate()

  const state = useSelector((state) => state.cart)
  const [cartDetails, setCartDetails] = useState()

  const { userAuth, setUserAuth, memberLogout } = useContext(AuthContext)

  const width = window.innerWidth

  const checkLogin = (e) => {
    e.preventDefault()
    if (userAuth.authorised) {
      navigate('/member')
    } else {
      alert('請先登入！')
      navigate('/login')
    }
  }

  useEffect(() => {
    setCartDetails(state.cartItems)
  }, [state.cartItems])
  return (
    <>
      {width > 390 ? (
        <header className="fixed flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2 mb-3 z-10">
          <div className="flex items-center space-x-2 ml-2">
            <div>
              <Link to="/">
                <div className="w-24">
                  <img
                    src="https://dotown.maeda-design-room.net/wp-content/uploads/2022/10/thing_dachshund_02.png"
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="w-48 sm:w-96 max-w-2xl flex items-center justify-around p-2">
            <Link
              to="/products/"
              className="font-medium transition hover:text-blue-600"
            >
              Products
            </Link>
            {/* <Link
              to="/#"
              className="font-medium transition hover:text-blue-600"
            >
              Forum
            </Link> */}
            <Link
              to="/#"
              className="font-medium transition hover:text-blue-600 "
            >
              Events
            </Link>
            <Link
              to="/#"
              className="font-medium transition hover:text-blue-600 "
            >
              News
            </Link>
            <Link
              to="/member"
              className="font-medium transition hover:text-blue-600"
              onClick={(e) => checkLogin(e)}
            >
              Member
            </Link>
          </div>
          <Link
            onClick={(e) => {
              e.preventDefault()
              if (state.cartItems.length) {
                navigate('/cart/')
              } else {
                alert('YOUR CART IS EMPTY!')
              }
            }}
            className="right-2 flex jusity-center items-center h-full"
          >
            <i className="text-2xl fa-solid fa-cart-shopping text-blue-400 hover:text-gray-700"></i>
            <div className="rounded-full bg:red-500"></div>
          </Link>
          <div className="right-2 mt-1 w-48 divide-y divide-gray-200 rounded-md">
            {userAuth.authorised ? (
              <div className="flex items-center space-x-2 p-2">
                <img
                  src="https://plchldr.co/i/40x40?bg=111111"
                  alt="plchldr.co"
                  className="h-9 w-9 rounded-full"
                />
                <div className="font-medium">{userAuth.member_nickname}</div>
                <div>
                  <Link onClick={memberLogout}>Logout</Link>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2 p-2">
                <img
                  src="https://dotown.maeda-design-room.net/wp-content/uploads/2022/07/food_saucebottle_01.png"
                  alt="plchldr.co"
                  className="h-9 w-9 rounded-full"
                />
                <div className="font-medium">請登入</div>
                <div>
                  <Link to="/login">Login</Link>
                </div>
              </div>
            )}
          </div>
        </header>
      ) : (
        <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2 mb-3">
          <div className="flex items-center space-x-2">
            <button type="button" className="text-3xl">
              <i className="fa-sharp fa-solid fa-bars"></i>
            </button>
            <div>
              <Link to="/">Home</Link>
            </div>
          </div>
          <div className="w-48 sm:w-96 flex items-center justify-between p-2">
            <Link to="/login" className="transition hover:text-blue-600 ">
              Login
            </Link>
            <Link to="/#" className="transition hover:text-blue-600">
              Products
            </Link>
          </div>
          <div className="right-2 mt-1 w-48 divide-y divide-gray-200 rounded-md">
            {userAuth.authorised ? (
              <div className="flex items-center space-x-2 p-2">
                <img
                  src="https://plchldr.co/i/40x40?bg=111111"
                  alt="plchldr.co"
                  className="h-9 w-9 rounded-full"
                />
                <div className="font-medium">{userAuth.member_nickname}</div>
                <div>
                  <Link to="/logout">Logout</Link>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2 p-2">
                <img
                  src="https://plchldr.co/i/40x40?bg=111111"
                  alt="plchldr.co"
                  className="h-9 w-9 rounded-full"
                />
                <div className="font-medium">請登入</div>
                <div>
                  <Link to="/login">Login</Link>
                </div>
              </div>
            )}
          </div>
        </header>
      )}
    </>
  )
}

export default Navbar
