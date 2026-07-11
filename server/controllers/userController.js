const User = require("../models/User");

exports.updateProfile = async (req, res) => {
    try {
        const { name, phone } = req.body;

        const user = await User.findByIdAndUpdate(
            req.user.id,
            { name, phone },
            { new: true }
        );

        res.json({
            success: true,
            message: "Profile updated successfully",
            user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};