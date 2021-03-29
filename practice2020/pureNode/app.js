const http = require('http')

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end("Hello Pure Node")

    console.log(req.headers)
    console.log("~~~~~~~~~")
    console.log(req.url)
})

server.on('reqqq', () => {
    console.log("trigger event reqqq")
})

server.emit('reqqq')

server.listen(3000, "127.0.0.1", () => {
    console.log("Triggered listener.")
})