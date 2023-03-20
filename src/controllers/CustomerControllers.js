const Users = require('../models/Users')
const { mutipleMongooseObject } = require("../util/mongoose");

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
  show(req, res) {
    res.send('customer')
  }
}
module.exports = new CustomerControllers();
