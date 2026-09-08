import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Css/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav className="member-navbar">
      <div className="nav-logo">
        <Link to="/home">
          <i className="fa-solid fa-gem"></i>
          <span>MemberHub</span>
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/home" className="active">Overview</Link>
        <a href="#benefits">Benefits</a>
        <a href="#directory">Directory</a>
        <a href="#support">Support</a>
      </div>

      <div className="nav-actions">
        <div className="user-profile">
          <i className="fa-solid fa-circle-user"></i>
          <span>Ashu</span>
        </div>
        <button onClick={handleLogout} className="logout-btn">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
