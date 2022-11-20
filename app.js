const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')
// req => middleware => res
// app.use('/api', logger)
// app.use([logger, authorize])
// app.use(express.static('./public'))
app.use(morgan('tiny'))
// api/home/about/products
app.get('/', (req, res) => {
  res.send('Home')
  // const method = req.method
  // const url = req.url
  // const time = new Date().getFullYear()
  // console.log(method, url, time)
})

app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
// app.get('/api/items', [logger, authorize], (req, res) => {
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server listening on port 5000...')
})
