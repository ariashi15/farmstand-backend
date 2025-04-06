const express = require('express');
const inventoryController = require('../controllers/inventoryController');
// const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/allfarms', inventoryController.getAllFarmsInventory);
router.get('/:productid', inventoryController.getItemByID);
router.get('/farm/:farmid', inventoryController.getInventoryByFarmID);
router.put('/farm/:farmid', inventoryController.addOrUpdateInventory);

module.exports = router;