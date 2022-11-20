const express = require('express');
const { salesController } = require('../controllers');

const router = express.Router();

const salesMiddleware = require('../middlewares/salesMiddleware');

router.post('/', salesMiddleware.salesMiddleware, salesController.createSales);
router.get('/', salesController.listSales);
router.get('/:id', salesController.getSalesById);

module.exports = router; 