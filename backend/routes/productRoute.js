const express = require("express");
const router = express.Router();
const Product = require("../models/products");
const tokenValidator = require("../middlewares/tokenValidator");
const { body, validationResult } = require("express-validator");

// Post Product Review

router.post("/create-review", tokenValidator, async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: "Failed to create product" });
  }
});

// Get Products
router.get("/get-products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

module.exports = router;
