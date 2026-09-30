const Cart = require("../models/Cart");

// ================= ADD TO CART =================

const addToCart = async (req, res) => {
    try {

        const { productId, quantity } = req.body;

        if (!productId) {
            return res.status(400).json({
                message: "Product ID is required"
            });
        }

        const qty = quantity || 1;

        let cart = await Cart.findOne({
            user: req.user.id
        });

        // Agar user ka cart nahi hai
        if (!cart) {

            cart = await Cart.create({
                user: req.user.id,
                items: [
                    {
                        product: productId,
                        quantity: qty
                    }
                ]
            });

        } else {

            // Check product already cart me hai ya nahi
            const existingItem = cart.items.find(
                item => item.product.toString() === productId
            );

            if (existingItem) {

                existingItem.quantity += qty;

            } else {

                cart.items.push({
                    product: productId,
                    quantity: qty
                });

            }

            await cart.save();
        }

        res.status(200).json({
            message: "Product added to cart",
            cart
        });

    } catch (error) {

        console.error("Add Cart Error:", error.message);

        res.status(500).json({
            message: "Server error"
        });
    }
};


// ================= GET CART =================

const getCart = async (req, res) => {

    try {

        const cart = await Cart.findOne({
            user: req.user.id
        }).populate("items.product");

        if (!cart) {

            return res.status(200).json({
                message: "Cart is empty",
                cart: {
                    items: []
                }
            });

        }

        res.status(200).json({
            message: "Cart fetched successfully",
            cart
        });

    } catch (error) {

        console.error("Get Cart Error:", error.message);

        res.status(500).json({
            message: "Server error"
        });
    }
};


// ================= UPDATE QUANTITY =================

const updateCartQuantity = async (req, res) => {

    try {

        const { productId } = req.params;
        const { quantity } = req.body;

        if (!quantity || quantity < 1) {

            return res.status(400).json({
                message: "Quantity must be at least 1"
            });

        }

        const cart = await Cart.findOne({
            user: req.user.id
        });

        if (!cart) {

            return res.status(404).json({
                message: "Cart not found"
            });

        }

        const item = cart.items.find(
            item => item.product.toString() === productId
        );

        if (!item) {

            return res.status(404).json({
                message: "Product not found in cart"
            });

        }

        item.quantity = quantity;

        await cart.save();

        res.status(200).json({
            message: "Cart quantity updated",
            cart
        });

    } catch (error) {

        console.error("Update Cart Error:", error.message);

        res.status(500).json({
            message: "Server error"
        });
    }
};


// ================= REMOVE FROM CART =================

const removeFromCart = async (req, res) => {

    try {

        const { productId } = req.params;

        const cart = await Cart.findOne({
            user: req.user.id
        });

        if (!cart) {

            return res.status(404).json({
                message: "Cart not found"
            });

        }

        cart.items = cart.items.filter(
            item => item.product.toString() !== productId
        );

        await cart.save();

        res.status(200).json({
            message: "Product removed from cart",
            cart
        });

    } catch (error) {

        console.error("Remove Cart Error:", error.message);

        res.status(500).json({
            message: "Server error"
        });
    }
};


module.exports = {
    addToCart,
    getCart,
    updateCartQuantity,
    removeFromCart
};