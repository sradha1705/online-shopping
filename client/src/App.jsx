import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Viewproducts from './pages/Viewproducts'
import Card from './components/Card'
import Addproducts from './pages/Addproducts'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/nav' element={<Nav />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/viewproduct' element={<Viewproducts/>}/>
          <Route path='/card' element={<Card/>}/>
          <Route path='/product' element={<Addproducts/>}/>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
