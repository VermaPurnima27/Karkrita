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

                <div
                    className="menuIcon"
                    onClick={() => setMenuOpen(true)}
                >
                    <FaBars />
                </div>


                {/* ================= DESKTOP LINKS ================= */}

                <div className="menuLinks">

                    <Link to="/">
                        Home
                    </Link>

                    <Link to="/categories">
                        Categories
                    </Link>

                    <Link to="/new-arrivals">
                        New Arrivals
                    </Link>

                    <Link to="/best-sellers">
                        Best Sellers
                    </Link>

                    <Link to="/artisans">
                        Artisans
                    </Link>

                    <Link to="/about">
                        About
                    </Link>

                    <Link to="/contact">
                        Contact
                    </Link>


                    {/* SEARCH */}

                    <Link
                        to="/search"
                        className="searchNavBtn"
                    >
                        
                        <span>Search</span>
                    </Link>

                </div>

            </div>



            {/* ================= SIDE MENU ================= */}

            <div
                className={
                    menuOpen
                        ? "sideMenu active"
                        : "sideMenu"
                }
            >

                {/* CLOSE BUTTON */}

                <div className="closeBtn">

                    <FaTimes
                        onClick={closeMenu}
                    />

                </div>


                {/* SEARCH */}

                <Link
                    to="/search"
                    onClick={closeMenu}
                >
                    🔍 Search
                </Link>


                {/* HOME */}

                <Link
                    to="/"
                    onClick={closeMenu}
                >
                    🏠 Home
                </Link>


                {/* CATEGORIES */}

                <Link
                    to="/categories"
                    onClick={closeMenu}
                >
                    📂 Categories
                </Link>


                {/* NEW ARRIVALS */}

                <Link
                    to="/new-arrivals"
                    onClick={closeMenu}
                >
                    ⭐ New Arrivals
                </Link>


                {/* BEST SELLERS */}

                <Link
                    to="/best-sellers"
                    onClick={closeMenu}
                >
                    🔥 Best Sellers
                </Link>


                {/* ARTISANS */}

                <Link
                    to="/artisans"
                    onClick={closeMenu}
                >
                    👨‍🎨 Artisans
                </Link>


                {/* ABOUT */}

                <Link
                    to="/about"
                    onClick={closeMenu}
                >
                    ℹ About
                </Link>


                {/* CONTACT */}

                <Link
                    to="/contact"
                    onClick={closeMenu}
                >
                    📞 Contact
                </Link>

            </div>

        </>
    );
}