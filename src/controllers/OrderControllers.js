
class OrderControllers {
  
  index(req, res, next) {

    res.render('order')

  }
  show(req,res){
    res.send('order')
  }
}
module.exports = new OrderControllers();
