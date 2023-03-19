class CustomerControllers {
  index(req, res) {
    res.send('customer')
  }
  show(req, res) {
    res.send('customer')
  }
}
module.exports = new CustomerControllers();
