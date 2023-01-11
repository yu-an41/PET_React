import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Navbar from './components/Navbar'
import Home from './00-home/pages/Home'
import Login from './01-member/pages/Login'
import Register from './01-member/pages/Register'
import Footer from './components/Footer'

// stylesheet
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
