import React from "react";
import { Link } from "react-router-dom";
import "./CSS/DashboardLayout.css";
import { IoCloseSharp } from "react-icons/io5";




function handleLogout(){
    alert("Hiii")
}

const DashboardLayout = ({children}) => {
    return (
        <>
            <div className="header">
                    <div className="sidebar-close">
                        <IoCloseSharp />
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
            <div className="dashboard">
                <nav>
                    <h2><i className="fa-solid fa-chart-bar"></i>Dashboard</h2>
                    <Link to="/home"><i className="fa-solid fa-house"></i>Home</Link>
                    <Link to="/contact"><i className="fa-solid fa-phone"></i>Contact</Link>
                    <Link to="/product"><i className="fa-solid fa-cart-shopping"></i>Product</Link>
                    <Link to="/order"><i className="fa-solid fa-list"></i>Order</Link>
                    <Link to="/user"><i className="fa-solid fa-circle-user"></i>User</Link>
                </nav>



                <div className="logout">
                    <button onClick={handleLogout} ><i class="fa-solid fa-right-from-bracket"></i>Logout</button>
                </div>
            </div>

            <div className="main-content">
        {children}
            </div>
        </>
    );
};

export default DashboardLayout;