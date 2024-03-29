const React = require('react')
const Def = require('./default')

function places () {
    return (
        <Def>
            <main>
                <h1>places</h1>
            </main>
        </Def>
    )
}

function index (data) {
    let placesFormatted = data.places.map((place, index) => {
        return (
          <div className="col-sm-6">
            <h2>
              <a href={`/places/${index}`} >
                {place.name}
              </a>
            </h2>
            <p className="text-center">
              {place.cuisines}
            </p>
            <img src={place.pic} alt={place.name} />
            <p className="text-center">
              Located in {place.city}, {place.state}
            </p>
          </div>
        )
      })
      
    return (
        <Def>
            <main>
                <h1>RESTaurants to RANT about!</h1>
                <div clacssName="row">
                {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

//EXPORT THAT FLUFF
module.exports = places