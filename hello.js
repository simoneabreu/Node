var http = require('http')

var server = http.createServer(function(req, res){
    res.end("Hello!!!!")
}).listen(3000);