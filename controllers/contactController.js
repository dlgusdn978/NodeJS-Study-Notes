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

const createContacts = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.send("필수 값이 입력되지 않았습니다.");
  }
  let result = await Contact.add(req.body)
    .then((response) => {
      res.redirect("/contacts");
    })
    .catch((response) => {
      return res.send("값이 중복되었습니다.");
    });
});

const getContact = asyncHandler(async (req, res) => {
  let contact = await Contact.getContact(req.params);
  res.render("update", { contact: contact[0] });
});

const updateContact = asyncHandler(async (req, res) => {
  let contact = await Contact.update(req.body);
  res.redirect("/contacts");
});

const deleteContact = asyncHandler(async (req, res) => {
  await Contact.delete(req.params);
  res.redirect("/contacts");
});
module.exports = {
  getAllcontacts,
  createContacts,
  addContactForm,
  updateContact,
  getContact,
  deleteContact,
};
