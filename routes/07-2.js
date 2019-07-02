console.log('07_2,js');
var a=1;
function fn() {
    console.log(2);
}
//module 模块，指代当前所在模块
//module.exports要导出的对象
module.exports.name='sad';
module.exports.mya=a;
module.exports.fn=fn;