const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
{
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    place:{
        type:String,
        required:true
    },

    date:{
        type:String,
        required:true
    },

    persons:{
        type:Number,
        required:true
    },

    phone:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    status: {
    type: String,
    default: "Pending"

    },
    paymentId: {
    type: String,
    default: ""
},

paymentStatus: {
    type: String,
    default: "Pending"
},

},
{
    timestamps:true
});

module.exports = mongoose.model("Booking",bookingSchema);