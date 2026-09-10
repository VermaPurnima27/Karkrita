import { useState } from "react";
import "./Secondnav.css";

import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Secondnav() {

    const [menuOpen, setMenuOpen] = useState(false);

    // Side menu close karne ke liye
    const closeMenu = () => {
        setMenuOpen(false);
    };


    return (
        <>

            {/* ================= SECOND NAVBAR ================= */}

            <div className="secondNavbar">

                {/* MENU ICON */}
                <div className="menuIcon" onClick={() => setMenuOpen(true)}>
                    <FaBars />
                </div>


                {/* ================= DESKTOP LINKS ================= */}

                <div className="menuLinks">

                    <Link to="/"> Home</Link>

                    
                    <Link to="/category">Categories</Link>

                    <Link to="/new-arrivals"> New Arrivals</Link>

                    <Link to="/best-sellers">Best Sellers</Link>

                    <Link to="/artisans"> Artisans</Link>

                    <Link to="/about">About</Link>

                    <Link to="/contact"> Contact</Link>


                    {/* SEARCH */}

                    <Link to="/search" className="searchNavBtn">
                        <span>Search</span>
                    </Link>

                </div>

            </div>



            {/* ================= SIDE MENU ================= */}
            <div className={menuOpen? "sideMenu active": "sideMenu"}>

                {/* CLOSE BUTTON */}
                <div className="closeBtn"><FaTimes onClick={closeMenu}/></div>


                {/* SEARCH */}
                <Link to="/search" onClick={closeMenu}>🔍 Search</Link>


                {/* HOME */}
                <Link  to="/" onClick={closeMenu}>🏠 Home</Link>


                {/* CATEGORIES */}
                <Link to="/signin" onClick={closeMenu}> 🔐 Signin</Link>


                {/* NEW ARRIVALS */}
                <Link to="/signup" onClick={closeMenu}>⭐ Signup</Link>


                {/* BEST SELLERS */}
                <Link to="/wishlist" onClick={closeMenu}> 🧡 Create a Wish List</Link>


                {/* ARTISANS */}
                <Link to="/cart" onClick={closeMenu}>🛒 Cart</Link>


                {/* ABOUT */}
                <Link to="/orders" onClick={closeMenu}>📦 Your Orders</Link>


                {/* CONTACT */}
                <Link to="/account" onClick={closeMenu}>👤 Your Account</Link>

            </div>

        </>
    );
}