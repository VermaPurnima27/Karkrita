import React, { useState } from "react";
import "./Contact.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for contacting Karkrita! We will get back to you soon.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="karkrita-contact-page">

      {/* ================= HERO SECTION ================= */}
      <section className="karkrita-contact-hero">
        <div className="karkrita-contact-hero-content">

          <p className="karkrita-contact-small-title">
            GET IN TOUCH
          </p>

          <h1>CONTACT KARKRITA</h1>

          <div className="karkrita-contact-stars">
            <span>✦</span>
            <span>✦</span>
            <span>✦</span>
          </div>

          <p className="karkrita-contact-hero-text">
            Have a question, an idea, or simply want to say hello?
            <br />
            We would love to hear from you.
          </p>

        </div>
      </section>


      {/* ================= INTRO SECTION ================= */}
      <section className="karkrita-contact-intro">

        <div className="karkrita-contact-intro-left">

          <p className="karkrita-section-label">
            LET'S CONNECT
          </p>

          <h2>
            Your story matters
            <br />
            to us.
          </h2>

          <p className="karkrita-intro-text">
            Karkrita is more than a marketplace. It is a place where
            traditional art, talented artisans, and modern customers
            come together.
          </p>

          <p className="karkrita-intro-text">
            Whether you are a customer looking for something special,
            an artisan who wants to showcase your craft, or simply
            someone who loves Indian culture, feel free to reach out.
          </p>

          <div className="karkrita-intro-line"></div>

          {/* UNIQUE CLASS - no conflict with About page */}
          <p className="karkrita-tradition-text">
            Turn your tradition to trend.
          </p>

        </div>


        {/* ================= CONTACT INFO ================= */}
        <div className="karkrita-contact-info">

          {/* EMAIL */}
          <div className="karkrita-contact-info-card">

            <div className="karkrita-contact-icon">
              <FaEnvelope />
            </div>

            <div>
              <h3>Email Us</h3>
              <p>hello@karkrita.com</p>
              <span>
                We usually reply within 24 hours.
              </span>
            </div>

          </div>


          {/* PHONE */}
          <div className="karkrita-contact-info-card">

            <div className="karkrita-contact-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <h3>Call Us</h3>
              <p>+91 98765 43210</p>
              <span>
                Mon - Sat, 10 AM - 6 PM
              </span>
            </div>

          </div>


          {/* LOCATION */}
          <div className="karkrita-contact-info-card">

            <div className="karkrita-contact-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3>Our Location</h3>
              <p>Chhattisgarh, India</p>
              <span>
                Celebrating India's local craftsmanship.
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= FORM SECTION ================= */}
      <section className="karkrita-contact-form-section">

        <div className="karkrita-form-heading">

          <p className="karkrita-section-label">
            SEND US A MESSAGE
          </p>

          <h2>
            Let's start a
            <br />
            conversation.
          </h2>

          <p className="karkrita-form-description">
            Fill out the form and our team will get back to you
            as soon as possible.
          </p>

        </div>


        <form
          className="karkrita-contact-form"
          onSubmit={handleSubmit}
        >

          <div className="karkrita-form-row">

            {/* NAME */}
            <div className="karkrita-form-group">

              <label>Your Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>


            {/* EMAIL */}
            <div className="karkrita-form-group">

              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

          </div>


          {/* SUBJECT */}
          <div className="karkrita-form-group">

            <label>Subject</label>

            <input
              type="text"
              name="subject"
              placeholder="What would you like to talk about?"
              value={formData.subject}
              onChange={handleChange}
              required
            />

          </div>


          {/* MESSAGE */}
          <div className="karkrita-form-group">

            <label>Your Message</label>

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

          </div>


          {/* BUTTON */}
          <button
            type="submit"
            className="karkrita-contact-submit"
          >
            SEND MESSAGE
            <span>→</span>
          </button>

        </form>

      </section>


      {/* ================= SOCIAL SECTION ================= */}
      <section className="karkrita-contact-social">

        <p className="karkrita-section-label">
          FOLLOW KARKRITA
        </p>

        <h2>
          Stay connected with us.
        </h2>

        <p className="karkrita-social-description">
          Discover beautiful crafts, talented artisans and stories
          from India's rich cultural heritage.
        </p>

        <div className="karkrita-social-icons">

          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>

          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>

          <a href="#" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>

        </div>

      </section>


      {/* ================= BOTTOM QUOTE ================= */}
      <section className="karkrita-contact-quote">

        <div>

          <span>✦</span>

          <h2>
            Be classy.
            <br />
            Be culture.
            <br />
            Be unique.
          </h2>

          <p>KARKRITA</p>

        </div>

      </section>

    </div>
  );
};

export default Contact;