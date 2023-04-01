const express = require("express")
const router = express.Router()
const ApiControllers = require('../controllers/ApiControllers')
// const products = require("../models/products");

router.get('/products', ApiControllers.show)
router.post('/products', ApiControllers.show)
router.get('/users', ApiControllers.shuser)
router.post('/users', ApiControllers.shuser)
router.use('/', ApiControllers.index)

module.exports = router
