const { mutipleMongooseObject } = require("../util/mongoose");
const Users = require('../models/Users')
class CustomerControllers {
  index(req, res, next) {
    Users.find({})
    .then((users)=>{
      res.render("customer",{
        users:mutipleMongooseObject(users)
      })

    })
    .catch(next)
  }
  async show(req, res, next) {
    res.send('sen')
}
}
module.exports = new CustomerControllers();
