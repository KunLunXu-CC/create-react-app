const path = require('path');
const webpackFinal = require('./webpackFinal');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const appPackageJson = require(path.resolve(process.env.PWD, './package.json'));

const { ProvidePlugin, DefinePlugin } = require('webpack');

// html 模板
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, '../public/index.html'),
});

// 提取样式为单独的文件
const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: 'style/[name].[hash].css',
  chunkFilename: 'style/[id].[hash].css',
});

// 拷贝 public 内除 index.html 的所以文件
const copyWebpackPlugin = new CopyWebpackPlugin({
  patterns: [{
    from: path.resolve(__dirname, '../public'),
    globOptions: { ignore: ['**/index.html'] },
  }],
});

// Eslint
const eslintPlugin = new ESLintPlugin({
  cache: true,
  eslintPath: require.resolve('eslint'),
  formatter: require('eslint-friendly-formatter'),
  ignorePath: path.resolve(__dirname, '../.eslintignore'),
  overrideConfigFile: path.resolve(__dirname, '../.eslintrc.js'),
});

// 自动加载
const providePlugin = new ProvidePlugin({
  _: 'lodash',
});

// 全局常量定义
const definePlugin = new DefinePlugin({
  // 是否是开发环境
  _DEV_: process.env.NODE_ENV === 'development',
  // 项目目录
  PROJECT_PATH: JSON.stringify(process.env.PWD),
});

const cssRegex = /\.(css|scss)$/;
const cssModuleRegex = /\.module\.(css|scss)$/;

module.exports = webpackFinal({
  mode: process.env.NODE_ENV,
  devtool: 'inline-source-map', // 移除控制台的部分警告
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    // 公共资源路径: 取 package.homepage || /, 这将决定打包后静态资源的加载路径
    publicPath: appPackageJson.homepage || '/',
    path: path.resolve(process.env.PWD, './build'),
    filename: 'js/[name].[hash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(mjs|js|jsx)$/,
        exclude: /node_modules\/(?!@kunlunxu\/create-react-app)/,
        use: [
          {
            loader: 'babel-loader',
            options: require('../.babelrc'),
          },
        ],
      },
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        sideEffects: true,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, '../postcss.config.js'),
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: cssModuleRegex,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]__[hash:base64]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, '../postcss.config.js'),
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|woff|svg|eot|ttf)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'assets/[hash].[ext]',
          },
        }],
      },
      {
        test: /\.(text|md)$/,
        use: 'raw-loader',
      },
    ],
  },

  plugins: [
    eslintPlugin,
    definePlugin,
    providePlugin,
    htmlWebpackPlugin,
    copyWebpackPlugin,
    miniCssExtractPlugin,
  ],

  resolve: {
    extensions: ['.mjs', '.js', '.jsx'],

    fallback: {
      path: require.resolve('path-browserify'),
    },

    alias: {
      '@': path.resolve(__dirname, '..'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@containers': path.resolve(__dirname, '../src/containers'),
      '@components': path.resolve(__dirname, '../src/components'),
    },
  },

  devServer: {
    // 该选项配置  output.publicPath: '/' 解决: BrowserRouter 路由刷新时找不到页面 BUG
    historyApiFallback: true,

    hot: true,
  },
});
