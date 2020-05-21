const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: "sql12.freemysqlhosting.net",
  user: "sql12342351",
  password: "xaCgGSzKtS",
  database: "sql12342351",
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Connected");
  } else {
    console.log("Connection failed");
  }
});

module.exports = mysqlConnection;
