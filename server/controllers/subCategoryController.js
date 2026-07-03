const SubCategory = require("../models/subCategory");

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
        const subCategories = await SubCategory.find().populate("category");
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

// DELETE
const deleteSubCategory = async (req, res) => {
    try {
        await SubCategory.findByIdAndDelete(req.params.id);
        res.json({ message: "SubCategory deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createSubCategory,
    getSubCategories,
    updateSubCategory,
    deleteSubCategory
};