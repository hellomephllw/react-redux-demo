const rootPath = __dirname;

const
    webpack = require('webpack'),
    UglifyJsPlugin = webpack.optimize.UglifyJsPlugin,
    HtmlWebpackPlugin = require('html-webpack-plugin');

//webpack配置
module.exports = {
    //入口文件路径配置
    entry: {
        main: `${rootPath}/src/scripts/main.js`
    },
    //输出文件路径配置
    output: {
        path: `${rootPath}/assets/`,
        publicPath: "/assets/",
        filename: '[name].js'
    },
    //模块加载器配置
    module: {
        loaders: [
            //script加载器
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            //image加载器
            {
                test: /\.(png|jp[e]?g|gif)$/,
                loader: 'url-loader?limit=10240&name=images/[name].[hash:5].[ext]'
            },
            //font加载器
            {
                test: /\.(woff|svg|eot|ttf)$/,
                loader: 'url-loader?limit=10240&name=fonts/[name].[hash:5].[ext]'
            },
            //css加载器
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            //sass加载器
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader?sourceMap'
            }
        ]
    },
    //插件配置
    plugins: [
        //压缩js
        new UglifyJsPlugin({
            compress: {
                warnings: false
            },
            except: ['$super', '$', 'exports', 'require']
        }),
        //编译html
        new HtmlWebpackPlugin({
            template: `${rootPath}/src/views/entry.html`,//指定视图
            hash: true,
            chunks: ['main']//为视图指定js和css，名字在entry中选一个或多个
        })
    ]
};