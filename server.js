// Lave en webserver

//http
var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-type' : 'text/json'});
    res.write('{"title" : "Hello JSON web API", "text" : "If a lot of people love each other, the world would be a better place to live."}');
    res.end();
});

server.listen(3003);