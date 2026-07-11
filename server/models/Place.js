const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    district: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    rating: {
        type: Number,
        default: 5
    },

    map: {
        type: String,
        default: ""
    }

}, {

    timestamps: true

});

module.exports = mongoose.model("Place", placeSchema);