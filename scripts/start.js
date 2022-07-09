// 参考: https://github.com/webpack/webpack-dev-server/tree/master/examples/api/simple
// 参考: https://webpack.js.org/configuration/dev-server/
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');

// 编译器
const compiler = webpack(webpackConfig);

// 开发服务配置
const devServerOptions = {
  ...webpackConfig.devServer,
  open: true,
};

// 创建实例
const devServer = new WebpackDevServer(compiler, devServerOptions);

// 监听地址
devServer.listen(8080, '127.0.0.1', (err) => {
  if (err) {
    return console.log(err);
  }
});
