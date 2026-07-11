const User = require("../models/User");
const Booking = require("../models/Booking");
const Wishlist = require("../models/Wishlist");
const Review = require("../models/Review");
const Contact = require("../models/Contact");
const Place = require("../models/Place");

// Dashboard Statistics
exports.dashboardStats = async (req, res) => {

    try {

        const totalUsers = await User.countDocuments();

        const totalBookings = await Booking.countDocuments();

        const totalWishlist = await Wishlist.countDocuments();

        const totalReviews = await Review.countDocuments();

        const totalContacts = await Contact.countDocuments();

        res.json({
            success: true,
            totalUsers,
            totalBookings,
            totalWishlist,
            totalReviews,
            totalContacts
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};
// Get All Users Except Logged-in Admin
exports.getUsers = async (req, res) => {

    try {

        const users = await User.find({
            _id: { $ne: req.user.id }
        }).select("-password");

        res.json({
            success: true,
            users
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};
// Delete User
exports.deleteUser = async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        // Prevent deleting an admin
        if (user.role === "admin") {
            return res.status(403).json({
                success: false,
                message: "Admin cannot be deleted."
            });
        }

        await User.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "User deleted successfully."
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};
// Get All Bookings
exports.getBookings = async (req, res) => {

    try {

        const bookings = await Booking.find()
            .populate("user", "name email")
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            bookings
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};
// Delete Booking
exports.deleteBooking = async (req, res) => {

    try {

        const booking = await Booking.findById(req.params.id);

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found."
            });
        }

        await Booking.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Booking deleted successfully."
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};
// Update Booking Status
exports.updateBookingStatus = async (req, res) => {

    try {

        const { status } = req.body;

        const booking = await Booking.findById(req.params.id);

        if (!booking) {

            return res.status(404).json({
                success: false,
                message: "Booking not found."
            });

        }

        booking.status = status;

        await booking.save();

        res.json({

            success: true,
            message: "Booking status updated."

        });

    } catch (err) {

        console.error(err);

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};
// Get All Reviews
exports.getReviews = async (req, res) => {

    try {

        const reviews = await Review.find()
            .populate("user", "name email")
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

        const review = await Review.findById(req.params.id);

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
// Get All Wishlist
exports.getWishlist = async (req, res) => {

    try {

        const wishlist = await Wishlist.find()
            .populate("user", "name email")
            .sort({ createdAt: -1 });

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

// Delete Wishlist Item
exports.deleteWishlist = async (req, res) => {

    try {

        const item = await Wishlist.findById(req.params.id);

        if (!item) {

            return res.status(404).json({
                success: false,
                message: "Wishlist item not found."
            });

        }

        await Wishlist.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Wishlist item deleted successfully."
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};
// Get All Contact Messages
exports.getContacts = async (req, res) => {

    try {

        const contacts = await Contact.find()
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            contacts
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Delete Contact Message
exports.deleteContact = async (req, res) => {

    try {

        const contact = await Contact.findById(req.params.id);

        if (!contact) {

            return res.status(404).json({
                success: false,
                message: "Message not found."
            });

        }

        await Contact.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Message deleted successfully."
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};


// Get All Places
exports.getPlaces = async (req, res) => {
    try {
        const places = await Place.find().sort({ name: 1 });

        res.json({
            success: true,
            places
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

// Add Place
exports.addPlace = async (req, res) => {

    try {

        const {
            name,
            district,
            category,
            image,
            description,
            rating,
            map
        } = req.body;

        const place = new Place({

            name,
            district,
            category,
            image,
            description,
            rating,
            map

        });

        await place.save();

        res.status(201).json({

            success: true,
            message: "Place added successfully.",
            place

        });

    } catch (err) {

        console.error(err);

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};
// Get Single Place
exports.getPlaceById = async (req, res) => {

    try {

        const place = await Place.findById(req.params.id);

        if (!place) {

            return res.status(404).json({
                success: false,
                message: "Place not found."
            });

        }

        res.json({
            success: true,
            place
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Delete Place
exports.deletePlace = async (req, res) => {
    try {

        await Place.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Place deleted successfully."
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};
// Dashboard Analytics
exports.getAnalytics = async (req, res) => {

    try {

        const bookings = await Booking.find();

        const places = await Place.find();

        const reviews = await Review.find();

        // Monthly Bookings
        const monthly = new Array(12).fill(0);

        bookings.forEach(b => {

            const month = new Date(b.createdAt).getMonth();

            monthly[month]++;

        });

        // Places By Category
        const categoryData = {};

        places.forEach(place => {

            categoryData[place.category] =
                (categoryData[place.category] || 0) + 1;

        });

        // Average Rating
        let averageRating = 0;

        if (reviews.length > 0) {

            averageRating =
                reviews.reduce((sum, r) => sum + Number(r.rating), 0)
                / reviews.length;

        }

        res.json({

            success: true,

            monthlyBookings: monthly,

            categoryData,

            averageRating: averageRating.toFixed(1)

        });

    } catch (err) {

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};