'use strict';

const
    // default HTTP port
    port = 3000,
    // Node.js modules
    http = require('http'),
    url = require('url');

http.createServer((req, res) => {
    let uri = url.parse(req.url).pathname;
    res.end(uri);
}).listen(port);

console.log(`Page hit at port: ${port}`);