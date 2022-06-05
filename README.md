# qy-create-react

基于 React 和 Antd　的一套中后台集成框架, 只需通过配置即可完成后台管理端的开发

## 基本使用方法

### 一、 初始化项目并安装依赖

```shll
npm init -y
npm i qy-create-react
```

### 二、 修改 npm 脚本

```diff
"scripts": {
+ "start": "react-script start",
+ "build": "react-script build",
},
```

### 三、 添加文件 .qyrc.js 并进行配置

位于项目目录下

```js
import Home from './src/pages/Home';

export default {
  name: 2222,
  webpackFinal: config => config,
  logo: {             // logo 配置
    img: void 0,      // logo 配置图片: require('*/**/*.png')
    title: '测试标题', // 标题
  },
  footer: () => ('footer'),  // footer 组件
  header: () => ('header'),  // header 组件
  iconFont: '//at.alicdn.com/t/font_1141137_lyeqynh5bq.js', // iconFont 外链
  menu: [  // 菜单配置
    {
      key: 'home',
      title: '首页',
      icon: 'AndroidOutlined',
      url: '/',
      routers: [
        {
          exact: true,
          path: '/',
          component: Home,
        },
      ],
    },
    {
      key: 'canvas',
      title: 'canvas',
      icon: 'icon-dingdanjine',
      children: [
        {
          key: 'particle',
          title: 'particle',
          icon: 'icon-rili',
          children: [
            {
              key: 'particle_1',
              title: 'particle_1',
              icon: 'AndroidOutlined',
              url: '/canvas/particle/1',
              routers: [
                {
                  exact: true,
                  path: '/canvas/particle/1',
                  component: () => ('particle_1'),
                },
              ],
            }
          ]
        },
      ],
    },
  ],
};
```

## 四、 webpackFinal 配置文件说明

1. 该文件导出一个方法
2. 该方法接收一个参数为 webpack 配置(Object)
3. 该方法返回 webpack 配置(Object)
4. 配置文件位置位于项目根目录下

```js
const MonacoEditor = require('monaco-editor-webpack-plugin');

module.exports = config => {
  config.plugins.push(new MonacoEditor());
  return config;
}
```

## .eslintrc.js 配置文件

创建文件 `.vscode/settings.json`

```js
const path = require("path");

module.exports = {
  extends: [path.resolve(__dirname, "./node_modules/qy-norm/.eslintrc.js")],
};
```

## vscode eslint 格式化配置

```json
{
  // -----------统一配置--------------
  "editor.codeActionsOnSave": { // 代码自动格式配置
    "source.fixAll.eslint": true, // 根据 eslint 配置进行格式化, 需要安装 eslint 插件
    "source.fixAll.stylelint": true // 根据 eslint 配置进行格式化, 需要安装 stylelint 插件
  }
}
```
