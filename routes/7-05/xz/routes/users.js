var express = require('express');
//引入连接池模块
var pool = require('../pool.js');
var router = express.Router();
//1.注册路由
router.post('/reg', function (req, res) {
    var obj = req.body;
    //验证每一项是否为空
    //如果用户名为空
    if (!obj.uname) {
        res.send({
            code: 401, msg: 'uname required'
        });
        //结束函数执行
        return;
    }
    if (!obj.upwd) {
        res.send({code: 402, msg: 'upwd required'});
        return;
    }
    if (!obj.phone) {
        res.send({code: 403, msg: 'phone required'});
        return;
    }
    if (!obj.email) {
        res.send({code: 404, msg: 'email required'});
        return;
    }
    //使用连接池
    pool.query('INSERT INTO xz_user set ?', [obj], function (err, result) {
        if (err) throw err;
        //console.log(result);
        if (result.affectedRows > 0) {
            res.send({code: 200, msg: 'reg succees'});
        }
    })
});
//2.登录路由
/*
post
url:/user/login
1获取数据
2.验证数据是否为空
3.执行sql语句
 */
router.post('/login', function (req, res) {
    var obj = req.body;
    if (!obj.uname) {
        res.send({
            code: 401, msg: 'uname required'
        });
        return;
    }
    if (!obj.upwd) {
        res.send({
            code: 402, msg: 'upwd required'
        })
    }
    pool.query('select * from xz_user where uname=? AND upwd=?', [obj.uname, obj.upwd],
        function (err, result) {
            if (err) throw err;

            //判断登录成功还是失败
            if (result.length > 0) {
                res.send({code: 200, msg: '登陆成功'});
            } else {
                res.send({code: 301, msg: '用户名密码错误'});
            }

        })
});
//
/*
获取数据
是否为空
sql语句  查询某个编号
 */
//3.检索用户
router.get('/detail', function (req, res) {
    var obj = req.query;
    if (!obj.uid) {
        res.send({code: 401, msg: 'uid required'});
        return;
    }
    pool.query('select * from xz_user where uid=?', [obj.uid], function (err, result) {
        if (err) throw err;
        res.send(result);
    })
});
//4.修改用户
/*
post /user/update
获取数据
是否为空
sql语句
1
 */
router.post('/update', function (req, res) {
    var obj = req.body;
    var i = 400;
    for (var key in obj) {
        i++;
        if (!obj[key]) {
            res.send({code: i, msg: key + 'required'});
            return;
        }
    }
    var uid = obj.uid;
    delete obj.uid;
    pool.query('UPDATE xz_user SET ? WHERE uid=?',
        [obj, uid],
        function (err, result) {
            if (err) throw err;
            if (result.affectedRows > 0) {
                res.send({code: 200, msg: '修改成功'})
            } else {
                res.send({code: 300, msg: '修改失败'})
            }
        })
});
//5.用户列表
/*
1.获取数据
2.如果为空设置默认值
3.将值转为整型
4.计算开始的值
5.执行sql语句
 */
router.get('/list', function (req, res) {
    var obj = req.query;
    obj.count = parseInt(obj.count);//每页显示数量
    obj.pno = parseInt(obj.pno);//页码
    if (!obj.count) {
        //count 默认为空每页显示数量为3条数据
        obj.count = 3;
    }
    if (!obj.pno){
        //pno 默认开始页数为1
        obj.pno = 1;
    }
    //计算每页的开始
    var start = (obj.pno-1)*obj.count;
    pool.query('select * from xz_user limit ?,?',[start,obj.count],
        function (err,result) {
        if(err) throw err;
        res.send(result);
    });
});
//6.删除用户
router.get('/delete',function(req,res){
    //6.1获取数据
    var obj=req.query;
    //6.2验证是否为空
    if(!obj.uid){
        res.send({code:401,msg:'uid required'});
        return;
    }
    //6.3执行SQL语句
    pool.query('DELETE FROM xz_user WHERE uid=?',[obj.uid],function(err,result){
        if(err) throw err;
        //判断是否删除成功
        if(result.affectedRows>0){
            res.send({code:200,msg:'delete success'});
        }else{
            res.send({code:301,msg:'delete error'});
        }
    });
});


module.exports = router;














