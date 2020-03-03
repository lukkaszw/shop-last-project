const express = require('express');
const productsController = require('../controllers/product.controller');

const router = express.Router();

router.get('', productsController.getProducts);

router.post('', productsController.postProduct);

router.get('/:id', productsController.getProduct);


module.exports = router;