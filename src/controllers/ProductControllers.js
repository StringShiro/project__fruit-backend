const Product = require("../models/productsModel");
const { mutipleMongooseObject } = require("../util/mongoose");
class ProductControllers {
  index(req, res, next) {
    Product.find({})
      .then((product) => {
        res.render("product", {
          product: mutipleMongooseObject(product),
        });
      })
      .catch(next);
  }
  async getproduct(req, res) {
    const product = await Product.find({});
    res.send(product);
  }
  async postproduct(req, res) {
    try {
      const product = await Product.create(
        {
          productname: req.body.productname,
          currency: req.body.currency,
          weight: req.body.weight,
          quality: req.body.quality,
          discount: req.body.discount,
          codedown: req.body.codedown,
          brand: req.body.brand,
          catelogy: req.body.catelogy,
          description: req.body.description,
          sold: req.body.sold,
          image: req.body.image,
        }
        // res.redirect('/addtion')
      );
      res.status(200).json(product);
      // res.redirect('/products')
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  async readid(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndDelete(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
}

module.exports = new ProductControllers();
