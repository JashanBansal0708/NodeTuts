const EventEmitter = require('events');
const emitter = new EventEmitter();
var url = 'http://mylogger.io/log';

function log(message){
    //send an http request
    console.log(message);
    emitter.emit('messageLogged', { id : 1, url : 'https://' });
}

module.exports = log;