const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 32769,
    database: "TestNode"    // database that we will use
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    const sql = "SELECT * FROM customers Where name=?";
    con.query(sql, ['NashTech'], (err, result, fields) => {
        if (err) throw err;
        console.log(result, fields);
    });
});
