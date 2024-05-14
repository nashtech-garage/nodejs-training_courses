const fs = require('fs');
const folderPath = '.'; // /home/test/

fs.readdir(folderPath, (err, files) => {
    files.forEach(file => {
        console.log(file);
    });
});