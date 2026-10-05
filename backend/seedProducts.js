const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product");

const products = [
  // =========================
  // HOME DECOR
  // =========================

  {
    name: "Bamboo Lamp",
    description: "Beautiful handmade traditional bamboo lamp.",
    price: 400,
    image: "/images/bamboo_lamp.jpg",
    category: "Home Decor",
    state: "Chhattisgarh",
    craft: "Bamboo Craft",
    stock: 10,
    isNewArrival: true,
    isBestSeller: true
  },

  {
    name: "Wall Hanging",
    description: "Beautiful handmade traditional wall decor product.",
    price: 120,
    image: "/images/img2.webp",
    category: "Home Decor",
    state: "Rajasthan",
    craft: "Wall Art",
    stock: 10,
    isNewArrival: false,
    isBestSeller: false
  },

  {
    name: "Jaipuri Wall Art",
    description: "Traditional handmade Jaipuri wall art.",
    price: 199,
    image: "/images/img15.jpg",
    category: "Home Decor",
    state: "Rajasthan",
    craft: "Jaipuri Art",
    stock: 10,
    isNewArrival: false,
    isBestSeller: false
  },

  {
    name: "Deer Wall Decor",
    description: "Beautiful traditional handmade deer wall decor.",
    price: 899,
    image: "/images/img12.jpg",
    category: "Home Decor",
    state: "Rajasthan",
    craft: "Traditional Decor",
    stock: 10,
    isNewArrival: false,
    isBestSeller: false
  },

  // =========================
  // SHOP BY CRAFT
  // =========================

  {
    name: "Desk Items",
    description: "Beautiful handmade traditional desk decor.",
    price: 460,
    image: "/images/img14.jpg",
    category: "Craft",
    state: "Chhattisgarh",
    craft: "Handicraft",
    stock: 10,
    isNewArrival: false,
    isBestSeller: false
  },

  {
    name: "Candle Stand",
    description: "Handmade traditional candle stand.",
    price: 120,
    image: "/images/deer.jpg",
    category: "Craft",
    state: "Chhattisgarh",
    craft: "Handicraft",
    stock: 10,
    isNewArrival: false,
    isBestSeller: false
  },

  {
    name: "Bastar Art",
    description: "Traditional handmade Bastar art product.",
    price: 920,
    image: "/images/bastar.jpg",
    category: "Craft",
    state: "Chhattisgarh",
    craft: "Bastar Art",
    stock: 10,
    isNewArrival: false,
    isBestSeller: false
  },

  {
    name: "Rajasthani Idol",
    description: "Beautiful traditional Rajasthani handmade idol.",
    price: 98,
    image: "/images/rajsthani.jpg",
    category: "Craft",
    state: "Rajasthan",
    craft: "Traditional Craft",
    stock: 10,
    isNewArrival: false,
    isBestSeller: false
  },

  // =========================
  // KITCHEN & DINING
  // =========================

  {
    name: "Tortoise Saunf Supari Set",
    description: "Beautiful handmade traditional kitchen decor set.",
    price: 640,
    image: "/images/img16.jpg",
    category: "Kitchen & Dining",
    state: "Chhattisgarh",
    craft: "Handicraft",
    stock: 10,
    isNewArrival: false,
    isBestSeller: false
  },

  {
    name: "Fruit Bowl",
    description: "Beautiful handmade traditional fruit bowl.",
    price: 690,
    image: "/images/img9.jpg",
    category: "Kitchen & Dining",
    state: "Chhattisgarh",
    craft: "Wood Craft",
    stock: 10,
    isNewArrival: false,
    isBestSeller: false
  },

  {
    name: "Tissu Stand",
    description: "Traditional handmade tissue stand.",
    price: 99,
    image: "/images/img19.jpg",
    category: "Kitchen & Dining",
    state: "Chhattisgarh",
    craft: "Handicraft",
    stock: 10,
    isNewArrival: false,
    isBestSeller: false
  },

  {
    name: "Tea Stand",
    description: "Beautiful handmade traditional tea stand.",
    price: 260,
    image: "/images/bastarart51.jpg",
    category: "Kitchen & Dining",
    state: "Chhattisgarh",
    craft: "Bastar Art",
    stock: 10,
    isNewArrival: false,
    isBestSeller: false
  },

  // =========================
  // FASHION ACCESSORIES
  // =========================

  {
    name: "Choker",
    description: "Beautiful traditional handmade choker.",
    price: 288,
    image: "/images/fs1.jpg",
    category: "Fashion Accessories",
    state: "Rajasthan",
    craft: "Traditional Jewellery",
    stock: 10,
    isNewArrival: false,
    isBestSeller: false
  },

  {
    name: "Kauri Choker Set",
    description: "Traditional handmade kauri choker set.",
    price: 250,
    image: "/images/f2.jpg",
    category: "Fashion Accessories",
    state: "Chhattisgarh",
    craft: "Tribal Jewellery",
    stock: 10,
    isNewArrival: false,
    isBestSeller: false
  },

  {
    name: "Bastar Jwellery",
    description: "Traditional handmade Bastar jewellery.",
    price: 401,
    image: "/images/f1.jpg",
    category: "Fashion Accessories",
    state: "Chhattisgarh",
    craft: "Bastar Jewellery",
    stock: 10,
    isNewArrival: false,
    isBestSeller: false
  },

  {
    name: "Cotton Block Printed Shirt",
    description: "Traditional cotton block printed shirt.",
    price: 399,
    image: "/images/cshirt.jpg",
    category: "Fashion Accessories",
    state: "Rajasthan",
    craft: "Block Printing",
    stock: 10,
    isNewArrival: false,
    isBestSeller: false
  },

  // =========================
  // BAGS
  // =========================

  {
    name: "Stylish Bag",
    description: "Beautiful handmade traditional stylish bag.",
    price: 658,
    image: "/images/bag.jpg",
    category: "Bags",
    state: "Rajasthan",
    craft: "Handmade Bag",
    stock: 10,
    isNewArrival: false,
    isBestSeller: false
  },

  {
    name: "Gujrati Bag",
    description: "Traditional handmade Gujarati bag.",
    price: 345,
    image: "/images/f0.jpg",
    category: "Bags",
    state: "Gujarat",
    craft: "Traditional Embroidery",
    stock: 10,
    isNewArrival: false,
    isBestSeller: false
  },

  {
    name: "Joot Bag",
    description: "Beautiful handmade traditional jute bag.",
    price: 599,
    image: "/images/f8.jpg",
    category: "Bags",
    state: "Rajasthan",
    craft: "Jute Craft",
    stock: 10,
    isNewArrival: false,
    isBestSeller: false
  },

  {
    name: "Traditional Handmade Bag",
    description: "Beautiful handmade traditional bag.",
    price: 640,
    image: "/images/f8.jpg",
    category: "Bags",
    state: "Rajasthan",
    craft: "Handmade Craft",
    stock: 10,
    isNewArrival: false,
    isBestSeller: false
  },

  // =========================
  // SHOP BY CATEGORY
  // =========================

  {
    name: "Gujrati Neckless",
    description: "Traditional handmade Gujarati necklace.",
    price: 210,
    image: "/images/jwe.jpg",
    category: "Jewellery",
    state: "Gujarat",
    craft: "Traditional Jewellery",
    stock: 10,
    isNewArrival: false,
    isBestSeller: false
  },

  {
    name: "Wall Things",
    description: "Beautiful handmade traditional wall decor.",
    price: 210,
    image: "/images/img22.jpg",
    category: "Home Decor",
    state: "Rajasthan",
    craft: "Wall Art",
    stock: 10,
    isNewArrival: false,
    isBestSeller: false
  },

  {
    name: "Idols",
    description: "Beautiful traditional handmade idol.",
    price: 400,
    image: "/images/img27.jpg",
    category: "Home Decor",
    state: "Chhattisgarh",
    craft: "Traditional Craft",
    stock: 10,
    isNewArrival: false,
    isBestSeller: false
  },

  {
    name: "Hair Belt",
    description: "Traditional handmade hair accessory.",
    price: 150,
    image: "/images/img31.jpg",
    category: "Fashion Accessories",
    state: "Rajasthan",
    craft: "Handmade Craft",
    stock: 10,
    isNewArrival: false,
    isBestSeller: false
  },

  {
    name: "Cort Set",
    description: "Traditional handmade clothing set.",
    price: 499,
    image: "/images/img28.jpg",
    category: "Fashion",
    state: "Rajasthan",
    craft: "Traditional Textile",
    stock: 10,
    isNewArrival: false,
    isBestSeller: false
  },

  {
    name: "Show Piece",
    description: "Beautiful handmade traditional show piece.",
    price: 369,
    image: "/images/img26.jpg",
    category: "Home Decor",
    state: "Chhattisgarh",
    craft: "Handicraft",
    stock: 10,
    isNewArrival: false,
    isBestSeller: false
  },

  {
    name: "Neck Piece",
    description: "Beautiful traditional handmade neck piece.",
    price: 299,
    image: "/images/img32.jpg",
    category: "Jewellery",
    state: "Rajasthan",
    craft: "Traditional Jewellery",
    stock: 10,
    isNewArrival: false,
    isBestSeller: false
  },

  {
    name: "Hair Accesseries",
    description: "Beautiful handmade traditional hair accessories.",
    price: 130,
    image: "/images/img230.jpg",
    category: "Fashion Accessories",
    state: "Rajasthan",
    craft: "Handmade Craft",
    stock: 10,
    isNewArrival: false,
    isBestSeller: false
  }
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully");

    await Product.insertMany(products);

    console.log(`${products.length} products added successfully`);

    await mongoose.connection.close();

    console.log("MongoDB connection closed");
  } catch (error) {
    console.error("Error seeding products:", error.message);
    process.exit(1);
  }
};

seedProducts();