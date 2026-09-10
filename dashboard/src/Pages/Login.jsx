import React from 'react'
import "./Css/Login.css"
const Login = () => {
  return (
    <>
      <div className="login-box">
        <div className="login-text">
          <h1>Login Page</h1>
          <p>Welcome User</p>

          <div className="input-box">
            <label>Email</label>
            <input type="Email" placeholder='Enter Your Email' />
            <label>Password</label>
            <input type="Password" placeholder='Enter Your Password' />
            <div className="btn">
              login
            </div>
          </div>
        </div>


      </div>




    </>
  )
}

export default Login