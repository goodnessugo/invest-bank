import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './assets/Home'
import Footer from './assets/Footer'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/footer' element={<Footer />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
