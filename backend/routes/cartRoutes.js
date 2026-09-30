const express = require("express");

const {
    addToCart,
    getCart,
    updateCartQuantity,
    removeFromCart
} = require("../controllers/cartController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Add product to cart
router.post("/", authMiddleware, addToCart);

// Get user's cart
router.get("/", authMiddleware, getCart);

// Update product quantity
router.put("/:productId", authMiddleware, updateCartQuantity);

// Remove product from cart
router.delete("/:productId", authMiddleware, removeFromCart);

module.exports = router;