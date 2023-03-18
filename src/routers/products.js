const express = require("express")
const router = express.Router()
const ProductControllers = require('../controllers/ProductControllers')

router.use('/:slug', ProductControllers.show )
router.use('/', ProductControllers.index )

module.exports = router