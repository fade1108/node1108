const url = require('url');
const quertstring = require('querystring');
var str = 'https://p.gouwubang.com/n?k=2mLErntLWnDSrI6H2mLErnyZY7suNZLsWNtFrntLWEj7WnBH6NRq6nBH2mqerI6H1nPbWJgEW56H2L--&e=c&t=http://www.1hai.cn/index.aspx';
var obj = url.parse(str);
//console.log(obj);
var str1 = obj.query;//获取到查询字符串
//console.log(str1);
//将查询字符串解析为对象
var obj1 = quertstring.parse(str1);
console.log(obj1);












