var _ = require('underscore');

// require checks in this order
// Core Modules
// File or folder
// node_modules

var result = _.contains([1,2,3], 2);
console.log(result);