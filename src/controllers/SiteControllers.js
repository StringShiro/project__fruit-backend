
class SiteController {
  index(req, res, next) {
    res.send('home')
  }
  show(req, res) {
    res.send("home");
  }
}

module.exports = new SiteController();
