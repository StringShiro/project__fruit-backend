const express = require("express")
const router = express.Router()
const DashboardControllers = require('../controllers/DashboardControllers')

router.use('/', DashboardControllers.index )

module.exports = router