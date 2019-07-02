//中间件：为主要的业务逻辑服务，接受请求做出响应
//应用级中间件，路由级中间件，第三方中间件，错误处理中间件
const express = require('express');
var app = express();
app.listen(8080);
//验证是否为空
//拦截处理的url
app.use('/reg',function (req,res,next) {

    //验证是否为空
    res.send('用户名不能为空');
    //执行下一个中间件或者路由
    next();
});

app.get('/reg',function (req,res) {
   res.send('注册成功')
});












