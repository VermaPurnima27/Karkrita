import React, { useState, useEffect } from "react";
import "./Wishlist.css";

import {
    FaHeart,
    FaShoppingCart,
    FaTrash
} from "react-icons/fa";

export default function Wishlist() {

    // ================= WISHLIST STATE =================

    const [wishlist, setWishlist] = useState([]);


    // ================= LOAD WISHLIST =================

    useEffect(() => {

        const savedWishlist =
            JSON.parse(localStorage.getItem("wishlist")) || [];

        setWishlist(savedWishlist);

    }, []);


    // ================= REMOVE PRODUCT =================

    function removeItem(id) {

        const updatedWishlist =
            wishlist.filter((item) => item.id !== id);

        setWishlist(updatedWishlist);

        localStorage.setItem(
            "wishlist",
            JSON.stringify(updatedWishlist)
        );
    }


    // ================= ADD TO CART =================

    function addToCart(item) {

        const cart =
            JSON.parse(localStorage.getItem("cart")) || [];

        const existingItem = cart.find(
            (cartItem) => cartItem.id === item.id
        );

        let updatedCart;

        if (existingItem) {

            updatedCart = cart.map((cartItem) =>
                cartItem.id === item.id
                    ? {
                        ...cartItem,
                        quantity:
                            (cartItem.quantity || 1) + 1
                    }
                    : cartItem
            );

        } else {

            updatedCart = [
                ...cart,
                {
                    ...item,
                    quantity: 1
                }
            ];
        }

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        );

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


            {/* ================= EMPTY WISHLIST ================= */}

            {wishlist.length === 0 ? (

                <div className="empty-wishlist">

                    <FaHeart />

                    <h2>
                        Your Wishlist is Empty
                    </h2>

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

                    {/* ================= TITLE ================= */}

                    <div className="wishlist-title">

                        <h2>
                            Your Wishlist
                        </h2>

                        <span>
                            {wishlist.length} Items
                        </span>

                    </div>


                    {/* ================= PRODUCTS ================= */}

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


                                    {/* REMOVE BUTTON */}

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


                                    {/* ADD TO CART */}

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