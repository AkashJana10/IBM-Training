const express = require('express');
const { getProducts} = require('../controllers/products.controller');
const productRouter = express.Router();

productRouter.get('/product',getProducts);

module.exports = productRouter;