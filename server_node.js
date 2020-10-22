const http = require('http');

console.log("Server running @ PORT: 8080")
const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(8080);