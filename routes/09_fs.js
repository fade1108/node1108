/*
const fs = require('fs');
fs.stat('index.js', function (err, stats) {
    if (err) throw err;
    console.log(stats);
});
console.log(2);
*/
//querystring
const querstring = require('querystring');
var str = 'ename=tom&eid=1001&phone=123456';
var obj = querstring.parse(str);
console.log(obj);
//url
const url = require('url');
var str1 = 'https://kan.china.com/qudao/jump.html?qudao=5432syxw&c=0.1&aid=595625&_t=0513';
var obj1 = url.parse(str1);
console.dir(obj1);
//Buffer缓冲区，本质是一个内存区域。
var buf1 = Buffer.alloc(10);
//console.log(buf1);
var buf2 = Buffer.alloc(1024 * 3);
//console.log(buf2);
//fs 同步读取文件中的内容
const fs1 = require('fs');
var path = "routes/node.html";
var data = fs1.readFileSync(path);
fs1.stat(path, function (err, stats) {
    if (err) throw err;
    console.log(stats)

});
console.log(data);
console.log(data.toString());
//同步向文件写入内容
var str = new Date().toString();
var path = './public/2.log';
//fs1.writeFileSync(path,str);
//向文件内追加内容
var str2 = str.substring(5);
//fs1.appendFileSync(path, str2);
//异步的读取文件的全部内容
fs1.readFile(path, function (err, data) {
    if (err) {
        console.log('文件服务出错');
    } else {
        console.log('文件读取成功');
        console.log(data.toString());
    }

});
fs1.writeFile(path,str2,function (err) {
   if (err){
       console.log('写入文件失败')
   }else {
       console.log('写入成功')
   }
});




































