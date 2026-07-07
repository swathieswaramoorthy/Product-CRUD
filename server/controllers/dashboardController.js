const Product = require("../models/Product");
const Category = require("../models/Category");
const SubCategory = require("../models/subCategory");
const User = require("../models/User");

exports.getDashboardStats = async (req, res) => {
    try {
        const [
            productCount,
            categoryCount,
            subCategoryCount,
            customerCount
        ] = await Promise.all([
            Product.countDocuments(),
            Category.countDocuments(),
            SubCategory.countDocuments(),
            User.countDocuments({ role: "customer" })
        ]);

        const recentProducts = await Product.find()
            .populate("category")
            .populate("subCategory")
            .sort({ createdAt: -1 })
            .limit(5);

        res.json({
            productCount,
            categoryCount,
            subCategoryCount,
            customerCount,
            recentProducts
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};