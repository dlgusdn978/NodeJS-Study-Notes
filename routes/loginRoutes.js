const express = require("express");
const router = express.Router();
const {
  getLogin,
  loginUser,
  getRegist,
  registUser,
} = require("../controllers/loginController");

router.route("/").get(getLogin).post(loginUser);
router.route("/register").get(getRegist).post(registUser);
module.exports = router;
