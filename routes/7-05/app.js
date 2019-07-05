//所有的中间件都要写到express  web服务器
const express = require('express');
const bodyParser = require('body-parser');
const demoRouter = require('./demo');
const ajaxRouter = require('./myajax');

var app = express();
app.listen(8080);
app.use(express.static('public'));
app.use(express.static('myajax'));
//使用路由器，挂载到/user下   路由器放到最后
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use('/demo', demoRouter);
app.use('/demo2', ajaxRouter);



