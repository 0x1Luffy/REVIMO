const express = require("express");
const multer = require("multer");
const { body, validationResult } = require("express-validator");
const Product = require("../models/products");
const tokenValidator = require("../middlewares/tokenValidator");

const router = express.Router();

// Configure multer for file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "/uploads"); // Directory to save images
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error("Only JPEG and PNG files are allowed."));
    }
    cb(null, true);
  },
});

// POST Product Review with Validation
router.post(
  "/create-review",
  tokenValidator,
  upload.fields([
    { name: "mobileimage", maxCount: 1 },
    { name: "billimage", maxCount: 1 },
  ]),
  [
    body("title").notEmpty().withMessage("Title is required."),
    body("description").notEmpty().withMessage("Description is required."),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price must be a positive number."),
    body("rating")
      .isFloat({ min: 0, max: 5 })
      .withMessage("Rating must be between 0 and 5."),
    body("stars")
      .isInt({ min: 0, max: 5 })
      .withMessage("Stars must be between 0 and 5."),
    body("recommendation")
      .isIn(["buy", "dont-buy"])
      .withMessage("Recommendation must be 'buy' or 'dont-buy'."),
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { title, description, price, rating, stars, recommendation } =
        req.body;

      // Create a new product instance
      const newProduct = new Product({
        title,
        description,
        price,
        rating,
        stars,
        recommendation,
        mobileimage: req.files.mobileImage
          ? req.files.mobileImage[0].path
          : null,
        billimage: req.files.billImage ? req.files.billImage[0].path : null,
      });

      // Save to the database
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create product review" });
    }
  }
);

// GET Products
router.get("/get-products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

module.exports = router;
