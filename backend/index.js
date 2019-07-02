const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/src/html/index.html')
})

app.get('/artigos', (req, res) => {
    res.sendFile(__dirname+'/src/html/artigos.html')
})

app.get('/eventos', (req, res) => {
    res.sendFile(__dirname+'/src/html/listEventos.html')
})

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});