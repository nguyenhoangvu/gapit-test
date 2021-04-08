'use strict';

const express = require('express');
const router = express.Router();
const productsCtrl = require('../controllers/ProductsController');
const useMiddleware = require('../middleware/auth')

// product api
router.get('/products', useMiddleware.isLoggedIn, productsCtrl.fetchAll)
router.post('/products', useMiddleware.isLoggedIn, productsCtrl.create)
router.get('/products/getByID', useMiddleware.isLoggedIn, productsCtrl.getByID)
router.get('/products/getByCode', useMiddleware.isLoggedIn, productsCtrl.getByCode)
router.put('/products/update', useMiddleware.isLoggedIn, productsCtrl.update)

module.exports = router;