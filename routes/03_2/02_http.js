const http = require('http');
var Server = http.createServer();
Server.listen(8080);
Server.on('request',function (req,res) {
   //console.log(req.url,req.method);
   //console.log(req.headers);//头信息
    //responce响应对象作出具体响应
   // res.write('hello');
    //设置响应的头信息和状态码
    res.writeHead(302,{Location:'http://www.tmooc.cn'});
    //end 结束并发送响应内容到浏览器
    // favicon.cn网页小图标
    res.end();
});

