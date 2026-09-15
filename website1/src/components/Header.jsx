import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from './Button';
import '../css/Header.css';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogin = () => {
    alert("Login button clicked");
  };

  const handleSignup = () => {
    alert("Signup button clicked");
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span>Simple</span>Web
        </Link>

        <button 
          className="mobile-toggle-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <div className={`nav-wrapper ${mobileMenuOpen ? 'active' : ''}`}>
          <nav className="nav-links">
            <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
              About
            </NavLink>
            <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
              Services
            </NavLink>
            <NavLink to="/gallery" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
              Gallery
            </NavLink>
            <NavLink to="/team" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
              Team
            </NavLink>
            <NavLink to="/faq" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
              FAQ
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
              Contact
            </NavLink>
          </nav>

          <div className="nav-auth-buttons">
            <Button variant="outline" className="btn-sm" onClick={handleLogin}>
              Login
            </Button>
            <Button variant="primary" className="btn-sm" onClick={handleSignup}>
              Signup
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
