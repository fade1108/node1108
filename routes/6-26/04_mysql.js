const mysql = require('mysql');
//创建连接对象
var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'tedu'
});
//建立连接
connection.connect();
//执行sql语句
connection.query('DELETE FROM emp WHERE eid=3', function (err, result) {
    //err 可能产生的错误
    //result sql语句的结果
    if (err) throw err;
    //console.log(result);
});
connection.query('UPDATE emp SET sex=1,salary=5000 WHERE eid =10', function (err, result) {
    if (err) throw err;
   // console.log(result);
});
connection.query('select * from emp', function (err, result) {
    if (err) throw err;
    //console.log(result);
});
// connection.query('INSERT INTO emp VALUES(NULL,\'sty\',1,\'1999-7-1\',8000,20)',function (err,result) {
//     if (err) throw err;
//     console.log(result);
//
// });
//affectedRows大于0，则表示调用数据库成功
connection.query('insert into emp values(?,?,?,?,?,?)',
    [null,'abcd',1,'1997-9-2',8000,20],function (err,result) {
    if (err) throw err;
    console.log(result);

    });
//直接将对象插入数据库
var emp={
    ename:'ccc',
    birthday:'1995-8-3',
    sex:0,
    salary:9000

};
//在mysql模块中操作对象进数据库
connection.query('INSERT INTO emp SET ?',[emp],function (err,result) {
    if (err) throw err;
    console.log(result);

});
//关闭连接
connection.end();


































