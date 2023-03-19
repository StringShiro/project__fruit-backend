class SiteController {
  index(req, res, next) {
    res.render('home')
  }
  show(req, res) {
    res.render("home");
  }
}

module.exports = new SiteController();
