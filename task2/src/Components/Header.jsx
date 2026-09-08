import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Header.css";

const Header = () => {
    return (
        <header className="main-header">

            <div className="logo">
                <Link to="/">
                    <i className="fa-solid fa-chart-line"></i>
                    AdminPanel
                </Link>
            </div>

            <nav className="header-nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            <div className="header-actions">
                <Link to="/login" className="header-login">
                    <i className="fa-solid fa-right-to-bracket"></i>
                    Login
                </Link>

                <Link to="/register" className="register-btn">
                    Register
                </Link>
            </div>

        </header>
    );
};

export default Header;