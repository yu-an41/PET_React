import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import AuthContext from './../../contexts/AuthContext'

function Login() {
  const navigate = useNavigate()

  const { userAuth, setUserAuth } = useContext(AuthContext)

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  })

  const [pwVisibility, setPwVisiblity] = useState(false)

  const togglePwVisibility = () => setPwVisiblity(!pwVisibility)

  const autoFillLogin = () => {
    setLoginInfo({
      email: 'test3333@gmail.com',
      password: '3333',
    })
  }

  const updateLoginInfo = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    })
  }

  const memberLogin = async (e) => {
    e.preventDefault()
    console.log(loginInfo)
    const res = await axios.post(
      'http://localhost:3005/member/login/api',
      loginInfo
    )

    // console.log(res.data)
    if (res.data.success) {
      setUserAuth({
        ...userAuth,
        authorised: true,
        member_sid: res.data.member_sid,
        member_nickname: res.data.nickname,
        token: res.data.token,
      })
      alert('登入成功(๑¯◡¯๑)')
      navigate('/')
    } else {
      alert('登入失敗！')
    }
  }

  return (
    <div className="max-w-2xl mx-auto pt-4">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg mx-auto max-w-sm p-4 sm:p-6 lg:p-8">
        <form className="space-y-6" onSubmit={(e) => memberLogin(e)}>
          <h3
            className="text-xl font-medium text-gray-900 dark:text-white"
            onClick={autoFillLogin}
          >
            歡迎回來～～～
          </h3>
          <div className="w-full">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-900 mb-2 block"
            >
              帳號
            </label>
            <input
              className="bg-gray-50 border-gray-300 border text-sm rounded-lg w-full p-2.5"
              name="email"
              id="email"
              type="text"
              placeholder="請輸入您的帳號"
              value={loginInfo.email}
              onChange={(e) => updateLoginInfo(e)}
              required={true}
            />
          </div>
          <div className="w-full relative">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-900 mb-2 block"
            >
              密碼
            </label>
            <input
              className="bg-gray-50 border-gray-300 border text-sm rounded-lg w-full p-2.5"
              name="password"
              id="password"
              type={pwVisibility ? 'text' : 'password'}
              placeholder="••••••••"
              value={loginInfo.password}
              onChange={(e) => updateLoginInfo(e)}
              required={true}
            />
            <i
              className={`absolute right-4 mt-3 text-gray-500 hover:text-blue-500 fa-regular ${
                pwVisibility ? 'fa-eye-slash' : 'fa-eye'
              }`}
              onClick={togglePwVisibility}
            ></i>
          </div>
          <div className="w-full flex justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                  required=""
                />
              </div>
              <div className="text-sm ml-3">
                <label
                  htmlFor="remember"
                  className="font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
            </div>
            <div className="flex items-start mr-5">
              <div className="flex items-center h-5 ">
                <Link to="/forget-pw" className="font-medium text-blue-700 ">
                  Lost Password?
                </Link>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login to your email
          </button>
          <div className="flex itmes-start">
            <p className="font-medium text-gray-600 mr-3">Not registered?</p>
            <Link className="font-medium text-blue-700" to="/register">
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
