const Product = require("../models/products");
const { mutipleMongooseObject } = require("../util/mongoose");
const handleFactory = require("../controllers/handlerFactory")
const catchAsync = require("../util/catchAsync")



exports.getAllProducts = handleFactory.getAll(Product)
exports.getOneProduct = handleFactory.getOne(Product)
exports.createProduct = handleFactory.createOne(Product)
exports.updateProduct = handleFactory.updateOne(Product)
exports.deleteProduct = handleFactory.deleteOne(Product)


  // exports.create(req,res,next){
  //   res.render('createproduct')
  // }

  // exports.store(req,res){
  //   // save data
  //   console.log(req.body)
  //   res.json(req.body)
  // }