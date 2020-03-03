const express = require('express');
const ordersController = require('../controllers/order.controller');

const router = express.Router();

router.post('', ordersController.postOrder);

module.exports = router;
