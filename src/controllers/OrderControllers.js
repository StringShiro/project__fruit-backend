class OrderControllers {
  index(req, res) {
    res.render('order')
  }
  show(req, res) {
    res.send('order')
  }
}
module.exports = new OrderControllers();
