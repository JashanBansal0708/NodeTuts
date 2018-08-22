const Logger = require('./logger3');
const logger = new Logger();

logger.on('messageLogged', arg => console.log('Listener called', arg))

logger.log('message');