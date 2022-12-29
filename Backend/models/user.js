const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Usermodel = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  confirmpassword: {
    type: String,
    require: true,
  },
});
// userschema=define the structure of data

// password hashing
Usermodel.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password =await bcrypt.hash(this.password, 12);
    this.confirmpassword =await bcrypt.hash(this.confirmpassword, 12);
  }
  next();
});
const User = mongoose.model("user", Usermodel);
module.exports = User;
