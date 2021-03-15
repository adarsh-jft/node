const express = require('express');
const path = require('path');
const Product = [];
const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/edit_product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

router.post('/edit_product', adminController.postAddProduct);

router.get('/edit_product/:productId', adminController.getEditProduct)

exports.routes = router;