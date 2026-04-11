
import React, { useState } from 'react'
import './Signup.css';

import { FcGoogle } from "react-icons/fc";
import { FaPhone } from "react-icons/fa";


export default function Signup() {

    const [email, setEmail] = useState("");
     const [name, setName] = useState("");
    const [password, setPassword] = useState("");



    function handleOnClick() {
        alert("login successfully");
    }
    return (
        <>
            <div className='container'>
                <div className="card">

                    <h1>Sign Up</h1>

                    <div className="form-box">
                        <p className='heading'>Welcome to your Desi world</p>

                        <span className='s1'>Email:</span>
                        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <span className='s2'>Password:</span>
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <span className='s3'>Username:</span>
                        <input type="text" placeholder='Username' value={name} onChange={(e) => setName(e.target.value)} />
                        <div className="social-btn">
                            <button className="google-btn">
                                <span className='logo-ggl' >
                                    <FcGoogle size={18} />
                                </span>
                                Continue with google</button>

                            <button className="phone-btn">
                                <span className='logo-phn'>
                                    <FaPhone size={18} />
                                </span>
                                Continue with Phone </button>
                        </div>
                    </div>
                    <button className="acc-btn" onClick={handleOnClick}>Create Account</button>
                </div>
            </div>
        </>



    )
}
