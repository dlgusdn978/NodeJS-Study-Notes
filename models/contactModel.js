const mysql = require("../config/dbConnect");

let User = function (user) {
  this.user_name = user.user_name;
  this.user_email = user.user_email;
  this.user_phone = user.user_phone;
};

module.exports = User;
