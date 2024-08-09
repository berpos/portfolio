import { useState } from 'react'
import PreLoader from './components/PreLoader'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <PreLoader />
      <Navbar />
      <div className="App"></div>
    </>
  )
}

export default App
