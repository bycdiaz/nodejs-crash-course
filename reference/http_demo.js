const http = require('http');

// Create Server object
http.createServer((req, res) => {
  // Write Response
  res.write('Hello World')
  res.end()
})