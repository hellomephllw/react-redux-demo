/**
 * Created by liliwen on 2017/1/29.
 */
'use strict';
const
    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    webpackConfig = require('./webpack.config');

webpackConfig.entry.index.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
var compiler = webpack(webpackConfig);
var server = new WebpackDevServer(compiler, {
    publicPath: webpackConfig.output.publicPath,
    historyApiFallback: {
        index: webpackConfig.output.publicPath
    },
    stats: { colors: true },
    hot: true
});
server.listen(8080);