const express = require('express');
var router = express.Router();
var pool = require('./pool');
//get方法的登录
router.get("/get_login", (req, res) => {
    //获取参数
    //查询数据库，返回响应
    var $uname = req.query.uname;
    var $upwd = req.query.upwd;
    console.log($upwd);
    if (!$uname) {
        res.send("用户名不存在");
        return;
    }
    if (!$upwd) {
        res.send("密码不存在");
        return;
    }
    var sql = "select * from xz_user where uname = ? and upwd=?";
    pool.query(sql, [$uname, $upwd], (err, result) => {
        console.log(result);
        if (err) throw err;
        if (result.length > 0) {
            res.send("1");
        } else {
            res.send("0");
        }
    });
});
//3.restful规则登录
router.get("/login/:uname&:upwd", (req, res) => {
    //获取数据
    var $uname = req.params.uname;
    var $upwd = req.params.upwd;
    console.log($uname + "..." + $upwd);
    //查询数据库
    var sql = "select * from xz_user where uname = ? and upwd=?";
    pool.query(sql, [$uname, $upwd], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send("1");
        } else {
            res.send("0");
        }
    });
});
//4.post 登录
router.post("/post_login", function (req, res) {
    //获取前台数据
    console.log(1111);
    var $uname = req.body.uname;
    var $upwd = req.body.upwd;

    if (!$uname) {
        res.send("用户名为空");
        return;
    }
    if (!$upwd) {
        res.send("密码为空");
        return;
    }
    //查询数据库
    var sql = "select * from xz_user where uname=? and upwd=?"
    pool.query(sql, [$uname, $upwd], (err, result) => {
        if (result.length > 0) {
            res.send("1");
        } else {
            res.send("0");
        }
    })


});
//5.userlist 查询所有用户
router.get("/userlist", (req, res) => {
    var sql = 'select * from xz_user';
    pool.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
});


module.exports = router;
