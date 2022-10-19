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

router.get('/:id', (req, res) => {
  res.render('places/show')
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  } else if (!places[id]) {
      res.render('error404')
  } else {
      res.render('places/show', { place: places[id], id })
  }
})

router.delete('/places/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  } else if (!places[id]) {
      res.render('error404')
  } else {
      places.splice(i, 1)
      res.redirect('/places')
  }
})


module.exports = router //this should be at bottom
