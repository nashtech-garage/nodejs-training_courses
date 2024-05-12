// Expose module as global variable
const singleton = function(){

    // Inner logic
    function sayHello(){
        console.log('Hello');
    }

    // Expose API
    return {
        sayHello: sayHello
    }
}()

// Access module functionality
singleton.sayHello();
// => Hello