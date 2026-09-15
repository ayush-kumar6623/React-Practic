import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import Button from './Button';
import '../css/Header.css';

function Header({ cartCount = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    alert("Login button clicked");
  };

  const handleSignup = () => {
    alert("Signup button clicked");
  };

  const handleSearchClick = () => {
    navigate('/shop');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <Link to="/" className="logo">
            Urban<span className="logo-highlight">Cart</span>
          </Link>
        </div>

        <nav className="nav-desktop">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink to="/shop" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Shop
          </NavLink>
          <NavLink to="/categories" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Categories
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Contact
          </NavLink>
        </nav>

        <div className="header-actions">
          <button 
            type="button" 
            className="icon-btn" 
            onClick={handleSearchClick} 
            title="Search products"
            aria-label="Search products"
          >
            <FiSearch size={20} />
          </button>

          <Link to="/cart" className="icon-btn cart-icon-btn" title="View Cart" aria-label="Cart">
            <FiShoppingCart size={20} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>

          <div className="auth-buttons">
            <Button variant="secondary" onClick={handleLogin} className="header-auth-btn">
              Login
            </Button>
            <Button variant="primary" onClick={handleSignup} className="header-auth-btn">
              Signup
            </Button>
          </div>

          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">
            Home
          </NavLink>
          <NavLink to="/shop" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">
            Shop
          </NavLink>
          <NavLink to="/categories" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">
            Categories
          </NavLink>
          <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">
            About
          </NavLink>
          <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">
            Contact
          </NavLink>
          <div className="mobile-auth-buttons">
            <Button variant="secondary" onClick={() => { setMobileMenuOpen(false); handleLogin(); }}>
              Login
            </Button>
            <Button variant="primary" onClick={() => { setMobileMenuOpen(false); handleSignup(); }}>
              Signup
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
