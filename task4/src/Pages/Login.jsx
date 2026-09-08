import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Css/Login.css";

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");

  const correctMobile = "1234567890";
  const correctOtp = "1234";

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (mobileNumber.trim() === correctMobile && otp.trim() === correctOtp) {
      navigate("/portal");
    } else {
      alert("Invalid Mobile Number or OTP! Please verify your inputs.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <form onSubmit={handleLogin}>
          {/* Input 1: Mobile */}
          <div className="input-group">
            <label>Mobile Number</label>
            <div className="input-box">
              <i className="fa-solid fa-phone"></i>
              <input
                type="tel"
                maxLength={10}
                placeholder="10-digit mobile number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Input 2: OTP */}
          <div className="input-group">
            <label>4-Digit SMS OTP</label>
            <div className="input-box">
              <i className="fa-solid fa-key"></i>
              <input
                type="password"
                maxLength={4}
                placeholder="Enter 4-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="login-submit-btn">
            <span>Verify &amp; Login</span>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
