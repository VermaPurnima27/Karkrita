
const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product");

const updateProductImages = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");

    const updates = [
      {
        name: "Bastar Art",
        image: "/images/bastarart2.webp",
      },
      {
        name: "Candle Stand",
        image: "/images/Deer_candle_stand.webp",
      },
      {
        name: "Desk Items",
        image: "/images/img2.webp",
      },
    ];

    for (const item of updates) {
      const result = await Product.updateMany(
        { name: item.name },
        { $set: { image: item.image } }
      );

      console.log(
        `${item.name}: ${result.modifiedCount} product(s) updated`
      );
    }
  } catch (error) {
    console.error("Image update failed:", error.message);
  } finally {
    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  }
};

updateProductImages();
