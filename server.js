const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");

const home = require("./routes/home");
const PeopleRoutes = require("./routes/peoples");
const addUser = require("./routes/adduser");

const app = express();
app.use(bodyParser.json());

app.get("/", home);
app.use("/peoples", PeopleRoutes);
app.use("/adduser", addUser);

let port = process.env.PORT;

app.listen(port || 3000);
