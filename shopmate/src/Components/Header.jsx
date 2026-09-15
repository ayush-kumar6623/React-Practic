import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

import { IoSearch } from "react-icons/io5";
import {
    CiUser,
    CiHeart,
    CiShoppingCart
} from "react-icons/ci";
import ProductCard from "../Pages/Product";

const Header = () => {
    return (
        <>
            <div className="header-outer">

                <div className="text">
                    <h4>
                        Shop<span>Mate</span>
                    </h4>
                </div>

                <div className="navbar">
                    <div className="nav-links">
                        <Link to="/shop">Home</Link>
                        <Link to="/shop">Shop</Link>
                        <Link to="/categories">Categories</Link>
                        <Link to="/new-arrivals">New Arrivals</Link>
                        <Link to="/deals">Deals</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
                <div className="search-box">
                    <div className="search-outer">
                        <input
                            className="input-box"
                            type="text"
                            placeholder="Search products..."
                        />
                        <div className="search-icon-box">
                            <IoSearch />
                        </div>
                    </div>
                </div>
                <div className="btns-icons">
                    <Link to="/login" className="icon-box">
                        <CiUser />
                    </Link>
                    <div className="icon-box">
                        <CiHeart />
                    </div>
                    <div className="icon-box">
                        <CiShoppingCart />
                    </div>
                </div>
            </div>
            <div className="Second-header">
                <div className="all-product">
                    <h3>All Products</h3>
                </div>
                <div className="search-box-2">
                    <div className="search-outer">
                        <div className="search-icon-box">
                            <IoSearch />
                        </div>
                        <input
                            className="input-box"
                            type="text"
                            placeholder="Search for products, categories..."
                        />
                    </div>
                </div>
                <div className="sort-by">
                    <div className="short">
                        <span>Sort by:</span>
                    </div>
                    <select className="Featured-box">
                        <option>Featured</option>
                        <option> Low to High</option>
                        <option> High to Low</option>
                        <option>Newest</option>
                    </select>

                </div>

            </div>
            <ProductCard/>
        </>
    );
};

export default Header;