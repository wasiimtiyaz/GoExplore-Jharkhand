const Wishlist = require("../models/Wishlist");

// Add to Wishlist
exports.addToWishlist = async (req, res) => {
    try {

        console.log("User:", req.user);
        console.log("Body:", req.body);

        // existing code...

        const { place } = req.body;

        if (!place) {
            return res.status(400).json({
                success: false,
                message: "Place is required."
            });
        }

        // Check if already exists
        const existing = await Wishlist.findOne({
            user: req.user.id,
            place
        });

        if (existing) {
            return res.status(400).json({
                success: false,
                message: "Place already in wishlist."
            });
        }

        const wishlist = await Wishlist.create({
            user: req.user.id,
            place
        });

        res.status(201).json({
            success: true,
            message: "Added to wishlist.",
            wishlist
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Get Logged-in User Wishlist
exports.getWishlist = async (req, res) => {

    try {

        const wishlist = await Wishlist.find({
            user: req.user.id
        }).sort({ createdAt: -1 });

        res.json({
            success: true,
            wishlist
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Remove from Wishlist
exports.removeFromWishlist = async (req, res) => {

    try {

        const item = await Wishlist.findOne({
            _id: req.params.id,
            user: req.user.id
        });

        if (!item) {
            return res.status(404).json({
                success: false,
                message: "Wishlist item not found."
            });
        }

        await Wishlist.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Removed from wishlist."
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};