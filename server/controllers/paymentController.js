const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.createOrder = async (req, res) => {
    try {
        const options = {
            amount: 50000, // ₹500 in paise
            currency: "INR",
            receipt: "booking_" + Date.now()
        };

        const order = await razorpay.orders.create(options);

        res.json({
            success: true,
            order
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

const crypto = require("crypto");

exports.verifyPayment = async (req, res) => {

    const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature
    } = req.body;

    const sign = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(razorpay_order_id + "|" + razorpay_payment_id)
        .digest("hex");

    if (sign === razorpay_signature) {
        return res.json({
            success: true,
            message: "Payment Verified"
        });
    }

    res.status(400).json({
        success: false,
        message: "Invalid Signature"
    });
};