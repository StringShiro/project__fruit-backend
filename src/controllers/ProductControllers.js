const Product = require("../models/products");
const { mutipleMongooseObject } = require("../util/mongoose");

class ProductControllers {
  
  show(req, res,next) {
    Product.find({})
      .then((products) => {
        res.render("product", {
          products: mutipleMongooseObject(products),
        });
      })
      .catch(next);
  }
  create(req,res,next){
    res.render('createproduct')
  }
  store(req,res){
    // save data
    
    res.json(req.body)
   
  }
}
module.exports = new ProductControllers();
