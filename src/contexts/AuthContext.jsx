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
    token: '',
  }

  let initAuth = { ...unAuth }

  // 取得目前狀態
  const auth = localStorage.getItem('auth')
  if (auth) {
    const localAuth = JSON.parse(auth)
    console.log(localAuth)
    if (localAuth && localAuth.token) {
      initAuth = { ...localAuth, authorised: true }
    }
  }
  const [userAuth, setUserAuth] = useState(initAuth)

  // console.log(userAuth)

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
