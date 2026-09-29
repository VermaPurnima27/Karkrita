const Product = require("../models/Product");

// =========================
// CREATE PRODUCT
// =========================

const createProduct = async (req, res) => {
    try {

        const {
            name,
            description,
            price,
            image,
            category,
            state,
            craft,
            stock,
            isNewArrival,
            isBestSeller
        } = req.body;

        // Check required fields
        if (
            !name ||
            !description ||
            !price ||
            !image ||
            !category ||
            !state ||
            !craft
        ) {
            return res.status(400).json({
                message: "Please fill all required fields"
            });
        }

        const product = await Product.create({
            name,
            description,
            price,
            image,
            category,
            state,
            craft,
            stock,
            isNewArrival,
            isBestSeller
        });

        res.status(201).json({
            message: "Product created successfully",
            product
        });

    } catch (error) {

        console.error("Create Product Error:", error.message);

        res.status(500).json({
            message: "Server error"
        });
    }
};


// =========================
// GET ALL PRODUCTS
// =========================

const getProducts = async (req, res) => {
    try {

        const products = await Product.find();

        res.status(200).json({
            message: "Products fetched successfully",
            products
        });

    } catch (error) {

        console.error("Get Products Error:", error.message);

        res.status(500).json({
            message: "Server error"
        });
    }
};


module.exports = {
    createProduct,
    getProducts
};