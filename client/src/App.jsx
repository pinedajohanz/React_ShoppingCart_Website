import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from "./components/navbar"
import { Shop } from './pages/shop/shop'
import { Cart } from './pages/cart/cart'

function App() {

  return (
    <div className="App">
      <Router>
        {/* navbar avail in every page */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}/>
          <Route path="cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
