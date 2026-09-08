import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Css/Login.css";

const Login = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [pin, setPin] = useState("");

  const correctAccount = "987654321012";
  const correctCustomer = "1234";
  const correctPin = "5678";

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      accountNumber.trim() === correctAccount &&
      customerId.trim() === correctCustomer &&
      pin.trim() === correctPin
    ) {
      navigate("/netbanking");
    } else {
      alert("NetBanking Access Denied! Please check Account Number, Customer ID and PIN.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="icon-badge">
            <i className="fa-solid fa-building-columns"></i>
          </div>
          <h2>NetBanking Login</h2>
          <p>Provide banking credentials to access secure dashboard</p>
        </div>

      

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>12-Digit Account Number</label>
            <div className="input-box">
              <i className="fa-solid fa-credit-card"></i>
              <input
                type="text"
                maxLength={12}
                placeholder="Enter 12-digit 987654321012"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Input 2: Customer ID */}
          <div className="input-group">
            <label>Customer ID</label>
            <div className="input-box">
              <i className="fa-solid fa-fingerprint"></i>
              <input
                type="text"
                placeholder="e.g. 1234"
                value={customerId}
                onChange={(e) => setCustomerId(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Input 3: Transaction PIN */}
          <div className="input-group">
            <label>4-Digit Security PIN</label>
            <div className="input-box">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                maxLength={4}
                placeholder="Enter 4-digit PIN 5678"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="login-submit-btn">
            <span>Secure NetBanking Login</span>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
