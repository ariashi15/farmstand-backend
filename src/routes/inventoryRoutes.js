const express = require('express');
const inventoryController = require('../controllers/inventoryController');
// const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/allfarms', inventoryController.getAllFarmsInventory);

module.exports = router;