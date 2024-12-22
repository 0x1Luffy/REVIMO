const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [5, "Passoword must be at least 5 characters Long"],
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
