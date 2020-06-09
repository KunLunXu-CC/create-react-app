const path = require('path');
const webpackFinal = require('./webpackFinal');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const getConfigDirPath = require('../src/utils/getConfigDirPath');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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

// 拷贝 public 内文件
const copyWebpackPlugin = new CopyWebpackPlugin(
  [{ from: path.resolve(__dirname, '../public') }]
);

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
  // 配置文件路径
  CONFIG_DIR_PATH: JSON.stringify(getConfigDirPath()),
});

const cssRegex = /\.(css|scss)$/;
const cssModuleRegex = /\.module\.(css|scss)$/;

module.exports = webpackFinal({
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].[hash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(mjs|js|jsx)$/,
        exclude: /node_modules\/(?!qy-create-react)/,
        use: [
          {
            loader: 'babel-loader',
            options: require('../.babelrc'),
          },
          {
            loader: 'eslint-loader',
            options: {
              cache: true,
              eslintPath: require.resolve('eslint'),
              configFile: path.resolve(__dirname, '../.eslintrc.js'),
              ignorePath: path.resolve(__dirname, '../.eslintignore'),
              formatter: require('eslint-friendly-formatter'),
            },
          },
        ],
      },
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        sideEffects: true,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, '../postcss.config.js'),
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: cssModuleRegex,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
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
              config: {
                path: path.resolve(__dirname, '../postcss.config.js'),
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
    definePlugin,
    providePlugin,
    htmlWebpackPlugin,
    copyWebpackPlugin,
    miniCssExtractPlugin,
  ],

  resolve: {
    extensions: ['.mjs', '.js', '.jsx'],
  },

  devServer: {
    // 该选项配置  output.publicPath: '/' 解决: BrowserRouter 路由刷新时找不到页面 BUG
    historyApiFallback: true,
  },
});
