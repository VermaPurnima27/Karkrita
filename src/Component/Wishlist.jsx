import React, { useState } from "react";
import "./Wishlist.css";

import { FaHeart, FaShoppingCart, FaTrash } from "react-icons/fa";

export default function Wishlist() {

    const [wishlist, setWishlist] = useState([
        {
            id: 1,
            name: "Traditional Brass Camel",
            price: 1299,
            image: "/images/camel.jpg"
        },
        {
            id: 2,
            name: "Handmade Brass Bowl",
            price: 899,
            image: "/images/brass-bowl.jpg"
        },
        {
            id: 3,
            name: "Traditional Wooden Decor",
            price: 1499,
            image: "/images/wooden.jpg"
        }
    ]);


    // Remove product
    function removeItem(id) {
        setWishlist(
            wishlist.filter((item) => item.id !== id)
        );
    }


    // Add to cart
    function addToCart(item) {
        alert(`${item.name} added to cart`);
    }


    return (
        <div className="wishlist-page">

            {/* ================= HEADER ================= */}

            <div className="wishlist-header">

                <FaHeart className="wishlist-heart" />

                <h1>My Wishlist</h1>

                <p>
                    Your favourite handcrafted products
                </p>

            </div>


            {/* ================= WISHLIST ================= */}

            {wishlist.length === 0 ? (

                <div className="empty-wishlist">

                    <FaHeart />

                    <h2>Your Wishlist is Empty</h2>

                    <p>
                        Save your favourite products here
                        and shop them whenever you want.
                    </p>

                    <button>
                        Continue Shopping
                    </button>

                </div>

            ) : (

                <div className="wishlist-container">

                    <div className="wishlist-title">

                        <h2>
                            Your Wishlist
                        </h2>

                        <span>
                            {wishlist.length} Items
                        </span>

                    </div>


                    <div className="wishlist-grid">

                        {wishlist.map((item) => (

                            <div
                                className="wishlist-card"
                                key={item.id}
                            >

                                {/* PRODUCT IMAGE */}

                                <div className="wishlist-image">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                    />

                                    <button
                                        className="remove-btn"
                                        onClick={() =>
                                            removeItem(item.id)
                                        }
                                    >
                                        <FaTrash />
                                    </button>

                                </div>


                                {/* PRODUCT DETAILS */}

                                <div className="wishlist-details">

                                    <h3>
                                        {item.name}
                                    </h3>

                                    <p className="wishlist-price">
                                        ₹{item.price}
                                    </p>


                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            addToCart(item)
                                        }
                                    >

                                        <FaShoppingCart />

                                        Add to Cart

                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            )}

        </div>
    );
}