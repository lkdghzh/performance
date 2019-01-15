const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const CleanCSSPlugin = require("less-plugin-clean-css");//webpack 4x
const HtmlWebpackPlugin = require('html-webpack-plugin');
// var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const distDir = path.resolve(__dirname, '../dist')
module.exports = {
    entry: {
        app: ['./src/index.js']
    },
    output: {
        filename: 'js/[name].bundle.[hash:6].js',
        path: distDir,
        publicPath:''
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8 * 1024,
                            name: '[name].[ext]',
                            outputPath: 'img'
                        }
                    }
                ]
            },
            {
                test: /\.(eot|otf|woff2?|ttf|)(\?.*)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'file-loader',
                }
            }
        ]
    },
    stats:'none',
    plugins: [
        //https://www.npmjs.com/package/clean-webpack-plugin
        new CleanWebpackPlugin(['js/.*','css/.*'], {
            root: distDir
        }),
        new HtmlWebpackPlugin({
            title: 'xx',
            template: 'src/index.html',
        }),
        // new FriendlyErrorsWebpackPlugin({
        //     clearConsole: true,
        // })
    ]
};