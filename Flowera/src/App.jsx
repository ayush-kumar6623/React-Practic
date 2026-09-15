import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Shop from './Pages/Shop';
import Gallery from './Pages/Gallery';
import Flower from './Pages/Flower'

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/flower' element={<Flower/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App