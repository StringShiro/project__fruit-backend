const express = require("express")
const router = express.Router()
const CustomerControllers = require('../controllers/CustomerControllers')

router.use('/:slug', CustomerControllers.show )
router.use('/', CustomerControllers.index )

module.exports = router