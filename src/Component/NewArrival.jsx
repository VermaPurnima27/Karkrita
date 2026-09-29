import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewArrival.css";

const NewArrival = () => {

  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================= FETCH PRODUCTS =================

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const response = await fetch(
          "http://localhost:5000/api/products"
        );

        const data = await response.json();

        if (response.ok) {

          // Only New Arrival products
          const newProducts = data.products.filter(
            (product) => product.isNewArrival === true
          );

          setProducts(newProducts);

        } else {

          console.error("Failed to fetch products");

        }

      } catch (error) {

        console.error("Fetch Products Error:", error);

      } finally {

        setLoading(false);

      }

    };

    fetchProducts();

  }, []);


  // ================= SHOP NOW =================

  const handleShopNow = (product) => {

    localStorage.setItem(
      "selectedProduct",
      JSON.stringify(product)
    );

    navigate("/product");

  };


  // ================= LOADING =================

  if (loading) {

    return (
      <div className="new-arrival-page">
        <h2>Loading products...</h2>
      </div>
    );

  }


  return (

    <div className="new-arrival-page">

      {/* ================= PAGE HEADING ================= */}

      <div className="new-arrival-heading">

        <h1>New Arrivals</h1>

        <p>
          Discover the latest handmade treasures from our artisans
        </p>

      </div>


      {/* ================= PRODUCTS ================= */}

      <section className="new-section">

        <div className="new-section-heading">

          <span></span>

          <h2>Latest Products</h2>

          <span></span>

        </div>


        <div className="new-products-con">

          {products.length > 0 ? (

            products.map((product) => (

              <div
                className="new-product-card"
                key={product._id}
              >

                <div className="new-product-image">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

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

            ))

          ) : (

            <p>No new arrival products available.</p>

          )}

        </div>

      </section>

    </div>

  );

};

export default NewArrival;