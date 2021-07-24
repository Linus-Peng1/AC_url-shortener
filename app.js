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
  const full = req.body.fullURL
  const short = '1a2a3'

  return ShortUrl.create({ full, short })
    .then(() => res.render('index', { full, short }))
    .catch(error => console.log(error))
})

app.get('/:short', (req, res) => {
  ShortUrl.find({ short: req.params.short })
    .lean()
    .then(shortUrl => {
      if (shortUrl.length === 0) {
        res.redirect('/')
      } else {
        res.redirect(shortUrl[0].full)
      }
    })
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})