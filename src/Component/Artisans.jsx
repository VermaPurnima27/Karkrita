
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Artisans.css";

// Artisan Images
import artisan1 from "./image/bamboo_lamp.jpg";
import artisan2 from "./image/bamboo_lamp.jpg";
import artisan3 from "./image/bamboo_lamp.jpg";
import artisan4 from "./image/bamboo_lamp.jpg";
import artisan5 from "./image/bamboo_lamp.jpg";
import artisan6 from "./image/bamboo_lamp.jpg";

const Artisans = () => {

  const navigate = useNavigate();

  const artisans = [
    {
      name: "Ramesh Kumar",
      location: "Chhattisgarh",
      craft: "Bastar Iron Craft",
      image: artisan1,
      description:
        "Traditional handcrafted iron art made with skills passed down through generations."
    },
    {
      name: "Meena Devi",
      location: "Rajasthan",
      craft: "Handmade Wall Art",
      image: artisan2,
      description:
        "Beautiful traditional artwork inspired by the colors and culture of Rajasthan."
    },
    {
      name: "Suresh Lal",
      location: "Chhattisgarh",
      craft: "Dhokra Art",
      image: artisan3,
      description:
        "Authentic Dhokra artwork created using traditional tribal techniques."
    },
    {
      name: "Sunita Bai",
      location: "Madhya Pradesh",
      craft: "Handwoven Textiles",
      image: artisan4,
      description:
        "Elegant handwoven textiles celebrating India's rich weaving traditions."
    },
    {
      name: "Mohan Singh",
      location: "Uttar Pradesh",
      craft: "Brass Craft",
      image: artisan5,
      description:
        "Traditional brass products handcrafted with detailed artistic work."
    },
    {
      name: "Kavita Sharma",
      location: "Rajasthan",
      craft: "Traditional Jewellery",
      image: artisan6,
      description:
        "Unique handmade jewellery inspired by India's traditional designs."
    }
  ];



  return (
    <div className="artisans-page">

      {/* ================= PAGE HEADING ================= */}

      <div className="artisans-heading">
        <h1>Meet Our Artisans</h1>

        <p>
          Discover the talented hands and stories behind every handmade creation
        </p>
      </div>


      {/* ================= INTRO ================= */}

      <div className="artisans-intro">

        <h2>Crafted by Hands, Inspired by Culture</h2>

        <p>
          Every Karkrita product carries the creativity, tradition and
          dedication of skilled Indian artisans. Meet the makers who bring
          traditional craftsmanship into modern homes.
        </p>

      </div>


      {/* ================= ARTISANS ================= */}

      <div className="artisans-container">

        {artisans.map((artisan, index) => (

          <div className="artisan-card" key={index}>

            {/* Image */}

            <div className="artisan-image">
              <img
                src={artisan.image}
                alt={artisan.name}
              />
            </div>


            {/* Information */}

            <div className="artisan-information">

              <h3>{artisan.name}</h3>

              <p className="artisan-location">
                📍 {artisan.location}
              </p>

              <p className="artisan-craft">
                {artisan.craft}
              </p>

              <p className="artisan-description">
                {artisan.description}
              </p>

          

            </div>

          </div>

        ))}

      </div>


      {/* ================= BOTTOM MESSAGE ================= */}

      <div className="artisan-bottom">

        <h2>Support Handmade. Support Artisans.</h2>

        <p>
          When you choose handmade, you help preserve traditional skills
          and support the talented people behind every creation.
        </p>

      </div>

    </div>
  );
};

export default Artisans;
