const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Get all products
router.get('/products', UserController.getProducts);

// Get a single product
router.get('/product/:id', UserController.getProduct);

// Purchase a product
router.post('/purchase', UserController.purchaseProduct);

// Get user profile
router.get('/profile', UserController.getProfile);

// Update user profile
router.put('/profile', UserController.updateProfile);

module.exports = router;
