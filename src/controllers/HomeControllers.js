
class SiteController {
  index(req, res, next) {
    res.render('home')
  }
  async addproduct(req,res){
    res.render('addproduct')
  }
}

module.exports = new SiteController();
