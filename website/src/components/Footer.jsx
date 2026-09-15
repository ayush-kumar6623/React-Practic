import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-col footer-about">
          <h3 className="footer-logo">WebCraft</h3>
          <p className="footer-text">
            A simple and modern web application built with clean React.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Contact Us</h4>
          <ul className="footer-contact-list">
            <li>Email: info@webcraft.com</li>
            <li>Phone: +91 8115930084</li>
            <li>Location: lucknow , Aliganj</li>
            <li>Hours: Mon - Fri: 9am - 9pm</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright-text">
            &copy; WebCraft. All rights reserved by webcraft .
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
