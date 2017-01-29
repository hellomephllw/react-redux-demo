'use strict';
global.rootPath = __dirname;
const
    webpack = require('webpack'),
    UglifyJsPlugin = webpack.optimize.UglifyJsPlugin,
    HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin,
    HtmlWebpackPlugin = require('html-webpack-plugin');

//webpack配置
module.exports = {
    //入口文件路径配置
    entry: {
        index: [`${rootPath}/src/index.jsx`]
    },
    //输出文件路径配置
    output: {
        path: `${rootPath}/assets/`,
        publicPath: "/assets/",
        filename: '[name].js'
    },
    // devtool: 'cheap-module-eval-source-map',
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    //模块加载器配置
    module: {
        loaders: [
            //script加载器
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
            },
            //image加载器
            {
                test: /\.(png|jp[e]?g|gif)$/,
                loader: 'url?limit=10240&name=assets/images/[name].[hash:5].[ext]'
            },
            //font加载器
            {
                test: /\.(woff|svg|eot|ttf)$/,
                loader: 'url?limit=10240&name=assets/fonts/[name].[hash:5].[ext]'
            },
            //css加载器
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            //sass加载器
            {
                test: /\.scss$/,
                loader: 'style!css!sass?sourceMap'
            }
        ]
    },
    //插件配置
    plugins: [
        //压缩js
        // new UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     },
        //     except: ['$', 'd3', 'exports', 'require']
        // }),
        //编译html
        new HtmlWebpackPlugin({
            template: `${rootPath}/src/index.html`,//指定视图
            filename: `${rootPath}/assets/index.html`,//指定输出位置
            // hash: true,
            chunks: ['index']//为视图指定js和css，名字在entry中选一个或多个
        }),
        new HotModuleReplacementPlugin()
    ]
};