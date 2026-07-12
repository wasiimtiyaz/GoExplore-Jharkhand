const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dns = require("dns");

// Load .env FIRST
dotenv.config();

console.log("RAZORPAY_KEY_ID =", process.env.RAZORPAY_KEY_ID);
console.log("RAZORPAY_KEY_SECRET =", process.env.RAZORPAY_KEY_SECRET);

// Import routes AFTER dotenv.config()
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const contactRoutes = require("./routes/contactRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const adminRoutes = require("./routes/adminRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

// Configure DNS
dns.setServers(["8.8.8.8", "8.8.4.4"]);
console.log("🚀 Active DNS Servers:", dns.getServers());

const app = express();

// Connect Database
const connectDB = require("./config/db");
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
console.log("✅ Auth routes are being mounted...");

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/payment", paymentRoutes);

// Check Route
app.get("/api/auth/check", (req, res) => {
    res.json({
        success: true,
        message: "Direct route working"
    });
});

// Test Route
app.get("/test", (req, res) => {
    res.send("Test route is working");
});

// Home Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to GoExplore Jharkhand API 🚀"
    });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});