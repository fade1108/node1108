//当前模块的绝对目录和模块名称
console.log(__filename);
//当前模块的绝对目录名称
console.log(__dirname);
//引入一个目录。会自动引用目录里的一个文件
require('./');
//require('./目录');会自动想寻找目录下的package.json 寻找调用的JS
//requitre('目录');自动到node_modules下寻找目录而后在目录里找package.json 寻找调用的js


//CommonJS是一种规范
//包(package)就是一个目录模块
//npm:用于管理包的工具
//保留package.json  命令行  cd 项目路径
//npm install  // www.npmjs.com







