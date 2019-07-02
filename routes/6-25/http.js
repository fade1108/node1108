const http = require('http');
const fs = require('fs');
const zlib = require('zlib');
var server = http.createServer();
server.listen(8080);
server.on('request', (req, res) => {
    if (req.url === '/login') {
        res.write('this is login page');
        res.end();
    } else if (req.url === '/reg') {
        res.write('this is req page');
        res.end();
    } else if (req.url === '/study') {
        res.writeHead(302, {
            Location: 'http://www.tmooc.cn'
        });
        res.end();
    } else if (req.url === '/index') {
        var gzip = zlib.createGzip();
        res.writeHead(200, {//设置网页显示头信息
            'Content-Type': 'text/html',
            'Content-Encoding':'gzip'

        });
        fs.createReadStream('tmooc.html').pipe(gzip).pipe(res);

    }

});