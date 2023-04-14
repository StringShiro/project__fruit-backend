const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    max: 30,
    required: true,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  position: {
    type: String,
  },
  avatar: {
    type: String,
    default:"https://ik.imagekit.io/alejk5lwty/image/73d7c068ddf4bb78a711f72f440b91ed-removebg-preview.png?updatedAt=1678593174049",
  },
  role: {
    type: String,
    enum: ["user", "guide", "lead-guide", "admin"],
    default: "user",
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },
  passwordconfirm: {
    type: String,
    required: [false, "Please confirm your password"],
    validate: {
      validator(el) {
        return el === this.password;
      },
      message: "Passwords are not the same!",
    },
  },
  passwordChangedAt: {
    type: Date,
    default: Date.now(),
  },
  passwordResetToken: {
    type: String,
    default: Date.now(),
  },
  passwordResetExpires: {
    type: Date,
    default: Date.now(),
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

const User = mongoose.model("Users", userSchema);
module.exports = User;
