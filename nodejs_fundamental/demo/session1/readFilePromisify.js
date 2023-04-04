const
    util = require('util'),
    fs = require('fs'),
    appendFilePromise = util.promisify(fs.appendFile);

appendFilePromise('myfile.txt', new Date())
    .then(() => console.log('file updated'))
    .then(() => console.log('file updated 2'))
    .catch(err => console.log('file update failed:', err))
    .finally(() => console.log('Call anytime'));
