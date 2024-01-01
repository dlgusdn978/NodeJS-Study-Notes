const asyncHandler = require("express-async-handler");
//Get all contacts
const getAllcontacts = asyncHandler(async (req, res) => {
  res.send("Contact Pages");
});

const createContacts = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.send("필수 값이 입력되지 않았습니다.");
  }
  res.send("create contacts");
});
module.exports = { getAllcontacts, createContacts };
