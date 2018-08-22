const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listener 
// This is not work because there are two diff object in both files of EventEmitter class
emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
})

const log = require('./logger2');
log('message');
