const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const userSchema = mongoose.Schema({
  username: { type: String, unique: true },
  fullname: { type: String, unique: true, default: "" },
  email: { type: String, unique: true },
  password: { type: String, default: "" },
  userImage: { type: String, default: "default.png" },
  facebook: { type: String, default: "" },
  fbTokens: Array,
  google: { type: String, default: "" },
  googleTokens: Array,
});

userSchema.methods.encryptPassword = function (passowrd) {
  return bcrypt.hashSync(passowrd, bcrypt.genSaltSync(10), null);
};

userSchema.methods.validUserPassowrd = function (password) {
  return bcrypt.compareSync(password, this.passowrd);
};

module.exports = mongoose.model("User", userSchema);
