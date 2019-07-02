var a = require('./circle');
console.log(typeof a);
var b = Math.floor(a.MJ(3));
console.log(b);
console.log(a.MJ(3));
console.log(a.ZC(3));

//(3)预习模块querystring（查询字符串）,url，fs
const qs = require("routes/01queryString");
//将查询字符串转js对象
var str="uname=tom&age=10&pno=1001";
var obj=qs.parse(str);
console.log(obj);
//将对象转字符串
var obj2={ename:'tom',age:20};
var str = qs.stringify(obj2);
console.log(str);
//url模块用于解析http请求地址，获取其中各个部分00.
const url = require("url");
var u="https://www.tmooc.cn:443/ad/index?uname=tom&age=10";
var obj= url.parse(u);
console.dir(obj);
//解析obj对象并且将查询字符串也一并解析为对象
var obj1 = url.parse(u,true);
//console.log(obj1);
//fs模块对文件，增删改查读写功能
console.log(a.fn9(2,8));
console.log(a.ename);

