const http = require('http');
const myDT = require('./my_module');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`Current Date Time: ${myDT.myDateTime()}`);
}).listen(3000);