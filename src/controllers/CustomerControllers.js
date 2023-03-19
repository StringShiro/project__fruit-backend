class CustomerControllers {
  index(req, res) {
    res.render('customer')
  }
  show(req, res) {
    res.send('customer')
  }
}
module.exports = new CustomerControllers();
