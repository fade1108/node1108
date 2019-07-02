function Yuan(r) {
    return r*2*Math.PI;

}
function Yuan1(r) {
    return s=r*r*Math.PI;
}
function ending(year,month,day,hour,minute,second) {
    var leftTime = (new Date(year,month-1,day,hour,minute,second)) - (new Date()); //计算剩余的毫秒数
    var days = parseInt(leftTime / 1000 / 60 / 60 / 24 , 10); //计算剩余的天数
    var hours = parseInt(leftTime / 1000 / 60 / 60 % 24 , 10); //计算剩余的小时
    var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟
    var seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数
    days = checkTime(days);
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    setInterval("leftTimer(2019,10,1,11,11,11)",1000);
    document.getElementById("timer").innerHTML = days+"天" + hours+"小时" + minutes+"分"+seconds+"秒";
}
function checkTime(i){ //将0-9的数字前面加上0，例1变为01
    if(i<10)
    {
        i = "0" + i;
    }
    return i;
}
function go(v){
    var date1=new Date(),data2=new Date(v);
    if(data2<date1)return;//设置的时间小于现在时间退出
    _ordertimer = setInterval(function(){leftTimer(data2)}, 1000);
}
module.exports.ZC=Yuan;
module.exports.MJ=Yuan1;
module.exports.datetime=ending;
module.exports.check=checkTime;
module.exports.go=go;
//直接导出函数
module.exports.fn9=function(a,b) {
    return a+b;
};
//直接导出一个对象
module.exports={
    ename:'tom',
    say:function () {
        
    }
};