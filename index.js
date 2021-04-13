const mysql = require("mysql2");

const connection = mysql.createConnection({
  database: "paragon_ci",
  host: "localhost",
  port: 3306,
  user: "admin",
  password: "password",
});

connection.connect((error) => {
  if (error) {
    console.error("error is there");
  }

  connection.query("select * from users;");
});
