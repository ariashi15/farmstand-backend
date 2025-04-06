const express = require('express');
const farmController = require('../controllers/farmController');
// const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', farmController.getFarms);

module.exports = router;