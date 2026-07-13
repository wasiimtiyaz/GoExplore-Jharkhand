const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    place: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    persons: {
        type: Number,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    // Total Booking Amount
    amount: {
        type: Number,
        required: true
    },

    // Booking Status
    status: {
        type: String,
        default: "Pending"
    },

    // Razorpay Payment ID
    paymentId: {
        type: String,
        default: ""
    },

    // Payment Status
    paymentStatus: {
        type: String,
        default: "Paid"
    }

},
{
    timestamps: true
});

module.exports = mongoose.model("Booking", bookingSchema);