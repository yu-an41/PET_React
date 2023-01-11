import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const autoFillLogin = () => {}
  const [registerInfo, setRegisterInfo] = useState({
    account: '',
    password: '',
    nickname: '',
    birthday: '1990-00-00',
    email: '',
  })

  return (
    <div className="max-w-2xl mx-auto pt-2">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg mx-auto max-w-sm p-4 sm:p-6 lg:p-8">
        <form className="space-y-6">
          <h3
            className="text-xl font-medium text-gray-900 dark:text-white"
            onDoubleClick={autoFillLogin}
          >
            現在就加入我們！
          </h3>
          <div className="w-full">
            <label
              htmlFor="account"
              className="text-sm font-medium text-gray-900 mb-2 block"
            >
              帳號
              <span className="ml-1 text-red-600 font-medium">*</span>
            </label>
            <input
              className="bg-gray-50 border-gray-300 border text-sm rounded-lg w-full p-2.5"
              name="account"
              id="account"
              type="text"
              placeholder="請輸入您的帳號"
              value=""
              onChange=""
              required={true}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-900 mb-2 block"
            >
              密碼
              <span className="ml-1 text-red-600 font-medium">*</span>
            </label>
            <input
              className="bg-gray-50 border-gray-300 border text-sm rounded-lg w-full p-2.5"
              name="password"
              id="password"
              type="password"
              placeholder="••••••••"
              value=""
              onChange=""
              required={true}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-900 mb-2 block"
            >
              信箱
            </label>
            <input
              className="bg-gray-50 border-gray-300 border text-sm rounded-lg w-full p-2.5"
              name="email"
              id="email"
              type="email"
              placeholder="abc@xxxx.com.tw"
              value=""
              onChange=""
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="nickname"
              className="text-sm font-medium text-gray-900 mb-2 block"
            >
              暱稱
            </label>
            <input
              className="bg-gray-50 border-gray-300 border text-sm rounded-lg w-full p-2.5"
              name="nickname"
              id="nickname"
              type="text"
              placeholder="我是斑比"
              value=""
              onChange=""
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="birthday"
              className="text-sm font-medium text-gray-900 mb-2 block"
            >
              生日
            </label>
            <input
              className="bg-gray-50 border-gray-300 border text-sm rounded-lg w-full p-2.5 text-gray-600"
              name="birthday"
              id="birthday"
              type="date"
              value=""
              onChange=""
            />
          </div>
          <div className="w-full flex justify-between">
            <div className="flex items-start">
              <div className="ml-1 flex items-center h-5">
                <input
                  id="agree"
                  name="agree"
                  type="checkbox"
                  className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                  required={true}
                />
              </div>
              <div className="text-sm ml-3">
                <label htmlFor="agree" className="font-medium text-gray-900">
                  同意
                  <Link
                    to="/#"
                    className="mx-1 font-medium text-blue-600 hover:text-gray-600"
                  >
                    使用者條款
                    <span className="ml-1 text-red-600 font-medium">*</span>
                  </Link>
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            註冊去囉
          </button>
          <p className="text-gray-500">
            （<span className="mx-1 text-red-600 font-medium">*</span>
            代表為必填欄位 ）
          </p>
          <div className="flex itmes-start">
            <p className="font-medium text-gray-600 mr-auto">
              Already have an account?
            </p>
            <Link className="font-medium text-blue-700 mr-3" to="/login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
