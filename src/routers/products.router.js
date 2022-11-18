const express = require('express');
const { productsController } = require('../controllers');

const router = express.Router();
const validateNewProductFields = require('../middlewares/validateNewProductsFields');

router.get('/', productsController.listProduct);
router.get('/:id', productsController.getProduct);
router.post('/', validateNewProductFields, productsController.createProduct);

module.exports = router; 