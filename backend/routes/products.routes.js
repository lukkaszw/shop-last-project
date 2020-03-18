const express = require('express');
const productsController = require('../controllers/product.controller');
const adminAuth = require('../controllers/middlewares/adminAuth');

const router = express.Router();

router.get('', productsController.getProducts);

router.post('', adminAuth, productsController.postProduct);

router.get('/:id', productsController.getProduct);


module.exports = router;