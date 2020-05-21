const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.send(
    `
    <h1>Welcome to home</h1>
    <a href="/peoples">/peoples</a>
    <br/>
    <a href="/adduser">/adduser</a>
    `
  );
});

module.exports = Router;
