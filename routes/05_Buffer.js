//Buffer对象
//缓冲区：在内存中存储数据的区域，常用于网络传输时的资源
var buf=Buffer.alloc(5,'abcde');
console.log(buf);
console.log(String(buf));
console.log(buf.toString());
//模块:一个独立的功能体。在NodeJS下。模块分为：自定义模块、核心模块、第三方模块
//NodeJS自动为每个文件添加构造函数
/*(function (exports,require,module,_filename,_dirname){

}
    
)
*/

var b =require('./07-2.js');//require引入一个模块
console.log(b.fn());













