const express = require("express");
const { signup, signin } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Signup
router.post("/signup", signup);

// Signin
router.post("/signin", signin);

// Protected Profile
router.get("/profile", authMiddleware, (req, res) => {
  res.status(200).json({
    message: "Profile accessed successfully",
    user: req.user,
  });
});

module.exports = router;