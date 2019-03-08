// requiring installed packages
const express = require('express')
const bodyParser = require('body-parser')

// constant for port number
const PORT = 8081

// require api route
const api = require('./routes/api')

// instance of express
const app = express()

// specify body-parser to handle JSON data
app.use(bodyParser.json())

// specify api route
app.use('/api', api)

// get request
app.get('/', function (req, res) {
    res.send('Hello from server')
})

// listen to requests on specified port
app.listen(PORT, function () {
    // logging to the console
    console.log('Server running on localhost' + PORT)
})