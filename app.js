console.log('Express Tutorial')
const http = require('http')

const server = http.createServer((req, res) => {
  // console.log('user hit the server')
  // console.log(req.method)
  // console.log(req.url)
  const url = req.url
  //home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>home page<h1>') //response w przeglądarce
    res.end()
  }
  //about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page<h1>') //response w przeglądarce
    res.end()
  }
  //error page
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>error page - not found<h1>') //response w przeglądarce
    res.end()
  }
})

server.listen(5000)
