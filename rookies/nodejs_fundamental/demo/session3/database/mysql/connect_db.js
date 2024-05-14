const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 32769
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});