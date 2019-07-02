const express= require('express');
var app = express();
app.listen(8080);
// app.use('/user',function (req,res,next) {
//
//     next();
// });
app.get('/user',function (req,res) {
    res.sendFile(__dirname+'/'+'login.html')
});
app.use('/myuser',function (req,res,next) {
   
});
app.get('/myuser',function (req,res) {
       res.send('注册成功');
    console.log(req.query);

});