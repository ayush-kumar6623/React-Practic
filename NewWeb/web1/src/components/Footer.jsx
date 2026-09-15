import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col brand-col">
          <Link to="/" className="footer-logo">
            Urban<span className="logo-highlight">Cart</span>
          </Link>
          <p className="footer-motto">Simple products. Better style.</p>
          <p className="footer-about-text">
            Your destination for streetwear, sleek electronics, and everyday essentials crafted with care.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Customer</h4>
          <ul className="footer-links">
            <li><Link to="/cart">Cart</Link></li>
            <li><a href="#faq" onClick={(e) => { e.preventDefault(); alert("FAQ page coming soon!"); }}>FAQ</a></li>
            <li><a href="#support" onClick={(e) => { e.preventDefault(); alert("Support team is available 24/7 at support@urbancart.com"); }}>Support</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Contact</h4>
          <div className="footer-contact-info">
            <p className="contact-line">
              <FiMail className="contact-icon" />
              <a href="mailto:support@urbancart.com">support@urbancart.com</a>
            </p>
            <p className="contact-line">
              <FiPhone className="contact-icon" />
              <a href="tel:+919876543210">+91 98765 43210</a>
            </p>
            <p className="contact-line">
              <FiMapPin className="contact-icon" />
              <span>42 Tech Plaza, MG Road, Bengaluru, India</span>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© 2026 UrbanCart. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
