import React from "react";
import "./CategorySection.css";

import iron from "../image/iron.jpg";
import saree from "../image/saree.jpg";
import dhokra from "../image/dhokra.jpg";
import terracotta from "../image/terracotta.jpg";
import bamboo from "../image/bamboo.jpg";
import painting from "../image/painting.jpg";

export default function CategorySection() {

  const categories = [
    {
      id: 1,
      name: "Iron Craft",
      image: iron,
    },
    {
      id: 2,
      name: "Banarasi Saree",
      image: saree,
    },
    {
      id: 3,
      name: "Dhokra Art",
      image: dhokra,
    },
    {
      id: 4,
      name: "Terracotta",
      image: terracotta,
    },
    {
      id: 5,
      name: "Bamboo Craft",
      image: bamboo,
    },
    {
      id: 6,
      name: "Madhubani Painting",
      image: painting,
    },
  ];

  return (
    <section className="categorySection">

      <h2>Shop by Category</h2>

      <div className="categoryContainer">

        {categories.map((item) => (
          <div className="categoryCard" key={item.id}>

            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

          </div>
        ))}

      </div>

    </section>
  );
}