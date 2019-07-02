//内置中间件
const express = require('express');
var app = express();
app.listen(8080);
//把所有的静态资源托管到一个目录下 public
//当浏览器请求静态资源会自动到public下寻找，不需要再单独的创建路由响应文件
app.use(express.static('D:\\fadedallylife\\day01\\node1108\\public'));


















