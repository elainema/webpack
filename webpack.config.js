var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');


module.exports = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: APP_PATH,
    //输出的文件名 合并以后的js会命名为bundle.js
    output:{
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    //添加我们的插件
    plugins:[
        new HtmlwebpackPlugin({
            title: 'hello world app'
        })
    ],
    module: {
        //加载器配置
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css',
                include: APP_PATH
            },
            {
                test: /\.styl$/,
                loader: 'style!css!stylus',
                include: APP_PATH
            },
            {
                test: /\.(jpg?e|png|gif)$/,
                loader: 'url?limit=40000&name=[name]_[hash].[ext]!img',
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: APP_PATH,
                query: {
                  presets: ['es2015']
                }
            },
        ]
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: 8088
    },
}

/*module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};*/