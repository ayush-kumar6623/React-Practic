import React, { useState } from 'react'
import './Css/Login.css'
import {useNavigate } from 'react-router-dom'

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const correctEmail = "ayush@gmail.com"
  const correctPassword = '1234'
  const navigate = useNavigate()

  function handleLogin(){
    if(correctEmail==email && correctPassword==password){
      navigate('/dashboard')      
    }
    else{
      alert("Invalid Email or Password")
    }
  }
  return (
    <>
            <div className="login-container">
                <div className="login-card">
                    <h1>Login Here</h1>
                    <p>Get Access Your Account</p>

                    <div className="input-box">
                            <label>Email Address</label>
                            <input type="Email" placeholder='ayush@gmail.com' onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="input-box">
                            <label>Password</label>
                        <input type="password" placeholder='1234' onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div className="options">
                            <a href="/">Forgot Password?</a>
                        </div>
                        <button type="submit" onClick={handleLogin}>Login</button>
                    
                    


                </div>
            </div>
            


        </>
  )
}

export default Login