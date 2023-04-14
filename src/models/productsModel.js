const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productname: {
    type: String,
    max: 30,
    lowercase: true,
    default: "",
  }
  ,
  currency: {
    type: Number,
    default: "",
  },
  weight: {
    type: Number,
    default: "",
  },
  quality: {
    type: Number,
    default: "",
  },
  discount: {
    type: Number,
    default: "",
  },
  codedown: {
    type: String,
    default: "",
  },
  brand: {
    type: String,
    default: "",
  },
  catelogy: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    maxLength: 250,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  dateorder: {
    type: Date,
    default: () => Date.now(),
  },
  sold: {
    type: Number,
    default: "",
  },
  feeShip: {
    type: Number,
    default: "",
  },
});

const Product = mongoose.model("Products", productSchema);
module.exports = Product;
