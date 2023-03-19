const express = require("express")
const router = express.Router()
const DashboardControllers = require('../controllers/DashboardControllers')

router.use('/:slug', DashboardControllers.show )
router.use('/', DashboardControllers.index )

module.exports = router