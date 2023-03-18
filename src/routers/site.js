const express = require("express")
const router = express.Router()
const SiteControllers = require('../controllers/SiteControllers')

router.use('/:slug', SiteControllers.show )
router.use('/', SiteControllers.index )

module.exports = router