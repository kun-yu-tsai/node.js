async = require('async')
async.parallel({
	first: function(callback){ // this is actually an async function
		// It's extremely important to understand what is the "callback" function in this async function
		// callback is like the "resolve function" in Promise. (See above)
		// It's in charge of giving a result or an error of the Promise.
		console.log('running first async function')
		callback(null, 'result 1')
	},
	second: function(callback){
		// this is an async function
		console.log('running second async function')
		callback(null, 'result 2')
	}
}, function(error, result){
	console.log(result) // print { first: result 1, second: result 2, three: result 3 }
})