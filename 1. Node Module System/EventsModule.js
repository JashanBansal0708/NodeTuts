const EventEmitter = require('events');    // It returns a class
const emitter = new EventEmitter();

// Register a listener
// emitter.on('messageLogged', function(){
//     console.log('Listener called');
// })

// Raise an event
// emitter.emit('messageLogged');




// emitter.on('messageLogged', function(arg){
//     console.log('Listener called', arg);
// });

emitter.on('messageLogged', arg => console.log('Listener called', arg));

emitter.emit('messageLogged', { id:1, url: 'http://'})
