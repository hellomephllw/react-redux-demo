# react-redux-demo
it's a react-redux demo for learning.

## 一、关于项目

>
1. UI框架采用react-bootstrap。
2. 使用sass预编译语言进行css开发。
3. 视图库采用react。
4. 使用react-router处理前端路由。
5. 使用redux框架管理数据流。
6. 采用redux生态系的redux-saga处理异步，包括ajax请求或各种异步回调。
7. 使用webpack打包，以及webpack开发服务器进行前端分离开发。
8. 使用immutable工具库对项目进行性能优化。(暂未整合进去)


## 二、目录结构

    react-redux-demo
      - assets【静态目录，源码的输出目录】
      - data【数据】
          - user.json【模拟的登陆用户数据】
      - src【源码】
      - .babelrc【babel环境配置】
      - .gitignore【git配置】
      - README.md【】
      - devServer.js【】
      - package.json【】
      - webpack.config.js【】


## 三、安装与启动

注：$符号后面的即为命令行,如：$ npm install，则直接输入npm install即可。

1. 安装依赖的npm模块，命令行如下。

  `$ npm install`

  需要注意的是通常在安装sass会遇到很多问题，特别是windows系统的童鞋，如果在windows系统遇到问题，请尝试如下的解决方案：

    * 关掉淘宝镜像，有时淘宝镜像的东西下载下来有问题。
    * 关掉淘宝镜像，并且打开vpn，有些东西需要翻墙才能下。
