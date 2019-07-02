//express
/*
基于nodejs。的web开发框架
 */
//引入express模块
const express = require('express');
//创建服务器
var app = express();
//监听端口
app.listen(8080);
//使用路由来接受请求并作出响应
/*
一个路由只能处理一个请求

 */
//请求的方法
app.get('/login',function (req,res) {
   res.send('this is resgist html');
});
app.get('/reg',function (req,res) {
   res.send('213<br>sadsad');

});

app.get('/study',function (req,res) {
    //console.log(__dirname);
    res.sendFile(__dirname+'/tmooc.html')
});
app.get('/index',function (req,res) {
   res.redirect('http://www.baidu.com');
});
app.get('/',function (req,res) {
   res.redirect('/study');
});
app.get('/detail',function (req,res) {
    // console.log(req.method,req.url);
    // console.log(req.header());
    //获取查询字符串的数据
    console.log(req.query);

    res.send('12345');
});
//路由传参
app.get('/shopping/:price',function (req,res) {
   //获取路由传递的数据
    console.log(req.params);
    res.send('这是购物车');
});
app.get('/admin/:uname/:upwd',function (req,res) {
   console.log(req.params);
   res.send('用户名密码');
});



































