var express = require('express');
//引入连接池模块
var pool = require('./pool');
var router = express.Router();
//添加路由
//1测试接口
router.get("/ajaxDemo", (req,res) => {
   res.send("我的第一个ajax程序aaaaaaa")
});






//导出路由器对象
module.exports=router;