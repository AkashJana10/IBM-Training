const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');

const readProducts = () => {
    if (!fs.existsSync(productsFilePath)) return [];
    return JSON.parse(fs.readFileSync(productsFilePath, 'utf8'));
};

const writeProducts = (products) => {
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
};

module.exports = { readProducts, writeProducts };