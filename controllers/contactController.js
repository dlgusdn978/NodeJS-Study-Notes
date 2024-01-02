const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//Get all contacts
const getAllcontacts = asyncHandler(async (req, res) => {
  let contacts = await Contact.find();
  res.render("index", { contacts: contacts });
});

// view and contact form
// GET /contacts/add
const addContactForm = (req, res) => {
  res.render("add");
};
const updateContact = (req, res) => {
  res.render("update");
};
const createContacts = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.send("필수 값이 입력되지 않았습니다.");
  }
  res.send("create contacts");
});
module.exports = {
  getAllcontacts,
  createContacts,
  addContactForm,
  updateContact,
};
