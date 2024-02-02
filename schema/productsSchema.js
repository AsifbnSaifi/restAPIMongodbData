const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
 
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  discountPercentage: {
    type: Number,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
  },
  stock: {
    type: Number,
    require: true,
  },

  brand: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  thumbnail: {
    type: String,
    require: true,
  },

  images: {
    type: Array,
    require: true,
  },
});

const products = new mongoose.model("product", productSchema);

module.exports = products;
