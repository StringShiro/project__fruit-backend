const express = require("express")
const router = express.Router()
const CustomerControllers = require('../controllers/CustomerControllers')

router.use('/update', CustomerControllers.show )
router.use('/', CustomerControllers.index )

module.exports = router