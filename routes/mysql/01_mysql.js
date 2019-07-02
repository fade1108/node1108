const mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '',
    database: 'xz'
});
//执行连接
connection.connect();
//执行sql语句
connection.query('select * from laptop', (err, result) => {
    if (err) {
        throw err;
    } else {
        console.log(result);
    }
});
connection.end();