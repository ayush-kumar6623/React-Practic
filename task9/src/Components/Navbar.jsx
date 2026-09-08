import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Css/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav className="flight-navbar">
      <div className="flight-logo">
        <Link to="/flight-portal">
          <i className="fa-solid fa-plane-departure"></i>
          <span>SkyWings Airlines</span>
        </Link>
      </div>

      <div className="flight-nav-links">
        <Link to="/flight-portal" className="active">Flight Details</Link>
        <a href="#boarding">Boarding Pass</a>
        <a href="#baggage">Baggage Tracker</a>
        <a href="#meals">In-Flight Meals</a>
      </div>

      <div className="flight-actions">
        
        <button onClick={handleLogout} className="flight-logout-btn">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          Exit Desk
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
