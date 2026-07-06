
import React, { useState } from 'react'
import './Signup.css';

import { FcGoogle } from "react-icons/fc";
import { FaPhone } from "react-icons/fa";
import { FaEye, FaEyeSlash } from 'react-icons/fa';



export default function Signup() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [showPassword, setShowPassword] = useState(false);



    function handleOnClick() {
        alert("form submit")
    }


    return (
        <>
            <div className='container'>
                <div className="card">

                    <h1>Sign Up</h1>

                    <div className="input-box">
                        <p className='heading1'>Welcome to your Desi world</p>

                        <span className='inputhead1'>Email:</span>
                        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />

                        <span className='inputhead2'>Password:</span>
                        <input type={showPassword ? "text" : "password"} name='Password' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
                        <span className='eye-icon' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>

                        <span className='inputhead3'>Username:</span>
                        <input type="text" name='name' placeholder='Username' onChange={(e) => setName(e.target.value)} required />

                        <div className="social-btn1">
                            <button className="google-btn1">
                                <span className='logo-ggl1' >
                                    <FcGoogle size={18} />
                                </span>
                                Continue with google</button>

                            <button className="phone-btn1">
                                <span className='logo-phn1'>
                                    <FaPhone size={18} />
                                </span>
                                Continue with Phone </button>
                        </div>
                    </div>
                    <button className="acc-btn1" onClick={handleOnClick}>Create Account</button>
                </div>
            </div>
        </>



    )
}
