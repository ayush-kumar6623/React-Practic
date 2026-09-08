import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Css/Login.css";

const Login = () => {
  const [rollNo, setRollNo] = useState("");
  const [dob, setDob] = useState("");

  const correctRollNo = "CS-108";
  const correctDob = "2004-02-29";

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (rollNo.trim() === correctRollNo && dob.trim() === correctDob) {
      navigate("/student-portal");
    } else {
      alert("Student Verification Failed! Incorrect Roll Number or Date of Birth.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="icon-badge">
            <i className="fa-solid fa-user-graduate"></i>
          </div>
          <h2>Student Portal Login</h2>
          <p>Access your exam results &amp; course registrations</p>
        </div>

        

        <form onSubmit={handleLogin}>
          {/* Input 1: Roll Number */}
          <div className="input-group">
            <label>Student Roll Number</label>
            <div className="input-box">
              <i className="fa-solid fa-hashtag"></i>
              <input
                type="text"
                placeholder="e.g. CS-108"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Input 2: Date of Birth */}
          <div className="input-group">
            <label>Date of Birth</label>
            <div className="input-box">
              <i className="fa-solid fa-calendar-days"></i>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="login-submit-btn">
            <span>Enter Student Portal</span>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
