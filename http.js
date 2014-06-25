//Load the node module needed to run an HTTP server. This module is standard in node.
var http = require('http');

http.createServer(function (req, res) { //Create a server object
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1'); //Call the listen method on on the server object
console.log('Server running at http://127.0.0.1:1337/');

//View source on the server - no HTML!