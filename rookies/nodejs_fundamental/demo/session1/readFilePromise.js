const
    fs = require('fs'),
    fsPromise = fs.promises;

fsPromise.appendFile('myfile.txt', new Date())
    .then(() => console.log('file updated'))
    .then(() => console.log('Xong lan 2'))
    .catch(err => console.log('file update failed:', err));
