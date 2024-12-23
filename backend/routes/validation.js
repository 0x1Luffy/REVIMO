const express = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

const router = express.Router();

// Token validation route
router.get("/validate", async (req, res) => {
  // Extract token from the Authorization header
  const token = req.headers["authorization"]?.split(" ")[1]; // Get token from Authorization header

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch the user from the database using the decoded user ID from the token
    const user = await userModel.findById(decoded.userId);

    // If the user is not found, respond with an error
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the user data in the response
    res.json({ user });
  } catch (error) {
    console.error("Token verification failed:", error);
    // If the token is invalid or expired, send an error response
    return res.status(401).json({ message: "Invalid or expired token" });
  }
});

module.exports = router;
