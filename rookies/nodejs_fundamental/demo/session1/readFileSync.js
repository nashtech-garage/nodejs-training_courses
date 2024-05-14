// append the current date to a file
const fs = require('fs');

try {
    fs.appendFileSync('myfile.txt', new Date());
    console.log('file updated');
}
catch (err) {
    console.log('file update failed:', err);
}
console.log('Dong 11');
