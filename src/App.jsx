import { useState } from 'react'
import AboutUs from './AboutUs'
import ProductList from './ProductList'
import './App.css'

function App() {
  const [showProductList, setShowProductList] = useState(false)

  if (showProductList) {
    return <ProductList onHomeClick={() => setShowProductList(false)} />
  }

  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>
      <AboutUs />
      <button className="get-started-button" onClick={() => setShowProductList(true)}>
        Get Started
      </button>
    </div>
  )
}

export default App
