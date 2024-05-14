const { getName, getLocation, about } = require('./moduleExport');
console.log(`Company: ${getName()} - ${about}, location: ${getLocation()}`);