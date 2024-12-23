const express = require("express");
const router = express.Router();
const userModel = require("../models/user");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Signup Logic (Backend)
router.post(
  "/signup",
  [
    body("email").trim().isEmail().withMessage("Invalid email address."),
    body("password")
      .trim()
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long."),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Hashing the password before saving it
      const hashedPassword = await bcrypt.hash(password, 10);

      // Save user data in DB
      const newUser = await userModel.create({
        email: email,
        password: hashedPassword,
      });

      // Send a single response
      return res.status(201).json({
        message: "User registered successfully.",
        user: newUser,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Server error." });
    }
  }
);

// Login Logic (Backend)
router.post(
  "/login",
  [
    body("email").trim().isEmail().withMessage("Invalid email address."),
    body("password").trim().notEmpty().withMessage("Password is required."),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Check if user exists
      const user = await userModel.findOne({ email: email });
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }

      // Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials." });
      }

      const token = jwt.sign(
        {
          userId: user._id,
          email: user.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.cookie("token", token);
      return res.status(200).json({
        message: "Login successful.",
        token: token,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Server error." });
    }
  }
);

module.exports = router;
