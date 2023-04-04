const fs = require('fs');
fs.rename('myfile.txt', 'myfile1.txt', (err) => {
    if (err) throw err;
    console.log('File Renamed!');
});