import React from "react";
import { useNavigate } from "react-router-dom";
import "./Css/Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <footer className="student-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="brand-badge">
            <i className="fa-solid fa-graduation-cap"></i>
            <span>University Portal</span>
          </div>
          <p>Official student examination &amp; academic evaluation management system.</p>
        </div>

        <div className="footer-links">
          <h4>Academic Links</h4>
          <a href="#exam">Examination Cell</a>
          <a href="#library">Digital Library</a>
          <a href="#results">Semester Results</a>
        </div>

        <div className="footer-support">
          <h4>Student Support</h4>
          <p><i className="fa-solid fa-envelope"></i> helpdesk@university.edu</p>
          <button onClick={handleLogout} className="student-logout-btn">
            <i className="fa-solid fa-right-from-bracket"></i> Student Logout
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Board of Academic Studies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
