const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => res.sendFile('/Users/kunyutsai/Coder/node.js/practice/tempHtml.html'));

app.listen(port, () => console.log('Listening to port ${port}!'))
