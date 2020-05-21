const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");

const PeopleRoutes = require("./routes/peoples");
const app = express();
app.use(bodyParser.json());

app.use("/peoples", PeopleRoutes);

app.listen(3000);
