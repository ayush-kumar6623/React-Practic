import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Css/Login.css";

const Login = () => {
  const [passport, setPassport] = useState("");
  const [name, setName] = useState("");
  const [pnr, setPnr] = useState("");

  const correctPassport = "1234567";
  const correctName = "Ayush Kumar";
  const correctPnr = "AI-123";

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      passport === correctPassport &&
      name=== correctName &&
      pnr === correctPnr
    ) {
      navigate("/flight-portal");
    } else {
      alert("Invalid Flight Details! Please check Passport, Name and PNR.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="icon-badge">
            <i className="fa-solid fa-plane"></i>
          </div>
          <h2>Flight Check-In Desk</h2>
          <p>Retrieve passenger booking and electronic boarding pass</p>
        </div>

        

        <form onSubmit={handleLogin}>
          {/* Input 1: Passport Number */}
          <div className="input-group">
            <label>Passport Number</label>
            <div className="input-box">
              <i className="fa-solid fa-passport"></i>
              <input
                type="text"
                placeholder="e.g. 1234567"
                value={passport}
                onChange={(e) => setPassport(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Input 2: Passenger Name */}
          <div className="input-group">
            <label>Passenger Full Name</label>
            <div className="input-box">
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                placeholder="e.g. Ayush Kumar"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Input 3: Flight PNR */}
          <div className="input-group">
            <label>Booking Reference (PNR)</label>
            <div className="input-box">
              <i className="fa-solid fa-ticket"></i>
              <input
                type="text"
                placeholder="e.g. AI-123"
                value={pnr}
                onChange={(e) => setPnr(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="login-submit-btn">
            <span>Find Booking &amp; Check In</span>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
