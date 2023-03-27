const express = require("express");
const router = express.Router();
const OrderControllers = require("../controllers/OrderControllers");

router.get("/", OrderControllers.index);
router.get("/:slug", OrderControllers.show);
module.exports = router;
