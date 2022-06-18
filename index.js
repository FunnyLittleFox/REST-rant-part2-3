require('dotenv').config() //must always be at top
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', function(req, res) {
    res.send("Hello World!") // this must be start for homepage any others must come after
})

app.get('*',  (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})
// ??  (req, res) => another way to make a function??

app.listen(process.env.PORT, function(req, res) {
    console.log('Connected to Foxnet')
}) // must always be at bottom
