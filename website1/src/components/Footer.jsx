import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3 className="footer-brand"><span>Simple</span>Web</h3>
          <p className="footer-desc">
            A clean, beginner-friendly website template demonstrating modern React concepts, components, and simple CSS styling.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Contact Info</h4>
          <p className="footer-contact-item">📍 123 Tech Street, Silicon City</p>
          <p className="footer-contact-item">📞 +1 (555) 234-5678</p>
          <p className="footer-contact-item">✉️ hello@simpleweb.example</p>
          <p className="footer-contact-item">⏰ Mon - Fri: 9:00 AM - 6:00 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} SimpleWeb. All rights reserved. Built with React.js.</p>
      </div>
    </footer>
  );
}

export default Footer;
