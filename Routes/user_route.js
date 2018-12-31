const express = require('express');
const router = express.Router();

const user_controller = require('../Controllers/user_controller')

router.get('/', user_controller.index)

module.exports = router;