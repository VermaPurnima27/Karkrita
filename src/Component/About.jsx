import React from "react";
import "./About.css";

import pphoto from "./image/pphoto.jpeg";

const About = () => {
  return (
    <div className="about-page">

      {/* ================= HERO SECTION ================= */}

      <section className="about-hero">

        <div className="about-hero-content">

          <p className="about-label">WELCOME TO KARKRITA</p>

          <h1>
            Where Heritage
            <br />
            Finds a New Life
          </h1>

          <p className="about-hero-text">
            A journey to celebrate India's traditional art, artisans,
            craftsmanship and cultural heritage in a modern world.
          </p>

        </div>

      </section>


      {/* ================= STORY BEHIND NAME ================= */}

      <section className="name-story-section">

        <div className="name-story-decoration">
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>

        <div className="name-story-content">

          <p className="section-label">
            THE STORY BEHIND THE NAME
          </p>

          <h2>
            Why <span>Karkrita?</span>
          </h2>

          <div className="name-line"></div>

          <p>
            The name <strong>Karkrita</strong> represents the spirit of
            creation, craftsmanship and the skilled hands behind every
            beautiful handmade creation.
            Every handmade product has a story behind it. A story of an
            artisan, a family, a village and a tradition passed down
            through generations.
            For us, Karkrita is not simply a brand name. It represents
            <strong> creation, culture, craftsmanship and heritage.</strong>
          </p>

          <div className="name-highlight">
            <span>Hands create.</span>
            <span>Heritage speaks.</span>
            <span>Stories live on.</span>
          </div>

        </div>

      </section>


      {/* ================= FOUNDER SECTION ================= */}

      <section className="founder-section">

        <div className="founder-image-container">

          <div className="founder-image-frame">

            <img
              src={pphoto}
              alt="Purnima Verma - Founder and Developer of Karkrita"
            />

          </div>

          <div className="founder-badge">
            FOUNDER
            <br />
            & DEVELOPER
          </div>

        </div>


        <div className="founder-content">

          <p className="section-label">
            THE PERSON BEHIND KARKRITA
          </p>

          <h2>
            Meet the <span>Founder</span>
          </h2>

          <h3>Purnima Verma</h3>

          <p>
            Hi, I'm <strong>Purnima Verma</strong>, the founder and
            developer of Karkrita.
          </p>

          <p>
            I am a Computer Science engineering student with an interest
            in technology, creativity and India's rich cultural heritage.
            The idea behind Karkrita started with a simple thought:
          </p>

          <blockquote>
            "Why should the beautiful traditional art of our villages
            and small towns remain unseen by the modern world?"
          </blockquote>

          <p>
            India is home to countless talented artisans who create
            beautiful jewellery, sarees, pottery, metal crafts, wooden
            art, bamboo products, paintings, décor, toys and many other
            traditional creations.
            I wanted to build a platform where these creations could
            reach people beyond their local communities.
          </p>

          <p>
            Karkrita is my attempt to bring
            <strong> technology and tradition together.</strong>
          </p>

          <div className="founder-signature">
            — Purnima Verma
          </div>

        </div>

      </section>


      {/* ================= STORY SECTION ================= */}

      <section className="our-story-section">

        <div className="story-heading">

          <p className="section-label">
            THE BEGINNING
          </p>

          <h2>
            The Story Behind <span>Karkrita</span>
          </h2>

        </div>


        <div className="story-grid">

          <div className="story-card">

            <div className="story-number">01</div>

            <h3>A Rich Heritage</h3>

            <p>
              India has a remarkable tradition of handmade art and
              craftsmanship. From textiles and jewellery to pottery,
              metalwork, wooden art, bamboo products and décor, every
              region has something unique to offer.
            </p>

          </div>


          <div className="story-card">

            <div className="story-number">02</div>

            <h3>A Changing World</h3>

            <p>
              Many traditional creations are becoming less visible in
              modern life. At the same time, talented artisans in
              villages and small towns often do not have access to a
              wider digital marketplace.
            </p>

          </div>


          <div className="story-card">

            <div className="story-number">03</div>

            <h3>A New Beginning</h3>

            <p>
              Karkrita was created to connect these traditional
              creations and the people behind them with a wider
              audience through technology.
            </p>

          </div>

        </div>

      </section>


      {/* ================= VISION SECTION ================= */}

      <section className="vision-section">

        <div className="vision-content">

          <p className="section-label">
            OUR VISION
          </p>

          <h2>
            Bringing Tradition
            <br />
            <span>Into Tomorrow</span>
          </h2>

          <p>
            We don't believe that tradition belongs only in the past.
            We believe that traditional art can become part of the
            future.
          </p>

          <p>
            Our vision is to introduce India's cultural heritage to the
            new generation in a way that feels beautiful, relevant and
            inspiring.
          </p>

          <p>
            We want people to discover the stories behind handmade
            products and appreciate the skill, patience and knowledge
            that goes into creating them.
          </p>

        </div>


        <div className="vision-quote">

          <div className="quote-symbol">“</div>

          <h3>
            Tradition does not have to stay in the past.
          </h3>

          <p>
            It can become tomorrow's trend.
          </p>

        </div>

      </section>


      {/* ================= MISSION SECTION ================= */}

      <section className="mission-section">

        <div className="mission-heading">

          <p className="section-label">
            OUR MISSION
          </p>

          <h2>
            More Than a <span>Marketplace</span>
          </h2>

          <p>
            Karkrita is an effort to bring artisans, culture and
            technology together.
          </p>

        </div>


        <div className="mission-grid">

          <div className="mission-card">

            <div className="mission-icon">✦</div>

            <h3>Celebrate Artisans</h3>

            <p>
              Give skilled artisans a platform where their work and
              stories can reach a wider audience.
            </p>

          </div>


          <div className="mission-card">

            <div className="mission-icon">◈</div>

            <h3>Preserve Heritage</h3>

            <p>
              Help traditional art and craftsmanship remain visible
              and connected with future generations.
            </p>

          </div>


          <div className="mission-card">

            <div className="mission-icon">✧</div>

            <h3>Connect With the World</h3>

            <p>
              Create opportunities for Indian craftsmanship to be
              discovered beyond villages, towns and communities.
            </p>

          </div>


          <div className="mission-card">

            <div className="mission-icon">◇</div>

            <h3>Inspire the New Generation</h3>

            <p>
              Show that traditional does not mean outdated and that
              heritage can have a place in modern lifestyles.
            </p>

          </div>

        </div>

      </section>


      {/* ================= DREAM SECTION ================= */}

      <section className="dream-section">

        <div className="dream-content">

          <p className="section-label">
            OUR DREAM
          </p>

          <h2>
            From Indian Hands
            <br />
            <span>To the World</span>
          </h2>

          <p>
            We dream of a future where a person anywhere in the world
            can discover a beautiful handmade creation from a small
            Indian village and know the story behind it.
          </p>

          <p>
            A future where artisans can build their identity, where
            traditional crafts receive appreciation and where India's
            cultural richness continues to inspire the world.
          </p>

          <div className="dream-line">
            <span>Discover</span>
            <span>•</span>
            <span>Support</span>
            <span>•</span>
            <span>Preserve</span>
          </div>

        </div>

      </section>


      {/* ================= FINAL SECTION ================= */}

      <section className="about-final">

        <p className="section-label">
          FROM OUR HEART
        </p>

        <h2>
          My Culture.
          <br />
          My People.
          <br />
          <span>Their Art.</span>
        </h2>

        <p>
          Karkrita is our small step towards giving India's traditional
          craftsmanship a new direction and a new place in the modern
          world.
        </p>

        <div className="final-tagline">
          Karkrita — Where Heritage Finds a New Life.
        </div>

      </section>

    </div>
  );
};

export default About;