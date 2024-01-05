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
      const query = `INSERT INTO Contacts(name, email, phone) VALUES('${req.name}', '${req.email}', '${req.phone}')`;
      console.log(req.name);
      mysql.query(query, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  },
  getContact: async (req) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM Contacts WHERE id=${req.id}`;
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
    console.log(req);
    return new Promise((resolve, reject) => {
      const query = `UPDATE Contacts SET name='${req.name}', email='${req.email}', phone='${req.phone}' WHERE id='${req.id}'`;
      mysql.query(query, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  },
  delete: async (req) => {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM Contacts WHERE id='${req.id}';`;
      console.log(query);
      mysql.query(query, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  },
};

module.exports = Contact;
