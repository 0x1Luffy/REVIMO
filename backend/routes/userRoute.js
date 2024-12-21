const express = require("express");
const router = express.Router();
const userModel = require("../models/user");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

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
      await userModel.create({
        email: email,
        password: hashedPassword,
      });

      res.status(201).send("User registered successfully.");
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error.");
    }
  }
);

module.exports = router;
