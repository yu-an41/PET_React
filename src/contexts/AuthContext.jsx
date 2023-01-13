import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AuthContext = createContext({})
export default AuthContext

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const unAuth = {
    authorised: false,
    member_sid: 0,
    // member_account: '',
    member_nickname: '',
    token: '',
  }

  let initAuth = { ...unAuth }

  const [userAuth, setUserAuth] = useState(initAuth)

  // 取得目前狀態

  // 登入資訊
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  })

  // 登出
  const memberLogout = () => {
    setUserAuth(unAuth)
    localStorage.removeItem('auth')
    alert('登出成功！')
    navigate('/')
  }
  return (
    <AuthContext.Provider
      value={{
        userAuth,
        setUserAuth,
        loginInfo,
        setLoginInfo,
        memberLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
