class DashboardControllers {
  index(req, res) {
    res.render('dashboard')
  }
  show(req, res) {
    res.send('dashboard')
  }
}
module.exports = new DashboardControllers();
