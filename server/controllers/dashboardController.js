const Product = require("../models/Product");
const Category = require("../models/Category");
const SubCategory = require("../models/subCategory");
const User = require("../models/User");

exports.getDashboard = async (req, res) => {

    try {

        const productCount = await Product.countDocuments();

        const categoryCount = await Category.countDocuments();

        const subCategoryCount = await SubCategory.countDocuments();

        const customerCount = await User.countDocuments({
            role: "customer"
        });

        const recentProducts = await Product.find()
            .populate("category")
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
