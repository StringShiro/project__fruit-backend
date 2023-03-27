const express = require("express");
const router = express.Router();
const ProductControllers = require("../controllers/ProductControllers");
const products = require("../models/products");

router.get("/", ProductControllers.show);
router.get("/create", ProductControllers.create);
router.post("/store", ProductControllers.store);

module.exports = router;
