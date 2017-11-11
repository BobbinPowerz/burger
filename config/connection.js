//setting up mySQL connection
var mysql = require("mysql");
var connection;
//connecting to jawsdb if jawsd_url is present or else using local database connection
  if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
          connection = mysql.createConnection({
          port: 3306,
          host: "localhost",
          user: "root",
          password: "",
          database: "burgers_db"
        });
  };

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
//exporting connection for use in ORM module
module.exports = connection;