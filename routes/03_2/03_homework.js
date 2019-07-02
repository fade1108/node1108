//引入http模块
const http = require('http');
const fs = require('fs');
//引入zlib压缩模块
const zlib = require('zlib');
//创建web服务器
var app = http.createServer();
//监听端口8080
app.listen(8080);
//监听请求，作出响应
app.on('request', function (req, res) {
    if (req.url === '/index') {
        res.write('this is homepage');
        res.end();
    } else if (req.url === '/login') {
        //设置响应的文件类型
        res.writeHead(200, {
            //默认文件类型 纯文本 text/plain
            'Content-Type': 'text/html'
        });
        res.write('<h2>please login</h2>');
        res.end();
    } else if (req.url === '/') {
        res.writeHead(302, {
            Location: '/index'
        });
        res.end();
    } else if (req.url === '/list') {/.
        res.writeHead(200, {
            //默认文件类型 纯文本 text/plain
            'Content-Type': 'text/html',
            //设置内容的压缩类型
            'Content-Encoding': 'gzip'
        });
        //创建文件读取流，然后进行压缩，把压缩的结果发送给浏览器
        //创建gzip压缩
        var gzip = zlib.createGzip();
        fs.createReadStream('fade.html').pipe(gzip).pipe(res);


    } else {
        res.writeHead(404, {});
        res.write('not found');
        res.end();
    }

});
