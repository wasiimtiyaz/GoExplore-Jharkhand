const authRoutes = require("./routes/authRoutes");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dns = require("dns");
const userRoutes = require("./routes/userRoutes");
const contactRoutes = require("./routes/contactRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const adminRoutes = require("./routes/adminRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

// 1. Set up network/DNS configurations first (if your ISP blocks Atlas)
dns.setServers(["8.8.8.8", "8.8.4.4"]);
console.log("🚀 Active DNS Servers:", dns.getServers());
console.log("✅ adminRoutes.js loaded");

// Load .env FIRST
dotenv.config();

const app = express();  

// THEN import connectDB
const connectDB = require("./config/db");

// THEN connect
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
console.log("✅ Auth routes are being mounted...");
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/bookings",bookingRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/categories", categoryRoutes);

app.get("/api/auth/check", (req, res) => {
  res.json({
    success: true,
    message: "Direct route working"
  });
});
app.get("/test", (req, res) => {
  res.send("Test route is working");
});

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to GoExplore Jharkhand API 🚀",
  });
});

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
