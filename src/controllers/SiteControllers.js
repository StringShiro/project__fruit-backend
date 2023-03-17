const Products = require('../models/Product')
class SiteController{
    index(req,res){
        Products.find({}, function(err, product){
            if(!err) {
                res.json(product)
            }
            else{
                res.status(400).json({error:"error!!!"})
            }
        })
    }
}

module.exports = new SiteController