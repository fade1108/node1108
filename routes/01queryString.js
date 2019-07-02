//引入模块
const querystring = require('querystring');
const url = require('url');
//查询字符串
var str='keyword=手机&enc=utf8';
//querystring.parse()
// 方法将 URL 查询字符串 str 解析为对象
var obj=querystring.parse(str);
console.log(obj);
//将对象转换为URL查询字符串
var str2=querystring.stringify(obj);
console.log(str2);
var str3='lid=5&pname=apple';
var obj3=querystring.parse(str3);
console.log(obj3.lid,obj3.pname);

var str4='http://www.codeboy.com/product_details.html?lid=28';
var obj4 = url.parse(str4);
//console.log(obj4);
//把对象格式化为URL
var obj5={
    protocol:'https',
    hostname:'www.tmocc.cn',
    port:'8080',
    pathname:'detail.html',
    query:{
        lid:5,
        name:'dell'
    }
};
console.log(url.format(obj5)) ;




























