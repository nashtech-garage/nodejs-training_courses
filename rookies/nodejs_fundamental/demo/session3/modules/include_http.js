const http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    // Return link of request. example http://localhost:8080/test --> req.url --> /test
    res.write(req.url);
    res.write(req.url);
    res.write(req.url);
    res.write(req.url);
    res.write(req.url);
    res.end('Hello World!');
}).listen(8080);

console.log('Node Started')