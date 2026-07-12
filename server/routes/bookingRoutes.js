const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const isAdmin = require("../middleware/adminMiddleware");

const {
    createBooking,
    getMyBookings,
    cancelBooking,
    getAllBookings,
    approveBooking
} = require("../controllers/bookingController");

// User Routes
router.post("/", authMiddleware, createBooking);
router.get("/my", authMiddleware, getMyBookings);
router.delete("/:id", authMiddleware, cancelBooking);

// Admin Routes
router.get("/", authMiddleware, isAdmin, getAllBookings);
router.put("/:id/approve", authMiddleware, isAdmin, approveBooking);

module.exports = router;