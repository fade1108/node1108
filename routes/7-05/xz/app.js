//所有的中间件都要写到express  web服务器
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/users');
const productRouter = require('./routes/product');
var app = express();
app.listen(8080);
app.use(express.static('public'));
//使用路由器，挂载到/user下   路由器放到最后
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use('/user', userRouter);
app.use('/product',productRouter);

