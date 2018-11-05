// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Welcome1",
    database: "burger_db"
  });
}
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

// Host	h40lg7qyub2umdvb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	
// Username	ei2gqm5j5ldnkak4	
// Password	u7gss8b804ft1dj1
