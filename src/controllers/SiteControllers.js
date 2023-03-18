const Product = require("../models/products");

class SiteController {
  index(req, res, next) {
    Product.find({})
      .then((products) => {
        products = products.map(product=>product.toObject())
        
        res.render("home", { products})})
      .catch(next);
  }
  show(req, res) {
    res.send('home')
    
  }
  
}

module.exports = new SiteController();
