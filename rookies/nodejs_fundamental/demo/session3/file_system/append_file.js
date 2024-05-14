const fs = require('fs');
fs.appendFile('myfile.txt', 'New content', (err) => {
    if (err) throw err;
    console.log('Saved!');
});