const express = require("express");
const router = express.Router();

console.log("✅ authRoutes.js loaded");

const { register, login } = require("../controllers/authController");

router.get("/check", (req, res) => {
  res.json({ message: "Auth route working" });
});

router.post("/register", register);
router.post("/login", login);

module.exports = router;