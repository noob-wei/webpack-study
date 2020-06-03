const path = require('path')
// 这个配置文件，其实就是一个JS文件，通过 Node 中的模块操作，向外暴露了一个配置对象
const webpack = require('webpack') //启动热更新的第2步

// 导入 在内存中 生成HTML页面的 插件 
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
// 在配置文件中，需要手动指定 入口 和出口
    entry:path.join(__dirname,'./src/main.js'),//入口 表示要使用webpack 打包哪个文件
    output:{// 输出文件相关配置
        path:path.join(__dirname,'./dist'), //指定 打包好的文件，输出到哪个目录中去
        filename:'bundle.js'//指定 输出文件的名称
    },
    devServer:{ //这是配置 dev-server 命令参数的第二种方式，相对来说这种方式麻烦一些
        // --open --port 3000 --contentBase src --hot
        open:true, //自动打开浏览器
        port:3000,//设置启动时的运行端口
        contentBase:'src',//指定托管的根目录
        hot:true //启动热更新的第1步
    },
    plugins:[ //配置插件的节点
        new webpack.HotModuleReplacementPlugin(), //new一个热更新的模块对象，这是启用热更新的第3步
        new htmlWebpackPlugin({//创建一个在内存中生成 HTML 页面的插件
            template:path.join(__dirname,'./src/index.html'), //指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
            filename:'index.html' //指定生成的页面的名称
        })
    ],
    module:{ //这个节点，用于配置 所有 第三方模块 加载器
        rules:[//所有第三方的匹配规则
            { test:/\.css$/,use:['style-loader','css-loader']},//配置处理.css文件的第三方loader规则
            { test:/\.less$/,use:['style-loader','css-loader','less-loader']},//这是配置处理.less文件的第三方loader规则
            { test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},//配置处理.scss 文件的第三方loader规则
            { test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader'},//处理图片路径的loader
            { test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},//处理字体文件的loader
            // { test:/\.js$/, use: 'babel-loader', exclude:/node_modules/}
        ]
    }

}


// 当我们在控制台 ，直接输入 webpack 命令执行的时候，webpack做了以下几步：
// 1.首先，webpack发现，我们并没有通过命令的形式，给它指定入口和出口
// 2.webpack 就会去项目的跟目录中，查找一个叫做 'webpack.config.js'的配置文件
// 3.当找到配置文件后，webpack 会去解析执行这个配置文件，当解析执行完配置文件后，就得到了配置文件中，导出的配置对象
// 4.当webpack拿到 配置对象后，就拿到了配置对象中，指定的入口和 出口，然后进行打包构建；