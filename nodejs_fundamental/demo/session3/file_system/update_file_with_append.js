const fs = require('fs');
fs.appendFile('myfile.txt', ' This is updated content', (err) => {
    if (err) throw err;
    console.log('Updated!');
});