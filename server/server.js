const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

// Routes
const categoryRoutes = require("./routes/categoryRoutes");
const subCategoryRoutes = require("./routes/subCategoryRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Connect Database
connectDB();

// Middlewares
app.use(
    cors({
        origin: "*", // Change this to your Vercel URL after deployment
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);

app.use(express.json());

// API Routes
app.use("/api/categories", categoryRoutes);
app.use("/api/subcategories", subCategoryRoutes);
app.use("/api/products", productRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("🚀 MERN CRUD Backend is Running Successfully");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});