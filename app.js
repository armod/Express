const express = require('express')
const path = require('path')
const app = express()

//setup static and middleware
app.use(express.static('./public'))

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// adding to static assets
// SSR
// })

app.all('*', (req, res) => {
  req.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('Server listening on port 5000....')
})
