const express = require("express")
const router = express.Router()
const ApiControllers = require('../controllers/ApiControllers')
const products = require("../models/products");

router.use('/:slug', ApiControllers.show )
router.use('/', ApiControllers.index )

module.exports = router