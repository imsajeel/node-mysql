const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

Router.post("/user", (req, res) => {
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

Router.post("/sale", (req, res) => {
  const {
    name,
    accname,
    title,
    phone,
    email,
    contactowneralias,
    mailingcountry,
  } = req.body;

  const sql = `INSERT INTO
  salesforce (name, accname, title, phone,email,contactowneralias, mailingcountry)
  VALUES ("${name}","${accname}","${phone}","${title}","${email}","${contactowneralias}","${mailingcountry}")`;

  mysqlConnection.query(sql, (err, result) => {
    if (!err) {
      res.send("success ");
    } else {
      res.send("Error");
    }
  });
});

module.exports = Router;
