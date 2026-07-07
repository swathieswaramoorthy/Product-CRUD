// const express = require("express");
// const router = express.Router();

// const {
//     createCategory,
//     getCategories,
//     updateCategory,
//     deleteCategory
// } = require("../controllers/categoryController");

// // CRUD Routes
// router.post("/", createCategory);
// router.get("/", getCategories);
// router.put("/:id", updateCategory);
// router.delete("/:id", deleteCategory);

// module.exports = router;
const express = require("express");

const router = express.Router();

const {

createCategory,
getCategories,
updateCategory,
deleteCategory

} = require("../controllers/categoryController");

const { verifyToken } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/adminMiddleware");


// Everyone can view

router.get("/", getCategories);


// Admin Only

router.post("/", verifyToken, isAdmin, createCategory);

router.put("/:id", verifyToken, isAdmin, updateCategory);

router.delete("/:id", verifyToken, isAdmin, deleteCategory);

module.exports = router;