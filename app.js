const express = require('express')
const app = express()
// req => middleware => res

app.listen(5000, () => {
  console.log('Server listening on port 5000...')
})
