const Products = require("../models/productsModel");
class ApiControllers {
  async index(req, res) {
    const products = await Products.find({})
      .then((product) => {
        res.render("users", {
          users: product,
        });
      })
      .catch(next);
  }
  async show(req, res) {
    const product = await Products.find({});
    res.send(product);
  }
  async postproduct(req, res) {
    try {
      const product = await Products.create(
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
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
}
module.exports = new ApiControllers();
