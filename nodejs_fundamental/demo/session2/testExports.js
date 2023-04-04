exports.foo = 'Test'
exports.test = 'haha'
console.log('First time, check: ', exports===module.exports);
console.log(module.exports);
module.exports = {a: 'A'};

console.log('After assign data to exports. Check: ', exports===module.exports);
console.log(exports, module.exports);

exports.a = 'Test'
console.log(exports, module.exports);