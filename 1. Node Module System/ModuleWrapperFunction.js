// This is how every class is converted into in Node.js
// T
(function (exports, require , module , __filename , __dirname){
    var url = 'http://mylogger.io/log';

    function log(message){
        //send an http request
        console.log(message);
    }
    
    // Diff ways to export
    
    module.exports = log;

    module.exports.log = log 

    exports.log = log ;
    
    // exports = log ; exports points to module.exports so it is wrong;
})
