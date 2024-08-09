import { useState } from 'react'
import PreLoader from './components/PreLoader'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {

  return (
    <>
      <div>
        <PreLoader />
      </div>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </>
  )
}

export default App
