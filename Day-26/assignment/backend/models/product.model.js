const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
  },
  category: {
    type: String,
  },
  desc: {
    type: String,
  },
  price:{
    type: Number,
  },
  image:{
    type: String,
  }
});

const productsModel = mongoose.model("products", productSchema);
module.exports = {productsModel};