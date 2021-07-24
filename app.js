const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')

const app = express()
const port = 3000
const MONGODB_URI = 'mongodb://localhost/url-shortener'

app.engine('hbs', exphbs({ defaultLayput: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/shortURL', (req, res) => {
  const fullUrl = req.body.fullURL
  const shortUrl = '12345'

  return ShortUrl.create({ full: fullUrl, short: shortUrl })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})