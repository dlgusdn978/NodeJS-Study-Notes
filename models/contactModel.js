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
};

module.exports = Contact;
