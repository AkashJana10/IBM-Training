const { productsModel } = require("../models/product.model");

const createProduct = async (req, res) => {
    const { name, desc, image, category, price } = req.body;
    console.log(req.body);
    try {
        const data = new productsModel({ name, category, desc, price, image });
        await data.save(); 
        res.status(200).send({ message: "Data created successfully" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const getProducts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;  
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const product = await productsModel.find().skip(skip).limit(limit);
        const total = await productsModel.countDocuments(); 
        res.status(200).send({
            total,
            product,
            page,
        });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    getProducts,
    createProduct,
};
