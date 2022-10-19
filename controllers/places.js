const router = require('express').Router() //this should be at top

router.get('/', (req, res) => {
    let places = [
        {
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, 
      {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
    res.render('places/index', {places})
})


router.get('/new', (req, res) => {
  res.render('places/new')
})

module.exports = router //this should be at bottom
