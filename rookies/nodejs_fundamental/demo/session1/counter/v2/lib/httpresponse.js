'use strict';

module.exports = ({
                      res     = null,
                      status  = 200,
                      mime    = 'text/plain',
                      content = ''
                  }) => {

    res.writeHead(status, {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': mime,
        'Cache-Control': 'must-revalidate, max-age=0',
        'Content-Length': Buffer.byteLength(content)
    });
    res.end(content);

};