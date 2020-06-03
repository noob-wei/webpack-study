// 这里是 我们项目的JS入口文件

// 1.导入jQuery
// import *** from *** 是ES6中导入模块的方式
import $ from 'jquery'

// 使用import 语法，导入css样式表
import './css/index.css'
import './css/index.less'
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.css'
// 注意：webpack，默认只能打包处理JS类型的文件，无法处理其他的非JS类型的文件
// 如果要处理 非JS类型的文件，我们需要手动安装一些合适的第三方loader 加载器
// 1.如果想要打包处理 css 文件，需要安装 npm i style—loader css-loader -D
// 2.打开 webpack.config.js这个配置文件，在里面 新增一个 配置节点，叫做 module，它是一个对象；在这个module对象身上，有个rules 属性，这个rules属性是个数组，存放了所有第三方文件的匹配和处理规则

$(function () {
    $('li:odd').css('backgroundColor','yellow')
    $('li:even').css('backgroundColor',function(){
        return '#' + 'D97634'
    })
})


// webpack能做什么事情？？
// 1.webpack 能够处理 JS文件 的 互相依赖关系；
// 2.webpack 能够处理JS的兼容问题，把高级的、浏览器不兼容的语法，转为低级的，浏览器能够正常识别的语法


// 打包格式 webpack 要打包的文件路径 -o 打包好的输出文件的路径 --mode=development

// 使用webpack-dev-server 这个工具，来实现自动打包编译的功能
// 1.运行 npm i webpack-dev-server -D 来把这个工具安装到项目的本地开发依赖
// 2.安装完毕后，这个工具的用法，和webpack命令的用法，完全一样
// 3.由于，我们是在项目中，本地安装的webpack-dev-server，所以无法把它当做脚本命令，在powershell 终端中直接运行；（只有那些安装到 全局 -g 的工具，才能在终端中执行）
// 4.注意webpack-dev-server 这个工具，如果想要正常运行，要求在本地项目中，必须安装webpack
// 5.webpack-dev-server 帮我们打包生成的 bundel.js，并没有存放到实际的物理磁盘上；而是直接托管到了 电脑的内存中，所以，我们在 项目根目录中，根本找不到 这个打包好的bundle.js


// class Person {
//   static info = {name: 'zs', age: 20}
// }

// console.log(Person.info)