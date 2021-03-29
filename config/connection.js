// Set up MySQL connection.
let mysql = require("mysql2");
require("dotenv").config();
let connection;

process.env.JAWSDB_URL
  ? (connection = mysql.createConnection(process.env.JAWSDB_URL))
  : (connection = mysql.createConnection({
      host: process.env.Host || process.env.DB_HOST,
      port: process.env.Port || process.env.DB_PORT,
      user: process.env.Username || process.env.DB_USER,
      password: process.env.Password || process.env.DB_PASSWORD,
      database: process.env.Database || process.env.DB_DATABASE,
    }));

// connection = mysql.createConnection({ host: "localhost", port: 3306, user: "root", password: "passw0rd", database: "burgers_db" });

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
