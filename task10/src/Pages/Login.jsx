import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Css/Login.css";

const Login = () => {
  const [adminKey, setAdminKey] = useState("");
  const [secretToken, setSecretToken] = useState("");

  const correctAdminKey = "ADMIN11";
  const correctSecretToken = "A-998877";

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (adminKey.trim() === correctAdminKey && secretToken.trim() === correctSecretToken) {
      navigate("/admin-gateway");
    } else {
      alert("Access Denied! Invalid Master Key or Secret Token.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="icon-badge">
            <i className="fa-solid fa-user-shield"></i>
          </div>
          <h2>Super Admin Gateway</h2>
          <p>Restricted infrastructure login for DevOps &amp; SysAdmins</p>
        </div>

       

        <form onSubmit={handleLogin}>
          {/* Input 1: Admin Key */}
          <div className="input-group">
            <label>Master Admin Key</label>
            <div className="input-box">
              <i className="fa-solid fa-key"></i>
              <input
                type="text"
                placeholder="e.g. ADMIN11"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Input 2: Secret Token */}
          <div className="input-group">
            <label>Cryptographic Secret Token</label>
            <div className="input-box">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                placeholder="Enter secret token-A-998877"
                value={secretToken}
                onChange={(e) => setSecretToken(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="login-submit-btn">
            <span>Authenticate as Root</span>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
