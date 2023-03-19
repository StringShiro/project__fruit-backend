const express = require("express")
const router = express.Router()
const OrderControllers = require('../controllers/OrderControllers')

router.use('/:slug', OrderControllers.show )
router.use('/', OrderControllers.index )

module.exports = router