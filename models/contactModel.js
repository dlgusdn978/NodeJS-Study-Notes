const mysql = require("../config/dbConnect");

const user_name = "name";
const user_email = "email";
const user_phone = "phone";

const Contact = {
  find: async () => {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM Contacts";
      mysql.query(query, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  },
  add: async (req) => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO Contacts VALUES('${req.name}', '${req.email}', '${req.phone}')`;
      mysql.query(query, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  },
  update: async (req) => {
    return new Promise((resolve, reject) => {
      console.log(req.id);
      const query = `SELECT * FROM Contacts WHERE id = ${req.id}`;
      mysql.query(query, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  },
  modify: async (req) => {
    return new Promise((resolve, reject) => {});
  },
};

module.exports = Contact;
