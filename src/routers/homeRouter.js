const express = require("express")
const router = express.Router()
const SiteControllers = require('../controllers/HomeControllers')

router.use('/addtion', SiteControllers.addproduct)
router.use('/', SiteControllers.index )

module.exports = router