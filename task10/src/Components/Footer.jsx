import React from "react";
import { useNavigate } from "react-router-dom";
import "./Css/Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <footer className="admin-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="brand-badge">
            <i className="fa-solid fa-terminal"></i>
            <span>RootAdmin Gateway</span>
          </div>
          <p>High-privileged cloud infrastructure management and security console.</p>
        </div>

        <div className="footer-cluster">
          <h4>Infrastructure</h4>
          <p><i className="fa-solid fa-server"></i> Node: AP-South-1a (Cluster-Alpha)</p>
          <p><i className="fa-solid fa-microchip"></i> Kernel: Linux 6.8-Hardened</p>
        </div>

        <div className="footer-status">
          <h4>System Health</h4>
          
          <button onClick={handleLogout} className="admin-logout-btn">
            <i className="fa-solid fa-power-off"></i> Terminate Session
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} RootAdmin Cloud Security Operations. Level 4 Clearance.</p>
      </div>
    </footer>
  );
};

export default Footer;
