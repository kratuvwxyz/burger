// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "us-cdbr-iron-east-01.cleardb.net",
    port: 3306,
    user: "bde71e82e38966",
    password: "328dec2d",
    database: "heroku_27bc9d2ff2940aa"
});

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;