const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
  _DEV_: process.env.NODE_ENV === 'development',
  PROJECT_PATH: JSON.stringify(process.env.PROJECT_PATH),
});

const cssRegex = /\.(css|scss)$/;
const cssModuleRegex = /\.module\.(css|scss)$/;

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
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
              baseConfig: require('../.eslintrc'),
              eslintPath: require.resolve('eslint'),
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
};
