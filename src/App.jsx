import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './assets/Home'
import Footer from './assets/Footer'
import SideMenuButton from './assets/SideMenuButton'
import SideMenu from './assets/SideMenu'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/footer' element={<Footer />}/>
          <Route path='/sidemenubutton' element={<SideMenuButton />}/>
          <Route path='/sidemenu' element={<SideMenu />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
