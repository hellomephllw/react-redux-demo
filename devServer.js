/**
 * Created by liliwen on 2017/1/29.
 */
'use strict';
const
    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    webpackConfig = require('./webpack.config');

/**服务器信息*/
const
    //ip地址
    host = 'localhost',
    //端口
    port = 3000;

/**
 * 处理webpack配置
 * 1.使用webpack-dev-server必配项：
 *     a) webpackConfig的entry中加入webpack-dev-server/client?http://localhost:3000/
 *     b) 入口html中加入<script src="http://localhost:3000/webpack-dev-server.js"></script>
 * 2.使用hmr(hot module replace)必配项：
 *     a) 若配置了webpack.config.js的publicPath则必须配置WebpackDevServer中的publicPath
 *     b) 配置WebpackDevServer中的hot
 *     c) webpackConfig的entry中加入webpack/hot/dev-server
 *     d) webpack.config.js中加入插件HotModuleReplacementPlugin
 *     e) 若react-router中使用browserHistory，则必须配置WebpackDevServer中的historyApiFallback
 **/
//加入配置项
webpackConfig.entry.index.unshift(`webpack-dev-server/client?http://${host}:${port}/`, 'webpack/hot/dev-server');
//根据webpack配置，生成webpack编辑器
const compiler = webpack(webpackConfig);
//配置服务器
const devServer = new WebpackDevServer(compiler, {
    //如果在webpack.config.js中配置了publicPath，就必须配置此项
    publicPath: webpackConfig.output.publicPath,
    //使用react-router的browserHistory必须配置此项
    historyApiFallback: {
        //index为输出的index.html名称
        index: webpackConfig.output.publicPath
    },
    //hmr彩色编译日志
    stats: { colors: true },
    //开启hmr
    hot: true
});
/**开启开发服务器*/
devServer.listen(port);