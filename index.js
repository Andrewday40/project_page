var express = require('express');
var server = express();


server.get('/', function(request, response){
  response.sendFile('public/html/index.html', {root: __dirname});
});

server.get('/about', function(request, response){
  response.sendFile('public/html/about.html', {root: __dirname});
});

server.get('/content', function(request, response){
  response.sendFile('public/html/content.html', {root: __dirname});
});


server.listen(8080);
