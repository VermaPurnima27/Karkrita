import React from "react";
import "./Account.css";
import { Link } from "react-router-dom";

import {
    FaUser,
    FaBoxOpen,
    FaHeart,
    FaMapMarkerAlt,
    FaLock,
    FaSignOutAlt
} from "react-icons/fa";

export default function Account() {

    return (
        <div className="account-page">

            {/* ================= HEADER ================= */}

            <div className="account-header">
                <h1>My Account</h1>
                <p>Welcome to your Karkrita account</p>
            </div>


            {/* ================= ACCOUNT CONTENT ================= */}

            <div className="account-container">

                {/* LEFT PROFILE CARD */}

                <div className="profile-card">

                    <div className="profile-icon">
                        <FaUser />
                    </div>

                    <h2>Your Account</h2>

                    <p>Manage your profile and orders</p>

                    <button className="edit-profile">
                        Edit Profile
                    </button>

                </div>


                {/* RIGHT OPTIONS */}

                <div className="account-options">

                    {/* Profile */}

                    <Link to="/profile" className="account-option">

                        <div className="option-icon">
                            <FaUser />
                        </div>

                        <div>
                            <h3>My Profile</h3>
                            <p>View and edit your personal information</p>
                        </div>

                    </Link>


                    {/* Orders */}

                    <Link to="/orders" className="account-option">

                        <div className="option-icon">
                            <FaBoxOpen />
                        </div>

                        <div>
                            <h3>My Orders</h3>
                            <p>Track and manage your orders</p>
                        </div>

                    </Link>


                    {/* Wishlist */}

                    <Link to="/wishlist" className="account-option">

                        <div className="option-icon">
                            <FaHeart />
                        </div>

                        <div>
                            <h3>My Wishlist</h3>
                            <p>View products you saved</p>
                        </div>

                    </Link>


                    {/* Address */}

                    <Link to="/address" className="account-option">

                        <div className="option-icon">
                            <FaMapMarkerAlt />
                        </div>

                        <div>
                            <h3>My Addresses</h3>
                            <p>Manage your delivery addresses</p>
                        </div>

                    </Link>


                    {/* Password */}

                    <Link to="/change-password" className="account-option">

                        <div className="option-icon">
                            <FaLock />
                        </div>

                        <div>
                            <h3>Change Password</h3>
                            <p>Update your account password</p>
                        </div>

                    </Link>


                    {/* Logout */}

                    <button className="logout-option">

                        <div className="option-icon">
                            <FaSignOutAlt />
                        </div>

                        <div>
                            <h3>Logout</h3>
                            <p>Sign out from your account</p>
                        </div>

                    </button>

                </div>

            </div>

        </div>
    );
}