const products = require("../models/products");

class ApiControllers {
    index(req,res){
        res.send('Api')
    }
    async show(req, res, next) {
        const product = await products.find({})
        res.send(product)
    }
    
  }
  module.exports = new ApiControllers();
  