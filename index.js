var express = require('express');
var server = express ();

server.get('/', function(request, response){
  response.sendFile('public/html/index.html', {root: __dirname});
});



server.listen(8080);
