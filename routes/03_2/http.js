//1.General 通用头信息
/*
Request URL请求的URL
Request Mehod:获取内容的方式get /post
                          获取  投递
Status Code 状态码
  Status Code: 302 Found跳转
  1**正在响应
  2**成功的响应
  4**客户端强求错误
  5**服务器端错误
  Remote Address:请求服务器ip地址以及端口号


 */
//2.Response 响应头信息
/*
Connection: keep-alive  连接方式  持久连接
Content-Encoding: gzip 内容的压缩形式
Content-Type 文件的响应类型
Location: http://www.baidu.com/ 跳转的YRL，配合状态码3**使用
 */
//3.Request 请求头信息
//Accept:浏览器接收的文件类型有哪些
const http = require('http');
//参数1：请求的URL
//callback在特定的事件或条件发生时由另外的一方调用的，
// 用于对该事件或条件进行响应。
//chunk为传输的数据,buff格式
http.get('http://www.tmooc.cn',(res)=>{
    //response响应的对象
   console.log(res.statusCode);
   //获取响应的额内容
    //事件：监听是否有数据流响应
    res.on('data',(chunk)=>{
        console.log(chunk.toString());
    })
});



























