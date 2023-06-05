// Importing packages/libraries
const express = require("express");

// Importing other file modules
const productController = require("../controller/productController");

const router = express.Router();

router.route("/list").get(productController.getAllProducts);
router.route("/:id").get(productController.getProductByID);

module.exports = router;