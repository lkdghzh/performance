const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const extracter = new MiniCssExtractPlugin({
    filename: 'css/[name].[hash:6].css'
})
const prod = {
    mode: "production",//https://www.webpackjs.com/concepts/mode/
    devtool: 'source-map',//https://www.webpackjs.com/guides/production/#source-map
    module: {
        rules: [
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
        ]
    },
    plugins: [
        extracter
    ]
}
// console.log(merge(common, prod))
module.exports = merge(common, prod);