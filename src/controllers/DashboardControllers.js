class DashboardControllers {
  index(req, res) {
    res.send('dashboard')
  }
  show(req, res) {
    res.send('dashboard')
  }
}
module.exports = new DashboardControllers();
