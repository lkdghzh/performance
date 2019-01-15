const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// const webpack-hot-middleware
const dev = {
    mode: 'development',////https://www.webpackjs.com/concepts/mode/
    // devtool: 'inline-source-map',
    stats:'none',
    module: {
        rules: [
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader',
                ]
            }]
    },
    plugins:[
        
    ]
    // ,
    // devServer: {
    //     contentBase: './dist'
    // }
}
console.log(process.env.NODE_ENV)
module.exports = merge(common, dev);
