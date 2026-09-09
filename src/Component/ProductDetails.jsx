import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {

  const navigate = useNavigate();

  const product =
    JSON.parse(localStorage.getItem("selectedProduct"));

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>

        <button onClick={() => navigate("/")}>
          Go to Home
        </button>
      </div>
    );
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {

    if (quantity > 1) {
      setQuantity(quantity - 1);
    }

  };

  const addToCart = () => {

    let cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(
      item => item.name === product.name
    );

    if (existingProduct) {

      existingProduct.quantity += quantity;

    } else {

      cart.push({
        ...product,
        quantity: quantity
      });

    }

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert("Product added to cart!");

  };

  const buyNow = () => {

    addToCart();

    navigate("/cart");

  };

  return (

    <div className="product-details">

      {/* Product Image */}

      <div className="details-image">

        <img
          src={product.image}
          alt={product.name}
        />

      </div>


      {/* Product Information */}

      <div className="details-info">

        <p className="details-category">
          {product.category}
        </p>

        <h1>
          {product.name}
        </h1>

        <h2>
          ${product.price}
        </h2>

        <p className="details-description">
          {product.description}
        </p>


        {/* Quantity */}

        <div className="quantity-box">

          <button onClick={decreaseQuantity}>
            -
          </button>

          <span>
            {quantity}
          </span>

          <button onClick={increaseQuantity}>
            +
          </button>

        </div>


        {/* Buttons */}

        <div className="details-buttons">

          <button
            className="add-cart-btn"
            onClick={addToCart}
          >
            Add to Cart
          </button>

          <button
            className="buy-now-btn"
            onClick={buyNow}
          >
            Buy Now
          </button>

        </div>

      </div>

    </div>

  );
}

export default ProductDetails;