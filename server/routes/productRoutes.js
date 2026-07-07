// const express = require("express");
// const router = express.Router();

// const {
//     createProduct,
//     getProducts,
//     updateProduct,
//     deleteProduct
// } = require("../controllers/productController");

// // CRUD
// router.post("/", createProduct);
// router.get("/", getProducts);
// router.put("/:id", updateProduct);
// router.delete("/:id", deleteProduct);

// module.exports = router;
const express = require("express");

const router = express.Router();

const {

createProduct,
getProducts,
updateProduct,
deleteProduct

} = require("../controllers/productController");

const { verifyToken } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/adminMiddleware");

router.get("/", getProducts);

router.post("/", verifyToken, isAdmin, createProduct);

router.put("/:id", verifyToken, isAdmin, updateProduct);

router.delete("/:id", verifyToken, isAdmin, deleteProduct);

module.exports = router;