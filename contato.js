var http = require('http')

var server = http.createServer(function(req,res){
    res.writeHead(200, {"Content-Type": "text/html"});
    if(req.url == "/"){
        res.write("<h1> Olá</h1")
    }else if (req.url == "/sobre"){
        res.write("<h1> Mundo</h1")
    }else{
        res.write("<h1> Página não foi encontrada!</h1")
    }
    res.end()

}).listen(3000)