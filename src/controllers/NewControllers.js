class NewControllers{
    index(req,res){
        res.send('products')

    }
    show(req,res){
        res.send('products 2')
    }
}
module.exports = new NewControllers