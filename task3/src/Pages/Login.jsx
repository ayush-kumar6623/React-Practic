import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Css/Login.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");

  const correctUserName = "ashu";
  const correctEmail = "ashu@gmail.com";
  const correctPin = "1234";

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      userName=== correctUserName &&
      email === correctEmail &&
      pin === correctPin
    ) {
      navigate("/home");
    } else {
      alert("Invalid credentials! Please enter valid Username, Email and Security PIN.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          
          
        </div>

        

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Username</label>
            <div className="input-box">
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                placeholder="Enter member username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Input 2: Email */}
          <div className="input-group">
            <label>Email Address</label>
            <div className="input-box">
              <i className="fa-solid fa-envelope"></i>
              <input
                type="email"
                placeholder="Enter member email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>


          <button type="submit" className="login-submit-btn">
            <span>Login to Portal</span>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
