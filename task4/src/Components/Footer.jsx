import React from "react";
import { useNavigate } from "react-router-dom";
import "./Css/Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <footer className="portal-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="brand-badge">
            <i className="fa-solid fa-shield-halved"></i>
            <span>SecureOTP Portal</span>
          </div>
          <p>Two-factor authentication and mobile credential management service.</p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <a href="#help">Help Center</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>

        <div className="footer-security">
          <h4>Security</h4>
          <span className="badge-pill">
            <i className="fa-solid fa-lock"></i> 256-bit Encrypted
          </span>
          <button onClick={handleLogout} className="footer-logout-btn">
            <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SecureOTP Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
