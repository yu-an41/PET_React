import { AuthContextProvider } from './AuthContext'
export default function MyContextsPorvider({ children }) {
  return (
    <>
      <AuthContextProvider>{children}</AuthContextProvider>
    </>
  )
}
