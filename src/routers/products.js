const express = require("express");
const router = express.Router();
const product = require("../controllers/ProductControllers");
const products = require("../models/products");

// router.get("/", ProductControllers.show);
// router.get("/create", ProductControllers.create);
// router.post("/store", ProductControllers.store);

router
    .route('/')
    .post(product.createProduct)
    .get(product.getAllProducts)

router
    .route('/:id')
    .get(product.getOneProduct)
    .patch(product.updateProduct)
    .delete(product.deleteProduct)
module.exports = router;
