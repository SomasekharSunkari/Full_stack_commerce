import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

import Collection from './pages/Collection'
import Contact from './pages/Contact'
import About from './pages/About'
import Product from './pages/Product'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Navbar from "./components/Navbar.jsx"
import Footer from './pages/Footer.jsx'
import Searchbar from './components/Searchbar.jsx'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart.jsx'

function App() {

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar />
      <Searchbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/order' element={<Orders />} />



      </Routes>
      <Footer />
    </div>
  )
}

export default App
