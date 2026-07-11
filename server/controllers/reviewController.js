const Review = require("../models/Review");

// Add Review
exports.addReview = async (req, res) => {

    try {

        const { place, rating, review } = req.body;

        if (!place || !rating || !review) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        const newReview = await Review.create({

            user: req.user.id,
            place,
            rating,
            review

        });

        res.status(201).json({
            success: true,
            message: "Review added successfully.",
            review: newReview
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Get Reviews of a Place
exports.getReviews = async (req, res) => {

    try {

        const reviews = await Review.find({
            place: req.params.place
        })
        .populate("user", "_id name")
        .sort({ createdAt: -1 });

        res.json({
            success: true,
            reviews
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Delete Review
exports.deleteReview = async (req, res) => {

    try {

        const review = await Review.findOne({
            _id: req.params.id,
            user: req.user.id
        });

        if (!review) {
            return res.status(404).json({
                success: false,
                message: "Review not found."
            });
        }

        await Review.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Review deleted successfully."
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};
// Update Review
exports.updateReview = async (req, res) => {

    try {

        const { rating, review } = req.body;

        const existingReview = await Review.findOne({
            _id: req.params.id,
            user: req.user.id
        });

        if (!existingReview) {
            return res.status(404).json({
                success: false,
                message: "Review not found."
            });
        }

        existingReview.rating = rating;
        existingReview.review = review;

        await existingReview.save();

        res.json({
            success: true,
            message: "Review updated successfully.",
            review: existingReview
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};