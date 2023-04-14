const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/ProductControllers");

router.get("/api/product", productControllers.getproduct);
router.post("/api/product", productControllers.postproduct);
router.get("/api/product/:id", productControllers.readid);
router.delete("/api/product/:id", productControllers.delete);
router.use("/", productControllers.index);

module.exports = router;
