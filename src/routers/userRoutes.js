const express = require('express');
const userController = require("../controllers/UserControllers");
const router = express.Router();

router.post('/api/create', userController.create);
router.get('/', userController.index);


module.exports = router;
