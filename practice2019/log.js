var log = {
	info: function(info){
		console.log('Info:' + info);
	},
	error: function(error){
		console.log('Error:'+ error);
	}
};

module.exports = log;
module.exports.david = 101;
module.exports.aNewFunction = function(a){
	console.log("print " + a);
};