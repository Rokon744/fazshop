import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Futter from './Components/Futter'
import Navbar from './Components/Navbar'
import Path from './Path'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Path/>
        <Futter/>
      </BrowserRouter>
    </>
  )
}

export default App