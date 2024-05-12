const assert = require('assert');
const isEven = (value) => false;
const isFourEven = isEven(4);

assert(isFourEven, 'isEven(4) does not return falsy');