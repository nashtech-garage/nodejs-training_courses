const fs = require('fs');
fs.writeFile('myfile3.txt', 'This is new content', (err) => {
    if (err) throw err;
    console.log('Replaced');
});