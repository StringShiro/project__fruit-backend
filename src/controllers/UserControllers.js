const Users = require("../models/usersModel");
const { mutipleMongooseObject } = require("../util/mongoose");

class UserControllers {
  index(req, res) {
    res.send("helo");
  }
  async show(req, res) {
    res.render("404");
  }
  async create(req, res) {
    try {
      const user = await Users.create({
        username: req.body.username,
        email:req.body.email,
        password:req.body.password,
        passwordconfirm:req.body.passwordconfirm,
        phone:req.body.phone
      });
      res.status(200).json(user);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
}

module.exports = new UserControllers();
