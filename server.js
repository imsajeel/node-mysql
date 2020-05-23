const express = require("express");
const bodyParser = require("body-parser");

const home = require("./routes/home");
const salesforceRoutes = require("./routes/salesforce");
const PeopleRoutes = require("./routes/peoples");
const addUser = require("./routes/adduser");

const app = express();
app.use(bodyParser.json());

app.get("/", home);
app.use("/peoples", PeopleRoutes);
app.use("/salesforce", salesforceRoutes);
app.use("/adduser", addUser);

app.get("/todos/:id", function (req, res, next) {
  console.log("Request Id:", req.params.id);
  next();
});

let port = process.env.PORT;

app.listen(port || 3000);
