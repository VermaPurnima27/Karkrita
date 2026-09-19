
import React from "react";
import "./About.css";

import karkritaImage from "./image/img40.jpg";
import pphoto from "./image/pphoto.jpeg"
import img35 from "./image/img35.jpg"

const About = () => {
  return (
    <div className="about-page">

      {/* ================= HERO SECTION ================= */}
      <section className="about-hero">

        {/* Top Heading */}
        <div className="about-hero-heading">
          <h1>WELCOME TO KARKRITA</h1>

          <div className="star-line">
            <span>✦</span>
            <span>───</span>
            <span>✦</span>
            <span>───</span>
            <span>✦</span>
          </div>
        </div>

        {/* Story + Image */}
        <div className="about-story">

          {/* Left Content */}
          <div className="story-content">
            <p className="small-heading">KARKRITA</p>

            <h2>Story Behind the Logo Name</h2>

            <div className="story-line"></div>

            <p><b>"kar" means 'hath' and krita means 'krit' , 'karya' ya 'kaam' that both words define "hatho se kiya gya kaam ya kriti".</b></p>
            <p>
              Karkrita is a name inspired by the beauty of Indian craftsmanship,
              culture, and creativity. It represents the hands, traditions,
              and stories behind every handmade creation.
            </p>

            <p>
              The idea behind Karkrita is to bring traditional Indian art and
              craftsmanship into a modern world, where culture meets style
              and every product has a story to tell.
            </p>

            <p className="quote">
              “Old traditions, new trends — keeping our culture beautifully
              alive.”
            </p>
          </div>

          {/* Right Image */}
          <div className="story-image">
            <img src={karkritaImage} alt="Karkrita" />
          </div>

        </div>

      </section>

      {/* ================= FOUNDER SECTION ================= */}
         <section className="founder-section">

  {/* LEFT - FOUNDER IMAGE */}
  <div className="founder-left">

    <div className="founder-image-box">
      <img src={pphoto} alt="Er. Purnima Verma" />
    </div>

    <p className="founder-title">
      Founder and Developer of Karkrita
    </p>

    <h2 className="founder-name">
      Er. Purnima Verma
    </h2>

  </div>


  {/* RIGHT - ABOUT ME */}
  <div className="founder-content">

    <p className="founder-small-heading">
      ABOUT ME
    </p>

    <h2>
      The Person Behind Karkrita
    </h2>

    <div className="founder-line"></div>

    <p>
      Hi, I'm Purnima Verma, the founder and developer of Karkrita.
      I am a Computer Science engineering student with a passion for
      technology, creativity, and India's rich cultural heritage.
    </p>

    <p>
      The idea behind Karkrita came from a simple thought — why should
      the beautiful traditional art and craftsmanship of our villages
      and small towns remain unseen by the modern world?
    </p>

    <p>
      Through Karkrita, I want to bring technology and tradition
      together by creating a platform where local artisans and their
      beautiful handmade creations can reach a wider audience.
    </p>

    <p>
      Karkrita is not just a website for me. It is an attempt to
      celebrate our culture, support local craftsmanship, and give
      traditional art a meaningful place in today's modern world.
    </p>

  </div>

</section>



{/* ================= KARKRITA SECTION ================= */}

<section className="karkrita-section">

  {/* LEFT CONTENT */}
  <div className="karkrita-content">

    <p className="karkrita-small-heading">
      OUR STORY
    </p>

    <h2>
      What is Karkrita?
    </h2>

    <div className="karkrita-line"></div>

    <p>
      Karkrita is a platform that brings together the beauty of
      Indian traditional art and the talent of local artisans.
      We want to make our beautiful culture easy to discover,
      appreciate, and shop.
    </p>

    <p>
      Here, you can find handmade and handcrafted products such as
      pottery, Dhokra, jewellery, iron craft, home decor, sarees,
      suits and more. Every product carries the beauty of our
      traditions and the hard work of skilled artisans.
    </p>

    <p>
      Our goal is simple — to give local artisans and their
      beautiful crafts the recognition they deserve, while
      making it easy for people to discover something unique,
      meaningful, and full of culture.
    </p>


    {/* FEATURES */}

    <div className="karkrita-features">

      <div className="karkrita-feature">
        <div className="feature-icon">♡</div>
        <h3>Support Local Artisans</h3>
        <p>
          Real people, real stories, real talent.
        </p>
      </div>


      <div className="karkrita-feature">
        <div className="feature-icon">♢</div>
        <h3>Authentic Handcrafted Products</h3>
        <p>
          Traditional crafts, made with love.
        </p>
      </div>


      <div className="karkrita-feature">
        <div className="feature-icon">✿</div>
        <h3>Wide Range of Categories</h3>
        <p>
          Jewellery, decor, sarees, suits and more.
        </p>
      </div>


      <div className="karkrita-feature">
        <div className="feature-icon">✓</div>
        <h3>Safe & Secure Shopping</h3>
        <p>
          Your trust means everything to us.
        </p>
      </div>


      <div className="karkrita-feature">
        <div className="feature-icon">♧</div>
        <h3>Free Shipping</h3>
        <p>
          On orders above ₹2000.
        </p>
      </div>


      <div className="karkrita-feature">
        <div className="feature-icon">↻</div>
        <h3>Easy Returns</h3>
        <p>
          Because your happiness matters.
        </p>
      </div>

    </div>

  </div>


  {/* RIGHT IMAGE */}

  <div className="karkrita-image-wrapper">

    <div className="karkrita-image-box">

      <img src={img35}
        alt="Indian Traditional Fashion"
      />

      <div className="tradition-text">
        <span>Turn Your</span>
        <strong>Tradition to <i>Trend</i></strong>
      </div>

    </div>

  </div>

</section>

    </div>
  );
};

export default About;

