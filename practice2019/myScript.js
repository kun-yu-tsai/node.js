var myModule = require('./myModule');
var log = require('./log');

console.log(myModule.myFun());
log.info("test this log");

console.log(log.david);

log.aNewFunction("12345");

