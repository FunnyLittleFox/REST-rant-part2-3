const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>Rest-Rant!</h1>
                <div>
                    <img src="/images/bbq-chicken-pizza.jpg" alt="BBQ Chicken Pizza" />
                    <div>
                        Photo by <a href="https://unsplash.com/@briewilly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chad Montano</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home