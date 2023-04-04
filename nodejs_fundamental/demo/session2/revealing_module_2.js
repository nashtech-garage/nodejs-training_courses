// Expose module as global variable
const Module = function(){

    // Inner logic
    function sayHello(){
        console.log('Hello');
    }

    // Expose API
    return {
        sayHello: sayHello
    }
}

// Cannot use module as variable
/* const module = new Module();
module.sayHello(); */

const test = new Module();
test.sayHello();
