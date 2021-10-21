var http = require('http')
var url = require('url')
var fs = require('fs')

var server = http.createServer(function(req,res){
    var q = url.parse(req.url, true)
    var filename = q.pathname + ".html"
    fs.readFile(__dirname + filename, function(err,html){
        if(err){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("<h1>A pagina não foi encontrada!</h1")
            res.end()
        }else{
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(html)
            res.end()
        }
    });

}).listen(3000)