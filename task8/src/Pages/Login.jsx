import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Css/Login.css";

const Login = () => {
  const [doctorId, setDoctorId] = useState("");
  const [passcode, setPasscode] = useState("");

  const correctDoctorId = "DOC-123";
  const correctPasscode = "MED123";

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (doctorId.trim() === correctDoctorId && passcode.trim() === correctPasscode) {
      navigate("/doctor-desk");
    } else {
      alert("Access Denied! Invalid Doctor ID or Hospital Passcode.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="icon-badge">
            <i className="fa-solid fa-user-doctor"></i>
          </div>
          <h2>Doctor Portal Access</h2>
          <p>Clinical verification for authorized physicians</p>
        </div>

        <form onSubmit={handleLogin}>
          {/* Input 1: Doctor ID */}
          <div className="input-group">
            <label>Doctor License ID</label>
            <div className="input-box">
              <i className="fa-solid fa-stethoscope"></i>
              <input
                type="text"
                placeholder="e.g. DOC-123"
                value={doctorId}
                onChange={(e) => setDoctorId(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Input 2: Hospital Passcode */}
          <div className="input-group">
            <label>Hospital Security Passcode</label>
            <div className="input-box">
              <i className="fa-solid fa-key"></i>
              <input
                type="password"
                placeholder="Enter hospital passcode MED123"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="login-submit-btn">
            <span>Unlock Clinical Desk</span>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
