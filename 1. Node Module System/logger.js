console.log(__filename);
console.log(__dirname);
var url = 'http://mylogger.io/log';
function log(message){
    // sends an http request
    console.log(message);
}

module.exports = log;


// module.exports.endPoint = url;      public interface don't require this. 