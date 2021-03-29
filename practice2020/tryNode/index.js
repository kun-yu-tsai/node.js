const express = require('express')
const app = express()

app.get('/',(req,res)=> {
    res.send('Hello!!')
})

app.get('/abc',(req,res)=> {
    res.send('Hello abc!!')
})

app.listen(7000, '127.0.0.1', () => {
    console.log('Server is on!')
})