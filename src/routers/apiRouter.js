const express = require("express")
const router = express.Router()
const ApiControllers = require('../controllers/ApiControllers')
// const products = require("../models/products");

router.get('/products', ApiControllers.show)
router.post('/product', ApiControllers.postproduct)

router.use('/', ApiControllers.index)

module.exports = router
