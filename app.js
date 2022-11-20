const express = require('express')
const app = express()
const logger = require('./logger')
// req => middleware => res

app.get('/', logger, (req, res) => {
  // const method = req.method
  // const url = req.url
  // const time = new Date().getFullYear()
  // console.log(method, url, time)
  return res.send('Home')
})

app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server listening on port 5000...')
})
