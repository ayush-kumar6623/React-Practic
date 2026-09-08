import React from "react";
import { Link } from "react-router-dom";
import "./CSS/DashboardLayout.css";

const DashboardLayout = () => {
    return (
        <>
            {/* Top Header */}
            <div className="header">

                <div className="login">
                    <Link to="/login">
                        <i className="fa-solid fa-user-lock"></i>
                        LogOut
                    </Link>
                </div>

                <div className="text">
                    Welcome <span>Admin</span>
                </div>

                <div className="avtar">
                    <Link to="/login">
                        <i className="fa-solid fa-user"></i>
                        Admin
                    </Link>
                </div>

            </div>

            {/* Sidebar */}
            <div className="dashboard">
                <nav>

                    <h2>
                        <i className="fa-solid fa-chart-bar"></i>
                        Dashboard
                    </h2>

                    <Link to="/">
                        <i className="fa-solid fa-house"></i>
                        Home
                    </Link>

                    <Link to="/contact">
                        <i className="fa-solid fa-phone"></i>
                        Contact
                    </Link>

                    <Link to="/product">
                        <i class="fa-solid fa-cart-shopping"></i>
                        Product
                    </Link>
                    <Link to="/order">
                        <i class="fa-solid fa-list"></i>
                        Order
                    </Link>
                    <Link to="/user">
                        <i className="fa-solid fa-circle-user"></i>
                        User
                    </Link>

                </nav>
            </div>
        </>
    );
};

export default DashboardLayout;