
import React from "react";
import { useNavigate } from "react-router-dom";
import "./NewArrival.css";

// Images
import bamboo_lamp from "./image/bamboo_lamp.jpg";
import wall_hanging from "./image/bamboo_lamp.jpg";
import jaipuri_wall_art from "./image/bamboo_lamp.jpg";
import deer_wall_decor from "./image/bamboo_lamp.jpg";

import brass_camel from "./image/bamboo_lamp.jpg";
import brass_bowl from "./image/bamboo_lamp.jpg";

const NewArrival = () => {

  const navigate = useNavigate();

  const handleShopNow = (product) => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    navigate("/product-details");
  };

  const homeDecor = [
    {
      name: "Bamboo Lamp",
      price: 400,
      image: bamboo_lamp,
      category: "Home Decor",
      description: "Beautiful handmade traditional home decor product."
    },
    {
      name: "Bamboo Wall Hanging",
      price: 550,
      image: wall_hanging,
      category: "Home Decor",
      description: "Elegant handmade wall hanging for your home."
    },
    {
      name: "Jaipuri Wall Art",
      price: 650,
      image: jaipuri_wall_art,
      category: "Home Decor",
      description: "Traditional Indian artwork with beautiful detailing."
    },
    {
      name: "Deer Wall Decor",
      price: 750,
      image: deer_wall_decor,
      category: "Home Decor",
      description: "Beautiful traditional decorative piece for your wall."
    }
  ];

  const brassCollection = [
    {
      name: "Traditional Brass Camel",
      price: 1299,
      image: brass_camel,
      category: "Brass Craft",
      description: "Handcrafted traditional brass camel decoration."
    },
    {
      name: "Handmade Brass Bowl",
      price: 899,
      image: brass_bowl,
      category: "Brass Craft",
      description: "Beautiful handmade brass bowl with traditional design."
    }
  ];

  return (
    <div className="new-arrival-page">

      {/* ================= PAGE HEADING ================= */}

      <div className="new-arrival-heading">
        <h1>New Arrivals</h1>
        <p>Discover the latest handmade treasures from our artisans</p>
      </div>


      {/* ================= HOME DECOR ================= */}

      <section className="new-section">

        <div className="new-section-heading">
          <span></span>
          <h2>Fresh Home Decor</h2>
          <span></span>
        </div>

        <div className="new-products-con">

          {homeDecor.map((product, index) => (

            <div className="new-product-card" key={index}>

              <div className="new-product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="new-product-information">

                <h3 className="new-product-title">
                  {product.name}
                </h3>

                <p className="new-product-price">
                  ₹{product.price}
                </p>

                <button
                  className="new-shop-btn"
                  onClick={() => handleShopNow(product)}
                >
                  Shop Now
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= BRASS COLLECTION ================= */}

      <section className="new-section">

        <div className="new-section-heading">
          <span></span>
          <h2>Latest Brass Collection</h2>
          <span></span>
        </div>

        <div className="new-products-con">

          {brassCollection.map((product, index) => (

            <div className="new-product-card" key={index}>

              <div className="new-product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="new-product-information">

                <h3 className="new-product-title">
                  {product.name}
                </h3>

                <p className="new-product-price">
                  ₹{product.price}
                </p>

                <button
                  className="new-shop-btn"
                  onClick={() => handleShopNow(product)}
                >
                  Shop Now
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
};

export default NewArrival;

