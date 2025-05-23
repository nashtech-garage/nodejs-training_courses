const url = require('url');
const currentDate = new Date();
const adr = `http://localhost:8080/default.htm?year=${currentDate.getFullYear()}&month=${currentDate.getMonth() + 1}`;
const q = url.parse(adr, true);

console.log(q);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2020&month=5'

const qdata = q.query; //returns an object: { year: 2020, month: 5 }
console.log(qdata.month); //returns 'february'