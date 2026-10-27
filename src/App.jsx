import { useState } from 'react'
import AboutUs from './AboutUs'
import './App.css'

function App() {
  const [showProductList, setShowProductList] = useState(false)

  if (showProductList) {
    // ponytail: placeholder until ProductList.jsx exists
    return <h2>Plants coming soon</h2>
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
