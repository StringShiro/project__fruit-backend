class ProductControllers {
  index(req, res) {
    res.render("home");
  }
  show(req, res) {
    res.send('home')
    
  }
}
module.exports = new ProductControllers();
