const router = require('express').Router() //this should be at top
const places = require('/models/places,js')

router.post('/', (req,res) => {
  if (!req.body.pic) {
    //default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.resdirect('/places')
})

router.get('/', (req, res) => {
    res.render('places/index', {places})
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

module.exports = router //this should be at bottom
