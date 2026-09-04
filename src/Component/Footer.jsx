import React from "react";
import "./Footer.css";
import karkriyaa from "../Component/image/karkriyaa.png";
import logo2 from "../Component/image/logo2.png";

const Footer = () => {
  return (
    <footer className="footer">

    
      {/* ================= MAIN FOOTER ================= */}
      <div className="main-footer">

        {/* ---------- ABOUT ---------- */}
        <div className="footer-about">

          <img
            src={karkriyaa}
            alt="Karkrita"
            className="footer-logo"
          />

          <p>
            <strong><i>Karkrita:</i></strong>
            <br />

            Preserving heritage through handcrafted excellence,
            blending tradition with contemporary design,
            empowering artisans, and celebrating Indian culture globally.
          </p>

          {/* SOCIAL ICONS */}
          <div className="social-icons">

            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="#" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a href="#" aria-label="Pinterest">
              <i className="fa-brands fa-pinterest-p"></i>
            </a>

            <a href="#" aria-label="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>

          </div>


          {/* COUNTRY */}
          <select className="country-select">
            <option>India (IN)</option>
            <option>United States</option>
            <option>United Kingdom</option>
          </select>


          {/* COPYRIGHT */}
          <p className="copyright">
            © 2026 Karkrita, All Rights Reserved.
          </p>

        </div>


        {/* ---------- USEFUL LINKS ---------- */}
        <div className="footer-links">

          <h3>USEFUL LINKS</h3>

          <a href="/">Home</a>
          <a href="/category">Category</a>
          <a href="/products">Products</a>
          <a href="/custom-work">Custom Work</a>
          <a href="/bulk-order">Bulk Order</a>
          <a href="/about">About Us</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact Us</a>

        </div>


        {/* ---------- CATALOGUE ---------- */}
        <div className="footer-links">

          <h3>CATALOGUE</h3>

          <a href="#">Bamboo Craft</a>
          <a href="#">Customary Products</a>
          <a href="#">Desk Accessories</a>
          <a href="#">Fashion Accessories</a>
          <a href="#">Home Decor</a>
          <a href="#">Kitchen & Dining</a>
          <a href="#">Tailored Work</a>

        </div>


        {/* ---------- NEWSLETTER ---------- */}
        <div className="newsletter">

          <h3>
            SUBSCRIBE TO OUR NEWSLETTER TO
            <br />
            RECEIVE UPDATES AND OFFERS
          </h3>


          <div className="email-box">

            <input
              type="email"
              placeholder="Your E-Mail"
            />

            <button>
              →
            </button>

          </div>


          {/* ARTISAN IMAGE */}
          <img
            src={logo2}
            alt="Indian Artisans"
            className="artisan-img"
          />


          {/* SOCIAL ICONS */}
          <div className="social-icons newsletter-social">

            <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="#">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a href="#">
              <i className="fa-brands fa-pinterest-p"></i>
            </a>

            <a href="#">
              <i className="fa-brands fa-youtube"></i>
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;