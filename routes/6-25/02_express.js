const express = require('express');
const querystring = require('querystring');
var app = express();
app.listen(8080);
app.get('/login',function (req,res) {
res.sendFile(__dirname+'/'+'login.html')
});
//post 只能通过表单提交
app.post('/login',function (req,res) {
   res.sendFile(__dirname+'/'+'login.html')
});
app.post('/mylogin',function (req,res) {
    res.send('登录成功');
    req.on('data', (mydata) =>{
        var a = mydata.toString();
        var b =querystring.parse(a);
       console.log(b);
    });
});

app.get('/reg',function (req,res) {
    res.sendFile(__dirname+'/'+'reg.html');
});
//get请求的数据出现在地址栏中
app.get('/myreg',function (req,res) {
    var a =
   res.send('注册成功，您的手机号码为'+req.query.tele);
   console.log(req.query);
});

















