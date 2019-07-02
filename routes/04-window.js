//JS全局对象：window
var a = 1;
console.log(a);
function fn() {
    return 2;
}
console.log(fn());
//process 进程
//process.arch ;
//console对象
// console.log(1);
// console.info(1);
// console.warn(1);
// console.error(1);
//开始计时
console.time('for');
for(let i=1,sum=0;i<=1000000;i++){
    sum+=i;
}
//结束计时
console.timeEnd('for');
  i=1;
  sum=0;
console.time('for1');
while (i<=1000000){
    sum+=i;
    i++;
}
console.timeEnd('for1');
console.time('for12');
 i=1;
 sum =0;
do{
    sum+=i;
    i++
}while (i<=1000000);
console.timeEnd('for12');

