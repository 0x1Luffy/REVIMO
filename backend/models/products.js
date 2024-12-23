const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  mobileimage: { type: String, required: true },
  billimage: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  stars: { type: Number, required: true },
  recommendation: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
