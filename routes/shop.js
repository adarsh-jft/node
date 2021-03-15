const express = require('express');
const path = require('path');

const adminData = require('./admin')

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProduct);
router.get('/products/:productId', shopController.getProductID)
router.get('/carts', shopController.getCart);
router.post('/carts', shopController.postCart)
router.get('/orders', shopController.getOrders);
router.get('/checkout', shopController.getCheckout);

module.exports = router;