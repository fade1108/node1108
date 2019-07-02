const mysql = require('mysql');
var pool = mysql.createPool({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
    database:'tedu',
    connectionLimit:20
});
// pool.query('DELETE FROM emp WHERE eid=32', function (err, result) {
//     //err 可能产生的错误
//     //result sql语句的结果
//     if (err) throw err;
//     console.log(result);
// });
pool.query('delete from emp where eid=?',[30],function (err, result) {
    if (err) throw err;
    console.log(result);
});
//一个网页对应一个接口就是一个路由