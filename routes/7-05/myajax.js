const express = require('express');
var router = express.Router();
var pool = require('./pool');
router.get("/myajax_1", (req,res) => {
    res.send("我又写了一遍")
});
//get方法的登录
router.get("/get_login",(req,res)=>{
    //获取参数
    //查询数据库，返回响应
    var $uname=req.query.uname;
    var $upwd=req.query.upwd;
    console.log($upwd);
    if(!$uname){
        res.send("用户名不存在");
        return;
    }
    if(!$upwd){
        res.send("密码不存在");
        return;
    }
    var sql = "select * from xz_user where uname = ? and upwd=?";
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        console.log(result);
        if(err) throw err;
        if (result.length>0){
            res.send("1");
        }else {
            res.send("0");
        }
    });
});
module.exports=router;
