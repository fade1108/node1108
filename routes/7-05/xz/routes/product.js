const express = require('express');
var pool = require('../pool.js');
var router = express.Router();
//完成学子商城的商品模块
//列表  详情  删除   修改  添加
//1.列表详情
router.get('/details', function (req, res) {
    var obj = req.query;
    if (!obj.pid) {
        res.send({
            code: 401, msg: 'uid required'
        });
        return;
    }
    pool.query('SELECT pid,title,details FROM xz_index_product WHERE pid = ?', [obj.pid], function (err, result) {
        if (err) throw err;
        res.send(result);

    })
});
//2.添加
router.post('/increase', function (req, res) {
    var obj = req.body;
    var i = 400;
    for (var key in obj) {
        i++;
        if (!obj[key]) {
            res.send({code: i, msg: key + 'required'});
            return;
        }
    }
    pool.query('INSERT INTO xz_laptop set ?', [obj], function (err, result) {
        if (err) throw err;
        if (result.affectedRows > 0){
            res.send({code:200,msg:'reg success'})
        }

            });
});
//3.删除
router.post('/delete',function (req,res) {
    var obj  = req.body;
    if (!obj.lid){
        res.send({
            code:401,msg:'lid required'
        });
        return;
    }
    //执行sql语句
    pool.query('delete from xz_laptop where lid = ?',[obj.lid],function (err,result) {
        console.log(result);
        if (err) throw err;
        if (result.affectedRows>0){
            res.send({code:200,msg:'删除成功'})
        }
    })
});


//导出模块
module.exports = router;




