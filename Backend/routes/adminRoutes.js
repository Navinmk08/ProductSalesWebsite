const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');

// Add a new product
router.post('/addProduct', AdminController.addProduct);

// Get all products
router.get('/products', AdminController.getProducts);

// Update a product
router.put('/updateProduct/:id', AdminController.updateProduct);

// Delete a product
router.delete('/deleteProduct/:id', AdminController.deleteProduct);

// Get sales data
router.get('/sales', AdminController.getSales);

module.exports = router;
