import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const [login, setLogin] = useState(false)
  const width = window.innerWidth

  return (
    <>
      {width > 390 ? (
        <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2 mb-3">
          <div className="flex items-center space-x-2 ml-2">
            <div>
              <Link to="/">
                <div className="w-24">
                  <img src="https://dotown.maeda-design-room.net/wp-content/uploads/2022/10/thing_dachshund_02.png" />
                </div>
              </Link>
            </div>
          </div>
          <div className="w-48 sm:w-96 max-w-2xl flex items-center justify-around p-2">
            <Link
              to="/#"
              className="font-medium transition hover:text-blue-600"
            >
              Products
            </Link>
            <Link
              to="/#"
              className="font-medium transition hover:text-blue-600 "
            >
              Forum
            </Link>
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
          </div>
          <div className="right-2 mt-1 w-48 divide-y divide-gray-200 rounded-md">
            {login ? (
              <div className="flex items-center space-x-2 p-2">
                <img
                  src="https://plchldr.co/i/40x40?bg=111111"
                  alt="plchldr.co"
                  className="h-9 w-9 rounded-full"
                />
                <div className="font-medium">斑比姊姊</div>
                <div>
                  <Link to="/login">Logout</Link>
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
            {login ? (
              <div className="flex items-center space-x-2 p-2">
                <img
                  src="https://plchldr.co/i/40x40?bg=111111"
                  alt="plchldr.co"
                  className="h-9 w-9 rounded-full"
                />
                <div className="font-medium">斑比姊姊</div>
                <div>
                  <Link to="/login">Logout</Link>
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
