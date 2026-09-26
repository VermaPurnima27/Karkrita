import React, { useState } from 'react'
import './Signin.css';

import { FcGoogle } from "react-icons/fc";
import { FaPhone } from "react-icons/fa";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


export default function Signin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  async function handleOnClick() {

    // Empty field check
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            email: email,
            password: password
          })
        }
      );

      const data = await response.json();

      if (response.ok) {

        // Save JWT token
        localStorage.setItem("token", data.token);

        alert("Login successfully!");

        console.log("Login response:", data);

      } else {

        alert(data.message || "Login failed");

      }

    } catch (error) {

      console.error("Login Error:", error);

      alert("Server se connection nahi ho pa raha");

    }
  }


  return (
    <>
      <div className='Signin-container'>

        <div className="Signin-card">

          <h1>login In</h1>

          <div className="form-box">

            <p className='heading'>
              Sign in to your Desi world
            </p>

            <span className='s1'>
              Email:
            </span>

            <input
              type="email"
              name="email1"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <span className='s2'>
              Password:
            </span>

            <input
              type={showPassword ? 'text' : 'password'}
              name="password1"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span
              className='eye-icon1'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>


            <div className="social-btn">

              <button className="google-btn">
                <span className='logo-ggl'>
                  <FcGoogle size={18} />
                </span>

                Continue with google
              </button>


              <button className="phone-btn">

                <span className='logo-phn'>
                  <FaPhone size={18} />
                </span>

                Continue with Phone

              </button>

            </div>

          </div>


          <button
            className="sign-btn"
            onClick={handleOnClick}
          >
            Login
          </button>

        </div>

      </div>
    </>
  )
}