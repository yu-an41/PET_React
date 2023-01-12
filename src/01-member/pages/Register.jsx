import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import axios from 'axios'

import AuthContext from '../../contexts/AuthContext'

function Register() {
  const navigate = useNavigate()

  const today = dayjs(new Date()).format('YYYY-MM-DD')

  const [registerInfo, setRegisterInfo] = useState({
    email: '',
    password: '',
    nickname: '',
    birthday: '',
  })

  const [pwVisibility, setPwVisiblity] = useState(false)

  const [pwConfirm, setPwConfirm] = useState('')

  const [pwAlert, setPwAlert] = useState(false)

  const [agreePolicy, setAgreePolicy] = useState(false)

  const togglePwVisibility = () => setPwVisiblity(!pwVisibility)

  const toggleAgree = () => setAgreePolicy(!agreePolicy)

  const autoFillRegister = () => {
    setRegisterInfo({
      email: 'test123@gmail.com',
      password: '0228',
      nickname: '阿極',
      birthday: '',
    })
  }

  const updateRegisterInfo = (e) => {
    setRegisterInfo({
      ...registerInfo,
      [e.target.name]: e.target.value,
    })
    // console.log(e.target.value)
  }

  const memberRegister = async (e) => {
    e.preventDefault()
    // console.log(registerInfo)
    // console.log(agreePolicy)

    if (agreePolicy) {
      if (checkEmailValid(registerInfo.email)) {
        const res = await axios.post(
          'http://localhost:3005/member/register/api',
          registerInfo
        )
        console.log(res.data)
        if (res.data.success) {
          alert('註冊成功≖‿≖')
          navigate('/')
        } else {
          alert('此帳號已經存在，請直接登入！')
          navigate('/login')
        }
      } else {
        alert('請輸入有效電子信箱')
      }
    } else {
      alert('請同意使用者政策！')
    }
  }

  // 信箱驗證 regexp
  // reference: https://ithelp.ithome.com.tw/articles/10094951
  const checkEmailValid = (email) => {
    const validEmail =
      /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
    let emailIsValid = false
    if (email.search(validEmail) != -1) emailIsValid = true
    return emailIsValid
  }

  return (
    <div className="max-w-2xl mx-auto pt-2">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg mx-auto max-w-sm p-4 sm:p-6 lg:p-8">
        <form className="space-y-6" onSubmit={memberRegister}>
          <h3
            className="text-xl font-medium text-gray-900 dark:text-white"
            onClick={autoFillRegister}
          >
            現在就加入我們！
          </h3>
          <div className="w-full">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-900 mb-2 block"
            >
              信箱
              <span className="ml-1 text-red-600 font-medium">*</span>
            </label>
            <input
              className="bg-gray-50 border-gray-300 border text-sm rounded-lg w-full p-2.5"
              name="email"
              id="email"
              type="email"
              placeholder="abc@xxxx.com.tw"
              value={registerInfo.email}
              onChange={updateRegisterInfo}
              required={true}
            />
          </div>
          <div className="w-full relative">
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
              type={pwVisibility ? 'text' : 'password'}
              placeholder="••••••••"
              value={registerInfo.password}
              onChange={updateRegisterInfo}
              required={true}
            />
            <i
              className={`absolute right-4 mt-3 text-gray-500 hover:text-blue-500 fa-regular ${
                pwVisibility ? 'fa-eye-slash' : 'fa-eye'
              }`}
              onClick={togglePwVisibility}
            ></i>
          </div>
          <div className="w-full relative">
            <label
              htmlFor="passwordConfirm"
              className="text-sm font-medium text-gray-900 mb-2 block"
            >
              確認密碼
              <span className="mx-1 text-red-600 font-medium">*</span>
              <small
                className={`ml-2 text-sm text-red-700 ${
                  pwConfirm ? '' : 'invisible'
                }`}
              >
                請輸入相同密碼！
              </small>
            </label>
            <input
              className="bg-gray-50 border-gray-300 border text-sm rounded-lg w-full p-2.5"
              name="passwordConfirm"
              id="passwordConfirm"
              type={pwVisibility ? 'text' : 'password'}
              value={pwConfirm}
              onChange={(e) => {
                setPwConfirm(e.target.value)
              }}
              onBlur={(e) => {
                if (registerInfo.password !== pwConfirm) {
                  setPwAlert(true)
                } else {
                  setPwAlert(false)
                }
              }}
              required={true}
            />
            <i
              className={`absolute right-4 mt-3 text-gray-500 hover:text-blue-500 fa-regular ${
                pwVisibility ? 'fa-eye-slash' : 'fa-eye'
              }`}
              onClick={togglePwVisibility}
            ></i>
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
              value={registerInfo.nickname}
              onChange={updateRegisterInfo}
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
              min="1900-01-01"
              max={today}
              value={registerInfo.birthday}
              onChange={updateRegisterInfo}
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
                  value={agreePolicy}
                  onChange={toggleAgree}
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
            <p className="font-medium text-gray-600 mr-3">
              Already have an account?
            </p>
            <Link className="font-medium text-blue-700" to="/login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
