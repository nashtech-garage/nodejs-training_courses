const fs = require('fs');
fs.writeFile('myfile3.txt', 'Hello content 345', (err) => {
    if (err) throw err;
    console.log('Saved');
});