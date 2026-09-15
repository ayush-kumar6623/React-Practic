import React from 'react'
import './Css/Header.css'
import { FaSearch } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";

const Header = () => {
  return (
    <>
    
    <div className="header-top-outer">
        <span>Suppot</span>
        <span>Offer</span>
        <span>Become A Vendor</span>
        <span>Corporate Tie-ups</span>
        <span>+91 8115930084</span>
    </div>


    <div className="header-main-outer">


        <div className="logo">
            <img src="/images/logo.webp" alt="" />
        </div>

        {/* search Box */}
        <div className="search-outer">
            <input type="text" className='header-search-input' placeholder='Search Flower cake ' />
            <div className="search-icon">
                <FaSearch />
            </div>
        </div>
        

{/* Header Btn */}

        <div className="header-btns">
            <div className="header-login-btn">
                <IoPersonCircle size={25} />
                <span>Login/signup</span>
            </div>
            <div className="header-cart-btn">
                <FaShoppingCart />
                <span className='header-cart-count'>0</span>
                <span>Items</span>
            </div>
        </div>
    </div>
    

    <div className="header-bottom-menu">
        <ul>
            <NavLink className={({isActive})=>`navlinks ${isActive? "navActive" : ""}`} to="/"><IoMdHome/></NavLink>
            <NavLink className={({isActive})=>`navlinks ${isActive? "navActive" : ""}`} to="/shop">Shop</NavLink>
            <NavLink className={({isActive})=>`navlinks ${isActive? "navActive" : ""}`} to="/flower">Flower</NavLink>
            <NavLink className={({isActive})=>`navlinks ${isActive? "navActive" : ""}`} to="/gallery">Gallery</NavLink>
            <NavLink className={({isActive})=>`navlinks ${isActive? "navActive" : ""}`} to="/about">About</NavLink>
            <NavLink className={({isActive})=>`navlinks ${isActive? "navActive" : ""}`} to="/contact">Contact</NavLink>
        </ul>
    </div>

    </>
  )
}

export default Header