const router = require('express').router() //this should be at top

router.get('/', (req, res) => {
    res.send('GET /places')
})

module.exports = router //this should be at bottom