console.log(global.parseInt(3.14));
global全局变量
开启定时器
var timer = global.setTimeout( ()=>
{return console.log('蹦')}
,(3000));
//清除
//因为是全局函数 用global调用
//global.clearTimeout(timer);
var tim = global.encodeURI((a,b)=> {
    var c = a+b;
},('手机','电视'));
console.log(tim);
//周期性定时器
var timer1 = global.setInterval( ()=> {
    console.log('啦啦啦');
},3000);
var timer2= setImmediate(function () {
    console.log('轰');
});
//process.nextTick
//process.nextTick() 方法将 callback 添加到下一个时间点的队列。
// 一旦当轮的事件循环全部完成，
// 则调用下一个时间点的队列中的所有回调。
//它的效率更高。
// 它会在事件循环的下一个时间点中触发任何其他 I/O 事件（包括定时器）之前运行
process.nextTick(function () {
   console.log(3);
});
//clearImmediate(timer2);

