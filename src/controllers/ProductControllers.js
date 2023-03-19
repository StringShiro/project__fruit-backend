const Product = require("../models/products");
const { mutipleMongooseObject } = require("../util/mongoose");

class ProductControllers {
  index(req, res, next) {
    Product.find({})
      .then((products) => {
        res.render("product", {
          products: mutipleMongooseObject(products),
        });
      })
      .catch(next);
  }
  show(req, res) {
    res.send('home')
  }
}
module.exports = new ProductControllers();
