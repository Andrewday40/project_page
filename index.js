var express = require('express');
var server = express();

server.use(express.static(__dirname+'/public'));
// Command to add the location for pictures in the server.
server.get('/', function(request, response){
  response.sendFile('public/html/index.html', {root: __dirname});
});

server.get('/about', function(request, response){
  response.sendFile('public/html/about.html', {root: __dirname});
});

server.get('/content', function(request, response){
  response.sendFile('public/html/content.html', {root: __dirname});
});
// Commands for finding and getting to the individual.

server.listen(8080);
