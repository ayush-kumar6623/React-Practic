import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Css/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav className="corp-navbar">
      <div className="corp-logo">
        <Link to="/workspace">
          <i className="fa-solid fa-building-columns"></i>
          <span>EnterpriseHub</span>
        </Link>
      </div>

      <div className="corp-nav-links">
        <Link to="/workspace" className="active">Workspace</Link>
        <a href="#projects">Projects</a>
        <a href="#teams">Teams</a>
        <a href="#analytics">Analytics</a>
      </div>

      <div className="corp-actions">
        <div className="employee-tag">
          <i className="fa-solid fa-id-badge"></i>
          <span>a123 (ayush)</span>
        </div>
        <button onClick={handleLogout} className="corp-logout-btn">
          <i className="fa-solid fa-right-from-bracket"></i>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
