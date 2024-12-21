const express = require("express");
const userRoute = require("./routes/userRoute");
const app = express();
const dbConnection = require("./config/db");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from your frontend's origin
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization", // Allow necessary headers
  })
);

app.use("/api/v1", userRoute);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});