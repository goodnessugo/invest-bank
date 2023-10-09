import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './assets/Home'
import Footer from './assets/Footer'
import Sidemenu from './assets/Sidemenu'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/footer' element={<Footer />}/>
          <Route path='/sidemenu' element={<Sidemenu />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
