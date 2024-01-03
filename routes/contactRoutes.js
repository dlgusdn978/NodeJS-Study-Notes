const express = require("express");
// const mysql = require("mysql");

const router = express.Router();
// const dbconfig = require("../config/dbConnect");
// const connection = mysql.createConnection(dbconfig);

const {
  getAllcontacts,
  createContacts,
  addContactForm,
  updateContact,
} = require("../controllers/contactController");
// 연락처 가져오기.
router.route("/").get(getAllcontacts);
router.route("/:id").get(updateContact);
router.route("/add").get(addContactForm).post(createContacts);

// router
//   .route("/:id")
//   .get((req, res) => {
//     connection.query("SELECT * FROM Users", (error, rows) => {
//       if (error) throw error;
//       console.log("User info : ", rows);
//       res.send(rows);
//     });
//   })
//   .put((req, res) => {
//     res.send(`Update Contact for ID : ${req.params.id}`);
//   })
//   .delete((req, res) => {
//     res.send(`Delete Contact for ID : ${req.params.id}`);
//   });

module.exports = router;
