import React, { useState } from 'react';
import './Signup.css';

import { FcGoogle } from "react-icons/fc";
import { FaPhone } from "react-icons/fa";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    async function handleOnClick() {

        // Check empty fields
        if (!name || !email || !password) {
            alert("Please fill all fields");
            return;
        }

        try {

            const response = await fetch(
                "http://localhost:5000/api/auth/register",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        name: name,
                        email: email,
                        password: password
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {

                alert("Account created successfully!");

                // Clear form
                setName("");
                setEmail("");
                setPassword("");

            } else {

                alert(data.message || "Signup failed");

            }

        } catch (error) {

            console.error("Signup Error:", error);

            alert("Server se connection nahi ho pa raha");

        }
    }


    return (
        <>

            <div className="container">

                <div className="card">

                    <h1>Sign Up</h1>

                    <div className="input-box">

                        <p className="heading1">
                            Welcome to your Desi world
                        </p>

                        <span className="inputhead1">
                            Email:
                        </span>

                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <span className="inputhead2">
                            Password:
                        </span>

                        <input
                            type={showPassword ? "text" : "password"}
                            name="Password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <span
                            className="eye-icon"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>

                        <span className="inputhead3">
                            Username:
                        </span>

                        <input
                            type="text"
                            name="name"
                            placeholder="Username"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <div className="social-btn1">

                            <button className="google-btn1">
                                <span className="logo-ggl1">
                                    <FcGoogle size={18} />
                                </span>

                                Continue with google
                            </button>

                            <button className="phone-btn1">

                                <span className="logo-phn1">
                                    <FaPhone size={18} />
                                </span>

                                Continue with Phone

                            </button>

                        </div>

                    </div>

                    <button
                        className="acc-btn1"
                        onClick={handleOnClick}
                    >
                        Create Account
                    </button>

                </div>

            </div>

        </>
    );
}