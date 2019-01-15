// const path = require('path')
var http = require('http');
const express = require('express')
const webpack = require('webpack')
//const proxyMiddleware = require('http-proxy-middleware')
const webpackDevConfig = require('./webpack.dev')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const opn = require('opn');
const chalk = require('chalk');
const green = chalk.bold.green;
const red = chalk.bold.red;
var app = express();

//
const hotClient='webpack-hot-middleware/client'
webpackDevConfig.entry.app.push(hotClient)
const hotServer=new webpack.HotModuleReplacementPlugin()
webpackDevConfig.plugins.push(hotServer)

var compiler = webpack(webpackDevConfig)


app.use(webpackDevMiddleware(compiler, {
    //https://webpack.docschina.org/guides/development/#%E4%BD%BF%E7%94%A8-webpack-dev-middleware
    //webpack-dev-middleware是一个容器(wrapper)，它可以把 webpack 处理后的文件传递给一个服务器(server)
    //在webpack配置文件内，需要有publicPath，服务器默认从publicPath中取资源,作为基础路径
    //此插件不是自动刷新哦
    publicPath: webpackDevConfig.output.publicPath
}))


// console.log('webpackDevConfig',webpackDevConfig)
app.use(webpackHotMiddleware(compiler, {
    //https://webpack.docschina.org/guides/hot-module-replacement/
    log: () => { }
}))

const server = http.createServer(app);
let port=3000;
server.listen(port, function (e) {
    // if(e){
        // console.log(red('出现错误'))
    // }
    //Opens the url in the default browser
    opn('http://localhost:3000');
    // console.log(green('App is running http://localhost:3000\n'));
});

