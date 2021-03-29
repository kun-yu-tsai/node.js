var async = require('async')

async.parallel({
    one: function (callback) {
        callback(null, 10)
    },
    two: function (callback) {
        callback(null, "hello")
    }
},
    function (err, result) {
        console.log(result)
    })