const express = require('express')
const app = express()

//app.get
app.get('/', (req, res) => {
  console.log('user hit the resource')
  res.send('<h1>Home Page</h1>')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.all('*', (req, res) => {
  res.send('<h1>Resource not found</h1>')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000')
})
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen
