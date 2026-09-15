import React, { useState } from "react";
import {
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaGoogle,
    FaFacebookF,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/header");
    };

    return (
        <div className="login-page">

            <div className="login-left">
                <img
                    src="/login.png"
                    alt="Welcome Back"
                    className="login-image"
                />
            </div>

            <div className="login-right">
                <div className="login-form-container">

                    <h1>Login</h1>

                    <p className="login-subtitle">
                        Enter your credentials to access your account
                    </p>

                    <form onSubmit={handleLogin}>

                        <div className="login-input-group">
                            <label>Email Address</label>

                            <div className="login-input-wrapper">
                                <FaEnvelope />

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="login-input-group">
                            <label>Password</label>

                            <div className="login-input-wrapper">
                                <FaLock />

                                <input
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Enter your password"
                                    required
                                />

                                <button
                                    type="button"
                                    className="password-eye"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    {showPassword ? (
                                        <FaEyeSlash />
                                    ) : (
                                        <FaEye />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="forgot-password">
                            <span>Forgot Password?</span>
                        </div>

                        <button
                            type="submit"
                            className="login-btn"
                        >
                            Login
                        </button>

                        <div className="login-or">
                            <span></span>
                            <p>or continue with</p>
                            <span></span>
                        </div>

                        <button
                            type="button"
                            className="login-social-btn"
                        >
                            <FaGoogle className="google-icon" />
                            <span>Continue with Google</span>
                        </button>

                        <button
                            type="button"
                            className="login-social-btn"
                        >
                            <FaFacebookF className="facebook-icon" />
                            <span>Continue with Facebook</span>
                        </button>

                        <p className="register-text">
                            Don't have an account?
                            <Link to="/signup">
                                Register
                            </Link>
                        </p>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;