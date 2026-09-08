import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Css/Login.css";

const Login = () => {
  const [empId, setEmpId] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [accessKey, setAccessKey] = useState("");

  const correctEmpId = "a123";
  const correctWorkEmail = "ayush@gmail.in";
  const correctAccessKey = "a@2026";

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      empId === correctEmpId &&
      workEmail === correctWorkEmail &&
      accessKey=== correctAccessKey
    ) {
      navigate("/workspace");
    } else {
      alert("Employee authentication failed! Verify Employee ID, Work Email and Access Key.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="icon-badge">
            <i className="fa-solid fa-briefcase"></i>
          </div>
          <h2>Employee Workspace</h2>
          <p>Sign in using your corporate credentials</p>
        </div>

    

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Employee ID</label>
            <div className="input-box">
              <i className="fa-solid fa-id-card"></i>
              <input
                type="text"
                placeholder="e.g. a123"
                value={empId}
                onChange={(e) => setEmpId(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Input 2: Work Email */}
          <div className="input-group">
            <label>Corporate Email</label>
            <div className="input-box">
              <i className="fa-solid fa-envelope"></i>
              <input
                type="email"
                placeholder="e.g. ayush@gmail.in"
                value={workEmail}
                onChange={(e) => setWorkEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Input 3: Access Key */}
          <div className="input-group">
            <label>Secret Access Key</label>
            <div className="input-box">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                placeholder="Enter access key eg- a@2026"
                value={accessKey}
                onChange={(e) => setAccessKey(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="login-submit-btn">
            <span>Authorize &amp; Enter Workspace</span>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
