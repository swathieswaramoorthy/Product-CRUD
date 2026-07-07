// const express = require("express");
// const router = express.Router();

// const {
//     createSubCategory,
//     getSubCategories,
//     updateSubCategory,
//     deleteSubCategory
// } = require("../controllers/subCategoryController");

// // CRUD
// router.post("/", createSubCategory);
// router.get("/", getSubCategories);
// router.put("/:id", updateSubCategory);
// router.delete("/:id", deleteSubCategory);

// module.exports = router;
const express = require("express");

const router = express.Router();

const {

createSubCategory,
getSubCategories,
updateSubCategory,
deleteSubCategory

} = require("../controllers/subCategoryController");

const { verifyToken } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/adminMiddleware");

router.get("/", getSubCategories);

router.post("/", verifyToken, isAdmin, createSubCategory);

router.put("/:id", verifyToken, isAdmin, updateSubCategory);

router.delete("/:id", verifyToken, isAdmin, deleteSubCategory);

module.exports = router;