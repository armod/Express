// console.log('Express Tutorial')
const http = require('http')
const { readFileSync } = require('fs')

//get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
  // console.log('user hit the server')
  // console.log(req.method)
  // console.log(req.url)
  const url = req.url
  console.log(url)
  //home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(homePage) //response w przeglądarce
    res.end()
  }
  //styles.css
  else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(homeStyles) //response w przeglądarce
    res.end()
  }
  //logo.svg
  else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' })
    res.write(homeImage) //response w przeglądarce
    res.end()
  }
  //logic
  else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' })
    res.write(homeLogic) //response w przeglądarce
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
