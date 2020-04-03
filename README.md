# qy-create-react

基于 React 和 Antd　的一套中后台集成框架

## 基本使用方法

### 一、 安装依赖

```sh
npm i qy-create-react
npm i cross-env -D
```

### 二、 修改 npm 脚本

1. 使用 cross-env 定义环境变量 CONFIG_PATH
2. CONFIG_PATH 则定义了配置文件的位置

```diff
"scripts": {
+ "start": "cross-env CONFIG_PATH=./src/config react-script start",
+ "build": "cross-env CONFIG_PATH=./src/config react-script build",
},
```

### 三、 在对应位置添加配置文件

- 默认加载项目目录下 config.js 文件
- 可通过设置环境变量 cross-env CONFIG_PATH=./src/config 来指定配置文件位置
- 可以将配置文件放置在 config 目录下但是文件名必须是 index.js 如: config/index.js

#### 3.1 配置文件说明


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
