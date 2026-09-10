import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./CSS/DashboardLayout.css";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";

function handleLogout() {
    alert("Logout Successful");
}

const DashboardLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <>

            <div className="header">
                
                <div className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    {sidebarOpen ? <IoCloseSharp /> : <IoMenuSharp />}
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

            <div className={`dashboard ${sidebarOpen ? "show" : "hide"}`}>
                <nav>

                    <h2>
                        <i className="fa-solid fa-chart-bar"></i>
                        Dashboard
                    </h2>

                    <NavLink to="/home" className={({ isActive }) => isActive ? "active" : "" }>
                        <i className="fa-solid fa-house"></i>
                        Home
                    </NavLink>

                    <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : "" }> 
                    <i className="fa-solid fa-phone"></i> Contact
                    </NavLink>

                    <NavLink to="/product" className={({ isActive }) => isActive ? "active" : "" }>
                    <i className="fa-solid fa-cart-shopping"></i> Product
                    </NavLink>

                    <NavLink to="/order" className={({ isActive }) => isActive ? "active" : "" }> 
                    <i className="fa-solid fa-list"></i> Order
                    </NavLink>

                    <NavLink to="/user" className={({ isActive }) =>     isActive ? "active" : "" }> 
                    <i className="fa-solid fa-circle-user"></i> User
                    </NavLink>

                </nav>

                <div className="logout">
                    <button onClick={handleLogout}>
                        <i className="fa-solid fa-right-from-bracket"></i>
                        Logout
                    </button>
                </div>
            </div>

            <div className={`main-content ${sidebarOpen ? "with-sidebar" : "full-content"}`}>{children}</div>
        </>
    );
};

export default DashboardLayout;