import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from './Button';
import '../css/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = () => {
    alert("Login button clicked");
  };

  const handleSignup = () => {
    alert("Signup button clicked");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        <Link to="/" className="header-logo" onClick={closeMenu}>
          WebCraft
        </Link>

        <button 
          className="mobile-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav-menu ${menuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li>
              <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active-link' : '')} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/team" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Team
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="header-auth-buttons">
            <Button variant="outline" onClick={handleLogin}>
              Login
            </Button>
            <Button variant="primary" onClick={handleSignup}>
              Signup
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
