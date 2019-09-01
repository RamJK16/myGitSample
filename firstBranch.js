var http = require('http');

http.createServer(function (req,res) {
  console.log('Hello World from Console -1st Branch');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World --JK here from 1st Branch\n');
}).listen(3000, "127.0.0.1");

console.log('Server running at http://127.0.0.1:3000/');
console.log('1st Branch');
