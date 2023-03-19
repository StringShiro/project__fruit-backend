class OrderControllers {
  index(req, res) {
    res.send('order')
  }
  show(req, res) {
    res.send('order')
  }
}
module.exports = new OrderControllers();
