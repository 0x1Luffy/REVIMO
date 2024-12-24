const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  mobileImage: { type: String, required: true },
  billImage: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
  stars: { type: Number, required: true, min: 0, max: 5 },
  recommendation: { type: String, enum: ["buy", "dont-buy"], required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
