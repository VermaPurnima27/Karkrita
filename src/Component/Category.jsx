import React from "react";
import "./Category.css";

import bamboo_lamp from "./image/bamboo_lamp.jpg";
import wall_hanging from "./image/bamboo_lamp.jpg";
import jaipuri_wall_art from "./image/bamboo_lamp.jpg";
import deer_wall_decor from "./image/bamboo_lamp.jpg";

// Apni baaki images yaha import karo
// import necklace from "./image/necklace.jpg";
// import earrings from "./image/earrings.jpg";
// import suit from "./image/suit.jpg";


function Category() {

  // ================= JEWELLERY =================

  const jewelleryProducts = [
    {
      id: "j1",
      name: "Traditional Necklace",
      price: 1200,
      image: bamboo_lamp,
      category: "Jewellery",
      description: "Beautiful handmade traditional jewellery."
    },
    {
      id: "j2",
      name: "Handmade Earrings",
      price: 500,
      image: wall_hanging,
      category: "Jewellery",
      description: "Beautiful handmade traditional earrings."
    },
    {
      id: "j3",
      name: "Traditional Bangles",
      price: 700,
      image: jaipuri_wall_art,
      category: "Jewellery",
      description: "Elegant traditional handmade bangles."
    },
    {
      id: "j4",
      name: "Oxidised Necklace",
      price: 900,
      image: deer_wall_decor,
      category: "Jewellery",
      description: "Beautiful oxidised traditional necklace."
    },
    {
      id: "j5",
      name: "Handmade Ring",
      price: 350,
      image: bamboo_lamp,
      category: "Jewellery",
      description: "Elegant handmade traditional ring."
    },
    {
      id: "j6",
      name: "Brass Earrings",
      price: 650,
      image: wall_hanging,
      category: "Jewellery",
      description: "Traditional brass handmade earrings."
    },
    {
      id: "j7",
      name: "Crafted Bracelet",
      price: 550,
      image: jaipuri_wall_art,
      category: "Jewellery",
      description: "Beautiful handcrafted bracelet."
    },
    {
      id: "j8",
      name: "Heritage Jewellery Set",
      price: 1500,
      image: deer_wall_decor,
      category: "Jewellery",
      description: "Beautiful traditional jewellery set."
    }
  ];


  // ================= HOME DECOR =================

  const decorProducts = [
    {
      id: "d1",
      name: "Bamboo Lamp",
      price: 400,
      image: bamboo_lamp,
      category: "Home Decor",
      description: "Beautiful handmade traditional home decor product."
    },
    {
      id: "d2",
      name: "Wall Hanging",
      price: 210,
      image: wall_hanging,
      category: "Home Decor",
      description: "Beautiful handmade wall decoration."
    },
    {
      id: "d3",
      name: "Jaipuri Wall Art",
      price: 500,
      image: jaipuri_wall_art,
      category: "Home Decor",
      description: "Traditional Jaipuri artwork for your home."
    },
    {
      id: "d4",
      name: "Deer Wall Decor",
      price: 600,
      image: deer_wall_decor,
      category: "Home Decor",
      description: "Beautiful traditional handmade wall decor."
    },
    {
      id: "d5",
      name: "Handmade Vase",
      price: 450,
      image: bamboo_lamp,
      category: "Home Decor",
      description: "Beautiful handmade decorative vase."
    },
    {
      id: "d6",
      name: "Decorative Basket",
      price: 350,
      image: wall_hanging,
      category: "Home Decor",
      description: "Traditional handmade decorative basket."
    },
    {
      id: "d7",
      name: "Craft Wall Plate",
      price: 550,
      image: jaipuri_wall_art,
      category: "Home Decor",
      description: "Beautiful handcrafted wall plate."
    },
    {
      id: "d8",
      name: "Traditional Showpiece",
      price: 750,
      image: deer_wall_decor,
      category: "Home Decor",
      description: "Beautiful traditional handmade showpiece."
    }
  ];


  // ================= SUITS =================

  const suitProducts = [
    {
      id: "s1",
      name: "Chanderi Suit",
      price: 1800,
      image: bamboo_lamp,
      category: "Suits",
      description: "Beautiful traditional Chanderi suit."
    },
    {
      id: "s2",
      name: "Banarasi Suit",
      price: 2200,
      image: wall_hanging,
      category: "Suits",
      description: "Elegant traditional Banarasi suit."
    },
    {
      id: "s3",
      name: "Cotton Handloom Suit",
      price: 1400,
      image: jaipuri_wall_art,
      category: "Suits",
      description: "Comfortable handmade cotton suit."
    },
    {
      id: "s4",
      name: "Printed Ethnic Suit",
      price: 1300,
      image: deer_wall_decor,
      category: "Suits",
      description: "Beautiful ethnic printed suit."
    },
    {
      id: "s5",
      name: "Jaipuri Suit",
      price: 1600,
      image: bamboo_lamp,
      category: "Suits",
      description: "Traditional Jaipuri handmade suit."
    },
    {
      id: "s6",
      name: "Hand Block Suit",
      price: 1900,
      image: wall_hanging,
      category: "Suits",
      description: "Beautiful hand block printed suit."
    },
    {
      id: "s7",
      name: "Festive Suit",
      price: 2500,
      image: jaipuri_wall_art,
      category: "Suits",
      description: "Elegant festive traditional suit."
    },
    {
      id: "s8",
      name: "Designer Ethnic Suit",
      price: 2800,
      image: deer_wall_decor,
      category: "Suits",
      description: "Beautiful designer ethnic suit."
    }
  ];


  // ================= PRODUCT SECTION =================

  const ProductSection = ({ title, products }) => {

    return (
      <section className="category-section">

        <div className="section-heading">
          <h2>{title}</h2>
        </div>


        <div className="products-con">

          {products.map((product) => (

            <div className="product-card" key={product.id}>

              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>


              <div className="product-information">

                <h3 className="product-title">
                  {product.name}
                </h3>

                <p className="product-prize">
                  {product.price} Rs.
                </p>

                <button className="shop-btn">
                  Shop Now
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>
    );
  };


  return (

    <div className="category-page">

      {/* Jewellery */}
      <ProductSection
        title="Jewellery Collection"
        products={jewelleryProducts}
      />


      {/* Home Decor */}
      <ProductSection
        title="Home Decor Collection"
        products={decorProducts}
      />


      {/* Suits */}
      <ProductSection
        title="Suit Collection"
        products={suitProducts}
      />

    </div>

  );
}

export default Category;