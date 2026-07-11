const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    place: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Wishlist", wishlistSchema);