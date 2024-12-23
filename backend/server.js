const express = require("express");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const dbConnection = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const path = require("path");
const axios = require("axios");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Serve static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// CORS configuration
app.use(
  cors({
    origin: "https://revimo-frontend.vercel.app", // Allow requests from your frontend's origin
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization", // Allow necessary headers
  })
);

//ignore (Render service file)

const url = `https://revimo.onrender.com/`;
const interval = 30000;

function reloadWebsite() {
  axios
    .get(url)
    .then((response) => {
      console.log("website reloded");
    })
    .catch((error) => {
      console.error(`Error : ${error.message}`);
    });
}

setInterval(reloadWebsite, interval);

app.get("/", (req, res) => {
  res.send("hello world");
});

// Routes
app.use("/api/v1", userRoute);
app.use("/api/v1/reviews", productRoute);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
  });
});

app.get("/", (req, res) => {
  res.send("Hello From backend");
});

// Start server
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
