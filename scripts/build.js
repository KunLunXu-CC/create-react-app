// 参考: https://github.com/webpack/webpack-dev-server/tree/master/examples/api/simple
// 参考: https://webpack.js.org/configuration/dev-server/
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

// 编译器
const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {
  console.log('-------->>>> \n\n\n\n\n', JSON.stringify(process.env, null, 2));
  console.log('------------->>> 编译完成1');
});
