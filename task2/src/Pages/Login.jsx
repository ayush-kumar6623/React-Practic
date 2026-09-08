
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./CSS/Login.css";

const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (userName === "ayush" && password === "12345") {
            navigate("/header");
        } else {
            alert("Invalid Email or Password");
        }
    };

    return (
        <div className="login-container">

            <div className="login-card">
               
                <h1>Welcome Back!</h1>
                <p>Login to access your dashboard</p>
                <form onSubmit={handleLogin}>

                    {/* Email */}
                    <div className="input-box">

                        <label>User Name</label>

                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="Enter your UserName"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="input-box">
                        <label>Password</label>
                        <div className="input-field">
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="login-options">
                        <Link to="/forgot-password">
                            Forgot Password?
                        </Link>

                    </div>


                    {/* Login Button */}
                    <button
                        type="submit"
                        className="login-btn"
                    >
                        Login

                        <i className="fa-solid fa-arrow-right"></i>

                    </button>

                </form>

            </div>

        </div>
    );
};

export default Login;

