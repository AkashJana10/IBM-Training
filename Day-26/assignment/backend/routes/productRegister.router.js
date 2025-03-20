const express = require("express");
const path = require('path');
const { createProduct } = require("../controllers/products.controller");

const productRegister = express.Router();
productRegister.use(express.json()); 
productRegister.use(express.static(path.join(__dirname,'../../frontend/')));


productRegister.get('/product-reg',(req,res)=>{
  res.sendFile(path.join(__dirname,'../../frontend/views/createData.html'));
});
productRegister.post('/product-reg',createProduct);

module.exports = productRegister;
