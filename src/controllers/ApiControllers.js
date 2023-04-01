const products = require("../models/products");
const users = require("../models/Users")
class ApiControllers {
    index(req,res){
        res.send('Api')
    }
    async show(req, res, next) {
        const product = await products.find({})
        res.send(product)
    }
    async shuser(req,res, next){
        const user = await users.find({})
        res.send(user)
    }
  }
  module.exports = new ApiControllers();
  