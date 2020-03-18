const express = require('express');
const ordersController = require('../controllers/order.controller');
const escapeAndSanitizeOrder = require('../controllers/middlewares/escapeAndSanitizeOrder');

const router = express.Router();

router.post('', escapeAndSanitizeOrder, ordersController.postOrder);

module.exports = router;
