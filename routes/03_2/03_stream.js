
//文件流
const fs = require('fs');
/*
//创建可读流
var readStream=fs.createReadStream('02_fs.js');
//设置流的编码为utf-8
readStream.setEncoding('utf8');
//获取数据流
//事件：监听是否有数据流  on就是监听
readStream.on('data',(chunk)=>{
    console.log(chunk);
});
//事件：监听是否读取结束  on就是监听
readStream.on('end',()=>{
    console.log('读取结束');
});
*/
//使用可读流和可写流。拷贝文件
var readStream = fs.createReadStream('02_fs.js');
var writeStream = fs.createWriteStream('data.txt');
//把读取的流放入到写入流
readStream.pipe(writeStream);
//readable.pipe() 会返回目标流的引用，
// 这样就可以对流进行链式地管道操作：

















