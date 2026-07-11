const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
    dashboardStats,
    getAnalytics,
    getUsers,
    deleteUser,
    getBookings,
    deleteBooking,
    updateBookingStatus,
    getReviews,
    deleteReview,
    getWishlist,
    deleteWishlist,
    getContacts,
    deleteContact,
    getPlaces,
    getPlaceById,
    addPlace,
    updatePlace,
    deletePlace,
} = require("../controllers/adminController");

router.get("/dashboard", authMiddleware, dashboardStats);
router.get("/analytics", authMiddleware, getAnalytics);
router.get("/users", authMiddleware, getUsers);
router.delete("/users/:id", authMiddleware, deleteUser);
router.get("/bookings", authMiddleware, getBookings);
router.delete("/bookings/:id", authMiddleware, deleteBooking);
router.put("/bookings/:id/status", authMiddleware, updateBookingStatus);
router.get("/reviews", authMiddleware, getReviews);
router.delete("/reviews/:id", authMiddleware, deleteReview);
router.get("/wishlist", authMiddleware, getWishlist);
router.delete("/wishlist/:id", authMiddleware, deleteWishlist);
router.get("/contacts", authMiddleware, getContacts);
router.delete("/contacts/:id", authMiddleware, deleteContact);
router.get("/places", authMiddleware, getPlaces);
router.post("/places", authMiddleware, addPlace);
router.get("/places/:id", authMiddleware, getPlaceById);
router.delete("/places/:id", authMiddleware, deletePlace);
module.exports = router;