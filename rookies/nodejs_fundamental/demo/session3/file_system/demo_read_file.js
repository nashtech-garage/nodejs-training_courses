const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    fs.readFile('demo_file_1.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(3000);