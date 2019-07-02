const express = require('express');
//引入路由模块
const productRouter = require('./product.js');
var app = express();
app.listen(8080);
//路由级中间件使用
app.use('/product',productRouter);











