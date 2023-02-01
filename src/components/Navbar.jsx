import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { addCart } from '../stores/cartSlice'

import AuthContext from '../contexts/AuthContext'

import { imgNodeUrl } from '../my-config'

function Navbar() {
  const navigate = useNavigate()

  const state = useSelector((state) => state.cart)
  const [cartDetails, setCartDetails] = useState()

  const { userAuth, setUserAuth, memberLogout } = useContext(AuthContext)

  const width = window.innerWidth

  const [menuDrop, setMenuDrop] = useState(false)

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
                    src={
                      'https://dotown.maeda-design-room.net/wp-content/uploads/2022/10/thing_dachshund_02.png'
                    }
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
            to="/#"
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
                  // src="https://plchldr.co/i/40x40?bg=111111"
                  src={`${imgNodeUrl}/images/photos/TingStyle_1.jpg`}
                  alt="plchldr.co"
                  className="h-9 w-9 rounded-full"
                />
                <div className="font-medium">{userAuth.member_nickname}</div>
                <div>
                  <Link to="/#" onClick={memberLogout}>
                    Logout
                  </Link>
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
        <div className="">
          <header className="fixed flex w-full items-center justify-between bg-orange-100 py-1 px-2 mb-3 z-10">
            <div className="flex items-center space-x-2 ml-1 mr-auto">
              <div>
                <Link to="/">
                  <div className="w-12">
                    <img
                      src={
                        'https://dotown.maeda-design-room.net/wp-content/uploads/2022/10/thing_dachshund_02.png'
                      }
                      alt=""
                    />
                  </div>
                </Link>
              </div>
            </div>
            <Link
              to="/#"
              onClick={(e) => {
                e.preventDefault()
                if (state.cartItems.length) {
                  navigate('/cart/')
                } else {
                  alert('YOUR CART IS EMPTY!')
                }
              }}
              className="flex jusity-center items-center h-full mr-3"
            >
              <i className="text-xl fa-solid fa-cart-shopping text-orange-700"></i>
              <div className="rounded-full bg:red-500"></div>
            </Link>
            <div className="">
              {userAuth.authorised ? (
                <div className="flex items-center space-x-1">
                  <img
                    src={`${imgNodeUrl}/images/photos/TingStyle_1.jpg`}
                    alt="plchldr.co"
                    className="h-6 w-6 rounded-full"
                  />
                  <div className="font-medium">{userAuth.member_nickname}</div>
                  {/* <div className="mr-5">
                    {menuDrop ? (
                      <i className="fa-solid fa-circle-caret-down"></i>
                    ) : (
                      <i className="fa-solid fa-circle-caret-up"></i>
                    )}
                  </div> */}
                  <img
                    src={`${imgNodeUrl}/images/photos/DaStyle_1.jpg`}
                    alt="menu drop down"
                    className="h-6 w-6 rounded-full"
                    onClick={() => {
                      setMenuDrop(!menuDrop)
                    }}
                  />
                  <div className="hidden">
                    <Link to="/#" onClick={memberLogout} className="text-sm">
                      登出
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-1 p-1">
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
          {menuDrop ? (
            <div className="fixed z-10 w-24 flex flex-col items-center justify-between px-3 pb-1 text-sm right-0 top-9 bg-orange-100 divide-y divide-slate-200">
              <Link to="/products/" className="w-full space-x-1 text:gray-500">
                Products
              </Link>
              <Link to="/#" className="w-full space-x-1 text:gray-500">
                Events
              </Link>
              <Link to="/#" className="w-full space-x-1 text:gray-500">
                News
              </Link>
              <Link
                to="/member"
                className="w-full space-x-1 text:gray-500"
                onClick={(e) => checkLogin(e)}
              >
                Member
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  )
}

export default Navbar
