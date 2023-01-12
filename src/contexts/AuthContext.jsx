import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AuthContext = createContext({})
export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const unAuth = {
    authorised: false,
    member_sid: 0,
    member_account: '',
    member_nickname: '',
    token: '',
  }

  let initAuth = { ...unAuth }

  // 取得目前狀態

  // 會員登入
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  })

  const memberLogin = async (e) => {
    e.preventDefault()
    console.log(loginInfo)
    const res = await axios.post(
      'http://localhost:3005/member/login/api',
      loginInfo
    )

    // console.log(res.data)
    if (res.data.success) {
      alert('登入成功(๑¯◡¯๑)')
      navigate('/')
    } else {
      alert('登入失敗！')
    }
  }

  return (
    <AuthContext.Provider value={{ loginInfo, setLoginInfo, memberLogin }}>
      {children}
    </AuthContext.Provider>
  )
}
