
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  id:{
    type:Number
  },
  productname: {
    type: String,
    max: 30,
    lowercase: true,
  },
  currency: {
    type: Object,
    default:''
  },
  weight: {
    type: Number,
    default:''
  },
  quality: {
    type: Number,
    default:''
  },
  discount: {
    type: Number,
    default:''
  },
  codeDown: {
    type: String,
    default:''
  },
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
    default:''
  },
  feeShip: {
    type: Number,
    default:''
  }

});

module.exports = mongoose.model("Products", productSchema)