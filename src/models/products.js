
const mongoose = require('mongoose')
const priceProduct = new mongoose.Schema({
    currency: {
      type: Object,
      
    },
    weight: {
      type: Number,
      
    },
    quality: {
      type: Number,
      
    },
    discount: {
      type: Number,
      
    },
    codeDown: {
      type: String,
      
    }
  });

const productSchema = new mongoose.Schema({
  id:{
    type:Number
  },
  productname: {
    type: String,
    max: 30,
    
    lowercase: true,
  },
  cost:priceProduct,
  brand: {
    type: String,
    
  },
  catelogy: {
    type: String,
    
  },
  description: {
    type: String,
    maxLength: 250,
    
  },
  image: {
    type:String,
  },
  dateOrder: {
    type: Date,
    default: () => Date.now(),
    
  },
  sold: {
    type: Number,
    
  },
  feeShip: {
    type: Number,
    
  }

 
});

module.exports = mongoose.model("Products", productSchema)