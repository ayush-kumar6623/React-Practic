import React from "react";
import Footer from "../Components/Footer";
import "./Css/Portal.css";

const Portal = () => {
  return (
    <div className="portal-page-container">
      <div className="portal-content">
        <div className="verification-badge-card">
          <div className="verified-icon">
          </div>
          <h2>Mobile Verified!</h2>
          
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portal;
