const fs = require('fs');
//查看文件的状态(通过回调函数获取结果)
//fs.stat('01_homework.js',(err,stats)=> {
//     if (err){
//         throw err;
//     }
//    // console.log(stats);
//
// });
//Sync通过返回值获取结果
//var a = fs.statSync('01_homework.js');
//console.log(a);
//同步sync
//创建目录

// fs.mkdir('mydir',function (err) {
//    if(err) throw err;
// });
//fs.mkdirSync('mydir2');

// fs.rmdir('mydir',function (err) {
//    if (err) throw err;
// });
// fs.rmdirSync('mydir2');
// resule = fs.readdir('mydir',function (err) {
//     if (err) throw err;
//
// });
// console.log(resule);
//创建文件/写入数据
// fs.writeFile('1.text','2',function (er) {
//    if (err) throw err;
//    console.log('文件写入成功');
// });
//追加写入
// fs.appendFile('1.text','hello',function (err) {
//    if (err){
//       console.log('写入失败');
//    }else {
//       console.log('写入成功')
//    }
//
// });
//文件里换行 \n
// var arr=['语文','数学','英语'];
// console.log(arr.toString());
// fs.appendFile('1.text',arr.toString()+'\n',function (err) {
//    if (err){
//       console.log('写入失败');
//    }else {
//       console.log('写入成功');
//    }
// });
//读取文件
// fs.readFile('1.text',function (err,data) {
//     //data读取的数据
//     if (err) throw err;
//     console.log(data);//格式为BUFF
//     //BUFF转字符串
//     console.log(data.toString());
// });
// var data1 =fs.readFileSync('1.text');
// console.log(data1.toString());
// //删除文件
// fs.unlink('1.text',function (err) {
//    if(err)throw err;
//    console.log('文件删除成功');
// });
//判断文件是否存在   返回BOOL值
// var res = fs.existsSync('2.html');
// console.log(res);

//判断data.txt是否存在。如果存在则删除
if (fs.existsSync('1.text')){
   fs.unlink('1.text',function (err) {
       if(err)throw err;
       console.log('文件删除成功');
   })
}









