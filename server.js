const express = require('express');
const morgan = require('morgan');
const campsiteRouter = require('./routes/campsiteRouter')
const promotionRouter = require('./routes/promotionRouter')
const partnerRouter = require('./routes/partnerRouter')

// Constants to be used
const HOST = 'localhost'
const PORT = 3000;

// init the app
const app = express();

// set all middlewares
app.use(morgan('dev'))
app.use(express.json());
app.use(express.static(__dirname + '/public'))

// register all routes
app.use('/campsites', campsiteRouter)
app.use('/promotions', promotionRouter)
app.use('/partners', partnerRouter)

// default route
app.use((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html');
    res.end(`<html><body><h1>This is an Express Server</h1></body></html>`)
})

// start the server
app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`)
})