const Category = require("../models/Category");

// Get Categories
exports.getCategories = async (req, res) => {

    try {

        const categories = await Category.find().sort({ name: 1 });

        res.json({
            success: true,
            categories
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Add Category
exports.addCategory = async (req, res) => {

    try {

        const category = await Category.create({

            name: req.body.name

        });

        res.status(201).json({

            success: true,
            category

        });

    } catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};

// Delete Category
exports.deleteCategory = async (req, res) => {

    try {

        await Category.findByIdAndDelete(req.params.id);

        res.json({

            success: true,
            message: "Category deleted."

        });

    } catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};