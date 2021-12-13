const express = require('express');

const HOST = 'localhost'
const PORT = 3000;


const app = express();

app.use((req, res) => {
    console.log(req.headers)
    res.statusCode = 200
    res.setHeaders('Content-Type', 'text/html');
    res.end(`<html><body><h1>This is an Express Server</h1></body></html>`)
})

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`)
})