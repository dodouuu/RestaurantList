// require packages
const express = require('express')
const app = express()
const port = 3000

// require express-handlebars 
const exphbs = require('express-handlebars')

// require restaurant list by json format
const restaurantList = require('./restaurant.json')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// route setting
app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantList.results }) // first restaurants used in index.handlebars, second restaurantList used in app.js
})

// click a restaurant => show that restaurant detail
app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
  res.render('show', { restaurant: restaurant }) // first restaurant used in show.handlebars, second restaurant used in app.js
})

// query string
app.get('/search', (req, res) => {
  const keywordss = req.query.keyword
  const restaurants = restaurantList.results.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(keywordss.toLowerCase()) || restaurant.category.toLowerCase().includes(keywordss.toLowerCase())
  })

  res.render('index', { restaurants: restaurants, keywords: keywordss })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost: ${port}`)
})