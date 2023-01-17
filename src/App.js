import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyContextsPorvider from './contexts/MyContextsProvider'

// redux toolkit
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import cartSlice from './stores/cartSlice'

// components
import Navbar from './components/Navbar'
import Home from './00-home/pages/Home'
import Footer from './components/Footer'

// member
import MemberHome from './01-member/pages/MemberHome'
import Login from './01-member/pages/Login'
import Register from './01-member/pages/Register'

// products
import Products from './02-product/pages/Products'

// cart
import CartList from './03-cart/pages/CartList'

// stylesheet
import './App.scss'

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
})

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MyContextsPorvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/member/">
              <Route index path="" element={<MemberHome />} />
            </Route>
            <Route path="/products/">
              <Route index path="" element={<Products />} />
            </Route>
            <Route path="/cart/">
              <Route index path="" element={<CartList />} />
            </Route>
          </Routes>
          <Footer />
        </MyContextsPorvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
