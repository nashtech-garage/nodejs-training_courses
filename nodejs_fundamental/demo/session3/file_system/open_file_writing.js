const fs = require('fs');
fs.open('myfile2.txt', 'w', (err) => {
    if (err) throw err;
    console.log('Saved');
});