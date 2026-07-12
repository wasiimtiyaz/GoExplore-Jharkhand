const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

    const {
    createBooking,
    getMyBookings,
    cancelBooking
} = require("../controllers/bookingController");

router.post("/", authMiddleware, createBooking);
router.get("/my", authMiddleware, getMyBookings);
router.delete("/:id", authMiddleware, cancelBooking);
router.get("/", authMiddleware, isAdmin, getAllBookings);
router.put("/:id/approve", authMiddleware, isAdmin, approveBooking);
module.exports = router;