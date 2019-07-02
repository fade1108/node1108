const express = require('express');
const querystring =  require('querystring');
//引入body-parser中间件
const bodyParser=require('body-parser')
var app = express();
app.listen(8080);
app.use(express.static('D:\\fadedallylife\\day01\\node1108\\public\\html'));
//将post请求的数据解析为对象
app.use(bodyParser.urlencoded({
    extended:false //不使用第三方的qs模块，而是使用核心模块querystring来解析查询字符串为对象

}));
app.post('/mylogin',function (req,res) {
   res.send('登录成功');
   // req.on('data',function (mydata) {
   //     //console.log(mydata,typeof mydata);
   //   var obj = querystring.parse(
   //       mydata.toString()
   //   )  ;
   //   console.log(obj);
   // });
console.log(req.body);
});