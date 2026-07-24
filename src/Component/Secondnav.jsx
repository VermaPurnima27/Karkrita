import { useState } from "react";
import "./Secondnav.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Secondnav() {

  
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="secondNavbar">

        <div className="menuIcon" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </div>

        <div className="menuLinks">
          <a href="/">Home</a>
          <a href="/">Categories</a>
          <a href="/">New Arrivals</a>
          <a href="/">Best Sellers</a>
          <a href="/">Artisans</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </div>

      </div>

      <div className={menuOpen ? "sideMenu active" : "sideMenu"}>

        <div className="closeBtn">

          <FaTimes onClick={() => setMenuOpen(false)} />

        </div>

        <a href="/">🏠 Home</a>

        <a href="/">📂 Categories</a>

        <a href="/">⭐ New Arrivals</a>

        <a href="/">🔥 Best Sellers</a>

        <a href="/">👨‍🎨 Artisans</a>

        <a href="/">ℹ About</a>

        <a href="/">📞 Contact</a>

      </div>
    </>
  );
}



