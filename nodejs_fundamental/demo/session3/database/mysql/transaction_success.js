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
    con.beginTransaction(function(err) {
        if (err) { throw err; }
        // Create table posts, log
        const sql = "CREATE TABLE posts (title VARCHAR(255))";
        con.query(sql, (error, result) => {
            if (error) {
                return con.rollback(function() {
                    throw error;
                });
            }
            console.log("Table posts created");

            const sql = "CREATE TABLE log (data TEXT)";
            con.query(sql, (error, result) => {
                if (error) {
                    return con.rollback(function() {
                        throw error;
                    });
                }
                console.log("Table log created");

                const title = 'The first title';
                con.query('INSERT INTO posts SET title=?', title, function (error, results, fields) {
                    if (error) {
                        return con.rollback(function() {
                            throw error;
                        });
                    }

                    const log = 'Post ' + results.insertId + ' added';
                    con.query('INSERT INTO log SET data=?', log, function (error, results, fields) {
                        if (error) {
                            return con.rollback(function() {
                                throw error;
                            });
                        }
                        con.commit(function(err) {
                            if (err) {
                                return con.rollback(function() {
                                    throw err;
                                });
                            }
                            console.log('success!');
                        });
                    });
                });
            });
        });
    });
});