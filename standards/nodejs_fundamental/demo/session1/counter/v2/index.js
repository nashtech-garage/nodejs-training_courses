'use strict';

const
    // default HTTP port
    port = 3000,

    // Node.js modules
    http = require('http'),
    url = require('url'),

    // page counter object
    pagehit = new (require('./lib/pagehit'))(),

    // HTTP response
    httpResponse = require('./lib/httpresponse');


// new server
http.createServer((req, res) => {

    // get referring page count
    let count = pagehit.count(req);

    // error: referring page not found
    if (!count) {

        httpResponse({ res, status: 400, content: 'No referrer' });
        return;

    }

    // send appropriate response
    let uri = url.parse(req.url).pathname;
    switch (uri) {

        // JavaScript document.write() counter
        case '/counter.js':

            httpResponse({
                res,
                mime: 'application/javascript',
                content: `document.write('<span class="pagecounter">${count}</span>');`
            });
            break;

        // error: invalid HTTP request
        default:
            httpResponse({ res, status: 404, content: 'Not found' });
            break;

    }

}).listen(port);

console.log(`page hit web service running on port ${port}`);