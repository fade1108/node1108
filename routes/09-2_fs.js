const http = require('http');
var pool = require('./mysql/pool');
//创建HTTP服务器
var server = http.createServer();
//设置服务器监听端口
server.listen(8080);
server.on('request',function (request,responce) {
   //客户端请求的资源
   console.log('客户端请求方式'+request.method);
   console.log('客户端请求地址'+request.url);
   console.log('客户端请求版本'+request.httpVersion);
    //responce 响应客户端的数据
    //设置响应状态码
    responce.statusCode = 200;
    //设置响应主题格式
    responce.setHeader("Content-Type","text/html");
    //输出响应主体
    responce.write("<html>");
    responce.write("<h1>hello NodeJs</h1>");
    responce.write("</html>");
    responce.end();
    //获取post请求的数据
    var obj =request.body;
    //增加
    pool.query('insert into laptop set lid=2',[obj],(err,result)=>{
        if (err){
            throw err;
            //是否添加成功
        }else if (result.affectedRows>0){
            responce.send({code:200,msg:'register suc'});
        }
    })

});


