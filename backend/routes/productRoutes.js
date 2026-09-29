const express = require("express");

const {
    createProduct,
    getProducts
} = require("../controllers/productController");

const router = express.Router();


// Create Product
router.post("/", createProduct);


// Get All Products
router.get("/", getProducts);


module.exports = router;