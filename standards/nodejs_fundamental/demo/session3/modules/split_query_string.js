const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const q = url.parse(req.url, true).query;
    // Query string will have year and month
    const txt = `Query String with Year: ${q.year} - Month: ${q.month}`;
    res.end(txt);
}).listen(8080);

const fs = require('fs');
fs.read