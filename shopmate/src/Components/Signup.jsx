import React, { useState } from "react";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaCalendarAlt,
  FaUserFriends,
  FaChevronDown,
  FaGoogle,
  FaFacebookF,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Signup.css";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);
  return (
    <div className="signup-page">
      <div className="signup-left">
        <img
          src="/signup.png"
          alt="Join ShopMate"
          className="signup-image"
        />
      </div>
      <div className="signup-right">
        <div className="form-container">
          <h1>
            Create Account
          </h1>
          <p className="subtitle">
            Fill in the details to create your account
          </p>
          <form>
            <div className="form-grid">
              <div className="input-group">
                <label>
                  Full Name
                </label>
                <div className="input-wrapper">
                  <FaUser />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
              <div className="input-group">
                <label>
                  Email Address
                </label>
                <div className="input-wrapper">
                  <FaEnvelope />
                  <input
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="input-group">
                <label>
                  Phone Number
                </label>

                <div className="input-wrapper">

                  <FaPhone />

                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                  />

                </div>

              </div>

              <div className="input-group">

                <label>
                  Password
                </label>

                <div className="input-wrapper">

                  <FaLock />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Create a password"
                  />

                  <button
                    type="button"
                    className="eye-btn"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
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
              <div className="input-group full-width">
                <label>
                  Confirm Password
                </label>
                <div className="input-wrapper">
                  <FaLock />
                  <input
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    className="eye-btn"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                  >
                    {showConfirmPassword ? (
                      <FaEyeSlash />
                    ) : (
                      <FaEye />
                    )}
                  </button>
                </div>
              </div>
              <div className="input-group">
                <label>
                  Gender
                </label>
                <div className="input-wrapper">
                  <FaUserFriends />
                  <select>
                    <option value="">
                      Select gender
                    </option>
                    <option>
                      Male
                    </option>
                    <option>
                      Female
                    </option>
                    <option>
                      Other
                    </option>
                  </select>
                  <FaChevronDown className="select-icon" />
                </div>
              </div>
              <div className="input-group">
                <label>
                  Date of Birth
                </label>
                <div className="input-wrapper">
                  <FaCalendarAlt />
                  <input
                    type="date"
                  />
                </div>
              </div>
            </div>
            <div className="terms">
              <input
                type="checkbox"
                id="terms"
              />

              <label htmlFor="terms">
                I agree to the
                <span>
                  Terms & Conditions
                </span>

                and
                <span>
                  Privacy Policy
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="create-btn"
            >
              Create Account
            </button>

            <div className="or">

              <span></span>

              <p>
                or sign up with
              </p>

              <span></span>

            </div>

            <button
              type="button"
              className="social-btn"
            >

              <FaGoogle />

              <span>
                Sign up with Google
              </span>

            </button>

            <button
              type="button"
              className="social-btn"
            >

              <FaFacebookF />

              <span>
                Sign up with Facebook
              </span>

            </button>

            <p className="login-text">

              Already have an account?

              <Link to="/login">
                Login
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Signup;