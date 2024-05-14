// append the current date to a file
const fs = require('fs');

fs.appendFile('myfile.txt', new Date(), (err) => {

    if (err) {
        console.log('file update failed:', err);
    }
    else {
        console.log('file updated');
    }

});
console.log('Dong 14');