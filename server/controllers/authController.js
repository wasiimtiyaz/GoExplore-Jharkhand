const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// =========================
// Register User
// =========================
exports.register = async (req, res) => {

    try {

        let { name, email, phone, password } = req.body;

        // Remove Extra Spaces
        name = name ? name.trim() : "";
        email = email ? email.trim().toLowerCase() : "";
        phone = phone ? phone.trim() : "";
        password = password ? password.trim() : "";

        // Required Fields
        if (!name || !email || !phone || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        // Name Validation
        const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;

        if (!nameRegex.test(name) || name.length < 3 || name.length > 50) {
            return res.status(400).json({
                success: false,
                message: "Name should contain only letters and spaces (3-50 characters)."
            });
        }

        // Reject repeated names like aaaaa
        if (/^(.)\1+$/.test(name.replace(/\s/g, ""))) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid name."
            });
        }

        // Email Validation
        const emailRegex =
            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email address."
            });
        }

        // Phone Validation
        const phoneRegex = /^[6-9]\d{9}$/;

        if (!phoneRegex.test(phone)) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid 10-digit mobile number."
            });
        }

        // Reject repeated numbers
        if (/^(\d)\1{9}$/.test(phone)) {
            return res.status(400).json({
                success: false,
                message: "Invalid mobile number."
            });
        }

        // Password Validation
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

        if (!passwordRegex.test(password)) {
            return res.status(400).json({
                success: false,
                message: "Password must be 8-20 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character."
            });
        }

        // Existing User
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already registered."
            });
        }

        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create User
        const user = await User.create({
            name,
            email,
            phone,
            password: hashedPassword
        });

        res.status(201).json({
            success: true,
            message: "Registration successful.",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role
            }
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });

    }

};

// =========================
// Login User
// =========================
exports.login = async (req, res) => {

    try {

        let { email, password } = req.body;

        email = email ? email.trim().toLowerCase() : "";
        password = password ? password.trim() : "";

        // Empty Fields
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and Password are required."
            });
        }

        // Email Validation
        const emailRegex =
            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email address."
            });
        }

        // Find User
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password."
            });
        }

        // Compare Password
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password."
            });
        }

        // Generate JWT
        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.status(200).json({
            success: true,
            message: "Login Successful.",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role
            }
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });

    }

};