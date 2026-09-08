import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Css/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav className="bank-navbar">
      <div className="bank-logo">
        <Link to="/netbanking">
          <i className="fa-solid fa-vault"></i>
          <span>SafeVault Bank</span>
        </Link>
      </div>

      <div className="bank-nav-links">
        <Link to="/netbanking" className="active">Accounts</Link>
        <a href="#transfers">Fund Transfers</a>
        <a href="#cards">Debit/Credit Cards</a>
        <a href="#statements">Statements</a>
      </div>

      <div className="bank-actions">
        
        <button onClick={handleLogout} className="bank-logout-btn">
          <i className="fa-solid fa-power-off"></i>
          Secure Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
