module.exports.a = 12345
module.exports.b = "b"
exports.c = "c"

/*
    var module =
    {
        exports:{
            a: 12345,
            b: "b",
            c: "c"
        }
    }

    var exports = module.exports

    I can reference modules.exports to something else, but I can't reference exports to sth else.

    So, when I call require in other file. e.g.
    var module2InOtherFile = require('/modules2')
    這個 module2InOtherFile = exports:{ }  // 是那個 export content 而已唷，不是整個 module.

    也就是說，我可以用
    module2InOtherFile.a, module2InOtherFile.b, module2InOtherFile.c
*/