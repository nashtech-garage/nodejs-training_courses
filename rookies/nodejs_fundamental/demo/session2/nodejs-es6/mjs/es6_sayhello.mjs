import sayHello from './default_lib.mjs';

sayHello();
// => Hello

import { sayHello as say } from './lib.mjs';

say();
// => Hello

import * as lib from './lib.mjs';

lib.sayHello();
// => Hello

lib.sayGoodbye();
// => Goodbye