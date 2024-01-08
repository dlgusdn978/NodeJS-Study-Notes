const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
require("dotenv").config();

const jwtSecret = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

// get login page
// get/
const getLogin = (req, res) => {
  res.render("home");
};

// Login user
// POST
const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.json({ message: "일치하는 사용자가 없습니다." });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.json({ message: "비밀번호가 일치하지 않습니다." });
  }

  const token = jwt.sign({ id: user.id }, jwtSecret);
  res.cookie("token", token, { httpOnly: true });
  res.redirect("/contacts");
});

// regist page
// get/register
const getRegist = (req, res) => {
  res.render("regist");
};

// regist user
// post/register
const registUser = asyncHandler(async (req, res) => {
  const { username, password1, password2 } = req.body;
  if (password1 == password2) {
    const hashedPassword = await bcrypt.hash(password1, 10);
    const user = await User.regist({ username, hashedPassword });
    res.json({ mesage: "Register Successfully", user });
  } else {
    res.send("Regist fail");
  }
});
module.exports = { getLogin, loginUser, getRegist, registUser };
