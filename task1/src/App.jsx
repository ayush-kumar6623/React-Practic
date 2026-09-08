import React from 'react'

import "@fortawesome/fontawesome-free/css/all.min.css";

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './Pages/Login'
import Order from './Pages/Order'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import User from './Pages/User'
import Dashboard from './Pages/Dashboard';
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App