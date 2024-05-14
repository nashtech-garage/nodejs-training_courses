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
    const sql = "INSERT INTO customers (name, address) VALUES('NashTech', '364 Cong Hoa') ";
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Inserted");
    });
});