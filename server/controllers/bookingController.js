const Booking = require("../models/Booking");

// Create Booking
exports.createBooking = async (req, res) => {

    try {

        console.log("User:", req.user);
        console.log("Body:", req.body);

        const booking = await Booking.create({
            user: req.user.id,
            place: req.body.place,
            date: req.body.date,
            persons: req.body.persons,
            phone: req.body.phone,
            email: req.body.email,
            paymentId: req.body.paymentId,
paymentStatus: req.body.paymentStatus
        });

        res.status(201).json({
            success: true,
            booking
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Get Logged-in User Bookings
exports.getMyBookings = async (req, res) => {

    try {

        const bookings = await Booking.find({
            user: req.user.id
        }).sort({ createdAt: -1 });

        res.json({
            success: true,
            bookings
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};
// Cancel Booking
exports.cancelBooking = async (req, res) => {

    try {

        const booking = await Booking.findOne({
            _id: req.params.id,
            user: req.user.id
        });

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found."
            });
        }

        await Booking.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Booking cancelled successfully."
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

//Get All Bookings
exports.getAllBookings = async (req, res) => {

    try {

        const bookings = await Booking.find()
            .populate("user", "name email")
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            bookings
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

//Approve Booking(Admin)
exports.approveBooking = async (req, res) => {

    try {

        await Booking.findByIdAndUpdate(
            req.params.id,
            {
                status: "Approved"
            }
        );

        res.json({
            success: true,
            message: "Booking Approved"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};