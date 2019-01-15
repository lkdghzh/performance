# webpack-4x-demo
关于4.0的脚手架探究
# 1，异步（懒）加载的实现
> react  vue中的路由
* Code Spliting 使用 require.ensure 或 dynamic import

# 2，按需加载
* tree shaking ，
* babel-plugin-import

# 3，第三方包
    1，既想window引用，又想import引用
    2，不需要变动的包分离出去
* externals   
* dll-dll-ref 
* providerPlugin 
* expose-loader  

# 4，manifest的作用
# 5，hash chunkhash的区别

# 6，自动刷新，热更新
    入口文件需要判断 module.hot&&module.hot.accept
    HotModuleReplacementPlugin 的插件位置 ，服务器怎么起的
# 7，mock 
自动
# 8,precommit  ->eslint

## npm yarn
## eslint
## npm link
## editorconfig
## webpack 是自动，但不是热更新
## clean-webpack-plugin是否在开发脚手架用，内存的文件是否还要引用
 
* https://www.npmjs.com/package/clean-webpack-plugin
## babel
* presets: ['@babel/preset-env'],//箭头-function  7.1.6 
```
 presets: ['@babel/preset-env'],//箭头-function  7.1.6 内置plugin-transform-object-rest-spread
//plugins: [require('@babel/plugin-transform-object-rest-spread')]
```
* 没有内置装饰器，需要安装babel的plugin。



出现以下错误
```
ERROR in ./src/index.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: /Users/didi/myproject/webpack-4x-demo/src/index.js: Support for the experimental syntax 'decorators-legacy' isn't currently enabled (28:1):

  26 | C.getA()
  27 | // ———————————————————————————————————————decorator装饰器—————————————————————————————————————————
> 28 | @testDeco
     | ^
  29 | class A {
  30 | }
  31 | function testDeco() { 
```

添加.babelrc 出现以下错误
```
babel-plugin-transform-decorators-legacy
npm install --save-dev babel-plugin-transform-decorators-legacy
{
    "plugins": ["transform-decorators-legacy"]
}
```
出现以下错误
```
 Error: The 'decorators' plugin requires a 'decoratorsBeforeExport' option, whose value must be a boolean. If you are migrating from Babylon/Babel 6 or want to use the old decorators proposal, you should use the 'decorators-legacy' plugin instead of 'decorators'.
 ```
 `https://stackoverflow.com/questions/53230930/react-mobx-error-the-decorators-plugin-requires-a-decoratorsbeforeexport-op`讲到此问题<br/>
 修改.babelrc ，注意plugins是二维数组，一个plugin里面的项有字符串，有对象。<br/>
 安装@babel/plugin-proposal-decorators<br/>
 `npm install --save-dev @babel/plugin-proposal-decorators`
```

{
    "plugins": [
        [
          "@babel/plugin-proposal-decorators",
          {
            "legacy": true
          }
        ]
      ]
}
```

## css
### postcss的使用
```
{
    test: /\.less$/,
    exclude: /node_modules/,
    use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'less-loader',
        ]
},
```
### 新建postcss.config.js,在这个处理器上装插件，例如autoprefixer
https://github.com/postcss/postcss/blob/master/README-cn.md
```
let autoprefixer=require('autoprefixer')
module.exports = {
    plugins: [
        autoprefixer({
            browsers: [
                "> 0.01%"// 加这个后可以出现额外的兼容性前缀
            ]
        })
    ]
}
```
### extract-text-webpack-plugin的使用(这里没用)
```
extract-text-webpack-plugin 最新版本为 3.0.2，这个版本还没有适应 webpack 4 的版本
解决办法：使用 4.0 beta 版，npm install --save-dev extract-text-webpack-plugin@next
```
## 这里使用require("mini-css-extract-plugin")
https://www.npmjs.com/package/mini-css-extract-plugin

