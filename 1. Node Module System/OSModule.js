const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total memeory : ${totalMemory}`);
console.log(`Free Memery : ${freeMemory}`);