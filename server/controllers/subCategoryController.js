const SubCategory = require("../models/subCategory");
const Product = require("../models/Product");
// CREATE
const createSubCategory = async (req, res) => {
    try {
        const subCategory = await SubCategory.create(req.body);
        res.status(201).json(subCategory);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// READ ALL
const getSubCategories = async (req, res) => {
    try {
const subCategories = await SubCategory.find()
.populate("category")
.sort({ createdAt: -1 });        
res.json(subCategories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// UPDATE
const updateSubCategory = async (req, res) => {
    try {
        const updated = await SubCategory.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteSubCategory = async (req, res) => {

    try {

        const subCategoryId = req.params.id;

        // Delete products under this subcategory
        await Product.deleteMany({
            subCategory: subCategoryId
        });

        // Delete subcategory
        await SubCategory.findByIdAndDelete(subCategoryId);

        res.json({
            success: true,
            message: "SubCategory and related Products deleted successfully"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};
module.exports = {
    createSubCategory,
    getSubCategories,
    updateSubCategory,
    deleteSubCategory
};