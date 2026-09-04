import React, { useState } from "react";
import "./Cart.css";

const Cart = () => {

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Traditional Brass Camel",
            price: 1299,
            quantity: 1,
            image: "/images/camel.jpg"
        },
        {
            id: 2,
            name: "Handmade Brass Bowl",
            price: 899,
            quantity: 1,
            image: "/images/bowl.jpg"
        }
    ]);

    // Increase quantity
    const increaseQty = (id) => {
        setCartItems(
            cartItems.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    // Decrease quantity
    const decreaseQty = (id) => {
        setCartItems(
            cartItems.map(item =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    // Remove product
    const removeItem = (id) => {
        setCartItems(
            cartItems.filter(item => item.id !== id)
        );
    };

    // Calculate subtotal
    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const delivery = subtotal >= 2000 ? 0 : 99;

    const total = subtotal + delivery;


    return (
        <div className="cart-page">

            {/* ================= HEADER ================= */}

            <div className="cart-top">
                <div>
                    <h1>Your Shopping Cart</h1>
                    <p>
                        {cartItems.length} items in your cart
                    </p>
                </div>

                <div className="continue-shopping">
                    <a href="/">← Continue Shopping</a>
                </div>
            </div>


            {/* ================= CART CONTENT ================= */}

            <div className="cart-container">

                {/* LEFT SIDE */}

                <div className="cart-products">

                    {cartItems.length === 0 ? (

                        <div className="empty-cart">
                            <div className="empty-icon">🛒</div>

                            <h2>Your cart is empty</h2>

                            <p>
                                Looks like you haven't added anything
                                to your cart yet.
                            </p>

                            <a href="/" className="shop-btn1">
                                Start Shopping
                            </a>
                        </div>

                    ) : (

                        <>
                            <div className="cart-heading">
                                <span>Product</span>
                                <span>Price</span>
                                <span>Quantity</span>
                                <span>Total</span>
                            </div>


                            {cartItems.map(item => (

                                <div
                                    className="cart-item"
                                    key={item.id}
                                >

                                    {/* PRODUCT */}

                                    <div className="product-info">

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                        />

                                        <div>
                                            <h3>{item.name}</h3>

                                            <p>
                                                Handmade •
                                                Traditional Craft
                                            </p>

                                            <button
                                                className="remove-btn"
                                                onClick={() =>
                                                    removeItem(item.id)
                                                }
                                            >
                                                Remove
                                            </button>
                                        </div>

                                    </div>


                                    {/* PRICE */}

                                    <div className="product-price">
                                        ₹{item.price}
                                    </div>


                                    {/* QUANTITY */}

                                    <div className="quantity-box">

                                        <button
                                            onClick={() =>
                                                decreaseQty(item.id)
                                            }
                                        >
                                            −
                                        </button>

                                        <span>
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                increaseQty(item.id)
                                            }
                                        >
                                            +
                                        </button>

                                    </div>


                                    {/* TOTAL */}

                                    <div className="item-total">

                                        ₹
                                        {(
                                            item.price *
                                            item.quantity
                                        ).toLocaleString("en-IN")}

                                    </div>

                                </div>

                            ))}
                        </>
                    )}

                </div>


                {/* ================= ORDER SUMMARY ================= */}

                {cartItems.length > 0 && (

                    <div className="order-summary">

                        <h2>Order Summary</h2>

                        <div className="summary-row">
                            <span>Subtotal</span>

                            <span>
                                ₹{subtotal.toLocaleString("en-IN")}
                            </span>
                        </div>


                        <div className="summary-row">
                            <span>Delivery</span>

                            <span>
                                {delivery === 0
                                    ? "FREE"
                                    : `₹${delivery}`}
                            </span>
                        </div>


                        <div className="free-delivery">
                            {delivery === 0
                                ? "✓ You got free delivery!"
                                : "Free delivery on orders above ₹2,000"}
                        </div>


                        <hr />


                        <div className="summary-total">

                            <span>Total</span>

                            <strong>
                                ₹{total.toLocaleString("en-IN")}
                            </strong>

                        </div>


                        <button className="checkout-btn">
                            Proceed to Checkout
                        </button>


                        <div className="secure-payment">
                            🔒 Secure & Safe Checkout
                        </div>

                    </div>

                )}

            </div>


            {/* ================= BENEFITS ================= */}

            <div className="cart-benefits">

                <div>
                    <span>🚚</span>
                    <div>
                        <h4>Free Shipping</h4>
                        <p>On orders above ₹2,000</p>
                    </div>
                </div>


                <div>
                    <span>↩</span>
                    <div>
                        <h4>Easy Returns</h4>
                        <p>30 days return policy</p>
                    </div>
                </div>


                <div>
                    <span>🔒</span>
                    <div>
                        <h4>Secure Payment</h4>
                        <p>100% secure payment</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Cart;