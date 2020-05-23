const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

Router.get("/", (req, res) => {
  mysqlConnection.query("SELECT * from DummyEmails", (err, rows, feilds) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

Router.get("/:id", (req, res) => {
  mysqlConnection.query(
    `SELECT * from DummyEmails WHERE id=${req.params.id}`,
    (err, rows, feilds) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = Router;
