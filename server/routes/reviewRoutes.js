const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    addReview,
    getReviews,
    updateReview,
    deleteReview
} = require("../controllers/reviewController");

router.post("/", authMiddleware, addReview);
router.get("/:place", getReviews);
router.put("/:id", authMiddleware, updateReview);
router.delete("/:id", authMiddleware, deleteReview);

module.exports = router;