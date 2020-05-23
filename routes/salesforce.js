const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

Router.get("/", (req, res) => {
  mysqlConnection.query("SELECT * from salesforce", (err, rows, feilds) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

Router.get("/:id", (req, res) => {
  const { id } = req.params;
  const saleID = parseInt(id);

  mysqlConnection.query(
    `SELECT * from salesforce WHERE id='${saleID}'`,
    (err, rows, feilds) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    }
  );
});

Router.get("/name/:name", (req, res) => {
  mysqlConnection.query(
    `SELECT * from salesforce WHERE name LIKE '%${req.params.name}%'`,
    (err, rows, feilds) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    }
  );
});

Router.get("/acc/:acc", (req, res) => {
  mysqlConnection.query(
    `SELECT * from salesforce WHERE accname LIKE '%${req.params.acc}%'`,
    (err, rows, feilds) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    }
  );
});

Router.get("/country/:country", (req, res) => {
  mysqlConnection.query(
    `SELECT * from salesforce WHERE mailingcountry LIKE '%${req.params.country}%'`,
    (err, rows, feilds) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    }
  );
});

Router.get("/new/limit=:num", (req, res) => {
  mysqlConnection.query(
    `SELECT * from salesforce ORDER BY id DESC LIMIT ${req.params.num}`,
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
