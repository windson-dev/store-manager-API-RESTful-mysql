const express = require('express');
const { salesController } = require('../controllers');

const router = express.Router();

const salesMiddleware = require('../middlewares/salesMiddleware');

router.post('/', salesMiddleware.salesMiddleware, salesController.createSales);

module.exports = router; 