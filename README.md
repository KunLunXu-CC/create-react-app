# qy-create-react

基于 React 和 Antd　的一套中后台集成框架

## 基本使用方法

### 一、 安装依赖

```sh
npm i qy-create-react
npm i cross-env -D
```

### 二、 修改 npm 脚本

1. 使用 cross-env 定义环境变量 CONFIG_DIR_PATH
2. CONFIG_DIR_PATH 则定义了配置目录的路径
3. 当然也可以不设置 CONFIG_DIR_PATH 因为默认配置目录的路径就是项目目录下 src/config

```diff
"scripts": {
+ "start": "cross-env CONFIG_DIR_PATH=./src/config react-script start",
+ "build": "cross-env CONFIG_DIR_PATH=./src/config react-script build",
},
```

### 三、 在指定的配置目录下添加配置文件

- main.js 定义页面的展示
- webpackFinal.js 则用于自定义 webpack: config => config

#### 3.1 main 配置文件说明


```js
export default {
  logo: {             // logo 配置
    img: void 0,      // logo 配置图片: require('*/**/*.png')
    title: '测试标题', // 标题
  },
  footer: () => ('footer'),  // 组件
  header: () => ('header'),  // 组件
  iconFont: '//at.alicdn.com/t/font_1141137_lyeqynh5bq.js', // iconFont 外链

  // 菜单配置
  // 1. idGroup 是否分组组件将使用 antd Menu.ItemGroup 来渲染节点
  // 2. key 唯一 key 值
  // 3. title 则是菜单标题, 可以是任意 ReactElement
  // 4. icon 则是菜单图标, 可以使用 antd@4.x 内置图标, 也可使用 iconFont 图标
  // 4. children 子级配置
  // 5. router 表示当前页面下所有路由配置列表, 每个配置项参数同 react-router Route 组件参数
  menu: [
    {
      key: 'canvas',
      title: 'canvas',
      idGroup: false,
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
              router: [
                {
                  path: '/canvas/particle/1',
                  component: () => ('particle_1'),
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
```

#### 3.2 webpackFinal 配置文件说明

1. 该文件导出一个方法
2. 该方法接收一个参数为 webpack 配置(Object)
3. 该方法返回 webpack 配置(Object)

```js
const MonacoEditor = require('monaco-editor-webpack-plugin');

module.exports = config => {
  config.plugins.push(new MonacoEditor());
  return config;
}
```

## vscode 开启 Eslint 校验

创建文件 `.vscode/settings.json`

```json
{
  "eslint.options": {
    "configFile": "./node_modules/qy-create-react/.eslintrc.js"
  }
}
```

## 创建 .editorconfig

```sh
# http://editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[Makefile]
indent_style = tab
```
