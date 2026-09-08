import React from "react";
import { useNavigate } from "react-router-dom";
import "./Css/Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <footer className="med-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="brand-badge">
            <i className="fa-solid fa-hospital"></i>
            <span>Apex HealthCare</span>
          </div>
          <p>Authorized clinical workstation for hospital staff &amp; medical practitioners.</p>
        </div>

        <div className="footer-emergency">
          <h4>Emergency &amp; Support</h4>
          <p><i className="fa-solid fa-phone-volume"></i> 24x7 Trauma Desk: +1 (800) 555-0199</p>
          <p><i className="fa-solid fa-notes-medical"></i> Clinical IT: desk@apexhealth.org</p>
        </div>

        <div className="footer-compliance">
          <h4>Compliance</h4>
          <span className="badge-pill">
            <i className="fa-solid fa-user-shield"></i> HIPAA Certified
          </span>
          <button onClick={handleLogout} className="med-logout-btn">
            <i className="fa-solid fa-right-from-bracket"></i> Doctor Signout
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Apex Hospitals Network. Confidential Medical Records.</p>
      </div>
    </footer>
  );
};

export default Footer;
