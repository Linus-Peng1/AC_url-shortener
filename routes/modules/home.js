const express = require('express')
const router = express.Router()

const ShortUrl = require('../../models/shortUrl')
const shortUrlGenerate = require('../../utils/generate_shortUrl')

// home page
router.get('/', (req, res) => {
  res.render('index')
})

router.post('/shortURL', (req, res) => {
  const full = req.body.fullURL
  let short = ''

  ShortUrl.find()
    .lean()
    .then(allUrls => {

      // 檢查輸入網址是否已存在
      existUrl = allUrls.filter(eachUrl => eachUrl.full === full)
      if (existUrl.length === 1) {
        short = existUrl[0].short
      } else {
        short = shortUrlGenerate(5)

        // 檢查 short-URL 是否已存在
        while (allUrls.some(eachUrl => eachUrl.short === short)) {
          short = shortUrlGenerate(5)
        }
        return ShortUrl.create({ full, short })
      }
    })
    .then(() => res.render('index', { full, short }))
    .catch(error => console.log(error))
})

router.get('/:short', (req, res) => {
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

module.exports = router
