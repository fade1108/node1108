const http = require('http');
var server = http.createServer();
server.listen(8080);
server.on('request', (req, res) => {
    if (req.url === '/login') {
        res.write('this is login page');
        res.end();
    } else if (req.url === '/reg') {
    res.write('this is req page');
        res.end();
    }else if (req.url === '/study'){
        res.writeHead(302,{
            Location:'http://www.tmooc.cn'
        });
        res.end();
    }

});