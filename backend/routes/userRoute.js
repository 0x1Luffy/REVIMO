const express = require("express");
const router = express.Router();
const userModel = require("../models/user");

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  await userModel.create({
    email: email,
    password: password,
  });

  console.log(req.body);
  res.send("Data Received");
});

module.exports = router;
