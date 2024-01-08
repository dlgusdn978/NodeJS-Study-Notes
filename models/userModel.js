const mysql = require("../config/dbConnect");

const User = {
  regist: async (req) => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO User VALUES ('${req.username}','${req.hashedPassword}')`;
      mysql.query(query, (err) => {
        if (err) {
          reject(false);
        } else {
          resolve(true);
        }
      });
    });
  },
  findOne: async (req) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM User WHERE name='${req.username}'`;
      mysql.query(query, (err, res) => {
        if (err) {
          reject(false);
        } else {
          console.log(res[0]);
          resolve(res[0]);
        }
      });
    });
  },
};

module.exports = User;
