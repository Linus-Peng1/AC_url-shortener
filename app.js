const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayput: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/shortURL', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})