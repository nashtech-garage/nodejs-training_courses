import { sayHello } from './lib.js';

sayHello();
// => Hello

import { sayHello as say } from './lib.js';

say();
// => Hello

import * as lib from './lib.js';

lib.sayHello();
// => Hello