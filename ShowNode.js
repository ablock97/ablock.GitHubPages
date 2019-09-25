var mongo = require('mongodb')
var url = 'mongodb://localhost:27017/";

mongo.connect("mongodb+srv://cluster0-hv6qw.mongodb.net/test") {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);
