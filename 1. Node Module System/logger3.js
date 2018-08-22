//Extending event emitter

const EventEmitter = require('events');
const emitter = new EventEmitter();
var url = 'http://';

class Logger extends EventEmitter{
    log(message){       // function declaration in class don't requre function keyword
        //Send an http request
        console.log(message);
        this.emit('messageLogged', {id : 1, url : 'http://'});
    }
}
module.exports = Logger;