import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const [login, setLogin] = useState(false)

  return (
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
  )
}

export default Navbar
