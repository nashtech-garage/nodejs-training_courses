'use strict';

const fs = require('fs');

exports = function summarizeFilesInDirectorySync(directory) {
    return fs.readdirSync(directory).map(fileName => ({
        directory,
        fileName,
    }));
}
