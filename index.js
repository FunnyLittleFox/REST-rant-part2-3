//npm downloaded requirements
require('dotenv').config() //must always be at top
const express = require('express')
const app = express()

app.set('view engine', 'jsx')

//app.engine('jsx'. require('express-react-views').createEngine())
//^ not working? Why?

//app.use('/places', require('./controllers/places'))
//^ not working? Why?

app.get('/', (req, res) => {
    res.render('home') // this must be start for homepage any others must come after
})

app.get('*',  (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT, (req, res) => {
    console.log('Connected to Foxnet')
}) // must always be at bottom
