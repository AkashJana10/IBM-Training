const express = require('express');
const { readProducts, writeProducts } = require('../utils/fileHandler');
const crypto = require('crypto');
const router = express.Router();

// GET / - Welcome Message
router.get('/', (req, res) => {
    res.send('Welcome to the Product API!');
});

// GET /products - Get all products
router.get('/products', (req, res) => {
    res.json(readProducts());
});

// GET /products/:id - Get product by ID
router.get('/products/:id', (req, res) => {
    const products = readProducts();
    const product = products.find(p => p.id === req.params.id);
    product ? res.json(product) : res.status(404).send('Product not found');
});

// POST /products - Add a new product
router.post('/products', (req, res) => {
    const products = readProducts();
    const newProduct = { id: crypto.randomUUID(), ...req.body };
    products.push(newProduct);
    writeProducts(products);
    res.status(201).json(newProduct);
});

// PUT /products/:id - Update a product by ID
router.put('/products/:id', (req, res) => {
    let products = readProducts();
    const index = products.findIndex(p => p.id === req.params.id);
    if (index === -1) return res.status(404).send('Product not found');
    products[index] = { ...products[index], ...req.body };
    writeProducts(products);
    res.json(products[index]);
});

// DELETE /products/:id - Delete a product by ID
router.delete('/products/:id', (req, res) => {
    let products = readProducts();
    const filteredProducts = products.filter(p => p.id !== req.params.id);
    if (filteredProducts.length === products.length) return res.status(404).send('Product not found');
    writeProducts(filteredProducts);
    res.status(204).send();
});

module.exports = router;