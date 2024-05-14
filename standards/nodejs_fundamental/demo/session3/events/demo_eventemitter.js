const events = require('events');
const eventEmitter = new events.EventEmitter();

// Create an event handler
const myEventHandler = () => {
    console.log('I hear a scream!!! Really');
}

const helloHandler = () => {
    console.log('Hello now');
}

// Assign the event handler to an event
eventEmitter.on('scream', myEventHandler);
eventEmitter.on('hello', helloHandler);

// Fire the 'scream' event
eventEmitter.emit('scream');
eventEmitter.emit('hello');