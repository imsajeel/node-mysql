const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

Router.post("/", (req, res) => {
  const { name, email } = req.body;

  const sql = `INSERT INTO DummyEmails (name,email) VALUES ("${name}","${email}")`;

  mysqlConnection.query(sql, (err, result) => {
    if (!err) {
      res.send("success ");
    } else {
      res.send("Error");
    }
  });
});

module.exports = Router;
